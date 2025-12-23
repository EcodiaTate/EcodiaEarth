"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Store, Users } from "lucide-react";
import { SmoothLink } from "@/components/nav/SmoothLink";

/**
 * ECODIA LOCAL SECTION
 * Strategy: Documentation of the Already-Happening.
 * Materiality: Warm Paper (#F9F8F5) | Charcoal Ink (#2D2B28)
 */

export default function EcoLocalSection() {
  return (
    <div className="relative min-h-screen w-full select-none overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28]">
      
      {/* 1. VISUAL GRAVITY: BACKGROUND TOPOGRAPHY */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-[10%] top-0 h-full w-[1px] bg-[#2D2B28]" />
        <div className="absolute left-0 top-[20%] h-[1px] w-full bg-[#2D2B28]" />
        <div className="absolute right-[15%] top-0 h-full w-[1px] bg-[#2D2B28]" />
      </div>

      {/* 2. THE ATOMIC MARK: MAINTENANCE SIGNATURE */}
      <div className="absolute right-12 top-12 z-50 opacity-50">
        <img 
          src="/icons/leaf-black.svg" 
          alt="" 
          className="w-8 h-8"
        />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-8 py-32">
        
        {/* HERO: INERTIAL POSITIONING (OFFSET) */}
        <section className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-9 lg:col-start-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="inline-block border-b border-[#2D2B28] pb-1 text-[10px] tracking-[0.4em] uppercase opacity-40">
                Log_77 // Local_Ecosystem_Registry
              </div>

              <h1 className="text-6xl font-black leading-[0.85] tracking-tighter sm:text-8xl lg:text-9xl">
                POST-AUTHENTIC <br />
                REWARDS. <span className="opacity-20 italic font-light">DRIFT.</span>
              </h1>

              <div className="grid grid-cols-1 gap-16 border-l border-[#2D2B28]/10 pl-10 lg:grid-cols-2 lg:items-end">
                <p className="text-xl font-medium leading-tight tracking-tight opacity-70">
                  Ecodia Local tracks the residue of physical presence. 
                  Verified nodes allow for the emergence of a new value layer. 
                  No advertisement. Only documentation.
                </p>
                
                <div className="flex flex-col gap-4">
                  <SmoothLink
                    href="/youth"
                    className="group flex w-fit items-center gap-8 bg-[#2D2B28] px-10 py-6 text-[#F9F8F5] transition-all hover:bg-[#396041]"
                  >
                    <span className="text-xs font-black uppercase tracking-[0.3em]">Access Grid</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </SmoothLink>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LOGIC: THE STRATA GRID */}
        <section className="mt-48 grid grid-cols-1 gap-px bg-[#2D2B28]/10 border border-[#2D2B28]/10 md:grid-cols-3">
          <DocumentationCard 
            step="01" 
            title="SIGHTING" 
            body="Identify verified infrastructure via the inertial map. Nodes are filtered by durability." 
          />
          <DocumentationCard 
            step="02" 
            title="RESIDUE" 
            body="Scan at the physical hinge. Leave a maintenance signature. Confirm your labor." 
          />
          <DocumentationCard 
            step="03" 
            title="EMERGENCE" 
            body="ECO balance is a checksum of impact. Access scarce goods or community logic." 
          />
        </section>

        {/* SPLIT MASS: PARTICIPANTS VS NODES */}
        <section className="mt-48 grid grid-cols-1 gap-px bg-[#2D2B28]/10 lg:grid-cols-2 border border-[#2D2B28]/10">
          <div className="bg-[#F9F8F5] p-12 lg:p-20">
             <div className="mb-10 flex items-center gap-3 opacity-40">
                <Users size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Participant_Logs</span>
             </div>
             <h2 className="mb-8 text-4xl font-black tracking-tighter uppercase sm:text-5xl">MAKE YOUR REGULARS PERMANENT.</h2>
             <p className="mb-12 max-w-md text-lg opacity-70 leading-snug">
                Loyalty is a trap. Ecodia is a field note. 
                Collect state markers from the nodes that align with the Prime Directive.
             </p>
             <div className="h-1 w-16 bg-[#2D2B28]" />
          </div>

          <div className="bg-[#F9F8F5] p-12 lg:p-20">
             <div className="mb-10 flex items-center gap-3 opacity-40">
                <Store size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Node_Onboarding</span>
             </div>
             <h2 className="mb-8 text-4xl font-black tracking-tighter uppercase sm:text-5xl">NODE INTEGRATION.</h2>
             <p className="mb-12 max-w-md text-lg opacity-70 leading-snug">
                For infrastructure that survived the old world and builds the next. 
                Enter the ecosystem as a verified anchor.
             </p>
             <SmoothLink href="/business" className="inline-block text-xs font-black border-b-2 border-[#2D2B28] pb-1 uppercase tracking-[0.3em] hover:text-[#7FD069] hover:border-[#7FD069] transition-colors">
                Initiate Handshake
             </SmoothLink>
          </div>
        </section>

        {/* FOOTER: MEASUREMENT TICKS */}
        <footer className="mt-48 flex flex-col items-center justify-between border-t border-[#2D2B28]/10 pt-12 opacity-30 md:flex-row">
            <div className="text-[9px] uppercase tracking-[0.5em]">Coord: 26.6500° S // 153.0667° E</div>
            <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-6 w-px bg-[#2D2B28]" />
                ))}
            </div>
            <div className="text-[9px] uppercase tracking-[0.5em]">System_State: Stable // 2025</div>
        </footer>
      </main>
    </div>
  );
}

/**
 * SUB-COMPONENT: DOCUMENTATION
 */

function DocumentationCard({ step, title, body }: { step: string, title: string, body: string }) {
  return (
    <div className="group relative bg-[#F9F8F5] p-12 transition-colors hover:bg-[#2D2B28] hover:text-[#F9F8F5]">
      <div className="mb-16 text-[10px] font-black opacity-30 group-hover:opacity-100 uppercase tracking-widest">{step} // DRIFT_STATE</div>
      <h3 className="mb-6 text-3xl font-black tracking-tighter uppercase">{title}</h3>
      <p className="text-lg leading-snug opacity-70 group-hover:opacity-100">
        {body}
      </p>
      {/* Bloom Residue */}
      <div className="absolute bottom-8 right-8">
        <div className="h-2 w-2 rounded-full border border-current opacity-20 group-hover:bg-[#7FD069] group-hover:opacity-100 group-hover:shadow-[0_0_10px_#7FD069] transition-all" />
      </div>
    </div>
  );
}