"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SmoothLink } from "@/components/nav/SmoothLink"
import { ArrowLeft, ArrowDownRight } from "lucide-react";

/** * ECODIA ATOMIC REGISTRY
 * Materiality: Warm Paper (#F9F8F5) | Ink (#2D2B28)
 */
export default function EcoSection() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]">
      
      {/* 1. BACK TRANSITION (OFFSET) */}
      <div className="fixed right-8 top-8 z-50">
        <SmoothLink href="/" className="group flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase tracking-[0.4em]">Index</span>
          <ArrowLeft size={12} />
        </SmoothLink>
      </div>

      <div className="mx-auto max-w-6xl px-8 py-24">
        
        {/* SECTION: THE UNIT (THE LEAF) */}
        <section className="mb-64 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:col-start-1">
             <div className="sticky top-24">
                <div className="mb-12 aspect-square w-full border border-[#2D2B28] p-12 flex items-center justify-center">
                  <LeafGlyph />
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] opacity-40">Glyph_01 // Atomic</div>
             </div>
          </div>
          
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-12">
              <h1 className="text-6xl font-black leading-[0.8] tracking-tighter lg:text-8xl">
                NOT A MESSAGE. <br />
                <span className="opacity-20 italic font-light">RESIDUE.</span>
              </h1>
              
              <div className="space-y-8 text-lg leading-relaxed opacity-80">
                <p>
                  The leaf is the smallest possible unit of Ecodia. 
                  It is a letterform that escaped language. 
                  It does not represent the system; it executes it.
                </p>
                <div className="h-px w-24 bg-[#2D2B28]" />
                <p className="text-sm font-bold uppercase tracking-widest">Placement Doctrine:</p>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-4"><span className="opacity-30">01</span> Where hands already touch.</li>
                  <li className="flex gap-4"><span className="opacity-30">02</span> Where wear is structural.</li>
                  <li className="flex gap-4"><span className="opacity-30">03</span> As a checksum left by maintenance.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: THE STATE (OPEN LOOP) */}
        <section className="mb-64 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-2">
            <div className="space-y-12">
              <h2 className="text-5xl font-black tracking-tighter lg:text-7xl">
                THE OPEN <br />LOOP.
              </h2>
              <p className="max-w-md text-sm opacity-60">
                Something is in motion, but not resolved. 
                The open loop marks the "Before" state. 
                Tension without explanation.
              </p>
              <div className="flex gap-8">
                <div className="h-12 w-12 border border-[#2D2B28]/20 flex items-center justify-center">
                   <OpenLoopGlyph />
                </div>
                <div className="h-12 w-12 border border-[#2D2B28]/20 flex items-center justify-center opacity-40">
                   <OpenLoopGlyph rotation={90} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: THE MEASURE (ECO) */}
        <section className="mb-64">
          <div className="border-t-2 border-[#2D2B28] pt-12">
             <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
                <div className="lg:col-span-5">
                   <div className="text-[10px] uppercase tracking-[0.5em] mb-8">Constant: ECO_Checksum</div>
                   <h2 className="text-7xl font-black lg:text-9xl">ECO</h2>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <div className="space-y-12">
                    <p className="text-2xl font-medium leading-tight tracking-tight">
                      ECO is the energy of shared progress. It measures contribution, not profit. 
                      It cannot be purchased; it is the physical signal of proof.
                    </p>
                    <div className="grid grid-cols-2 gap-px bg-[#2D2B28]/10 border border-[#2D2B28]/10">
                       <MetricBox label="Unit" value="1.0_Leaf" />
                       <MetricBox label="State" value="Inertial" />
                       <MetricBox label="Source" value="Sidequest" />
                       <MetricBox label="Residue" value="Faint_Mint" />
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* SECTION: MATERIALITY (THE STICKER) */}
        <section className="relative bg-[#2D2B28] p-12 text-[#F9F8F5] lg:p-24">
           <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-3xl font-black tracking-tighter">THE BARELY-FUNCTIONAL.</h3>
                <p className="text-sm opacity-60">
                  Material choice is a policy of transience. 
                  The marks must degrade, migrate, or fail. 
                  Permanence is a marketing hallucination.
                </p>
              </div>
              <div className="flex items-end justify-end">
                <div className="text-[9px] uppercase tracking-[0.4em] text-right">
                  Rice_Paper Substrate<br />
                  Fading Ink (Mint_04)<br />
                  Pressure_Sensitive
                </div>
              </div>
           </div>
           {/* DECORATIVE ALIGNMENT MARKS */}
           <div className="absolute top-4 left-4 h-8 w-8 border-l border-t border-[#F9F8F5]/20" />
           <div className="absolute bottom-4 right-4 h-8 w-8 border-r border-b border-[#F9F8F5]/20" />
        </section>

        {/* FOOTER: THE TRACE */}
        <footer className="mt-48 flex flex-col items-center justify-between border-t border-[#2D2B28]/10 pt-8 md:flex-row">
           <div className="text-[8px] uppercase tracking-[0.5em] opacity-30">
             Physics_Instruction // 26.6500° S
           </div>
           <div className="flex gap-4">
              <div className="h-1 w-1 bg-[#2D2B28]" />
              <div className="h-1 w-1 bg-[#2D2B28] opacity-20" />
           </div>
           <div className="text-[8px] uppercase tracking-[0.5em] opacity-30">
             Atomic_Registry_2025
           </div>
        </footer>
      </div>
    </main>
  );
}

/** * ATOMIC GLYPHS 
 */

function LeafGlyph() {
  return (
    <svg width="120" height="120" viewBox="0 0 40 40" fill="none" className="text-current">
      <path d="M10 30C10 30 10 10 30 10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 30C10 30 30 30 30 10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="10" cy="30" r="1.5" fill="currentColor" />
    </svg>
  );
}

function OpenLoopGlyph({ rotation = 0 }) {
  return (
    <motion.svg 
      style={{ rotate: rotation }}
      width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-current"
    >
      <path d="M18 6C18 6 18 18 6 18" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="6" r="1" fill="currentColor" />
    </motion.svg>
  );
}

function MetricBox({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-[#F9F8F5] p-6">
      <div className="text-[9px] uppercase tracking-widest opacity-40 mb-1">{label}</div>
      <div className="text-xs font-black">{value}</div>
    </div>
  );
}