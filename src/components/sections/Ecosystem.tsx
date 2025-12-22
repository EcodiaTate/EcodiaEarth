"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SmoothLink } from "@/components/nav/SmoothLink";
import { ArrowLeft, Layers, Fingerprint, Activity, Wind } from "lucide-react";

/**
 * ECODIA ECOSYSTEM STRATA
 * Strategy: Documentation of the "Already-Happening."
 * Materiality: Warm Paper (#F9F8F5) | Charcoal Ink (#2D2B28)
 */

const STRATA = [
  {
    zone: "ZONE 00",
    name: "Shared Ground",
    role: "Overlap",
    desc: "Life happens in places we hold together: streets, parks, coastlines. This is the shared setting where participation begins.",
    trace: "#F4D35E", // Gold
    icon: <Layers size={18} />,
    offset: "lg:ml-12"
  },
  {
    zone: "ZONE 01",
    name: "Regenerators",
    role: "Labor",
    desc: "Hands in the soil. Repairing what breaks, restoring what is worn. Knowledge earned by showing up in the same place, over and over.",
    trace: "#7FD069", // Mint
    icon: <Fingerprint size={18} />,
    offset: "lg:ml-48"
  },
  {
    zone: "ZONE 02",
    name: "Intelligence",
    role: "Memory",
    desc: "Ecosystems last because they adapt. Patterns become shared knowledge; knowledge becomes continuity. We are paying attention together.",
    trace: "#396041", // Forest
    icon: <Activity size={18} />,
    offset: "lg:ml-24"
  },
  {
    zone: "ZONE 03",
    name: "Circulation",
    role: "Flow",
    desc: "Energy moves through healthy systems. Effort turns into opportunity. Circulation keeps the world responsive over time.",
    trace: "#F4D35E", // Amber/Gold
    icon: <Wind size={18} />,
    offset: "lg:ml-64"
  },
] as const;

export default function EcosystemSection() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]">
      
      {/* 1. EXIT PROTOCOL (OFFSET) */}
      <div className="fixed right-12 top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-3 border border-[#2D2B28] px-4 py-2 transition-all hover:bg-[#2D2B28] hover:text-[#F9F8F5]"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return</span>
        </button>
      </div>

      {/* 2. TOPOGRAPHIC GRID (RESIDUE) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute left-[10%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute right-[15%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute left-0 top-[20%] w-full h-px bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-32">
        
        {/* HEADER: VISUAL MASS */}
        <header className="mb-48 max-w-4xl space-y-10">
          <div className="flex items-center gap-3 opacity-40">
             <div className="h-px w-8 bg-[#2D2B28]" />
             <span className="text-[10px] uppercase tracking-[0.5em]">System_Mapping // Strata</span>
          </div>
          
          <h1 className="text-6xl font-black leading-[0.85] tracking-tighter sm:text-8xl lg:text-9xl">
            HOW THE <br />
            <span className="italic font-light opacity-30 text-[#396041]">SYSTEM BREATHES.</span>
          </h1>

          <p className="max-w-2xl text-xl font-medium leading-relaxed opacity-70">
            Ecodia is not an application; it is a topography. 
            Layers of place, effort, and intelligence that support one another. 
            The world doesn't just change—it evolves through circulation.
          </p>
        </header>

        {/* STRATA SECTIONS: INERTIAL DRIFT */}
        <div className="relative space-y-64 pb-32">
          {STRATA.map((layer, i) => (
            <motion.section
              key={layer.zone}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative max-w-2xl ${layer.offset}`}
            >
              <div className="flex flex-col gap-8">
                {/* ZONE MARKER */}
                <div className="flex items-center gap-6">
                  <div 
                    className="flex h-12 w-12 items-center justify-center border border-[#2D2B28]"
                    style={{ color: layer.trace }}
                  >
                    {layer.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                      {layer.zone}
                    </div>
                    <div className="text-[9px] uppercase tracking-widest text-[#2D2B28]/60">
                      Protocol: {layer.role}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="space-y-6">
                  <h2 className="text-5xl font-black tracking-tighter sm:text-6xl">
                    {layer.name.toUpperCase()}
                  </h2>
                  <p className="text-lg leading-snug opacity-80">
                    {layer.desc}
                  </p>
                </div>

                {/* MEASUREMENT TICK (FUNCTIONAL ENERGY) */}
                <div className="flex items-center gap-4">
                   <div className="h-[2px] w-24" style={{ backgroundColor: layer.trace }} />
                   <div className="text-[8px] font-bold opacity-30">STABLE_STATE</div>
                </div>
              </div>
            </motion.section>
          ))}
          
          {/* THE CONNECTING LINE (VERTICAL DRIFT) */}
          <div className="absolute left-6 top-0 -z-10 h-full w-px bg-gradient-to-b from-[#2D2B28]/10 via-[#2D2B28]/5 to-transparent" />
        </div>

        {/* FOOTER: CROP MARKS */}
        <footer className="mt-48 flex items-center justify-between border-t border-[#2D2B28]/10 pt-12">
           <div className="flex gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-6 w-[1px] bg-[#2D2B28]/20" />
              ))}
           </div>
           <div className="text-center">
             <div className="text-[9px] uppercase tracking-[0.5em] opacity-30 mb-2">Part of a larger cycle</div>
             <div className="text-[8px] font-black opacity-20">26.6500° S // 153.0667° E</div>
           </div>
           <div className="flex gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-6 w-[1px] bg-[#2D2B28]/20" />
              ))}
           </div>
        </footer>
      </div>
    </main>
  );
}