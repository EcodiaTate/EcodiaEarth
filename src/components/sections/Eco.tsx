"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SmoothLink } from "@/components/nav/SmoothLink";
import { ArrowLeft } from "lucide-react";

/** * ECODIA ATOMIC REGISTRY
 * Materiality: Warm Paper (#F9F8F5) | Charcoal Ink (#2D2B28)
 * Strategy: Documentation of the Asset.
 */

export default function EcoSection() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]">
      
      {/* 1. EXIT PROTOCOL (INERTIAL OFFSET) */}
      <div className="fixed right-12 top-12 z-50">
        <SmoothLink href="/" className="group flex items-center gap-3 border border-[#2D2B28] px-4 py-2 transition-all hover:bg-[#2D2B28] hover:text-[#F9F8F5]">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Index</span>
        </SmoothLink>
      </div>

      <div className="mx-auto max-w-6xl px-8 py-32">
        
        {/* SECTION: THE UNIT (THE LEAF) */}
        <section className="mb-64 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:col-start-1">
             <div className="sticky top-32">
                <div className="mb-12 aspect-square w-full border-2 border-[#2D2B28] p-20 flex items-center justify-center relative overflow-hidden">
                  {/* CANONICAL ASSET INTEGRATION */}
                  <img 
                    src="/icons/leaf-black.svg" 
                    alt="" 
                    className="w-full h-full object-contain opacity-80 transition-transform hover:scale-110 duration-700"
                  />
                  {/* ALIGNMENT OVERLAY */}
                  <div className="absolute inset-0 pointer-events-none opacity-5">
                    <div className="absolute left-1/2 top-0 h-full w-px bg-current" />
                    <div className="absolute top-1/2 left-0 w-full h-px bg-current" />
                  </div>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Eco_01 // Atomic_Unit</div>
             </div>
          </div>
          
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-16">
              <h1 className="text-6xl font-black leading-[0.8] tracking-tighter sm:text-7xl lg:text-9xl">
                NOT A MESSAGE. <br />
                <span className="opacity-20 italic font-light">RESIDUE.</span>
              </h1>
              
              <div className="space-y-12 text-xl leading-snug tracking-tight opacity-80">
                <p>
                  The leaf is the smallest possible unit of Ecodia. 
                  It is a letterform that escaped language - a physical checksum of action taken.
                </p>
                <div className="h-px w-32 bg-[#2D2B28]" />
                
                <div className="space-y-6">
                   <p className="text-xs font-black uppercase tracking-[0.3em]">Placement Doctrine:</p>
                   <ul className="space-y-6">
                     <li className="flex items-start gap-6">
                        <span className="text-xs font-black opacity-20">01</span>
                        <span>Where hands already touch. Corners, hinges, and friction points.</span>
                     </li>
                     <li className="flex items-start gap-6">
                        <span className="text-xs font-black opacity-20">02</span>
                        <span>Where wear is structural. Surfaces that survive the old world.</span>
                     </li>
                     <li className="flex items-start gap-6">
                        <span className="text-xs font-black opacity-20">03</span>
                        <span>As a maintenance signature. Documentation of presence.</span>
                     </li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: THE STATE (OPEN LOOP) */}
        <section className="mb-64 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-3">
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                 <div className="h-2 w-2 bg-[#F4D35E]" />
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">State_Marker // In_Progress</span>
              </div>
              <h2 className="text-5xl font-black tracking-tighter sm:text-7xl lg:text-8xl">
                THE OPEN <br />LOOP.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                <p className="text-lg opacity-60 leading-relaxed">
                  The open loop signifies motion without resolution. 
                  It is the tension of the "Already-Happening" before the residue is left.
                </p>
                <div className="flex gap-12 justify-end">
                  <div className="h-16 w-16 border-2 border-[#2D2B28]/20 flex items-center justify-center group">
                     <OpenLoopGlyph />
                  </div>
                  <div className="h-16 w-16 border-2 border-[#2D2B28]/20 flex items-center justify-center opacity-30">
                     <OpenLoopGlyph rotation={90} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: THE MEASURE (ECO) */}
        <section className="mb-64">
          <div className="border-t-4 border-[#2D2B28] pt-16">
             <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
                <div className="lg:col-span-5">
                   <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 opacity-40">Constant: ECO_Checksum</div>
                   <h2 className="text-[15vw] font-black leading-none tracking-tighter md:text-9xl lg:text-[12rem]">ECO</h2>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <div className="space-y-16">
                    <p className="text-3xl font-medium leading-tight tracking-tight">
                      Energy of shared progress. It measures contribution, not profit. 
                      It cannot be purchased; it is the signal of verified labor.
                    </p>
                    <div className="grid grid-cols-2 gap-px bg-[#2D2B28]/10 border border-[#2D2B28]/10">
                       <MetricBox label="Unit" value="1.0_Leaf" />
                       <MetricBox label="State" value="Inertial" />
                       <MetricBox label="Source" value="Labor_Node" />
                       <MetricBox label="Residue" value="Faint_Mint" />
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* SECTION: MATERIALITY (THE STICKER) */}
        <section className="relative bg-[#2D2B28] p-12 text-[#F9F8F5] lg:p-32 overflow-hidden">
           <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
              <div className="space-y-8">
                <h3 className="text-4xl font-black tracking-tighter sm:text-6xl">THE BARELY <br />FUNCTIONAL.</h3>
                <p className="text-lg opacity-60 leading-relaxed max-w-md">
                  Material choice is a policy of transience. 
                  The marks degrade, migrate, or fail. 
                  Permanence is an old-world hallucination.
                </p>
              </div>
              <div className="flex flex-col items-end gap-12">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-right opacity-40 leading-loose">
                  Soluble Substrate<br />
                  Fading_Ink // Mint_04<br />
                  Pressure_Sensitive_State
                </div>
                {/* DECORATIVE TICK MARKS */}
                <div className="flex gap-2">
                   {[...Array(6)].map((_, i) => (
                     <div key={i} className="h-10 w-[1px] bg-[#F9F8F5] opacity-20" />
                   ))}
                </div>
              </div>
           </div>
           
           {/* CALIBRATION RESIDUE */}
           <div className="absolute top-8 left-8 h-12 w-12 border-l border-t border-[#F9F8F5]/10" />
           <div className="absolute bottom-8 right-8 h-12 w-12 border-r border-b border-[#F9F8F5]/10" />
        </section>

        {/* FOOTER: THE TRACE */}
        <footer className="mt-48 flex flex-col items-center justify-between border-t border-[#2D2B28]/10 pt-12 md:flex-row opacity-30">
           <div className="text-[9px] uppercase tracking-[0.5em]">
             Physics_Instruction // Archive_Ref_01
           </div>
           <div className="flex gap-4">
              <div className="h-1 w-1 bg-[#2D2B28] rounded-full" />
              <div className="h-1 w-1 bg-[#2D2B28] rounded-full opacity-20" />
           </div>
           <div className="text-[9px] uppercase tracking-[0.5em]">
             Atomic_Registry // 2025
           </div>
        </footer>
      </div>
    </main>
  );
}

/** * ATOMIC GLYPHS */

function OpenLoopGlyph({ rotation = 0 }) {
  return (
    <motion.svg 
      style={{ rotate: rotation }}
      width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-current"
    >
      <path d="M18 6C18 6 18 18 6 18" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" />
    </motion.svg>
  );
}

function MetricBox({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-[#F9F8F5] p-10 group transition-colors hover:bg-[#2D2B28] hover:text-[#F9F8F5]">
      <div className="text-[9px] uppercase tracking-[0.3em] opacity-40 mb-2 group-hover:opacity-100 transition-opacity">{label}</div>
      <div className="text-lg font-black uppercase tracking-tighter">{value}</div>
    </div>
  );
}