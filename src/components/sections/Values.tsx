"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

/**
 * ECODIA VALUES (FIELD NOTES)
 * Strategy: Structural Principles. 
 * Materiality: Warm Paper (#F9F8F5) | Charcoal Ink (#2D2B28)
 */

const PRINCIPLES = [
  {
    id: "01",
    title: "Shared Upside",
    text: "Shared places improve through presence. When you participate, value returns to the site of its origin and circulate through local life.",
    trace: "#7FD069", // Mint (Life/Action)
  },
  {
    id: "02",
    title: "Design Over Discipline",
    text: "Positive action belongs in the day when the architecture is shaped for it. Participation becomes easy to start and easy to repeat.",
    trace: "#396041", // Forest (Structure)
  },
  {
    id: "03",
    title: "Doing Counts",
    text: "Progress is the residue of what gets done. Small actions leave a trace when they are shared and carried forward. Quiet participation counts.",
    trace: "#F4D35E", // Gold (Calibration)
  },
  {
    id: "04",
    title: "Small Is Powerful",
    text: "The world stays playable when it is approachable. Scale comes from the consistency of many people joining, not the intensity of a few.",
    trace: "#7FD069",
  },
  {
    id: "05",
    title: "Mutual Benefit",
    text: "Participation lasts when it is real. Personal benefit and shared good reinforce each other, creating energy people can return to.",
    trace: "#396041",
  },
  {
    id: "06",
    title: "Local Is Foundational",
    text: "Neighbourhoods make progress tangible. The easiest change to recognise is the change you can see across your own street.",
    trace: "#F4D35E",
  },
  {
    id: "07",
    title: "Play Keeps It Alive",
    text: "Play is how people sustain effort. It creates curiosity and rhythm. A world you can re-enter is a world that can keep growing.",
    trace: "#7FD069",
  },
];

export default function ValuesSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]"
    >
      {/* 1. EXIT PROTOCOL (INERTIAL OFFSET) */}
      <div className="fixed right-12 top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-3 border border-[#2D2B28] px-4 py-2 transition-all hover:bg-[#2D2B28] hover:text-[#F9F8F5]"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return</span>
        </button>
      </div>

      {/* 2. CALIBRATION TICKS (RESIDUE) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute left-0 top-[30%] h-px w-full bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-32">
        
        {/* HEADER: MASSIVE ANCHOR */}
        <header className="mb-48 space-y-12 border-b-4 border-[#2D2B28] pb-16">
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 bg-[#396041]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-50">
              Document_Ref // Field_Notes
            </span>
          </div>

          <h1 className="text-6xl font-black leading-[0.8] tracking-tighter sm:text-8xl lg:text-9xl">
            HOW THIS <br />
            <span className="italic font-light opacity-30 text-[#396041]">WORLD WORKS.</span>
          </h1>

          <p className="max-w-xl text-2xl font-medium leading-tight tracking-tight opacity-70">
            Recurring patterns observed during the assembly of the protocol. 
            Guidelines for the world we build next.
          </p>
        </header>

        {/* 3. PRINCIPLES LIST: STRATA LOGIC */}
        <div className="flex flex-col border-t border-[#2D2B28]/10">
          {PRINCIPLES.map((p, i) => (
            <PrincipleRow key={p.id} data={p} index={i} />
          ))}
        </div>

        {/* FOOTER: THE SIGNATURE */}
        <footer className="mt-48 flex flex-col items-end gap-6 border-t-4 border-[#2D2B28] pt-12">
           <div className="text-right space-y-2">
             <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
               Written as we build. <br /> Revised as we learn.
             </div>
             <div className="text-4xl font-black tracking-tighter">ECODIA.</div>
           </div>
           {/* THE LEAF CHECKSUM */}
           <div className="opacity-20">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M10 30C10 30 10 10 30 10" stroke="currentColor" strokeWidth="1" />
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative border-b border-[#2D2B28]/10 transition-colors hover:bg-[#2D2B28]/[0.02]"
    >
      <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:items-start lg:py-24">
        {/* LEFT: THE MASSIVE INDEX */}
        <div className="md:col-span-3 flex items-baseline gap-4">
          <span className="text-7xl font-black tracking-tighter opacity-10 select-none sm:text-8xl md:text-9xl">
            0{index + 1}
          </span>
          <div 
            className="h-2 w-2 rounded-full mt-2" 
            style={{ backgroundColor: data.trace }} 
          />
        </div>

        {/* CENTER: THE TITLE */}
        <div className="md:col-span-4 flex flex-col justify-center">
          <h2 className="text-4xl font-black leading-none tracking-tighter uppercase sm:text-5xl">
            {data.title}
          </h2>
        </div>

        {/* RIGHT: THE CONTENT */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <p className="text-xl font-medium leading-snug tracking-tight opacity-70">
            {data.text}
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