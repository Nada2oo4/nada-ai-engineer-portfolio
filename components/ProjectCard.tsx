import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import type { projects } from "../data/projects";

type Project = typeof projects[number];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.06}>
      <div className="group border-t border-white/10 py-8 transition-colors hover:border-cyan-300/40">
        <div className="grid gap-6 lg:grid-cols-[80px_1fr_320px] lg:items-start">
          <span className="font-mono text-xs text-zinc-600">{project.number}</span>
          <div>
            <Link href={`/projects/${project.slug}`} className="block">
              <h3 className="text-2xl font-medium tracking-tight transition group-hover:text-cyan-100 md:text-3xl">{project.title}</h3>
              <p className="mt-2 max-w-2xl text-zinc-400">{project.subtitle}</p>
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-[.14em]">
              <Link href={`/projects/${project.slug}`} className="text-zinc-600 transition hover:text-cyan-300">
                View case study <ArrowUpRight className="ml-1 inline" size={13} />
              </Link>
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-600 transition hover:text-white">
                  GitHub <Github className="ml-1 inline" size={13} />
                </a>
              ) : null}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/8 bg-white/[.025] px-2.5 py-1 text-[10px] text-zinc-400">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
