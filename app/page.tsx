import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";
import { ArchitectureVisual } from "../components/ArchitectureVisual";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <Navbar />

      <section className="relative min-h-screen border-b border-white/5 pt-28">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 px-6 pb-20 lg:grid-cols-[1.1fr_.9fr] lg:px-10">
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-[.3em] text-cyan-300">
              AI ENGINEER · CAIRO, EGYPT
            </p>
            <h1 className="max-w-5xl text-6xl font-semibold leading-[.94] tracking-[-.065em] md:text-8xl">
              Building{" "}
              <span className="gradient-text">
                AI systems that reason, retrieve, and act.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              I design and build AI-powered applications with LLMs, RAG,
              Agentic AI, and machine learning — turning complex problems into
              practical systems.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
              >
                Explore my work{" "}
                <ArrowUpRight
                  className="ml-1 inline transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={15}
                />
              </a>
              <a
                href="/CV/Nada-Ashraf-CV.pdf"
                download
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                <Download className="mr-1 inline" size={15} /> Download CV
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                Let&apos;s connect
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ArchitectureVisual />
          </Reveal>
        </div>

        <a
          href="#work"
          className="absolute bottom-7 left-1/2 -translate-x-1/2 text-zinc-600 transition hover:text-zinc-300"
          aria-label="Scroll to selected work"
        >
          <ArrowDown size={18} />
        </a>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <SectionHeading
          eyebrow="Selected work"
          title="Systems, not just demos."
          description="A selection of AI projects spanning Generative AI, Agentic AI, recommendation systems, and multimodal workflows."
        />
        <div>{projects.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} />)}</div>
      </section>

      <section id="approach" className="border-y border-white/5 bg-[#0b0d10]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
          <SectionHeading
            eyebrow="How I think"
            title="From problem → AI system."
            description="I start with the problem, then design the smallest reliable AI workflow that can solve it."
          />
          <Reveal>
            <div className="space-y-0 border-l border-white/10">
              {[
                ["01", "Understand", "The problem, users, constraints, and desired outcome."],
                ["02", "Design", "Where AI adds real value and how the system should behave."],
                ["03", "Build", "Models, retrieval, tools, APIs, and workflow orchestration."],
                ["04", "Evaluate", "Realistic scenarios, failure cases, and system behavior."],
                ["05", "Improve", "Refine retrieval, prompts, workflows, and system reliability."],
                ["06", "Ship", "Turn the solution into a usable application."],
              ].map(([n, title, description]) => (
                <div key={n} className="group relative border-b border-white/5 py-6 pl-7">
                  <span className="absolute -left-[5px] top-7 h-2 w-2 rounded-full bg-zinc-700 transition group-hover:bg-cyan-300" />
                  <p className="font-mono text-[10px] text-zinc-600">{n}</p>
                  <h3 className="mt-1 text-xl font-medium">{title}</h3>
                  <p className="mt-1 max-w-xl text-sm leading-6 text-zinc-500">{description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <SectionHeading eyebrow="Experience" title="AI engineering in practice." />
        <Reveal>
          <div className="grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[180px_1fr_250px]">
            <div>
              <p className="font-mono text-xs text-cyan-300">2026</p>
              <p className="mt-2 text-xs text-zinc-600">AI ENGINEER INTERN</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium">Inspire for Solutions Development</h3>
              <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                Designed and implemented two AI systems during a one-month AI
                Engineering internship, covering policy-aware RAG, agentic
                workflows, LLM applications, FastAPI APIs, and tool-based
                automation.
              </p>
            </div>
            <div className="text-sm leading-7 text-zinc-500">
              <span className="text-zinc-300">2 AI systems</span><br />
              RAG · Agentic AI<br />
              FastAPI · LangGraph
            </div>
          </div>
        </Reveal>
      </section>

      <section id="skills" className="border-y border-white/5 bg-[#0b0d10]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <SectionHeading eyebrow="Technical skills" title="The stack behind the systems." />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {[
              ["AI & Machine Learning", "Python · PyTorch · TensorFlow · scikit-learn · Deep Learning · NLP"],
              ["Generative AI", "LLMs · RAG · Embeddings · Prompt Engineering"],
              ["Agentic AI", "LangGraph · LangChain · AI Agents · Tool Calling"],
              ["Backend & APIs", "FastAPI · REST APIs · Pydantic"],
              ["Data & Retrieval", "Pinecone · Vector Databases · Data Processing"],
              ["Engineering", "Git · GitHub · REST APIs · Software Development"],
            ].map(([title, description]) => (
              <Reveal key={title}>
                <div className="h-full bg-[#0b0d10] p-7 transition hover:bg-white/[.035]">
                  <p className="text-xs uppercase tracking-[.18em] text-cyan-300">{title}</p>
                  <p className="mt-4 leading-7 text-zinc-400">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-[.7fr_1.3fr] lg:px-10">
        <SectionHeading eyebrow="About" title="Curious about how intelligent systems work." />
        <Reveal>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300">
              I&apos;m Nada, an AI Engineer passionate about building intelligent
              systems that connect machine learning with real-world applications.
            </p>
            <p className="mt-6 max-w-2xl leading-7 text-zinc-500">
              My work spans machine learning, deep learning, NLP, and modern
              Generative AI, with a growing focus on LLM applications,
              Retrieval-Augmented Generation, and Agentic AI.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {["LLM Applications", "RAG", "Agentic AI", "AI Engineering"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-400">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-6 overflow-hidden rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_50%_0%,rgba(94,231,255,.10),transparent_55%)] px-6 py-20 text-center lg:mx-10">
        <Reveal>
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/5 text-cyan-300">
            <Sparkles size={18} />
          </div>
          <p className="mt-6 text-[11px] font-bold uppercase tracking-[.28em] text-cyan-300">Coming next</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] md:text-6xl">Ask Nada&apos;s AI.</h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">
            An AI assistant grounded in my projects, experience, technical
            work, and engineering decisions.
          </p>

          <a href="/ask" className="group mx-auto mt-8 block max-w-2xl rounded-2xl border border-white/10 bg-black/25 p-2 text-left shadow-2xl shadow-cyan-950/10 transition hover:border-cyan-300/30">
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[.025] px-4 py-3 text-sm text-zinc-500">
              <span>Ask something about my work...</span>
              <span className="text-cyan-300 transition group-hover:translate-x-0.5">↗</span>
            </div>
          </a>

          <div className="mx-auto mt-3 grid max-w-2xl gap-2 text-left sm:grid-cols-3">
            {[
              "What did Nada build at Inspire?",
              "Explain her RAG experience.",
              "What is OptiScholar?",
            ].map((question) => (
              <div key={question} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-xs text-zinc-500">
                {question}
              </div>
            ))}
          </div>
          <a href="/ask" className="mt-6 inline-flex rounded-full border border-cyan-300/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[.18em] text-cyan-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/5">
            Open Ask Nada&apos;s AI →
          </a>
        </Reveal>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[.28em] text-cyan-300">Contact</p>
          <h2 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.055em] md:text-7xl">
            Let&apos;s build something intelligent.
          </h2>
          <p className="mt-6 max-w-xl text-zinc-400">
            Open to AI engineering opportunities, interesting technical problems,
            and meaningful collaboration.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="rounded-full border border-white/10 px-5 py-3 text-sm hover:border-cyan-300/40" href="mailto:nada.ashraf20@outlook.com">
              <Mail className="mr-2 inline" size={15} />Email
            </a>
            <a className="rounded-full border border-white/10 px-5 py-3 text-sm hover:border-cyan-300/40" href="https://www.linkedin.com/in/nada-ashraf-zahran" target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 inline" size={15} />LinkedIn
            </a>
            <a className="rounded-full border border-white/10 px-5 py-3 text-sm hover:border-cyan-300/40" href="https://github.com/Nada2oo4" target="_blank" rel="noreferrer">
              <Github className="mr-2 inline" size={15} />GitHub
            </a>
            <a className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100" href="/CV/Nada-Ashraf-CV.pdf" download>
              <Download className="mr-2 inline" size={15} />Download CV
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/5 px-6 py-8 text-xs text-zinc-600 lg:px-10">
        <div className="mx-auto flex max-w-7xl justify-between">
          <span>NADA ASHRAF · AI ENGINEER</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
