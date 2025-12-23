"use client";

import { motion, useScroll, useTransform, cubicBezier, type Transition } from "framer-motion";
import * as React from "react";

/**
 * ECODIA HERO: THE PRIME DIRECTIVE
 * 1. Metadata as functional residue.
 * 2. Inertial drift on coordinate blocks.
 * 3. Calibration grid alignment.
 */

const baseInertialTransition: Transition = {
  type: "tween",
  ease: cubicBezier(0.19, 1, 0.22, 1), // was [0.19, 1, 0.22, 1]
  duration: 1.4,
};

export function HeroTitle() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Inertial Drift for the main content and metadata
  const yDrift = useTransform(scrollYProgress, [0, 0.5], ["0px", "120px"]);
  const opacityDrift = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[140vh] w-full bg-[#F9F8F5] overflow-hidden"
    >
      {/* 1. CALIBRATION GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-[8%] top-0 h-full w-[1px] bg-[#2D2B28]" />
        <div className="absolute left-0 top-[20%] h-[1px] w-full bg-[#2D2B28]" />
        <div className="absolute right-[8%] top-0 h-full w-[1px] bg-[#2D2B28]" />
      </div>

      {/* 2. CONTROL DECK: COORDINATES (Offset edges) */}
      <motion.div
        style={{ opacity: opacityDrift }}
        className="absolute top-12 left-12 right-12 z-20 flex justify-between pointer-events-none"
      >
        <div className="flex flex-col gap-1 font-mono text-[10px] text-[#2D2B28]/40 uppercase tracking-[0.3em]">
          <span>LAT: 26.6528° S</span>
          <span className="text-[#F4D35E] animate-pulse-fast">Anchored</span>
        </div>
        <div className="flex flex-col gap-1 font-mono text-[10px] text-[#2D2B28]/40 uppercase tracking-[0.3em] text-right">
          <span>LNG: 153.0896° E</span>
          <span className="text-[#7FD069] animate-pulse-fast">Connected</span>
        </div>
      </motion.div>

      {/* 3. LOGO GLYPH (Tucked Left) */}
      <motion.div
        style={{ y: yDrift, opacity: opacityDrift }}
        className="absolute left-[5%] top-[10vh] z-10"
      >
        <div className="flex flex-col gap-4">
          <div className="h-12 w-[1px] bg-[#2D2B28]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#2D2B28]/40">
            Seedling
          </span>
          <img
            src="/icons/leaf-black.svg"
            className="w-8 h-8 opacity-80"
            alt="Ecodia Glyph"
          />
        </div>
      </motion.div>

      {/* 4. MAIN TITLE MASS */}
      <div className="relative pt-[35vh] pl-[8%] pr-[5%]">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={baseInertialTransition}
          className="relative"
        >
          <h1 className="flex flex-col font-black leading-[0.8] tracking-tighter text-[#2D2B28]">
            <span className="text-[14vw] md:text-[12rem]">THE WORLD</span>

            <span className="ml-[10%] flex items-baseline gap-4">
              <span
                className="text-[14vw] md:text-[12rem] text-transparent"
                style={{ WebkitTextStroke: "2px #2D2B28" }}
              >
                WE BUILD
              </span>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ ...baseInertialTransition, delay: 1 }}
                className="h-4 w-4 rounded-full bg-[#7FD069]"
              />
            </span>

            <span className="text-[18vw] md:text-[15rem] text-[#396041]">
              NEXT<span className="text-[#F4D35E]">.</span>
            </span>
          </h1>

          <div className="mt-12 flex items-end gap-24">
            <div className="space-y-2">
              <div className="h-[1px] w-32 bg-[#2D2B28] opacity-20" />
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-40">
                Because local • ongoing
              </p>
            </div>
            <div className="hidden md:block">
              <p className="max-w-xs font-mono text-[11px] leading-relaxed opacity-60">
                A world that’s already unfolding.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5. LARGE BACKGROUND DRIFT */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0px", "-200px"]) }}
        className="absolute bottom-[10%] right-[-5%] font-black text-[20vw] opacity-[0.02] pointer-events-none select-none"
      >
        ECODIA
      </motion.div>

      <style jsx global>{`
        @keyframes pulse-fast {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-fast { animation: pulse-fast 1.5s infinite; }
      `}</style>
    </section>
  );
}
