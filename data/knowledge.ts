export type KnowledgeChunk = {
  id: string;
  title: string;
  content: string;
  source: string;
};

export const knowledge: KnowledgeChunk[] = [
  {
    id: "profile",
    title: "Nada Ashraf — AI Engineer",
    source: "Portfolio / About",
    content:
      "Nada Ashraf is an AI Engineer based in Cairo, Egypt. She builds intelligent systems using LLM applications, Retrieval-Augmented Generation (RAG), Agentic AI, machine learning, deep learning, NLP, recommendation systems, and AI APIs. Her engineering approach is Understand, Design, Build, Evaluate, Improve, and Ship.",
  },
  {
    id: "experience",
    title: "Inspire AI Engineering Internship",
    source: "Experience",
    content:
      "In 2026, Nada completed an AI Engineering internship at Inspire for Solutions Development. She designed and implemented two practical AI systems. The work covered policy-aware RAG, LangGraph agentic workflows, LLM applications, FastAPI APIs, tool calling, and task automation.",
  },
  {
    id: "leave-request",
    title: "AI Leave Request Evaluation System",
    source: "Project — Inspire internship",
    content:
      "The AI Leave Request Evaluation System evaluates employee leave requests against company policy. It uses FastAPI and Pydantic for structured API input/output, LangGraph for an explicit workflow, RAG with Pinecone for policy retrieval, metadata filtering by country and leave type, attachment-required logic, attachment analysis, and an LLM evaluation step. The system is designed to return evidence-grounded, traceable evaluations rather than relying only on model memory. The project is deployed through Azure App Service with GitHub Actions CI/CD.",
  },
  {
    id: "digital-twin",
    title: "AI Digital Twin",
    source: "Project — Inspire internship",
    content:
      "The AI Digital Twin is an agentic assistant for task prioritization. It uses structured goals, tasks, deadlines, and user preferences as context. The agent can call get_tasks(), add_task(), and update_task() to inspect or modify task state before recommending the next action. It is intentionally lightweight, with no database or multi-user layer, and uses a Streamlit interface.",
  },
  {
    id: "optischolar",
    title: "OptiScholar",
    source: "Graduation Project",
    content:
      "OptiScholar is Nada's graduation project: an AI-powered scholarship recommendation system that matches students with scholarships using profile information, academic background, interests, and scholarship requirements. It combines a PyTorch Neural Collaborative Filtering (NCF) recommendation model with a transfer network over learned embeddings, a hybrid document parser using fine-tuned RoBERTa NER plus regex, SHAP explainability, scholarship scraping with BeautifulSoup and Requests, SQLite persistence, a Streamlit application, and an LLM chatbot through the Groq API. The chatbot uses context injection, not RAG. The recommendation dataset contained about 20K raw interaction records and roughly 29K rows after binarization and negative sampling. The reported transfer-network AUC is 0.8237 under the project's experimental setup.",
  },
  {
    id: "product-video",
    title: "Product Video Compliance",
    source: "Portfolio exploration",
    content:
      "Product Video Compliance is a multimodal AI exploration for automated e-commerce product video analysis. The workflow separates audio and visual information, uses faster-whisper for speech-to-text, explores visual frame analysis, combines the resulting context, and evaluates compliance criteria with an AI workflow. It is presented as an exploration rather than a finished production system.",
  },
  {
    id: "skills",
    title: "Technical Skills",
    source: "Portfolio / Skills",
    content:
      "Nada's technical stack includes Python, PyTorch, TensorFlow, scikit-learn, deep learning, NLP, LLMs, RAG, embeddings, prompt engineering, LangGraph, LangChain, AI agents, tool calling, FastAPI, REST APIs, Pydantic, Pinecone, vector databases, data processing, Git, GitHub, and software development.",
  },
];
