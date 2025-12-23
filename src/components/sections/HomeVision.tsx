"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HomeVision() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Inertial Drift
  const yDrift = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);

  return (
    <section
      ref={containerRef}
      id="vision"
      className="w-full py-48 bg-[#F9F8F5] text-[#2D2B28] overflow-hidden relative min-h-screen"
    >
      <div className="mx-auto max-w-7xl px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT: ANCHOR */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-12 opacity-40">
            <img src="/icons/leaf-black.svg" className="w-5 h-5" alt="glyph" />
            <span className="font-mono text-[10px] uppercase tracking-[0.5em]">
              Vision
            </span>
          </div>

          <h2 className="font-black text-[10vw] lg:text-[10rem] tracking-tighter leading-[0.8] mb-12">
            <span className="block opacity-30">MAKE GOOD</span>
            <span className="block text-[#396041]">THE DEFAULT.</span>
          </h2>

          <div className="max-w-xl space-y-8">
            <p className="font-mono text-xl md:text-2xl leading-relaxed text-[#2D2B28]/80">
              Ecodia sidequests.
              Progress, experience, connect.
            </p>
          </div>
        </div>

        {/* RIGHT: READOUT */}
        <motion.div style={{ y: yDrift }} className="lg:col-span-4 lg:pt-48">
          <div className="border-l border-[#2D2B28] pl-8 space-y-12">
            <div className="space-y-4 font-mono text-[10px] uppercase tracking-[0.3em]">
              <p className="font-black opacity-100">Working notes</p>
              <div className="h-[1px] w-full bg-[#2D2B28]/10" />
              <p className="opacity-40">01. Design reduces effort.</p>
              <p className="opacity-40">02. Small actions compound.</p>
              <p className="opacity-40">03. Shared makes it stick.</p>
            </div>

            <Link
              href="/vision"
              className="group inline-flex flex-col gap-4 bg-[#2D2B28] p-8 text-[#F9F8F5] transition-all hover:bg-[#396041]"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest">
                Map
              </span>
              <span className="text-4xl">Open the map →</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* BACKGROUND RESIDUE */}
      <div className="absolute top-1/2 right-[-5%] font-black text-[25vw] text-[#2D2B28] opacity-[0.02] pointer-events-none select-none">
        DEFAULT
      </div>
    </section>
  );
}
