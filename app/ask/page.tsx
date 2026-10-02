import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { AskNada } from "../../components/AskNada";

export const metadata = {
  title: "Ask Nada's AI",
  description: "Ask Nada's AI assistant about her projects, experience, skills, and engineering work.",
};

export default function AskPage() {
  return (
    <main className="min-h-screen px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/#top" className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white">
          <ArrowLeft size={15} /> Back to portfolio
        </Link>
        <div className="mt-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-cyan-300">
            <Sparkles size={13} /> RAG-powered portfolio assistant
          </div>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-.055em] md:text-7xl">Ask Nada&apos;s AI.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Ask about Nada&apos;s projects, technical experience, engineering decisions, and AI stack. Answers are grounded in indexed portfolio knowledge.
          </p>
        </div>
        <AskNada />
      </div>
    </main>
  );
}
