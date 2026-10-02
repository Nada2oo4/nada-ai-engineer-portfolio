import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "../../../data/projects";
import { Navbar } from "../../../components/Navbar";
import { Reveal } from "../../../components/Reveal";
import { ProjectArchitecture } from "../../../components/ProjectArchitecture";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} | Nada Ashraf`,
      description: project.subtitle,
      type: "article",
    },
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 pb-28 pt-36 lg:px-10">
        <Link href="/#work" className="inline-flex items-center gap-2 text-xs text-zinc-500 transition hover:text-white">
          <ArrowLeft size={13} /> Back to selected work
        </Link>

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <p className="text-[11px] font-bold uppercase tracking-[.28em] text-cyan-300">
              Project {project.number} · AI Engineering
            </p>
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-cyan-300/40 hover:text-white">
                GitHub <ArrowUpRight className="ml-1" size={13} />
              </a>
            ) : null}
          </div>

          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-.055em] md:text-7xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">{project.subtitle}</p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-400">{tag}</span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[.02]">
            <img
              src={project.image}
              alt={project.screenshotLabel}
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>
        <div className="mt-20 grid gap-16 lg:grid-cols-[180px_1fr]">
          <p className="text-xs uppercase tracking-[.2em] text-cyan-300">Case study</p>

          <div>
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-zinc-600">01 · Overview</p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">{project.description}</p>
            </Reveal>

            <Reveal>
              <p className="mt-16 font-mono text-[10px] uppercase tracking-[.2em] text-zinc-600">02 · The problem</p>
              <h2 className="mt-3 text-3xl font-semibold">Why this system needed more than a simple model.</h2>
              <p className="mt-5 max-w-3xl leading-8 text-zinc-400">{project.problem}</p>
            </Reveal>

            <Reveal>
              <p className="mt-16 font-mono text-[10px] uppercase tracking-[.2em] text-zinc-600">03 · The solution</p>
              <h2 className="mt-3 text-3xl font-semibold">Turning the idea into a workflow.</h2>
              <p className="mt-5 max-w-3xl leading-8 text-zinc-400">{project.solution}</p>
            </Reveal>

            <Reveal>
              <p className="mt-16 font-mono text-[10px] uppercase tracking-[.2em] text-zinc-600">04 · Architecture</p>
              <div className="mt-5">
                <ProjectArchitecture slug={project.slug} />
              </div>
            </Reveal>

            <Reveal>
              <p className="mt-16 font-mono text-[10px] uppercase tracking-[.2em] text-zinc-600">05 · Technical deep dive</p>
              <h2 className="mt-3 text-3xl font-semibold">The engineering behind the system.</h2>
              <div className="mt-7 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
                {project.technicalDetails.map(([title, description], index) => (
                  <div key={title} className="bg-[#0b0d10] p-6">
                    <p className="font-mono text-[10px] text-cyan-300">0{index + 1}</p>
                    <h3 className="mt-3 text-base font-medium">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            

            {"evaluation" in project ? (
              <Reveal>
                <p className="mt-16 font-mono text-[10px] uppercase tracking-[.2em] text-zinc-600">06 · Evaluation</p>
                <h2 className="mt-3 text-3xl font-semibold">Evidence from the current experiment.</h2>
                <div className="mt-7 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
                  {project.evaluation.map(([component, metric, value]) => (
                    <div key={`${component}-${metric}`} className="bg-[#0b0d10] p-6">
                      <p className="font-mono text-[10px] uppercase tracking-[.14em] text-cyan-300">{component}</p>
                      <p className="mt-4 text-xs uppercase tracking-[.12em] text-zinc-600">{metric}</p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 max-w-3xl text-xs leading-6 text-zinc-600">The AUC result reflects the project&apos;s current experimental setup, including binarization, negative sampling, an 80/20 stratified split, and weighted loss.</p>
              </Reveal>
            ) : null}

            <Reveal>
              <p className="mt-16 font-mono text-[10px] uppercase tracking-[.2em] text-zinc-600">07 · Engineering highlights</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[.02] p-5 text-sm text-zinc-300">
                    <span className="mr-2 text-cyan-300">+</span>{item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <p className="mt-16 font-mono text-[10px] uppercase tracking-[.2em] text-zinc-600">08 · Engineering notes</p>
              <p className="mt-5 max-w-3xl leading-8 text-zinc-400">{project.engineeringNotes}</p>
            </Reveal>

            {"limitations" in project ? (
              <>
                <Reveal>
                  <p className="mt-16 font-mono text-[10px] uppercase tracking-[.2em] text-zinc-600">09 · Limitations</p>
                  <div className="mt-6 space-y-3">
                    {project.limitations.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/[.02] p-5 text-sm leading-6 text-zinc-400">{item}</div>
                    ))}
                  </div>
                </Reveal>
                <Reveal>
                  <p className="mt-16 font-mono text-[10px] uppercase tracking-[.2em] text-zinc-600">10 · Future directions</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {project.future.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/[.02] p-5 text-sm text-zinc-400">
                        <span className="mr-2 text-cyan-300">+</span>{item}
                      </div>
                    ))}
                  </div>
                </Reveal>
              </>
            ) : null}

            <Reveal>
              <div className="mt-16 rounded-3xl border border-white/10 bg-white/[.02] p-7">
                <p className="font-mono text-[10px] uppercase tracking-[.2em] text-cyan-300">Built with</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-400">{tag}</span>
                  ))}
                </div>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-100">
                    View source on GitHub <Github className="ml-2" size={15} />
                  </a>
                ) : (
                  <p className="mt-6 text-xs text-zinc-600">Source link will be added when the repository is published.</p>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
