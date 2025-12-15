// src/components/sections/TechnologySection.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const MODULES = [
  {
    id: "SYS_01",
    name: "SENSORY_INPUT",
    title: "Reality, captured",
    desc:
      "This world is grounded in what happens in real places. We take in signals from the field - from people, from environments, from the day itself - and turn them into something the rest of Ecodia can respond to.",
    specs: ["INPUT: Field", "RHYTHM: Steady", "FORM: Lightweight"],
    status: "ONLINE",
  },
  {
    id: "SYS_02",
    name: "CONSENSUS_ENGINE",
    title: "A shared record",
    desc:
      "Progress here is meant to hold up over time. Not because it’s loud, but because it’s consistent. We favour simple checks, clear definitions, and shared agreement - enough to keep the world coherent without making it heavy.",
    specs: ["CHECKS: Simple", "BASIS: Shared", "STYLE: Calm"],
    status: "SYNCED",
  },
  {
    id: "SYS_03",
    name: "LIQUIDITY_ROUTER",
    title: "Value, kept close",
    desc:
      "When participation creates value, that value should move back through the places that made it possible. Ecodia routes rewards in ways that keep local ecosystems healthy - people, places, and the nearby economy.",
    specs: ["FLOW: Local", "PATH: Direct", "PACE: Ongoing"],
    status: "ACTIVE",
  },
];

export default function TechnologySection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // A subtle "Scan Line" that moves down the page
  const scanLine = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen py-32 bg-ink text-[#e5e5e5] eco-section-wrapper"
    >
      {/* CLOSE */}
<motion.button
  initial={{ opacity: 0, y: -14 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  onClick={() => router.back()}
  className="fixed top-6 right-6 md:top-10 md:right-10 z-50 active:scale-[0.98] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-mint/35 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
aria-label="Close"
>
  <div className="flex items-center gap-3 h-12 pl-4 pr-3 rounded-full bg-ink/90 border border-mint/30 shadow-[0_0_0_1px_rgba(6,182,212,0.14),0_18px_42px_rgba(0,0,0,0.62)] hover:border-mint/55 transition-colors active:translate-y-[1px]"
>
    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-mint/80">
      Close
    </span>

    <span className="relative flex items-center justify-center w-8 h-8 rounded-full border border-mint/30">
      <span className="absolute w-4 h-[2px] bg-white rotate-45" />
      <span className="absolute w-4 h-[2px] bg-white -rotate-45" />
    </span>

    <span
      className="absolute -inset-[2px] rounded-full pointer-events-none opacity-35 group-hover:opacity-55 transition-opacity"
      style={{ boxShadow: "0 0 26px rgba(34,211,238,0.22)" }}
    />
  </div>
</motion.button>


      {/* BACKGROUNDS */}
      <div className="fixed inset-0 z-0 pointer-events-none eco-hidden">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#222_1px,transparent_1px),linear-gradient(90deg,#222_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-ink/20 blur-[120px] mix-blend-screen" />
      </div>

      {/* SCAN LINE ANIMATION */}
      <motion.div
        style={{ top: scanLine }}
        className="fixed left-0 w-full h-[2px] bg-mint/50 shadow-[0_0_20px_#06b6d4] z-20 pointer-events-none eco-hidden"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* HEADER */}
        <header className="mb-24 border-b border-[#333333] pb-8 eco-ui-element">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-mint rounded-full animate-pulse shadow-[0_0_10px_#22d3ee] eco-accent-bg" />
            <span className="font-mono text-xs text-mint uppercase tracking-widest eco-accent-text">
              Built in the open
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl leading-none tracking-tighter mb-6 eco-text-bright">
            THE TECH
            <br />
            <span
              className="text-transparent eco-stroke-bright"
              style={{ WebkitTextStroke: "1px #06b6d4" }}
            >
              WE BUILD WITH.
            </span>
          </h1>

          <p className="max-w-2xl font-serif text-lg md:text-xl text-white/70 leading-relaxed eco-text-bright opacity-80">
            Ecodia isn’t a lecture. It’s a world with better defaults. This is some of the work
            underneath it - designed to be calm, durable, and useful in real life.
          </p>
        </header>

        {/* TERMINAL LIST */}
        <div className="flex flex-col">
          {MODULES.map((mod, i) => (
            <TechRow key={mod.id} data={mod} index={i} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .eco-mode .eco-section-wrapper {
          background-color: #000000 !important;
        }
        .eco-mode .eco-ui-element {
          border-color: #333 !important;
          background: transparent !important;
        }
        .eco-mode .eco-text-bright {
          color: #ffffff !important;
          -webkit-text-stroke: 0px !important;
        }
        .eco-mode .eco-stroke-bright {
          -webkit-text-stroke: 1px #fff !important;
        }
        .eco-mode .eco-accent-text {
          color: #00ff00 !important;
        }
        .eco-mode .eco-accent-bg {
          background-color: #00ff00 !important;
          box-shadow: none !important;
        }
        .eco-mode .eco-hidden {
          display: none !important;
        }
      `}</style>
    </section>
  );
}

function TechRow({ data, index }: { data: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative border-b border-[#222222] py-12 md:py-16 hover:bg-[#111111] transition-colors eco-ui-element"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-24">
        {/* LEFT: METADATA */}
        <div className="md:w-48 shrink-0 flex flex-row md:flex-col justify-between md:justify-start gap-2">
          <span className="font-mono text-xs text-mint font-bold uppercase tracking-widest eco-accent-text">
            {data.id}
          </span>
          <div className="font-mono text-[10px] text-[#666666] flex flex-col gap-1">
            {data.specs.map((s: string) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1.5 h-1.5 bg-mint rounded-full animate-pulse eco-accent-bg" />
            <h2 className="font-display text-4xl text-[#eee] eco-text-bright">
              {data.title}
            </h2>
          </div>
          <p className="font-serif text-lg text-[#888] leading-relaxed max-w-2xl eco-text-bright opacity-80">
            {data.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
