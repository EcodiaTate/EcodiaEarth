"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Cpu, Database, Share2, Activity } from "lucide-react";

/**
 * ECODIA TECHNOLOGY MANIFESTO
 * Materiality: Warm Paper (#F9F8F5) | Charcoal Ink (#2D2B28)
 * Strategy: Technology as Material Craft.
 */

const MODULES = [
  {
    id: "SYS_01",
    name: "FIELD_SIGNALS",
    title: "Reality, held",
    desc: "Grounded in physical sites. We interpret local variables—people, weather, streets—and translate them into a responsive systemic layer.",
    specs: ["SOURCE: Ground", "TEMPO: Steady", "WEIGHT: Light"],
    trace: "#7FD069", // Mint
    icon: <Activity size={18} />
  },
  {
    id: "SYS_02",
    name: "SHARED_RECORD",
    title: "The Consensus",
    desc: "A shared memory for progress. We maintain simple rules and human language to ensure the record remains coherent without feeling heavy.",
    specs: ["RULES: Clear", "PROOF: Simple", "STYLE: Calm"],
    trace: "#F4D35E", // Gold
    icon: <Database size={18} />
  },
  {
    id: "SYS_03",
    name: "LOCAL_RETURN",
    title: "Value, kept close",
    desc: "Participation creates value that must not drift. Benefits are anchored to the sites that generated them: the streets and the local economy.",
    specs: ["FLOW: Near", "PATH: Direct", "PACE: Ongoing"],
    trace: "#396041", // Forest
    icon: <Share2 size={18} />
  },
] as const;

export default function TechnologySection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Measurement drift
  const rulerY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]"
    >
      {/* 1. EXIT PROTOCOL */}
      <div className="fixed right-12 top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-3 border border-[#2D2B28] px-4 py-2 transition-all hover:bg-[#2D2B28] hover:text-[#F9F8F5]"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return</span>
        </button>
      </div>

      {/* 2. TOPOGRAPHIC GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute left-[15%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute top-[25%] left-0 w-full h-px bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-8 py-32">
        
        {/* HEADER: VISUAL MASS */}
        <header className="mb-48 space-y-12 border-b-4 border-[#2D2B28] pb-16">
          <div className="flex items-center gap-4">
            <Cpu size={14} className="opacity-40" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-50">
              Technical_Briefing // Open_Build
            </span>
          </div>

          <h1 className="text-6xl font-black leading-[0.8] tracking-tighter sm:text-8xl lg:text-9xl">
            THE CRAFT <br />
            <span className="italic font-light opacity-30 text-[#396041]">UNDERNEATH.</span>
          </h1>

          <p className="max-w-2xl text-2xl font-medium leading-tight tracking-tight opacity-70">
            Technology is not separate from the soil. It is another material used to 
            shape the world we share—handled calmly, carefully, and in public.
          </p>
        </header>

        {/* 3. PROTOCOL LIST: STRATA LOGIC */}
        <div className="flex flex-col border-t border-[#2D2B28]/10">
          {MODULES.map((mod, i) => (
            <TechRow key={mod.id} data={mod} index={i} />
          ))}
        </div>

        {/* FOOTER: MEASUREMENT TICKS */}
        <footer className="mt-48 flex items-center justify-between border-t border-[#2D2B28]/10 pt-12 opacity-20">
            <div className="text-[8px] uppercase tracking-[0.5em]">Material_Source // 2025</div>
            <div className="flex gap-1">
               {[...Array(8)].map((_, i) => (
                 <div key={i} className="h-4 w-[1px] bg-[#2D2B28]" />
               ))}
            </div>
            <div className="text-[8px] uppercase tracking-[0.5em]">Ecodia.Sys // Beta_State</div>
        </footer>
      </div>
    </main>
  );
}

function TechRow({ data, index }: { data: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative border-b border-[#2D2B28]/10 py-16 transition-colors hover:bg-[#2D2B28]/[0.02]"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
        {/* LEFT: SPECS */}
        <div className="md:col-span-3 space-y-4">
          <div className="flex items-center gap-3">
             <div className="h-2 w-2 rounded-full" style={{ backgroundColor: data.trace }} />
             <span className="text-xs font-black tracking-widest">{data.id}</span>
          </div>
          <div className="space-y-1 text-[9px] uppercase tracking-widest opacity-40">
            {data.specs.map((s: string) => (
              <div key={s}>{s}</div>
            ))}
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="md:col-span-9 space-y-6">
          <div className="flex items-center gap-4">
            <div className="opacity-20">{data.icon}</div>
            <h2 className="text-4xl font-black tracking-tighter uppercase sm:text-5xl">
              {data.title}
            </h2>
          </div>
          <p className="max-w-2xl text-xl leading-snug opacity-70">
            {data.desc}
          </p>
        </div>
      </div>
      
      {/* THE TRACE: VERTICAL RESIDUE */}
      <div 
        className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity group-hover:opacity-100" 
        style={{ backgroundColor: data.trace }}
      />
    </motion.div>
  );
}