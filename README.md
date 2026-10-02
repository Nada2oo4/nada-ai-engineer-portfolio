# Nada Ashraf — AI Engineer Portfolio

A dark, technical portfolio focused on AI engineering work: LLM applications, RAG, agentic workflows, recommendation systems, and multimodal AI.

## Included

- AI Leave Request Evaluation System — RAG + LangGraph case study
- AI Digital Twin — agentic AI + tool-calling case study
- Product Video Compliance — multimodal AI exploration
- OptiScholar — graduation project case study, intentionally kept last
- Responsive project pages with custom architecture visuals, technical deep dives, engineering highlights, and screenshot placeholders
- SEO metadata, Open Graph preview, favicon, sitemap, and robots.txt
- Responsive mobile navigation
- CV download hooks
- Phase 2 placeholder for Ask Nada's AI

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Before publishing

1. Add your CV PDF at `public/Nada-Ashraf-CV.pdf`.
2. Add real project screenshots under `public/images/` and wire them into the project pages.
3. If you use a custom domain, create `.env.local` from `.env.example` and set:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

4. Run the checks:

```bash
npm run lint
npm run build
```

5. Push the project to a GitHub repository and import it into Vercel. Vercel auto-detects Next.js; the default build command is `next build`.

## Vercel deployment

Recommended flow:

1. Create a new GitHub repository for this portfolio.
2. Push this project to `main`.
3. In Vercel, choose **Add New → Project → Import Git Repository**.
4. Keep the framework as **Next.js** and the default root directory/build settings.
5. Add `NEXT_PUBLIC_SITE_URL` with the final production URL if you want canonical URLs and sitemap entries to use the public domain.
6. Deploy. Future pushes to the connected repository can trigger new deployments.

## CV

The site references `/Nada-Ashraf-CV.pdf` from the hero, navbar, and contact section. Add the real PDF to `public/` before publishing.

## Screenshots

The case-study pages intentionally leave screenshot/visual placeholders so the final site can use real evidence from each project instead of fabricated visuals.


## Ask Nada's AI

The portfolio includes a RAG-powered assistant at `/ask`. It retrieves relevant portfolio knowledge from Pinecone using Pinecone Integrated Embedding (`llama-text-embed-v2`), then generates a grounded answer with an OpenAI chat model.

### Configure

1. Create a Pinecone index using Integrated Embedding with `llama-text-embed-v2` and map the embedding field to `text`.
2. Copy `.env.example` to `.env.local`.
3. Add `OPENAI_API_KEY`, `PINECONE_API_KEY`, `PINECONE_INDEX_HOST`, and optionally `OPENAI_CHAT_MODEL`.
4. Index the portfolio knowledge. Pinecone generates the 1024-dimensional embeddings server-side:

```bash
npm run index:knowledge
```

5. Start the app:

```bash
npm run dev
```

The Pinecone and OpenAI credentials are server-side only and must not be exposed through `NEXT_PUBLIC_*` variables.
