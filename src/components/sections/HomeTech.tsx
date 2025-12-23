"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const LAYERS = [
  {
    id: "L1",
    code: "PLACE_MAKING",
    title: "Place",
    desc: "Notice what’s happening on the ground. Care that repeats.",
    status: "ACTIVE",
  },
  {
    id: "L2",
    code: "PARTICIPATION",
    title: "People",
    desc: "Shared effort that sticks. Low friction. Follow-through.",
    status: "DRIFTING",
  },
  {
    id: "L3",
    code: "SENSE_LOGIC",
    title: "Sense",
    desc: "Signals that show what’s working and what to do next.",
    status: "CALIBRATING",
  },
] as const;

export function TechnologySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  // Inertial Displacement
  const yHeader = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);

  return (
    <section ref={containerRef} className="relative w-full py-48 bg-[#F9F8F5] text-[#2D2B28] overflow-hidden">
      {/* Calibration residue */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute left-[10%] h-full w-[1px] bg-[#2D2B28]" />
        <div className="absolute right-[10%] h-full w-[1px] bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: mass & silence */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <motion.div style={{ y: yHeader }} className="space-y-12">
            <div className="flex items-center gap-3">
              <img src="/icons/leaf-black.svg" className="w-4 h-4" alt="glyph" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">Field Notes</span>
            </div>

            <h2 className="font-black text-[10vw] lg:text-[7rem] leading-[0.8] tracking-tighter">
              TECH AS <br /> <span className="text-[#396041]">CRAFT.</span>
            </h2>

            <p className="font-mono text-lg text-[#2D2B28]/70 max-w-sm leading-relaxed border-l border-[#2D2B28]/20 pl-6">
              Tools that make participation visible. Less friction. Clear signals. Shared progress.
            </p>

            <Link
              href="/technology"
              className="group flex items-center gap-4 border border-[#2D2B28] px-8 py-4 font-mono text-[10px] uppercase tracking-widest hover:bg-[#2D2B28] hover:text-[#F9F8F5] transition-all"
            >
              See the tools <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Right: schematic nodes */}
        <div className="lg:col-span-7 space-y-4 pt-12">
          {LAYERS.map((layer, i) => (
            <SchematicNode key={layer.id} layer={layer} index={i} progress={scrollYProgress} />
          ))}
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
  layer: any;
  index: number;
  progress: MotionValue<number>;
}) {
  const threshold = 0.2 + index * 0.15;
  const opacity = useTransform(progress, [threshold - 0.1, threshold], [0, 1]);
  const x = useTransform(progress, [threshold - 0.1, threshold], ["20px", "0px"]);

  return (
    <motion.div style={{ opacity, x }} className="group relative border-b border-[#2D2B28]/10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-[100px_1fr_120px] items-start gap-6">
        <span className="font-mono text-[10px] opacity-30 mt-2">[{layer.id}]</span>

        <div className="space-y-2">
          <h3 className="font-black text-3xl uppercase tracking-tighter">{layer.title}</h3>
          <p className="font-mono text-sm opacity-60 max-w-md">{layer.desc}</p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="font-mono text-[9px] text-[#7FD069] tracking-widest uppercase">● {layer.status}</span>
          <div className="h-[1px] w-full bg-[#2D2B28]/10" />
        </div>
      </div>
      {/* Hover residue */}
      <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-8 bg-[#7FD069] transition-all duration-500" />
    </motion.div>
  );
}
