"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useBiosphere } from "@/context/BiosphereProvider";

const techSpecs = [
  { module: "Bio-Ledger", status: "Active", log: "Sequence_0x4F2" },
  { module: "Mesh-Node", status: "Syncing", log: "Frequency_88.4" },
  { module: "DNA-Auth", status: "Encrypted", log: "Helix_Protocol" },
];

export const TheSource = () => {
  const { setActiveBiome } = useBiosphere();
  
  // 1. Lower threshold for faster activation on mobile
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) setActiveBiome("source");
  }, [inView, setActiveBiome]);

  return (
    <section
      ref={ref}
      id="source"
      className="relative min-h-screen py-20 md:py-32 px-6 md:px-12 bg-[var(--bg-primary)] overflow-hidden"
    >
      {/* 2. Optimized Grid: Using a fixed background-image is lighter than rendering 1000s of divs */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent-color) 1px, transparent 1px), linear-gradient(90deg, var(--accent-color) 1px, transparent 1px)",
          backgroundSize: "60px 60px", // Larger grid = fewer lines to draw
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-10">
            <header>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 border border-[var(--accent-color)] text-[var(--accent-color)] text-[9px] tracking-[0.4em] uppercase mb-6 source-code"
              >
                System Status: Stable
              </motion.div>

              <div className="space-y-6">
                <div className="relative w-[220px] md:w-[340px] h-[60px] md:h-[72px]">
                  <Image
                    src="/img/ecodia-code-logo.png"
                    alt="Ecodia Code"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 220px, 340px"
                  />
                </div>

                <h2 className="text-4xl md:text-7xl font-light tracking-tighter text-[var(--text-primary)]">
                  <span className="italic opacity-60">Code of Life.</span>
                </h2>
              </div>
            </header>

            {/* 3. Optimized Cards: Reduced backdrop-blur and added GPU layers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {techSpecs.map((spec, i) => (
                <motion.div
                  key={spec.module}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 border border-white/5 bg-white/[0.03] md:backdrop-blur-md rounded-sm hover:border-[var(--accent-color)] transition-all will-change-transform"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="source-code text-[10px] opacity-40">
                      {spec.log}
                    </span>
                    {/* Performance: Pulse replaced with a simpler opacity keyframe */}
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] animate-[pulse_2s_infinite]" />
                  </div>
                  <h4 className="text-xl font-serif mb-1">{spec.module}</h4>
                  <p className="source-code text-[10px] uppercase tracking-widest opacity-40">{spec.status}</p>
                </motion.div>
              ))}
            </div>

            <p className="max-w-xl text-base md:text-lg opacity-60 font-serif leading-relaxed">
              Transparent, immutable, and powered by the sun.
            </p>
          </div>

          {/* Right Column: Microscope Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-12 lg:py-0">
            <div className="relative w-64 h-64 md:w-full aspect-square max-w-[400px]">
              {/* 4. GPU-Accelerated Rotation (CSS is smoother than Motion for continuous loops) */}
              <div 
                className="absolute inset-0 border-[1px] border-[var(--accent-color)] rounded-full opacity-20 animate-[spin_50s_linear_infinite] will-change-transform" 
              />
              <div 
                className="absolute inset-8 md:inset-10 border-[1px] border-[var(--accent-color)] rounded-full opacity-10 border-dashed animate-[spin_30s_linear_infinite_reverse] will-change-transform" 
              />

              <div className="absolute inset-0 flex items-center justify-center">
                {/* Performance: Reduced shadow spread */}
                <div className="w-1 h-1 bg-[var(--accent-color)] rounded-full shadow-[0_0_20px_var(--accent-color)]" />
              </div>

              <div className="absolute top-0 right-0 source-code text-[9px] opacity-40 text-right">
                LAT: 45.32.11 <br /> LNG: 12.09.43
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Simplified Light Trail: Single duration, no complex easing */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-20"
        />
      </div>
    </section>
  );
};