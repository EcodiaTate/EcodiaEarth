"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
const FEATURES = [
  {
    id: "01",
    title: "PLAY",
    subtitle: "Join the drift",
    desc: "Start where you are. Follow what moves. The work has already begun.",
    align: "items-start text-left",
    color: "text-[#2D2B28]",
    offset: "pl-[8%]",
  },
  {
    id: "02",
    title: "CREATE",
    subtitle: "Build what lasts",
    desc: "Culture grows from use, not display. Make what others can build on.",
    align: "items-end text-right",
    color: "text-[#396041]",
    offset: "pr-[12%]",
  },
  {
    id: "03",
    title: "THRIVE",
    subtitle: "Connect the grid",
    desc: "Strength lives in connection. The more you give, the more it holds.",
    align: "items-start text-left",
    color: "text-[#F4D35E]",
    offset: "pl-[15%]",
  },
] as const;

export function StickyNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative bg-[#F9F8F5]" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* 1. CALIBRATION TICKS (Replaces Progress Bar) */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-20">
          {[...Array(12)].map((_, i) => (
            <motion.div 
              key={i}
              className="h-[1px] w-4 bg-[#2D2B28]"
              style={{ 
                width: useTransform(scrollYProgress, 
                  [i / 12, (i + 1) / 12], 
                  ["16px", "40px"]
                ),
                opacity: useTransform(scrollYProgress, 
                  [i / 12, (i + 1) / 12], 
                  [0.2, 1]
                )
              }}
            />
          ))}
          <span className="font-mono text-[9px] rotate-90 mt-8 tracking-[0.3em] uppercase">Scale_Readout</span>
        </div>

        {/* 2. THE LEAF AS RESIDUE (Rule 3) */}
        <div className="absolute top-12 right-12 opacity-40">
          <img src="/icons/leaf-black.svg" className="w-6 h-6" alt="residue" />
        </div>

        {/* 3. NARRATIVE LAYERS */}
        <div className="relative h-full w-full">
          {FEATURES.map((feature, index) => (
            <NarrativeItem 
              key={feature.id} 
              feature={feature} 
              index={index} 
              progress={scrollYProgress} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function NarrativeItem({ feature, index, progress }: { feature: any, index: number, progress: MotionValue<number> }) {
  const start = index * 0.33;
  const end = (index + 1) * 0.33;

  // Rule 8: No bounce. Movement ends early.
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const driftY = useTransform(progress, [start, end], ["40px", "-40px"]);
  
  return (
    <motion.div
      className={`absolute inset-0 flex flex-col justify-center ${feature.align} ${feature.offset} z-10`}
      style={{ opacity }}
    >
      <div className="max-w-2xl">
        {/* FIELD NOTE HEADER */}
        <div className="flex items-center gap-3 mb-4 opacity-40">
          <span className="font-mono text-[10px] tracking-[0.4em]">REF_LOG_{feature.id}</span>
          <div className="h-[1px] w-12 bg-[#2D2B28]" />
        </div>

        {/* SUBTITLE: THE DRIFT (Rule 2) */}
        <motion.span 
          style={{ y: driftY }}
          className="block font-mono text-sm uppercase tracking-[0.2em] mb-4 text-[#2D2B28]/60"
        >
          {feature.subtitle}
        </motion.span>

        {/* TITLE: MASS (Rule 2) */}
        <h2 className={`font-black text-[12vw] leading-[0.85] tracking-tighter ${feature.color} mb-8`}>
          {feature.title}
        </h2>

        {/* DESCRIPTION: FIELD LOGS (Rule 4) */}
        <p className="font-mono text-lg md:text-xl text-[#2D2B28]/80 leading-relaxed max-w-md">
          {feature.desc}
        </p>

        {/* RESIDUE MARK */}
        {index === 2 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 p-6 border border-[#2D2B28]/10 bg-[#F4D35E]/5 inline-block"
          >
            <span className="font-mono text-[10px] uppercase block mb-4">Final_Calibration_Complete</span>
            <button className="bg-[#2D2B28] text-[#F9F8F5] px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#396041] transition-colors">
              Enter_The_Local_Grid →
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}