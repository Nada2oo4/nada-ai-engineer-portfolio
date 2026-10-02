import fs from "node:fs/promises";

const pineconeKey = process.env.PINECONE_API_KEY;
const pineconeHost = process.env.PINECONE_INDEX_HOST?.replace(/\/$/, "");
const namespace = process.env.PINECONE_NAMESPACE || "portfolio";

if (!pineconeKey || !pineconeHost) {
  console.error("Missing PINECONE_API_KEY or PINECONE_INDEX_HOST.");
  process.exit(1);
}

const chunks = JSON.parse(
  await fs.readFile(new URL("../data/knowledge.json", import.meta.url), "utf8"),
);

// This index was created with Pinecone Integrated Embedding using the
// `text` field and `llama-text-embed-v2`. Pinecone generates the vectors
// server-side, so we send text records instead of client-side embeddings.
const records = chunks.map((chunk) => ({
  _id: chunk.id,
  text: `${chunk.title}\n${chunk.content}`,
  title: chunk.title,
  content: chunk.content,
  source: chunk.source,
}));

const ndjson = records.map((record) => JSON.stringify(record)).join("\n") + "\n";

const upsertResponse = await fetch(
  `${pineconeHost}/records/namespaces/${encodeURIComponent(namespace)}/upsert`,
  {
    method: "POST",
    headers: {
      "Api-Key": pineconeKey,
      Accept: "application/json",
      "Content-Type": "application/x-ndjson",
      "X-Pinecone-Api-Version": "2025-10",
    },
    body: ndjson,
  },
);

if (!upsertResponse.ok) {
  throw new Error(
    `Pinecone integrated upsert failed: ${upsertResponse.status} ${await upsertResponse.text()}`,
  );
}

console.log(
  `Indexed ${records.length} portfolio knowledge chunks into namespace '${namespace}' using Pinecone Integrated Embedding (llama-text-embed-v2).`,
);
