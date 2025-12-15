"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const STRATA = [
  {
    zone: "ZONE 00",
    name: "The Commons",
    role: "Shared ground",
    desc:
      "The commons is not owned or managed. It’s held.\nOpen spaces, shared protocols, and collective resources that only work when people participate.",
    tone: "from-gold/30 via-transparent to-transparent",
    glow: "bg-gold/20",
    align: "center",
  },
  {
    zone: "ZONE 01",
    name: "Regenerators",
    role: "Hands in the soil",
    desc:
      "People who work with living systems - growing, repairing, restoring.\nTheir knowledge isn’t abstract. It’s earned through time and place.",
    tone: "from-mint/30 via-transparent to-transparent",
    glow: "bg-mint/20",
    align: "left",
  },
  {
    zone: "ZONE 02",
    name: "Verifiers",
    role: "Ways of knowing",
    desc:
      "Observation, science, and shared understanding.\nNot to control outcomes - but to notice what’s actually happening.",
    tone: "from-indigo-300/30 via-transparent to-transparent",
    glow: "bg-indigo-300/20",
    align: "right",
  },
  {
    zone: "ZONE 03",
    name: "Capital",
    role: "Energy in motion",
    desc:
      "Resources that move through the system rather than sitting above it.\nValue flows where participation creates it.",
    tone: "from-amber-400/30 via-transparent to-transparent",
    glow: "bg-amber-400/20",
    align: "center",
  },
];

export default function EcosystemSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#fff7ed] text-ink overflow-hidden eco-section-wrapper"
    >
      {/* CLOSE */}
<motion.button
  initial={{ opacity: 0, y: -14 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  onClick={() => router.back()}
  className="fixed top-6 right-6 md:top-10 md:right-10 z-50 rounded-full active:scale-[0.98] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff7ed]"
  aria-label="Close"
>
  <div className="flex items-center gap-3 h-12 pl-4 pr-3 rounded-full bg-[#fffbeb] border border-ink/15 shadow-[0_10px_25px_rgba(15,23,18,0.12)] hover:shadow-[0_14px_35px_rgba(15,23,18,0.16)] hover:border-ink/20 transition-all active:translate-y-[1px]"
>
    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/60">
      Close
    </span>
    <span className="relative flex items-center justify-center w-8 h-8 rounded-full border border-gold/25 bg-white">
      <span className="absolute w-4 h-[2px] bg-ink/70 rotate-45" />
      <span className="absolute w-4 h-[2px] bg-ink/70 -rotate-45" />
    </span>
  </div>
</motion.button>


      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grain */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
        {/* Soft soil gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#fde68a33,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        {/* HEADER */}
        <header className="max-w-3xl mx-auto text-center mb-32">
          <span className="inline-block mb-6 px-4 py-1 rounded-full border border-gold/20 bg-white/60 font-mono text-[10px] uppercase tracking-widest text-gold/60">
            Ecosystem
          </span>

          <h1 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tight mb-8">
            HOW THINGS
            <br />
            <span className="italic font-serif text-gold">FIT TOGETHER</span>
          </h1>

          <p className="font-serif text-xl text-ink/60">
            
            <br />
         Relationships only work when they’re nurtured.
          </p>
        </header>

        {/* STRATA */}
        <div className="space-y-40">
          {STRATA.map((layer, i) => (
            <StrataBand key={layer.zone} data={layer} index={i} />
          ))}
        </div>

        {/* FOOT */}
        <div className="mt-40 text-center font-mono text-xs text-gold/40">
          // This stays unfinished on purpose //
        </div>
      </div>

      <style jsx global>{`
        .eco-mode .eco-section-wrapper {
          background-color: #000 !important;
          color: #fff !important;
        }
      `}</style>
    </section>
  );
}

function StrataBand({ data, index }: { data: any; index: number }) {
  const align =
    data.align === "left"
      ? "md:mr-auto md:text-left"
      : data.align === "right"
      ? "md:ml-auto md:text-right"
      : "mx-auto text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className={`relative max-w-3xl ${align}`}
    >
      {/* AMBIENT GLOW */}
      <div
        className={`absolute -inset-24 rounded-full blur-3xl ${data.glow} opacity-60`}
      />

      {/* CONTENT */}
      <div className="relative">
        <span className="font-mono text-xs uppercase tracking-widest text-gold/50 block mb-4">
          {data.zone} // {data.role}
        </span>

        <h2 className="font-display text-5xl md:text-6xl mb-6 tracking-tight">
          {data.name}
        </h2>

        <p className="font-serif text-xl leading-relaxed text-ink/70 whitespace-pre-line">
          {data.desc}
        </p>

        {/* SOFT HORIZON LINE */}
        <div className="mt-10 h-px w-32 bg-gradient-to-r from-gold/60 to-transparent" />
      </div>
    </motion.div>
  );
}
