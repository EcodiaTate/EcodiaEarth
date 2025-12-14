// src/app/not-found.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative w-full h-screen bg-ink text-[#a8a29e] overflow-hidden flex flex-col items-center justify-center selection:bg-[#ff4d35] selection:text-white">
      
      {/* 1. ATMOSPHERE: Static & Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      <div className="absolute inset-0 pointer-events-none opacity-10"
           style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #ef4444 2px, #ef4444 4px)' }} 
      />

      {/* 2. THE GLITCH TEXT */}
      <div className="relative z-10 text-center px-6">
        <div className="relative inline-block">
            <h1 className="font-display text-[30vw] md:text-[20rem] leading-none text-ink select-none">
                404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-xs md:text-sm text-[#ff4d35] bg-ink px-4 py-1 border border-[#ff4d35] animate-pulse">
                    ERROR: PATH_OVERGROWN
                </span>
            </div>
        </div>

        <p className="font-serif italic text-2xl md:text-3xl text-muted mt-8 max-w-lg mx-auto">
            "The data you are looking for has been reclaimed by the forest."
        </p>

        {/* 3. RETURN BUTTON */}
        <div className="mt-12">
            <Link href="/" className="group relative inline-flex items-center gap-4 px-8 py-4 border border-border/30 hover:border-[#ff4d35] transition-colors bg-ink">
                <span className="font-mono text-xs uppercase tracking-widest group-hover:text-[#ff4d35] transition-colors">
                    &lt; Return_To_Garden
                </span>
                {/* Glitch Hover Effect */}
                <div className="absolute inset-0 bg-ink/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
        </div>
      </div>

      {/* 4. FOOTER DIAGNOSTICS */}
      <div className="absolute bottom-12 left-0 w-full text-center font-mono text-[10px] text-muted uppercase tracking-[0.2em]">
         <p>Signal_Strength: 0%</p>
         <p>Coordinates: NULL</p>
      </div>

    </main>
  );
}