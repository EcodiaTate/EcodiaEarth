"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

/**
 * ECODIA VALUES (FIELD NOTES)
 * Strategy: Structural Principles. 
 * Physics: Inertial Drift [0.19, 1, 0.22, 1]
 */

const ECODIA_BEZIER = [0.19, 1, 0.22, 1] as const;
const PRINCIPLES = [
  {
    id: "01",
    title: "Shared Upside",
    text: "When you show up, the place gains. Value returns to where it started and moves through local life.",
    trace: "#7FD069",
  },
  {
    id: "02",
    title: "Design Over Discipline",
    text: "Good architecture makes action easy. Startable, repeatable, part of the day.",
    trace: "#396041",
  },
  {
    id: "03",
    title: "Doing Counts",
    text: "Progress is what gets done. Small moves leave a trace when shared and carried forward.",
    trace: "#F4D35E",
  },
  {
    id: "04",
    title: "Small Is Powerful",
    text: "Keep the world approachable. Scale comes from many people returning, not a few pushing hard.",
    trace: "#7FD069",
  },
  {
    id: "05",
    title: "Mutual Benefit",
    text: "It lasts when it’s real. Personal gain and shared good reinforce each other.",
    trace: "#396041",
  },
  {
    id: "06",
    title: "Local Is Foundational",
    text: "Change is clearest across your own street. Neighbourhoods make progress visible.",
    trace: "#F4D35E",
  },
  {
    id: "07",
    title: "Play Keeps It Alive",
    text: "Play sustains effort. Curiosity and rhythm keep people coming back.",
    trace: "#7FD069",
  },
];

export default function ValuesSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]"
    >
      {/* 1. ASYMMETRIC EXIT (PINNED RIGHT 8%) */}
      <div className="fixed right-[8%] top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-4 border-b border-[#2D2B28] pb-1 transition-all"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform duration-700" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Exit_Notes</span>
        </button>
      </div>

      {/* 2. CALIBRATION GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute top-[18%] left-0 w-full h-px bg-[#2D2B28]" />
        <div className="absolute right-[15%] top-0 h-full w-[0.5px] bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 pl-[8%] pr-[15%] py-32">
        
        {/* HEADER: MASSIVE ANCHOR */}
        <header className="mb-64 space-y-16 border-b-8 border-[#2D2B28] pb-24">
          <div className="flex items-center gap-4">
            <div className="h-4 w-4 bg-[#396041]" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
            <span className="text-[11px] font-black uppercase tracking-[0.6em] opacity-40">
              Document_Ref // Field_Notes_v4
            </span>
          </div>

          <h1 className="text-[8rem] font-black leading-[0.75] tracking-tighter sm:text-[10rem] lg:text-[12rem]">
            HOW THIS <br />
            <span className="italic font-light opacity-10 text-[#396041]">WORLD WORKS.</span>
          </h1>

          <p className="max-w-3xl text-3xl font-medium leading-tight tracking-tighter opacity-80 border-l border-[#2D2B28] pl-12">
            Recurring patterns observed during the assembly of the protocol. 
            Guidelines for the world we build next.
          </p>
        </header>

        {/* 3. PRINCIPLES LIST: ASYMMETRIC STRATA */}
        <div className="flex flex-col border-t-2 border-[#2D2B28]">
          {PRINCIPLES.map((p, i) => (
            <PrincipleRow key={p.id} data={p} index={i} />
          ))}
        </div>

        {/* FOOTER: THE SIGNATURE */}
        <footer className="mt-96 flex flex-col items-end gap-12 border-t-8 border-[#2D2B28] pt-16 opacity-30">
            <div className="text-right space-y-4">
              <div className="text-[11px] font-black uppercase tracking-[0.5em] leading-relaxed">
                Written as we build. <br /> Revised as we learn.
              </div>
              <div className="text-8xl font-black tracking-tighter leading-none">ECODIA.</div>
            </div>
            {/* ATOMIC RESIDUE MARK */}
            <div className="opacity-40">
              <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
                <path d="M10 30C10 30 10 10 30 10" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="10" cy="30" r="1.5" fill="currentColor" />
              </svg>
            </div>
        </footer>
      </div>
    </main>
  );
}

function PrincipleRow({ data, index }: { data: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: ECODIA_BEZIER }}
      className="group relative border-b border-[#2D2B28]/10 transition-all duration-1000 hover:bg-[#2D2B28]/[0.02] hover:pl-8"
    >
      <div className="grid grid-cols-1 gap-16 py-24 md:grid-cols-12 md:items-start lg:py-32">
        {/* LEFT: THE MASSIVE INDEX */}
        <div className="md:col-span-3 flex items-baseline gap-6">
          <span className="text-[8rem] font-black tracking-tighter opacity-10 select-none sm:text-[10rem] md:text-[12rem] leading-none">
            0{index + 1}
          </span>
          <div 
            className="h-4 w-4 mt-8" 
            style={{ backgroundColor: data.trace, clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} 
          />
        </div>

        {/* CENTER: THE TITLE */}
        <div className="md:col-span-4 flex flex-col justify-center">
          <h2 className="text-5xl font-black leading-[0.85] tracking-tighter uppercase sm:text-7xl">
            {data.title}
          </h2>
        </div>

        {/* RIGHT: THE CONTENT */}
        <div className="md:col-span-5 flex flex-col justify-center border-l border-[#2D2B28]/10 pl-12">
          <p className="text-2xl font-medium leading-tight tracking-tighter opacity-70">
            {data.text}
          </p>
        </div>
      </div>
      
      {/* THE TRACE: VERTICAL RESIDUE */}
      <div 
        className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity duration-1000 group-hover:opacity-100" 
        style={{ backgroundColor: data.trace }}
      />
    </motion.div>
  );
}