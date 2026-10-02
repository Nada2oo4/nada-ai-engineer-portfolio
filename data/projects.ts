export const projects = [
  {
    number: "01",
    slug: "optischolar",
    title: "OptiScholar",
    image: "/images/OptiScholar AI Scholarship Dashboard.png",
    subtitle: "An AI-powered scholarship recommendation system combining personalized ranking, document intelligence, explainability, and an LLM assistant.",
    description:
      "OptiScholar is my graduation project: an end-to-end AI application that matches students with relevant scholarships using their academic background, interests, profile information, and scholarship requirements. The system combines Neural Collaborative Filtering with a transfer network over learned embeddings, hybrid NLP document parsing, SHAP explainability, scholarship data collection, and an LLM-powered chatbot inside a Streamlit application.",
    problem:
      "Finding the right scholarship is slow and fragmented. Opportunities are spread across different sources, each with its own eligibility criteria, deadlines, funding information, and document requirements. Simple keyword or rule-based matching cannot learn which scholarships fit different student profiles, while a ranked list without explanations gives students little insight into why an opportunity was recommended.",
    solution:
      "OptiScholar uses a multi-component pipeline: scholarship data is collected through a BeautifulSoup and Requests scraper; student profiles can be entered manually or extracted from uploaded documents using a hybrid fine-tuned RoBERTa NER + regex parser; an NCF recommendation model with a transfer network scores scholarships from learned embeddings; SHAP attributes recommendation scores to input features; and an LLM assistant, served through the Groq API, answers scholarship questions using relevant application context.",
    architecture: ["Scholarship Data", "Student Profile", "Document Parsing", "NCF + Transfer Network", "Ranking", "SHAP Explanation", "LLM Assistant"],
    technicalDetails: [
      ["Data collection", "A BeautifulSoup + Requests scraper collects scholarship information. The recommendation dataset contained about 20K raw student–scholarship interaction records and grew to roughly 29K after binarization and negative sampling."],
      ["Recommendation model", "The core recommendation pipeline is a PyTorch Neural Collaborative Filtering (NCF) model. A transfer network operates on the learned embeddings and produces the final scholarship relevance score."],
      ["Training setup", "The interaction data uses an 80/20 stratified split. Class imbalance is handled with a weighted loss using pos_weight, and the models were trained on a Google Colab T4 GPU."],
      ["Document intelligence", "A hybrid parser combines a fine-tuned RoBERTa NER model with regex patterns to extract structured student-profile fields from uploaded documents."],
      ["NLP experimentation", "BiLSTM, CrossEncoder, and pretrained SBERT approaches were compared during development for semantic text matching, alongside the final document-parsing pipeline."],
      ["Explainable AI", "SHAP is used to attribute a recommendation score to individual input features, showing which factors pushed a scholarship up or down the ranking."],
      ["LLM assistant", "The chatbot uses the Groq API with the configured openai/gpt-oss-120b model. It uses context injection from the application rather than Retrieval-Augmented Generation (RAG)."],
      ["Application layer", "Streamlit connects profile input, SQLite persistence, the recommendation pipeline, SHAP visualizations, scholarship information, and the chatbot into one application."],
    ],
    engineeringNotes:
      "The main engineering challenge was integrating several AI components without losing a clear separation of responsibilities. The recommendation model handles personalization, the document parser reduces manual profile entry, SHAP provides an interpretation layer, and the chatbot supports follow-up questions. The system also combines learned ranking with structured scholarship data rather than treating scholarship discovery as a pure language problem.",
    highlights: ["NCF + transfer network recommendation", "Hybrid RoBERTa NER + regex parsing", "SHAP recommendation explanations", "Groq-powered LLM chatbot", "Scholarship data scraper", "Streamlit + SQLite application"],
    tags: ["PyTorch", "NCF", "NLP", "RoBERTa NER", "SHAP", "Groq", "Streamlit", "SQLite"],
    github: "https://github.com/Nada2oo4/OptiScholar",
    screenshotLabel: "OptiScholar dashboard / recommendations",
    evaluation: [
      ["Transfer Network", "AUC", "0.8237"],
      ["Dataset", "Raw interactions", "~20K"],
      ["After processing", "Binarization + negative sampling", "~29K rows"],
      ["Data split", "Stratified train / test", "80 / 20"],
    ],
    limitations: [
      "Public reproduction requires the local scholarship datasets and fine-tuned RoBERTa model, which are intentionally excluded from the repository.",
      "Recommendation quality depends on the coverage and quality of the scholarship and interaction data.",
      "The chatbot requires an external Groq API key and network access.",
      "Evaluation reflects the experimental setup with binarization and negative sampling.",
    ],
    future: [
      "Expand scholarship and interaction data.",
      "Improve personalization through feedback-based learning.",
      "Improve multilingual NLP support.",
      "Add broader evaluation, ablations, and user studies.",
      "Improve deployment and scalability.",
    ],
  },
  {
    number: "02",
    slug: "leave-request-ai",
    title: "AI Leave Request Evaluation System",
    image: "/images/LeaveAI_ Smarter Leave Decisions.png",
    subtitle: "Policy-aware AI evaluation using RAG and agentic workflows.",
    description:
      "An AI-powered system built during my Inspire internship to evaluate employee leave requests against a company policy, retrieve relevant evidence, handle supporting-attachment logic, and return a structured evaluation.",
    problem:
      "Leave requests need to be checked against detailed rules that vary by country and leave type. A useful system needs more than an LLM response: it needs the right policy evidence, structured inputs, workflow control, attachment handling, and traceable reasons for the final decision.",
    solution:
      "A FastAPI application orchestrates a LangGraph workflow that validates the request, retrieves policy evidence from a vector database, determines whether supporting documentation is required, analyzes the attachment when applicable, and uses the grounded context for the final evaluation step.",
    architecture: ["Request", "Validation", "Policy Retrieval", "Attachment Logic", "Attachment Analysis", "LLM Evaluation", "Result"],
    technicalDetails: [
      ["API layer", "FastAPI + Pydantic provide structured request/response models and a POST evaluation endpoint."],
      ["Retrieval", "Policy text is extracted from PDF, split into chunks, embedded, and stored in Pinecone for semantic retrieval."],
      ["Metadata filtering", "Retrieved chunks can be constrained by country and leave type so country-specific rules are not mixed with unrelated policy pages."],
      ["Workflow", "LangGraph keeps validation, retrieval, attachment decisions, attachment analysis, and final evaluation as explicit workflow steps."],
      ["Grounded output", "The evaluation step receives retrieved policy evidence rather than relying only on the model's internal knowledge."],
    ],
    engineeringNotes:
      "One of the main engineering challenges was retrieval quality. A semantically similar chunk is not necessarily the correct policy evidence, so metadata and workflow context matter. This project reinforced that reliable RAG systems depend on ingestion, chunking, filtering, retrieval, and evaluation together — not on the LLM alone.",
    highlights: ["Country-aware policy retrieval", "Attachment-aware workflow", "Evidence-grounded evaluation", "Structured FastAPI API"],
    tags: ["FastAPI", "LangGraph", "RAG", "Pinecone", "OpenAI"],
    github: "https://github.com/Nada2oo4/leave-request-ai",
    screenshotLabel: "Leave request UI / API response",
  },
  {
    number: "03",
    slug: "digital-twin",
    title: "AI Digital Twin",
    image: "/images/AI Digital Twin Productivity Dashboard.png",
    subtitle: "An agentic assistant for intelligent task prioritization.",
    description:
      "A lightweight agentic AI application that uses structured tasks, goals, preferences, and deadlines to recommend the next piece of work and interact with task-management tools.",
    problem:
      "A task list does not automatically tell someone what to work on next. The system needed to combine user goals, preferences, urgency, deadlines, and current task state while giving the agent access to actions that can change that state.",
    solution:
      "The agent receives structured user context and can call tools such as get_tasks(), add_task(), and update_task(). It reasons over the available task state and preferences, then recommends the next action or uses a tool when an update is needed.",
    architecture: ["User", "Context", "AI Agent", "Tool Calls", "Task State", "Recommendation"],
    technicalDetails: [
      ["Context", "Goals, tasks, deadlines, and preferences are represented as structured information available to the agent."],
      ["Tools", "get_tasks(), add_task(), and update_task() give the agent controlled access to task operations."],
      ["Agent loop", "The model can inspect state, decide whether a tool is useful, and use the resulting information before producing its response."],
      ["Interface", "A simple Streamlit interface makes the agent behavior visible without adding unnecessary infrastructure."],
      ["Scope", "The project intentionally has no database or multi-user layer; the focus is the agent, context, tools, and decision flow."],
    ],
    engineeringNotes:
      "The important distinction here is between a chatbot that only generates text and an agent that can inspect structured state and call tools. Keeping the implementation small made it easier to focus on the tool-calling loop and the relationship between user context, actions, and recommendations.",
    highlights: ["Structured user context", "Tool calling", "Action-oriented agent", "Lightweight Streamlit UI"],
    tags: ["Agentic AI", "LLMs", "Tool Calling", "LangGraph", "Streamlit"],
    github: "https://github.com/Nada2oo4/Simple-AI-Digital-Twin",
    screenshotLabel: "Digital Twin Streamlit interface",
  },
  {
    number: "04",
    slug: "product-video-compliance",
    title: "Product Video Compliance",
    image: "/images/Product Video Compliance Pipeline.png",
    subtitle: "Exploring multimodal AI for automated product video analysis.",
    description:
      "A portfolio exploration into analyzing e-commerce product videos through audio transcription, visual understanding, and AI-based compliance evaluation.",
    problem:
      "Video contains several information streams at once. A compliance workflow may need to understand what is said, what appears on screen, and how those signals relate to evaluation criteria. Treating the video as only text or only frames can lose important context.",
    solution:
      "The prototype explores a multimodal pipeline that extracts audio and visual information, uses speech-to-text for the spoken content, combines the resulting context, and feeds it into an AI evaluation step designed to produce structured compliance findings.",
    architecture: ["Product Video", "Audio + Frames", "Speech-to-Text", "Visual Analysis", "Multimodal Context", "AI Evaluation", "Report"],
    technicalDetails: [
      ["Video preprocessing", "The workflow separates the video into information streams that can be processed independently before being combined."],
      ["Speech-to-text", "faster-whisper was used during the exploration to transcribe spoken product-video audio."],
      ["Visual understanding", "Frames can be sampled and passed to a vision-capable model for product and on-screen context."],
      ["Context fusion", "Transcription and visual observations are combined into a structured context for the compliance evaluation step."],
      ["Output", "The intended output is a structured compliance-oriented report rather than an unstructured chat response."],
    ],
    engineeringNotes:
      "This project is intentionally presented as an exploration rather than a finished production system. The interesting engineering problem is how to control the amount of video information, preserve useful temporal context, and combine heterogeneous signals without turning the evaluation pipeline into an opaque prompt.",
    highlights: ["Multimodal pipeline", "Speech-to-text", "Visual analysis", "Structured compliance output"],
    tags: ["Multimodal AI", "Computer Vision", "Speech-to-Text", "LLMs"],
    github: "",
    screenshotLabel: "Video analysis pipeline / sample output",
  }
] as const;
