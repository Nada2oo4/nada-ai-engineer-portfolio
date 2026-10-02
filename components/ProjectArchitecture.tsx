"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = { slug: string };

const labels: Record<string, { eyebrow: string; title: string }> = {
  "leave-request-ai": { eyebrow: "LANGGRAPH + RAG", title: "Policy-aware evaluation workflow" },
  "digital-twin": { eyebrow: "AGENTIC WORKFLOW", title: "Context → tools → decision" },
  "product-video-compliance": { eyebrow: "MULTIMODAL PIPELINE", title: "Audio + vision → compliance context" },
  optischolar: { eyebrow: "MULTI-MODEL AI", title: "Profile → ranking → explanation → assistant" },
};

function Node({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <div className={`rounded-2xl border px-4 py-3 text-center font-mono text-[10px] uppercase tracking-[.12em] ${accent ? "border-cyan-300/30 bg-cyan-300/[.07] text-cyan-200" : "border-white/10 bg-white/[.025] text-zinc-300"}`}>
      {children}
    </div>
  );
}

function Arrow() {
  return <div className="flex h-7 items-center justify-center text-cyan-300/50">↓</div>;
}

export function ProjectArchitecture({ slug }: Props) {
  const meta = labels[slug] ?? labels["leave-request-ai"];

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d10] p-5 sm:p-7">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[.24em] text-cyan-300">{meta.eyebrow}</p>
          <h3 className="mt-2 text-lg font-medium text-white">{meta.title}</h3>
        </div>
        <p className="font-mono text-[9px] uppercase tracking-[.16em] text-zinc-600">SYSTEM FLOW</p>
      </div>

      {slug === "leave-request-ai" && <LeaveArchitecture />}
      {slug === "digital-twin" && <TwinArchitecture />}
      {slug === "product-video-compliance" && <VideoArchitecture />}
      {slug === "optischolar" && <ScholarArchitecture />}
    </div>
  );
}

function LeaveArchitecture() {
  return (
    <div className="mx-auto max-w-3xl">
      <Node accent>Employee request · FastAPI + Pydantic</Node>
      <Arrow />
      <div className="grid gap-3 sm:grid-cols-3">
        <Node>Validate request</Node>
        <Node>Retrieve policy</Node>
        <Node>Country + leave metadata</Node>
      </div>
      <Arrow />
      <Node accent>LangGraph workflow · policy evidence</Node>
      <Arrow />
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 p-4">
          <p className="mb-3 text-center font-mono text-[9px] uppercase tracking-[.14em] text-zinc-600">No attachment needed</p>
          <Node>Continue to evaluation</Node>
        </div>
        <div className="rounded-2xl border border-cyan-300/15 p-4">
          <p className="mb-3 text-center font-mono text-[9px] uppercase tracking-[.14em] text-cyan-300/70">Attachment required</p>
          <div className="grid gap-2">
            <Node>Check attachment</Node>
            <Arrow />
            <Node>GPT-4o analysis</Node>
          </div>
        </div>
      </div>
      <Arrow />
      <Node accent>Final GPT-4o evaluation</Node>
      <Arrow />
      <div className="grid gap-2 sm:grid-cols-3">
        <Node>Approved</Node><Node>Denied</Node><Node>Review required</Node>
      </div>
    </div>
  );
}

function TwinArchitecture() {
  return (
    <div className="mx-auto max-w-3xl">
      <Node accent>User request</Node>
      <Arrow />
      <Node>Digital Twin context · goals · preferences · tasks · deadlines</Node>
      <Arrow />
      <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="grid gap-2"><Node>AI Agent</Node><Node>Decision / reasoning</Node></div>
        <div className="hidden text-cyan-300/50 sm:block">↔</div>
        <div className="grid gap-2"><Node>Tool layer</Node><Node>get_tasks · add_task · update_task</Node></div>
      </motion.div>
      <Arrow />
      <Node>Tool result + short-term memory</Node>
      <Arrow />
      <Node accent>Next-action recommendation / task update</Node>
    </div>
  );
}

function VideoArchitecture() {
  return (
    <div className="mx-auto max-w-4xl">
      <Node accent>Product video</Node>
      <Arrow />
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 p-4"><p className="mb-3 text-center font-mono text-[9px] uppercase tracking-[.14em] text-zinc-600">Audio path</p><div className="grid gap-2"><Node>Audio extraction</Node><Arrow /><Node>faster-whisper</Node><Arrow /><Node>Transcript</Node></div></div>
        <div className="rounded-2xl border border-white/10 p-4"><p className="mb-3 text-center font-mono text-[9px] uppercase tracking-[.14em] text-zinc-600">Vision path</p><div className="grid gap-2"><Node>Frame sampling</Node><Arrow /><Node>Visual analysis</Node><Arrow /><Node>Visual observations</Node></div></div>
      </div>
      <Arrow />
      <Node>Multimodal context fusion</Node>
      <Arrow />
      <Node accent>AI compliance evaluation</Node>
      <Arrow />
      <Node>Structured findings / compliance report</Node>
    </div>
  );
}

function ScholarArchitecture() {
  return (
    <div className="mx-auto max-w-4xl">
      <Node accent>Student profile</Node>
      <Arrow />
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 p-4"><p className="mb-3 text-center font-mono text-[9px] uppercase tracking-[.14em] text-zinc-600">Manual profile</p><Node>Structured input</Node></div>
        <div className="rounded-2xl border border-white/10 p-4"><p className="mb-3 text-center font-mono text-[9px] uppercase tracking-[.14em] text-zinc-600">Document profile</p><Node>RoBERTa NER + regex</Node></div>
      </div>
      <Arrow />
      <Node>Student features + scholarship data</Node>
      <Arrow />
      <div className="grid gap-3 sm:grid-cols-3">
        <Node accent>NCF</Node><Node accent>Transfer network</Node><Node>Scholarship scraper</Node>
      </div>
      <Arrow />
      <Node accent>Personalized scholarship ranking</Node>
      <Arrow />
      <div className="grid gap-3 sm:grid-cols-2">
        <Node>SHAP explanation</Node>
        <Node>LLM assistant · Groq · context injection</Node>
      </div>
    </div>
  );
}
