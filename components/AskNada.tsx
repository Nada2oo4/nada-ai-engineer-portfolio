"use client";

import { ArrowUpRight, Loader2, Send } from "lucide-react";
import { useState } from "react";

const suggestions = [
  "What did Nada build at Inspire?",
  "Explain her RAG experience.",
  "What is OptiScholar?",
  "What technologies does Nada use?",
];

export function AskNada() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState<{ title: string; source: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function ask(value = question) {
    const trimmed = value.trim();
    if (!trimmed || loading) return;
    setLoading(true);
    setError("");
    setAnswer("");
    setSources([]);
    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to answer right now.");
      setAnswer(data.answer);
      setSources(data.sources || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to answer right now.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mt-12 rounded-3xl border border-white/10 bg-[#0d0f12] p-4 shadow-2xl shadow-cyan-950/10 md:p-6">
      <div className="rounded-2xl border border-white/5 bg-black/20 p-5">
        <div className="flex flex-wrap gap-2">
          {suggestions.map((item) => (
            <button key={item} onClick={() => { setQuestion(item); ask(item); }} className="rounded-full border border-white/10 px-3 py-2 text-left text-xs text-zinc-400 transition hover:border-cyan-300/30 hover:text-cyan-200">
              {item}
            </button>
          ))}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); ask(); }} className="mt-6 flex gap-2 rounded-2xl border border-white/10 bg-white/[.025] p-2">
          <input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ask something about Nada's work..." className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-zinc-700" aria-label="Ask Nada's AI a question" />
          <button disabled={loading || !question.trim()} className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-40">
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            <span className="hidden sm:inline">Ask</span>
          </button>
        </form>
      </div>

      {(loading || answer || error) && (
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5">
          {loading && <p className="text-sm text-zinc-500">Retrieving relevant portfolio context…</p>}
          {error && <p className="text-sm leading-6 text-rose-300">{error}</p>}
          {answer && (
            <>
              <p className="whitespace-pre-wrap text-sm leading-7 text-zinc-300">{answer}</p>
              {sources.length > 0 && (
                <div className="mt-6 border-t border-white/5 pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-[.18em] text-zinc-600">Retrieved sources</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {sources.map((source) => <span key={`${source.source}-${source.title}`} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-zinc-500">{source.title}</span>)}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}

      <div className="mt-5 flex items-center justify-between px-1 text-[10px] uppercase tracking-[.16em] text-zinc-700">
        <span>Grounded answers · portfolio knowledge</span>
        <ArrowUpRight size={13} />
      </div>
    </section>
  );
}
