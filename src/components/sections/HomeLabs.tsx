"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Experiment = {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  type: "WAVE" | "NODES" | "RADAR" | "BARS";
  accentHex: string;
  hoverBorderHex: string;
  tintHex: string;
};

const EXPERIMENTS: Experiment[] = [
  {
    id: "LAB_01",
    title: "Sidequests",
    subtitle: "Small actions you can finish in real life, turning movement into momentum.",
    status: "IN BUILD",
    type: "WAVE",
    accentHex: "#7FD069", // Mint
    hoverBorderHex: "#7FD069",
    tintHex: "#7FD069",
  },
  {
    id: "LAB_02",
    title: "Local rewards",
    subtitle: "Benefits that stay nearby, strengthening neighborhood economies and pride.",
    status: "IN BUILD",
    type: "NODES",
    accentHex: "#F4D35E", // Gold
    hoverBorderHex: "#F4D35E",
    tintHex: "#F4D35E",
  },
  {
    id: "LAB_03",
    title: "Shared progress",
    subtitle: "A running, visible record of collective action, building trust and continuity.",
    status: "IN BUILD",
    type: "RADAR",
    accentHex: "#A78BFA", // Purple
    hoverBorderHex: "#A78BFA",
    tintHex: "#A78BFA",
  },
  {
    id: "LAB_04",
    title: "Designed to follow through",
    subtitle: "Clear, frictionless steps, lowering the effort required to start and complete tasks.",
    status: "IN BUILD",
    type: "BARS",
    accentHex: "#7FD069", // Mint
    hoverBorderHex: "#7FD069",
    tintHex: "#7FD069",
  },
];

export function HomeLabs() {
  return (
    <section className="relative w-full py-28 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* BACKGROUND: Clean Grid */}
        <div
          className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* HEADER - Centered Alignment */}
        <div className="relative z-10 text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span
              className="w-3 h-3 rounded-full animate-pulse"
              style={{
                background: "#7FD069",
                boxShadow: "0 0 15px rgba(127,208,105,0.6)",
              }}
            />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint font-bold">
              The world we build next
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl leading-none tracking-tight">
            Ecodia Labs
          </h2>

          <p className="mt-6 text-white/70 text-base mx-auto max-w-2xl font-serif">
            These are the core mechanisms we are testing to ensure participation is natural, rewarding, and collectively impactful.
          </p>
        </div>

        {/* CONTENT: VERTICAL STREAM / LIST */}
        <div className="relative z-10 space-y-0 divide-y divide-white/10">
          {EXPERIMENTS.map((item, i) => (
            <ExperimentEntry item={item} key={item.id} index={i} />
          ))}
        </div>

        {/* Dedicated "View All" Section */}
        <div className="pt-16 pb-8 text-center">
          <Link
            href="/labs"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-mono text-xs uppercase tracking-widest transition-colors active:bg-white/10"
          >
            <span className="text-mint font-bold">Open Lab</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ExperimentEntry({ item, index }: { item: Experiment; index: number }) {
  const accentColor = item.accentHex;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative block py-8 sm:py-10 group active:opacity-80 transition-opacity"
    >
      <Link href="/labs" className="absolute inset-0" aria-label={`Read about ${item.title}`}/>

      {/* Dynamic Colored Vertical Bar/Separator */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-full opacity-50 transition-colors"
        style={{ background: accentColor }}
      />
      
      <div className="flex flex-col md:flex-row md:items-start md:gap-8 pl-6 sm:pl-8">
        
        {/* LEFT BLOCK: Metadata and Status (Always top-aligned) */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0 shrink-0">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-white/50 uppercase font-semibold">{item.id}</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              <span className="font-mono text-[10px] font-bold tracking-[0.1em] text-white/90">
                {item.status}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT BLOCK: Title and Subtitle */}
        <div className="w-full md:w-2/3">
          <h3 className="font-display text-3xl sm:text-4xl text-white mb-2 leading-tight">
            {item.title}
          </h3>
          <p className="font-serif text-base text-white/80 leading-relaxed">
            {item.subtitle}
          </p>
        </div>
        
        {/* CTA (Mobile-friendly, high contrast) */}
        <div className="mt-4 md:mt-0 md:pl-8 shrink-0">
            <span className="font-mono text-xs uppercase tracking-widest text-mint transition-transform">
                Details →
            </span>
        </div>
      </div>
    </motion.div>
  );
}