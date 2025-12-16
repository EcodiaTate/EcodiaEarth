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
    desc: "Tools that notice the world and help care for it — in streets, schools, beaches, backyards.",
    icon: "◉",
    status: "ACTIVE",
  },
  {
    id: "L2",
    code: "PEOPLE_WORK",
    title: "People",
    desc: "Ways to organise, share, and build things together — without needing permission or a spotlight.",
    icon: "◈",
    status: "EVOLVING",
  },
  {
    id: "L3",
    code: "PATTERN_HELP",
    title: "Sense",
    desc: "Help with seeing patterns and removing friction — so good choices become easier to act on.",
    icon: "◎",
    status: "LEARNING",
  },
];

type Layer = (typeof LAYERS)[number];

export function TechnologySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scanLineY = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 bg-ink text-[#e5e5e5] overflow-hidden">
      {/* 1. BACKGROUND GRID */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 2. SCANNER BEAM */}
      <motion.div
        style={{ top: scanLineY, willChange: "transform" }}
        className="absolute left-0 w-full h-[2px] bg-mint/50 z-0 hidden md:block transform-gpu"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <div className="flex flex-col items-start relative">
          <div className="flex items-center gap-3 mb-8">
            <div className="relative w-3 h-3">
              <span className="absolute inset-0 rounded-full bg-mint opacity-20 animate-ping" />
              <span className="relative block w-3 h-3 bg-mint rounded-full border border-black" />
            </div>
            <span className="font-mono text-xs text-mint uppercase tracking-widest">
              Build_Tools_v1
            </span>
          </div>

          <motion.h2
            style={{ y: yText, willChange: "transform" }}
            className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tighter mb-8 transform-gpu"
          >
            TECH
<br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold">
  AS CRAFT
</span>
          </motion.h2>

          <p className="font-serif text-xl md:text-2xl text-[#888] max-w-md leading-relaxed mb-12 border-l-2 border-[#333] pl-6">
  Technology isn’t separate from the living world.
  It’s one of the ways people shape it — carefully, together, over time.
  <span className="block mt-4">
    When it’s done right, it helps life work better: between people, and the places they share.
  </span>
</p>


          <Link
            href="/technology"
            className="group relative px-8 py-4 bg-white text-black font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-mint transition-colors"
          >
            <div className="flex items-center gap-4">
              <span>Explore the tools</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>

        {/* RIGHT: STACK + CENTRAL PIPE */}
        <div className="relative">
          {/* Central Data Pipe (SVG) */}
          <svg className="absolute left-[28px] top-0 bottom-0 w-6 h-full z-0 overflow-visible opacity-50 hidden md:block">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="#333"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <motion.line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="#f4d35e"
              strokeWidth="2"
              // NOTE: keeping your existing behavior; if you want a true "draw" animation,
              // we can switch to strokeDashoffset based on progress.
              style={{ pathLength: scrollYProgress }}
              />
          </svg>

          <div className="space-y-4">
            {LAYERS.map((layer, i) => (
              <SchematicNode key={layer.id} layer={layer} index={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENT: The Schematic Node ---
function SchematicNode({
  layer,
  index,
  progress,
}: {
  layer: Layer;
  index: number;
  progress: MotionValue<number>;
}) {
  const threshold = 0.25 + index * 0.15;

  // Entrance motion (GPU friendly)
  const x = useTransform(progress, [threshold - 0.12, threshold], [50, 0]);
  const opacity = useTransform(progress, [threshold - 0.12, threshold], [0.25, 1]);
  const active = useTransform(progress, (v: number): number => (v > threshold ? 1 : 0));
  const glowOpacity = useTransform(active, [0, 1], [0, 0.1]);
  
  return (
    <motion.div
      style={{ x, opacity, willChange: "transform, opacity" }}
      className="group relative md:pl-16 transform-gpu"
    >
      {/* CONNECTION NODE (Dot on the pipe) */}
      <div className="hidden md:flex absolute left-[23px] top-1/2 -translate-y-1/2 w-3 h-3 bg-ink border border-[#333] rounded-full z-10 items-center justify-center">
        <motion.div
          style={{ opacity: active }}
          className="w-1.5 h-1.5 bg-mint rounded-full shadow-[0_0_8px_#22d3ee]"
        />
      </div>

      {/* CARD */}
      <div
        className="
          relative overflow-hidden bg-[#111] border border-[#222] p-6 md:p-8
          transition-colors duration-300
          hover:border-mint/30 hover:bg-[#151515]
        "
      >
        {/* Cheaper highlight than full solid overlay repaint */}
        <motion.div style={{ opacity: glowOpacity }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 ring-1 ring-mint/30" />
        </motion.div>

        {/* Top Row */}
        <div className="flex justify-between items-start mb-4 border-b border-[#333] pb-4">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-[#555] uppercase">{layer.id}</span>
            <span className="font-mono text-[10px] text-mint font-bold uppercase tracking-wider">
              {layer.code}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#000] px-2 py-1 rounded border border-[#222]">
            <div className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
            <span className="font-mono text-[8px] text-[#777]">{layer.status}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex items-center gap-6">
          <div className="text-4xl text-[#333] font-thin group-hover:text-mint transition-colors duration-300">
            {layer.icon}
          </div>
          <div>
            <h3 className="font-display text-3xl text-[#eee] mb-1 group-hover:tracking-wide transition-all duration-300">
              {layer.title}
            </h3>
            <p className="font-serif text-sm text-[#888] leading-relaxed">{layer.desc}</p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#333] group-hover:border-mint transition-colors" />
      </div>
    </motion.div>
  );
}
