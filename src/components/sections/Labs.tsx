// src/components/sections/LabsSection.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

/**
 * Ecodia Labs
 * IP + R&D - where we build the tools behind the world.
 *
 * Constraints:
 * - No cards.
 * - Avoid corporate/buzzwords.
 * - Avoid authority tone.
 * - Banned words: real, verifiable, proof, loop, quiet, actually.
 * - Avoid “Not X, just Y” patterns.
 */

export default function LabsSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const scanLineY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#020617] text-white overflow-hidden selection:bg-mint selection:text-black"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-darkForest via-forest to-ink" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(52, 211, 153, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 211, 153, 0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ink/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-mint/20 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* SCANNER LINE */}
      <motion.div
        style={{ top: scanLineY }}
        className="fixed left-0 right-0 h-[2px] bg-mint/50 z-20 shadow-[0_0_20px_#84cc16] pointer-events-none hidden md:block"
      >
        <div className="absolute right-4 -top-2 text-[10px] font-mono text-mint bg-black/50 px-1">
          FIELD_SCAN
        </div>
      </motion.div>

      {/* CLOSE BUTTON */}
      <button
        onClick={() => router.back()}
        className="fixed top-6 right-6 z-50 group active:scale-95 transition-transform"
        aria-label="Close"
      >
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-mint/30 group-hover:border-mint transition-colors shadow-[0_0_15px_rgba(132,204,22,0.1)]">
          <span className="text-2xl text-mint font-light group-hover:rotate-90 transition-transform duration-300">
            ×
          </span>
          <div className="absolute inset-0 border-t border-mint rounded-full animate-spin duration-3000 opacity-50" />
        </div>
      </button>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24">
        {/* HEADER */}
        <header className="flex flex-col gap-7">
          <div className="inline-flex items-center gap-3 self-start px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-mint animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.25)]" />
            <span className="font-mono text-xs text-mint tracking-widest uppercase">
              Ecodia_Labs // IP + R&D
            </span>
          </div>

          <h1 className="font-display text-[15vw] md:text-[8.5rem] leading-[0.78] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-mint/15 drop-shadow-[0_0_30px_rgba(16,185,129,0.18)]">
            LABS
          </h1>

          <p className="max-w-2xl text-xl md:text-2xl text-white/70 font-serif leading-relaxed">
            This is where we build the tools behind the world.
            <br />
            Code. Green-tech. AI. Field experiments.
          </p>

          <div className="flex flex-wrap gap-3">
            <Jump href="#work">What we’re building</Jump>
            <Jump href="#ip">IP + research</Jump>
            <Jump href="#partner">Build with us</Jump>
          </div>
        </header>

        <div className="mt-14 h-px w-full bg-white/10" />

        {/* WHAT WE’RE BUILDING */}
        <section id="work" className="mt-16">
          <SectionTitle
            label="WORK"
            title="What we’re building"
            subtitle="Concrete projects. Built in pieces. Tested in place."
          />

          <div className="mt-10 space-y-8">
            <LineItem
              code="ECO-DISTRICT"
              title="Eco-district groundwork"
              body="We’re mapping what an Ecodia district needs to function: participation mechanics, local collaborations, and ways to make greening easy to maintain."
              tags={["district design", "partners", "participation"]}
            />

            <LineItem
              code="URBAN_GREENING"
              title="Urban greening experiments"
              body="We’re exploring street-level greening where it matters: shade, heat, water, biodiversity. That includes sensors and field tooling when it helps."
              tags={["street trees", "heat", "water", "biodiversity"]}
            />

            <LineItem
              code="BENEFICIAL_SOFTWARE"
              title="Beneficial software"
              body="We build software that helps people and places coordinate. It’s the part that makes projects legible, repeatable, and easier to join."
              tags={["coordination", "shared progress", "tooling"]}
            />

            <LineItem
              code="AI_WORKBENCH"
              title="AI workbench"
              body="We use models to reduce friction and support decision-making. AI stays assistive. People stay in charge."
              tags={["assistive AI", "pattern finding", "human direction"]}
            />
          </div>
        </section>

        {/* IP + RESEARCH */}
        <section id="ip" className="mt-20">
          <SectionTitle
            label="IP"
            title="IP + research"
            subtitle="How we hold the work while it grows."
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm p-8">
              <h3 className="font-display text-3xl tracking-tight">A place for the deep work</h3>
              <p className="mt-4 text-white/70 font-serif text-lg leading-relaxed">
                Labs exists for the hard parts: the ideas that need time, testing, and iteration.
                When they’re ready, they move into the world through collaborations and product teams.
              </p>
              <p className="mt-4 text-white/60 font-serif text-lg leading-relaxed">
                Some work is shared openly. Some work becomes licensed technology. Some work stays experimental.
                The aim is durable tools that keep making participation easier.
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl border border-mint/20 bg-black/15 backdrop-blur-sm p-8">
              <div className="font-mono text-xs text-mint/80 uppercase tracking-widest">How we build</div>
              <ul className="mt-5 space-y-3 text-white/70 font-serif text-lg">
                <li className="flex gap-3">
                  <span className="text-mint">⟡</span>
                  <span>Field pilots before big claims</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint">⟡</span>
                  <span>Pieces that can be extended</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint">⟡</span>
                  <span>Human intent stays central</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mint">⟡</span>
                  <span>Built with partners, shaped by use</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PARTNER */}
        <section id="partner" className="mt-20">
          <SectionTitle
            label="PARTNER"
            title="Build with us"
            subtitle="If you’re building districts, greening streets, or making better tools, we should talk."
          />

          <div className="mt-10 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-white text-black rounded-full font-mono text-xs uppercase tracking-widest hover:bg-mint transition-colors"
            >
              <span>Start a conversation</span>
              <span>→</span>
            </Link>

            <div className="text-white/55 font-mono text-xs uppercase tracking-widest">
              Partnerships • pilots • research
            </div>
          </div>
        </section>

        <div className="mt-20 pt-10 border-t border-white/10 text-white/40 font-mono text-xs uppercase tracking-widest">
          The world we build next
        </div>
      </div>
    </main>
  );
}

/* ----------------------------- UI bits ----------------------------- */

function Jump({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm text-white/70 hover:text-white hover:border-white/20 transition-colors font-mono text-[11px] uppercase tracking-widest"
    >
      {children}
      <span className="text-white/40">↘</span>
    </a>
  );
}

function SectionTitle({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-mint/80 shadow-[0_0_10px_rgba(16,185,129,0.25)]" />
        <span className="font-mono text-xs text-mint/80 tracking-widest uppercase">
          {label}
        </span>
      </div>

      <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.9] tracking-tight">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-white/65 font-serif text-lg md:text-xl leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

function LineItem({
  code,
  title,
  body,
  tags,
}: {
  code: string;
  title: string;
  body: string;
  tags: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/15 backdrop-blur-sm px-7 py-6">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] uppercase tracking-widest text-mint/80">
            {code}
          </div>
          <h3 className="mt-2 font-display text-3xl tracking-tight">{title}</h3>
          <p className="mt-3 text-white/70 font-serif text-lg leading-relaxed">
            {body}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 lg:justify-end">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-black/20 text-white/60 font-mono text-[10px] uppercase tracking-widest"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
