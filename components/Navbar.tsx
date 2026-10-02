"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = ["Work", "Approach", "Experience", "Skills", "About", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[#08090b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
        <a href="/#top" className="text-sm font-bold tracking-[.25em]" aria-label="Nada Ashraf home">
          NADA<span className="text-cyan-300">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map((x) => (
            <a key={x} href={`/#${x.toLowerCase()}`} className="text-xs text-zinc-400 transition hover:text-white">
              {x}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/ask"
            className="hidden rounded-full border border-cyan-300/15 px-4 py-2 text-xs font-semibold text-cyan-200 transition hover:border-cyan-300/40 sm:block"
          >
            Ask Nada&apos;s AI
          </a>
          <a
            href="/Nada-Ashraf-CV.pdf"
            download
            className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-semibold transition hover:border-cyan-300/40 hover:text-cyan-200 sm:block"
          >
            Download CV
          </a>
          <a
            href="/#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-cyan-100 md:block"
          >
            Let&apos;s connect
          </a>
          <button
            className="rounded-full border border-white/10 p-2 text-zinc-200 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          id="mobile-navigation"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-white/5 px-5 pb-5 md:hidden"
          aria-label="Mobile navigation"
        >
          {links.map((x) => (
            <a
              onClick={() => setOpen(false)}
              key={x}
              href={`/#${x.toLowerCase()}`}
              className="block border-b border-white/5 py-3.5 text-sm text-zinc-300 last:border-0"
            >
              {x}
            </a>
          ))}
          <a
            href="/ask"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex rounded-full border border-cyan-300/15 px-4 py-2.5 text-xs font-semibold text-cyan-200"
          >
            Ask Nada&apos;s AI
          </a>
          <a
            href="/Nada-Ashraf-CV.pdf"
            download
            className="mt-3 inline-flex rounded-full border border-white/10 px-4 py-2.5 text-xs font-semibold text-white"
          >
            Download CV
          </a>
        </motion.nav>
      )}
    </header>
  );
}
