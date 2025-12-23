"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";

/**
 * ECODIA HERO: THE PRIME DIRECTIVE
 * 1. Nothing is centered. (Rule 1)
 * 2. Mass over Hierarchy. (Rule 2)
 * 3. Color as Functional Energy (Mint/Gold as state changes). (Rule 5)
 */

const baseInertialTransition = {
  type: "tween", // No bounce (Rule 8)
  ease: [0.19, 1, 0.22, 1], // Heavy start, early end
  duration: 1.4,
};

export function HeroTitle() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Inertial Drift: Movement starts late and ends early (Rule 8)
  const yDrift = useTransform(scrollYProgress, [0, 0.5], ["0px", "120px"]);
  const opacityDrift = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[140vh] w-full bg-[#F9F8F5] overflow-hidden"
    >
      {/* 1. CALIBRATION RESIDUE (The Grid) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-[8%] top-0 h-full w-[1px] bg-[#2D2B28]" />
        <div className="absolute left-0 top-[20%] h-[1px] w-full bg-[#2D2B28]" />
      </div>

      {/* 2. OFFSET LOGO (The Seedling as Glyph) */}
      <motion.div
        style={{ y: yDrift, opacity: opacityDrift }}
        className="absolute left-[5%] top-[10vh] z-10"
      >
        <div className="flex flex-col gap-2">
          <div className="h-12 w-[1px] bg-[#2D2B28]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#2D2B28]/40">
            Node_01 // Seedling
          </span>
          {/* The Tech-Leaf Glyph (Rule 3) */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path 
              d="M10 30C10 30 10 10 30 10M10 30C10 30 30 30 30 10" 
              stroke="#7FD069" 
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </motion.div>

      {/* 3. THE TITLE: MAXIMUM MASS & OFFSET (Rule 1 & 2) */}
      <div className="relative pt-[35vh] pl-[8%] pr-[5%]">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={baseInertialTransition}
          className="relative"
        >
          {/* LINE 1: CHARCOAL MASS */}
          <h1 className="flex flex-col font-black leading-[0.8] tracking-tighter text-[#2D2B28]">
            <span className="text-[14vw] md:text-[12rem]">THE WORLD</span>
            
            {/* LINE 2: OFFSET & STAIN */}
            <span className="ml-[10%] flex items-baseline gap-4">
              <span 
                className="text-[14vw] md:text-[12rem] text-transparent"
                style={{ WebkitTextStroke: "2px #2D2B28" }}
              >
                WE BUILD
              </span>
              {/* Functional Energy: Mint means "Active" (Rule 5) */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, ...baseInertialTransition }}
                className="h-4 w-4 rounded-full bg-[#7FD069]" 
              />
            </span>

            {/* LINE 3: THE FINAL CHECKPOINT */}
            <span className="text-[18vw] md:text-[15rem] text-[#396041]">
              NEXT<span className="text-[#F4D35E]">.</span>
            </span>
          </h1>
          
          {/* MEASUREMENT TICKS (Rule 6) */}
          <div className="mt-12 flex items-end gap-24">
            <div className="space-y-2">
              <div className="h-[1px] w-32 bg-[#2D2B28] opacity-20" />
              <p className="font-mono text-[9px] uppercase tracking-widest opacity-40">
                Structural_Integrity_Verified
              </p>
            </div>
            <div className="hidden md:block">
              <p className="max-w-xs font-mono text-[11px] leading-relaxed opacity-60">
                [SYSTEM_NOTE]: Ecodia is not a destination. It is the functional 
                residue of collective human intent.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4. INERTIAL DRIFT ELEMENTS (Rule 8) */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0px", "-200px"]) }}
        className="absolute bottom-[10%] right-[-5%] font-black text-[20vw] opacity-[0.02] pointer-events-none select-none"
      >
        ECODIA
      </motion.div>
    </section>
  );
}