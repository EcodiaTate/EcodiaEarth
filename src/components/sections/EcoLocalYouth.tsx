"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowDown, Activity, Info, Globe } from "lucide-react";
import { SmoothLink } from "@/components/nav/SmoothLink"

/** * ECODIA CANONICAL TOKENS 
 * Materiality: Warm Paper (#F9F8F5) + Charcoal Ink (#2D2B28)
 */
const T = {
  paper: "#F9F8F5",
  ink: "#2D2B28",
  mint: "#7FD069",
  drift: "rgba(45, 43, 40, 0.05)",
};

export default function ECOLocalYouthSection() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069] selection:text-[#F9F8F5]">
      
      {/* INERTIAL POSITIONING: BACK NAVIGATION (TOP RIGHT OFFSET) */}
      <div className="fixed right-12 top-12 z-50">
        <SmoothLink 
          href="/" 
          className="group flex items-center gap-3 border border-[#2D2B28] px-4 py-2 transition-all hover:bg-[#2D2B28] hover:text-[#F9F8F5]"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Return</span>
        </SmoothLink>
      </div>

      {/* TECH-LEAF CHECKSUM (STRESS POINT) */}
      <div className="absolute left-12 top-12 opacity-40">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M5 25C5 25 5 5 25 5" stroke="currentColor" strokeWidth="1" />
          <circle cx="5" cy="25" r="1.5" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-8 py-32">
        
        {/* SECTION 1: THE BRIEFING (OFF-CENTERED) */}
        <section className="mb-64 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-9 lg:col-start-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#2D2B28]/50">
                Log_01 // Generational_State
              </div>
              <h1 className="text-5xl font-black leading-[0.85] tracking-tighter sm:text-7xl lg:text-9xl">
                A FUTURE <br />
                THAT <span className="italic font-light opacity-30">RESPONDS.</span>
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed opacity-80">
                The current economic architecture is a closed loop. 
                We are building the exit. ECO Local is not a "loyalty program"—it is a system 
                designed to capture the value you generate through action.
              </p>
              
              <div className="flex flex-col gap-8 pt-12 md:flex-row md:items-center">
                <SmoothLink
                  href="/auth/login"
                  className="bg-[#2D2B28] px-10 py-5 text-[#F9F8F5] text-xs font-black uppercase tracking-widest transition-transform active:scale-95"
                >
                  Initiate Participation
                </SmoothLink>
                <div className="flex items-center gap-2 text-[10px] opacity-40 uppercase">
                  <Activity size={12} />
                  System status: Emerging
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: FUNCTIONAL RESIDUE (HOW IT WORKS) */}
        <section className="mb-64">
          <div className="mb-12 h-px w-full bg-[#2D2B28]/10" />
          <div className="grid grid-cols-1 gap-px bg-[#2D2B28]/10 md:grid-cols-2 lg:grid-cols-4">
            <ManifestoStep 
              num="01" 
              title="FILTER" 
              desc="Identify nodes that reject greenwashing. Local infrastructure only." 
            />
            <ManifestoStep 
              num="02" 
              title="RELIEF" 
              desc="Access immediate material offsets. No points. Direct cost mitigation." 
            />
            <ManifestoStep 
              num="03" 
              title="VOTE" 
              desc="Scan to transfer your collected ECO to the business. You authorize their growth." 
            />
            <ManifestoStep 
              num="04" 
              title="PROOF" 
              desc="Watch the aggregate change. Documentation over advertisement." 
            />
          </div>
        </section>

        {/* SECTION 3: THE TOKEN (MASS & GRAVITY) */}
        <section className="mb-64 grid grid-cols-1 gap-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-square w-full border border-[#2D2B28] p-12">
               {/* THE TOKEN AS FUNCTIONAL GEOMETRY */}
               <div className="flex h-full w-full items-center justify-center rounded-full border-4 border-[#2D2B28] border-double opacity-80">
                  <div className="text-center">
                    <div className="text-6xl font-black">ECO</div>
                    <div className="text-[9px] uppercase tracking-[0.3em]">Checksum_Value</div>
                  </div>
               </div>
               <div className="absolute -bottom-4 -right-4 bg-[#F9F8F5] p-2 text-[9px] font-bold uppercase tracking-tighter border border-[#2D2B28]">
                 Verified_Asset
               </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-8">
            <h2 className="text-4xl font-black tracking-tight">ENERGY OF SHARED PROGRESS.</h2>
            <div className="space-y-6 text-sm leading-relaxed opacity-70">
              <p>
                The old measurement is currency. It measures profit, not durability. 
                ECO measures contribution. It cannot be purchased; it can only be 
                generated through positive systemic interaction (Sidequests).
              </p>
              <p>
                It is a signal. When you scan at a local node, you are proving 
                that hope has a measurable weight in the physical world.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: FINAL TRACE (CTA) */}
        <section className="relative overflow-hidden border border-[#2D2B28] bg-[#2D2B28] p-12 text-[#F9F8F5] lg:p-24">
           <div className="relative z-10 max-w-3xl space-y-8">
              <div className="inline-block border border-[#F9F8F5] px-2 py-1 text-[9px] uppercase tracking-widest opacity-60">
                Phase_02_Active
              </div>
              <h2 className="text-5xl font-black leading-none tracking-tighter">
                BELONGING IS A <br /> 
                <span className="text-[#7FD069]">SYSTEMIC ACT.</span>
              </h2>
              <p className="max-w-xl text-lg opacity-80">
                We don't need consumers. We need builders. 
                ECO Local is free for youth, permanent for the world.
              </p>
              <SmoothLink
                href="/auth/login"
                className="inline-block border-2 border-[#7FD069] px-12 py-6 text-sm font-black uppercase tracking-widest text-[#7FD069] transition-all hover:bg-[#7FD069] hover:text-[#2D2B28]"
              >
                Join Ecodia
              </SmoothLink>
           </div>
           
           {/* DECORATIVE MEASUREMENT TICKS */}
           <div className="absolute bottom-4 right-8 flex gap-2 opacity-20">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-8 w-[1px] bg-[#F9F8F5]" />
              ))}
           </div>
        </section>

        {/* FOOTER: CROP MARKS */}
        <footer className="mt-32 flex items-center justify-between opacity-30">
          <div className="text-[8px] uppercase tracking-[0.5em]">System_Ref: Youth_Portal_v0.9</div>
          <Globe size={14} />
          <div className="text-[8px] uppercase tracking-[0.5em]">2025 // Post-Authenticity</div>
        </footer>
      </div>
    </main>
  );
}

/**
 * SUB-COMPONENTS
 */

function ManifestoStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="group relative bg-[#F9F8F5] p-8 transition-colors hover:bg-[#2D2B28] hover:text-[#F9F8F5]">
      <div className="mb-12 text-[10px] font-bold opacity-30 group-hover:opacity-100">{num}</div>
      <h3 className="mb-4 text-xl font-black tracking-tight uppercase">{title}</h3>
      <p className="text-xs leading-relaxed opacity-60 group-hover:opacity-100">{desc}</p>
      
      {/* OFFSET CORNER MARK */}
      <div className="absolute top-0 right-0 h-4 w-4 border-r border-t border-current opacity-20" />
    </div>
  );
}