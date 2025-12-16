// src/components/sections/TechnologySection.tsx
"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const LAYERS = [
  {
    id: "L1",
    code: "PLACE_MAKING",
    title: "Place",
    desc: "Tools for noticing what’s happening on the ground, and making care easy to repeat.",
    icon: "◉",
    status: "ACTIVE",
  },
  {
    id: "L2",
    code: "PARTICIPATION",
    title: "People",
    desc: "Structures for shared effort. Clear roles, low friction, real follow-through.",
    icon: "◈",
    status: "EVOLVING",
  },
  {
    id: "L3",
    code: "FEEDBACK_LOOPS",
    title: "Sense",
    desc: "Signals that show what’s working, where things stall, and what to do next.",
    icon: "◎",
    status: "LEARNING",
  },
] as const;

type Layer = (typeof LAYERS)[number];

export function TechnologySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scanLineY = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Ecodia palette
  const FOREST = "#396041";
  const MINT = "#7fd069";
  const GOLD = "#f4d35e";

  return (
    <section
      ref={containerRef}
      className="relative w-full py-40 text-white/90 overflow-hidden"
      style={{ backgroundColor: FOREST }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Scanner beam */}
      <motion.div
        className="absolute left-0 w-full h-[2px] z-0 hidden md:block transform-gpu"
        style={{
          top: scanLineY as unknown as string,
          backgroundColor: MINT,
          opacity: 0.6,
          willChange: "transform",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* LEFT */}
        <div className="flex flex-col items-start relative">
          <div className="flex items-center gap-3 mb-10">
            <div className="relative w-3 h-3">
              <span
                className="absolute inset-0 rounded-full opacity-30 animate-ping"
                style={{ backgroundColor: MINT }}
              />
              <span className="relative block w-3 h-3 rounded-full" style={{ backgroundColor: MINT }} />
            </div>
            <span
              className="font-mono text-xs uppercase tracking-[0.2em]"
              style={{ color: MINT }}
            >
              Tools & Mechanisms
            </span>
          </div>

          <motion.h2
            style={{ y: yText, willChange: "transform" }}
            className="font-display text-8xl md:text-[110px] leading-[0.85] tracking-tighter mb-10 transform-gpu text-white"
          >
            TECH
            <span className="block" style={{ color: MINT }}>
              AS CRAFT
            </span>
            <span
              className="block text-[22px] sm:text-[28px] md:text-[34px] mt-8 font-mono tracking-normal leading-[1.1] font-normal italic"
              style={{ color: GOLD }}
            >
              BUILDS THE RULES PEOPLE LIVE INSIDE.
            </span>
          </motion.h2>

          <p
            className="font-serif text-xl md:text-2xl text-white/70 max-w-md leading-relaxed mb-12 border-l-2 pl-6"
            style={{ borderColor: "rgba(244,211,94,0.6)" }}
          >
            We build mechanisms that make participation easier to start, easier to repeat, and easy
            to see.
            <span className="block mt-4">
              Less friction. Clear feedback. Shared progress that accumulates.
            </span>
          </p>

          <Link
            href="/technology"
            className="group relative px-10 py-5 bg-white text-black font-mono text-sm uppercase tracking-widest rounded-sm transition-colors duration-300"
            style={{
              // hover via tailwind is fine, but keep palette aligned:
              // we’ll rely on existing hover classes? instead do inline with group hover not possible.
            }}
          >
            <div className="flex items-center gap-4">
              <span>Explore the tools</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="relative pt-12">
          <svg className="absolute left-[34px] top-0 bottom-0 w-6 h-full z-0 overflow-visible opacity-80 hidden md:block">
            <line x1="0" y1="0" x2="0" y2="100%" stroke="#555" strokeWidth="2" strokeDasharray="4 4" />
            <motion.line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke={MINT}
              strokeWidth="2"
              style={{
                pathLength: scrollYProgress,
                strokeDasharray: "100%",
                strokeDashoffset: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              }}
            />
          </svg>

          <div className="space-y-6">
            {LAYERS.map((layer, i) => (
              <SchematicNode key={layer.id} layer={layer} index={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SchematicNode({
  layer,
  index,
  progress,
}: {
  layer: Layer;
  index: number;
  progress: MotionValue<number>;
}) {
  const MINT = "#7fd069";
  const FOREST = "#396041";

  const threshold = 0.25 + index * 0.15;
  const x = useTransform(progress, [threshold - 0.12, threshold], [80, 0]);
  const opacity = useTransform(progress, [threshold - 0.12, threshold], [0.3, 1]);
  const active = useTransform(progress, (v: number): number => (v > threshold ? 1 : 0));
  const ringOpacity = useTransform(active, [0, 1], [0, 1]);

  return (
    <motion.div style={{ x, opacity, willChange: "transform, opacity" }} className="group relative md:pl-20 transform-gpu">
      <div
        className="hidden md:flex absolute left-[31px] top-1/2 -translate-y-1/2 w-4 h-4 border border-white/20 rounded-full z-10 items-center justify-center"
        style={{ backgroundColor: FOREST }}
      >
        <motion.div
          className="w-2 h-2 rounded-full shadow-[0_0_8px_#7fd069]"
          style={{ backgroundColor: MINT }}
        />
      </div>

      <div className="relative overflow-hidden bg-black/30 border border-white/20 p-6 md:p-8 transition-all duration-300 backdrop-blur-sm hover:bg-black/40">
        <motion.div
          className="absolute inset-0 pointer-events-none ring-2 opacity-30"
          style={{ opacity: ringOpacity as unknown as number, borderColor: MINT }}
        />

        <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-white/50 uppercase">{layer.id}</span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider" style={{ color: MINT }}>
              {layer.code}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-black/30 px-2 py-1 rounded border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: MINT }} />
            <span className="font-mono text-[8px] text-white/50">{layer.status}</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-4xl text-white/20 font-thin transition-colors duration-300 group-hover:text-white/80">
            {layer.icon}
          </div>
          <div>
            <h3 className="font-display text-3xl text-white mb-1 tracking-tighter">{layer.title}</h3>
            <p className="font-serif text-sm text-white/70 leading-relaxed">{layer.desc}</p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/10 transition-colors" />
      </div>
    </motion.div>
  );
}
