"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Store, Users, Leaf } from "lucide-react";
import { SmoothLink } from "@/components/nav/SmoothLink"
/**
 * THE CANONICAL ECODIA TOKENS
 */
const ECODIA_THEME = {
  PAPER: "#F9F8F5", // Warm Paper
  CHARCOAL: "#2D2B28", // Charcoal Ink
  MINT_DRIFT: "#7FD069", 
  MASS_HEAVY: "900",
  MASS_LIGHT: "300",
};

export default function EcoLocalSection() {
  return (
    <div className="relative min-h-screen w-full select-none overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28]">
      {/* 1. VISUAL GRAVITY: BACKGROUND TRACES */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute left-[10%] top-0 h-full w-[1px] bg-[#2D2B28]" />
        <div className="absolute left-0 top-[20%] h-[1px] w-full bg-[#2D2B28]" />
        <div className="absolute right-[15%] top-0 h-full w-[1px] bg-[#2D2B28]" />
      </div>

      {/* 2. THE TECH-LEAF: MAINTENANCE SIGNATURE */}
      <div className="absolute right-8 top-8 z-50">
        <TechLeafChecksum />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        {/* HERO: INERTIAL POSITIONING (OFFSET) */}
        <section className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="inline-block border-b border-[#2D2B28] pb-1 text-[10px] tracking-[0.3em] uppercase opacity-60">
                System: Local_Ecosystem_v2.0
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl">
                POST-AUTHENTIC <br />
                REWARDS. <span className="opacity-20 italic font-light">DRIFT.</span>
              </h1>

              <div className="grid grid-cols-1 gap-12 border-l border-[#2D2B28]/10 pl-8 lg:grid-cols-2">
                <p className="text-lg leading-relaxed opacity-80">
                  Ecodia Local tracks the residue of your presence in the physical world. 
                  Verified nodes (cafés, studios, architecture) allow for the emergence 
                  of a new value layer. No marketing. Just documentation.
                </p>
                
                <div className="flex flex-col justify-end gap-4">
                  <SmoothLink
                    href="/app/eco-local/map"
                    className="group flex w-fit items-center gap-6 bg-[#2D2B28] px-8 py-5 text-[#F9F8F5] transition-all hover:pr-12"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest">Access Local Grid</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </SmoothLink>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LOGIC OF THE "ALREADY-HAPPENING" (GRID TENSION) */}
        <section className="mt-40 grid grid-cols-1 gap-1 text-[#2D2B28] md:grid-cols-3">
          <DocumentationCard 
            step="01" 
            title="SIGHTING" 
            body="Locate verified infrastructure via the inertial map. Nodes are selected based on systemic durability, not popularity." 
          />
          <DocumentationCard 
            step="02" 
            title="RESIDUE" 
            body="Scan at the physical hinge point. This is a maintenance signature, confirming your participation in the world we build next." 
          />
          <DocumentationCard 
            step="03" 
            title="EMERGENCE" 
            body="Your ECO balance is a checksum of impact. Convert it into access, scarce goods, or community governance." 
          />
        </section>

        {/* SPLIT MASS: LOCALS VS SYSTEM */}
        <section className="mt-40 grid grid-cols-1 gap-px bg-[#2D2B28]/10 lg:grid-cols-2">
          <div className="bg-[#F9F8F5] py-20 pr-12">
             <div className="mb-8 flex items-center gap-2 opacity-40">
                <Users size={14} />
                <span className="text-[10px] uppercase tracking-tighter">Participant.Logs</span>
             </div>
             <h2 className="mb-6 text-4xl font-black">MAKE YOUR REGULARS PERMANENT.</h2>
             <p className="mb-8 max-w-md text-sm opacity-70">
                Mainstream loyalty is a trap. Ecodia Local is a field note. 
                Collect state markers from the places that align with the Prime Directive.
             </p>
             <div className="h-[2px] w-12 bg-[#2D2B28]" />
          </div>

          <div className="bg-[#F9F8F5] py-20 pl-12 border-l border-[#2D2B28]/10">
             <div className="mb-8 flex items-center gap-2 opacity-40">
                <Store size={14} />
                <span className="text-[10px] uppercase tracking-tighter">Node.Registration</span>
             </div>
             <h2 className="mb-6 text-4xl font-black">NODE INTEGRATION.</h2>
             <p className="mb-8 max-w-md text-sm opacity-70">
                For businesses that survived the old world and want to build the next. 
                Enter the ecosystem as a verified anchor.
             </p>
             <SmoothLink href="/eco-local/business" className="text-xs font-bold underline decoration-2 underline-offset-4 uppercase tracking-widest">
                Initiate Handshake
             </SmoothLink>
          </div>
        </section>

        {/* CROP MARKS & MEASUREMENT TICKS (FOOTS) */}
        <footer className="mt-40 flex flex-col items-center justify-between border-t border-[#2D2B28] pt-8 opacity-40 md:flex-row">
            <div className="text-[9px] uppercase tracking-[0.4em]">Coordinates: 26.6500° S, 153.0667° E</div>
            <div className="flex gap-4">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-4 w-[1px] bg-[#2D2B28]" />
                ))}
            </div>
            <div className="text-[9px] uppercase tracking-[0.4em]">Ecodia.Earth // No_Hero_Required</div>
        </footer>
      </main>
    </div>
  );
}

/**
 * SUB-COMPONENTS: THE ALCHEMY OF SCARCITY
 */

function DocumentationCard({ step, title, body }: { step: string, title: string, body: string }) {
  return (
    <div className="group relative border border-[#2D2B28]/10 p-10 transition-colors hover:bg-[#2D2B28] hover:text-[#F9F8F5]">
      <div className="mb-12 text-[10px] font-bold opacity-40">{step} / DRIFT_STATE</div>
      <h3 className="mb-4 text-2xl font-black tracking-tighter">{title}</h3>
      <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-100">
        {body}
      </p>
      {/* Visual Residue */}
      <div className="absolute bottom-4 right-4 h-2 w-2 rounded-full border border-current opacity-20" />
    </div>
  );
}

function TechLeafChecksum() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
      <path d="M10 30C10 30 10 10 30 10" stroke="#2D2B28" strokeWidth="1.5" />
      <path d="M10 30C10 30 30 30 30 10" stroke="#2D2B28" strokeWidth="1.5" strokeDasharray="2 2" />
      <circle cx="10" cy="30" r="2" fill="#2D2B28" />
    </svg>
  );
}