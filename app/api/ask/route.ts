import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Nada Ashraf's portfolio AI assistant. Answer questions about Nada's projects, experience, technical skills, and engineering decisions using only the retrieved portfolio context. Do not invent employers, metrics, technologies, project results, or personal details. If the context does not contain the answer, say that the information is not available in the portfolio. Keep answers concise, useful, and professional. Mention the relevant project/source when helpful.`;

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();
    if (!question || typeof question !== "string" || question.trim().length < 2) {
      return NextResponse.json({ error: "Please enter a question." }, { status: 400 });
    }

    const openaiKey = process.env.OPENAI_API_KEY;
    const pineconeKey = process.env.PINECONE_API_KEY;
    const pineconeHost = process.env.PINECONE_INDEX_HOST?.replace(/\/$/, "");
    const namespace = process.env.PINECONE_NAMESPACE || "portfolio";

    if (!openaiKey || !pineconeKey || !pineconeHost) {
      return NextResponse.json(
        { error: "Ask Nada's AI is not configured yet. Add OPENAI_API_KEY, PINECONE_API_KEY, and PINECONE_INDEX_HOST to the environment." },
        { status: 503 },
      );
    }

    // The Pinecone index uses Integrated Embedding (llama-text-embed-v2),
    // so the query is sent as text and embedded server-side.
    const queryResponse = await fetch(
      `${pineconeHost}/records/namespaces/${encodeURIComponent(namespace)}/search`,
      {
        method: "POST",
        headers: {
          "Api-Key": pineconeKey,
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Pinecone-Api-Version": "2025-10",
        },
        body: JSON.stringify({
          query: {
            inputs: { text: question.trim() },
            top_k: 5,
          },
          fields: ["title", "content", "source"],
        }),
      },
    );

    if (!queryResponse.ok) {
      throw new Error(`Pinecone search failed: ${queryResponse.status} ${await queryResponse.text()}`);
    }

    const queryData = await queryResponse.json();
    const hits = queryData.result?.hits ?? queryData.matches ?? [];

    const context = hits
      .map((hit: { _id?: string; id?: string; _score?: number; score?: number; fields?: { title?: string; content?: string; source?: string }; metadata?: { title?: string; content?: string; source?: string } }) => {
        const fields = hit.fields ?? hit.metadata ?? {};
        return `[${fields.source ?? "Portfolio"}] ${fields.title ?? ""}\n${fields.content ?? ""}`;
      })
      .join("\n\n---\n\n");

    const completionResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${openaiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini",
        temperature: 0.2,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `Retrieved portfolio context:\n\n${context || "No relevant portfolio context was retrieved."}\n\nQuestion: ${question.trim()}` },
        ],
      }),
    });

    if (!completionResponse.ok) {
      throw new Error(`LLM request failed: ${completionResponse.status} ${await completionResponse.text()}`);
    }

    const completion = await completionResponse.json();

    return NextResponse.json({
      answer: completion.choices?.[0]?.message?.content ?? "I couldn't generate an answer.",
      sources: hits.slice(0, 3).map((hit: { fields?: { title?: string; source?: string }; metadata?: { title?: string; source?: string } }) => {
        const fields = hit.fields ?? hit.metadata ?? {};
        return {
          title: fields.title ?? "Portfolio",
          source: fields.source ?? "Portfolio",
        };
      }),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong while answering. Please try again." }, { status: 500 });
  }
}
