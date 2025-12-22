"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SmoothLink } from "@/components/nav/SmoothLink";
import { ArrowLeft, ArrowUpRight, Anchor, ToolCase, Map, Eye } from "lucide-react";

/**
 * ECODIA FIELD ENTRY
 * Materiality: Warm Paper (#F9F8F5) | Charcoal Ink (#2D2B28)
 * Strategy: No Invitation Energy. Functional Handshake.
 */

const DOORS = [
  {
    label: "PARTNER",
    sub: "Direct alignment on systemic deployment.",
    intent: "partner",
    icon: <Anchor size={16} />
  },
  {
    label: "BUILD",
    sub: "Physical and digital infrastructure labor.",
    intent: "build",
    icon: <ToolCase size={16} />
  },
  {
    label: "DEPLOY",
    sub: "Live node integration and site management.",
    intent: "deploy",
    icon: <Map size={16} />
  },
  {
    label: "OBSERVE",
    sub: "Reporting, signals, and state monitoring.",
    intent: "other",
    icon: <Eye size={16} />
  },
];

export default function EntryPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]">
      
      {/* 1. TOP RAIL: CALIBRATION */}
      <header className="sticky top-0 z-50 border-b border-[#2D2B28]/10 bg-[#F9F8F5]/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-2.5 w-2.5 bg-[#396041]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">
              Ecodia_Earth // Entry_Portal
            </span>
          </div>
          <SmoothLink
            href="/"
            className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            Index
          </SmoothLink>
        </div>
      </header>

      {/* 2. BACKGROUND RESIDUE (INERTIAL) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute left-[20%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute left-0 top-[40%] h-px w-full bg-[#2D2B28]" />
        {/* LARGE TRACE CIRCLE */}
        <div className="absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full border border-[#2D2B28]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-24">
        
        {/* HERO: THE BRIEFING */}
        <section className="mb-48 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-1 space-y-12">
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Briefing_001</span>
              <div className="h-px flex-1 bg-[#2D2B28]/10" />
            </div>

            <h1 className="text-6xl font-black leading-[0.8] tracking-tighter sm:text-8xl lg:text-9xl">
              INITIATE <br />
              <span className="italic font-light opacity-30 text-[#396041]">THE WORK.</span>
            </h1>

            <div className="inline-block border border-[#2D2B28] px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em]">
              POST-AUTHENTIC INFRASTRUCTURE
            </div>

            <p className="max-w-2xl text-2xl font-medium leading-tight tracking-tight opacity-80">
              Ecodia operates as a system for physical participation. We facilitate the transition 
              from theoretical care to practical residue.
            </p>
          </div>

          {/* PROCESS: VISUAL GRAVITY */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="border-2 border-[#2D2B28] bg-[#F9F8F5] p-8 relative">
              <div className="mb-8 border-b border-[#2D2B28]/10 pb-4">
                 <span className="text-[10px] font-black uppercase tracking-widest">Protocol</span>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <span className="text-[10px] font-black opacity-30">01</span>
                  <span className="text-xs uppercase leading-none">Select Access Point.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-[10px] font-black opacity-30">02</span>
                  <span className="text-xs uppercase leading-none">Declare Contribution.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-[10px] font-black opacity-30">03</span>
                  <span className="text-xs uppercase leading-none">Receive Handshake.</span>
                </li>
              </ul>
              <div className="mt-12 pt-6 border-t border-[#2D2B28]/10">
                <p className="text-[10px] leading-relaxed opacity-60 uppercase">
                  State specifically what you build, what you manage, or what you provide. One message is sufficient.
                </p>
              </div>
              {/* ATOMIC CROP MARKS */}
              <div className="absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-[#2D2B28]" />
              <div className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-[#2D2B28]" />
            </div>
          </div>
        </section>

        {/* ORIENTATION: INK BLOCK */}
        <section className="relative -mx-8 bg-[#2D2B28] px-8 py-32 text-[#F9F8F5]">
           <div className="mx-auto max-w-7xl grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
              <div className="space-y-8">
                 <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Orientation</div>
                 <h2 className="text-4xl font-black leading-none tracking-tighter sm:text-6xl">
                    MECHANISM <br /> IS THE LAYER.
                 </h2>
                 <p className="text-lg opacity-60 leading-relaxed">
                   Care is abundant; architecture is scarce. Ecodia provides the mechanism 
                   to turn intent into a stable, physical default state.
                 </p>
              </div>
              <div className="border border-[#F9F8F5]/20 p-8 space-y-6">
                 <div className="text-[10px] uppercase tracking-widest opacity-40">Operating_State</div>
                 <p className="text-xl font-medium tracking-tight text-[#7FD069]">
                   Participation is the default condition. 
                 </p>
                 <div className="h-px w-full bg-[#F9F8F5]/10" />
                 <p className="text-xs opacity-60">The system is optimized for continuity, not spectacle.</p>
              </div>
           </div>
        </section>

        {/* CONTRIBUTION: CALIBRATION GRID */}
        <section className="py-48">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Inputs</div>
              <h2 className="text-5xl font-black tracking-tighter">THE SYSTEM RUNS <br /> ON LABOR.</h2>
              <p className="text-lg opacity-70">
                Progress depends on structural effort: engineering, live integration, 
                and maintenance. Choose the threshold of your involvement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#2D2B28]/10 border border-[#2D2B28]/10">
               <InputMetric label="Clear" desc="Direct Signal." />
               <InputMetric label="Practical" desc="Field-Ready." />
               <InputMetric label="Measured" desc="Visible Drift." />
               <InputMetric label="Shared" desc="Mutual Loop." />
            </div>
          </div>
        </section>

        {/* DOORS: THE ENTRY POINTS */}
        <section id="doors" className="mb-48">
          <div className="flex items-center gap-6 mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Thresholds</span>
            <div className="h-px flex-1 bg-[#2D2B28]/10" />
          </div>

          <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4 bg-[#2D2B28]/10 border border-[#2D2B28]/10">
            {DOORS.map((d) => (
              <SmoothLink
                key={d.label}
                href={`/contact?intent=${d.intent}`}
                className="group relative bg-[#F9F8F5] p-10 transition-colors hover:bg-[#2D2B28] hover:text-[#F9F8F5]"
              >
                <div className="mb-12 flex h-10 w-10 items-center justify-center border border-[#2D2B28] group-hover:border-[#F9F8F5]">
                  {d.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tighter mb-4">{d.label}</h3>
                <p className="text-xs opacity-60 group-hover:opacity-100 leading-relaxed">{d.sub}</p>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-40 transition-opacity">
                   <ArrowUpRight size={16} />
                </div>
              </SmoothLink>
            ))}
          </div>
        </section>

        {/* FOOTER: END FRAME */}
        <footer className="border-t-4 border-[#2D2B28] pt-12 pb-24">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <div className="space-y-4">
                 <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">End_Frame</div>
                 <h2 className="text-4xl font-black tracking-tighter">THE WORLD WE <br /> BUILD NEXT.</h2>
              </div>
              <SmoothLink
                href="/contact?intent=walk"
                className="bg-[#2D2B28] px-12 py-6 text-xs font-black uppercase tracking-widest text-[#F9F8F5] hover:bg-[#396041] transition-colors"
              >
                Initiate Handshake
              </SmoothLink>
           </div>
        </footer>
      </div>
    </main>
  );
}

function InputMetric({ label, desc }: { label: string, desc: string }) {
  return (
    <div className="bg-[#F9F8F5] p-8">
      <div className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-2">{label}</div>
      <div className="text-xs font-black uppercase tracking-tight">{desc}</div>
    </div>
  );
}