"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SmoothLink } from "@/components/nav/SmoothLink"
import { ArrowLeft, ShieldCheck, BarChart3, Fingerprint, Zap } from "lucide-react";

/** * ECODIA BUSINESS PROTOCOL
 * Style: Documentation / Systemic Integration
 */
const T = {
  paper: "#F9F8F5",
  ink: "#2D2B28",
  mint: "#7FD069",
  line: "rgba(45, 43, 40, 0.15)",
};

export default function ECOLocalBusinessSection() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#2D2B28] selection:text-[#F9F8F5]">
      
      {/* INERTIAL POSITIONING: SYSTEM NAV */}
      <div className="fixed right-12 top-12 z-50">
        <SmoothLink 
          href="/" 
          className="group flex items-center gap-4 border-b-2 border-[#2D2B28] pb-1 transition-all hover:opacity-60"
        >
          <ArrowLeft size={14} />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Exit_Protocol</span>
        </SmoothLink>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-24">
        
        {/* HERO: SYSTEMIC VALIDATION */}
        <section className="mb-48 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-10 lg:col-start-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 bg-[#7FD069]" />
                <span className="text-[10px] uppercase tracking-[0.5em] opacity-50">Node_Onboarding_v4.2</span>
              </div>
              
              <h1 className="text-6xl font-black leading-[0.85] tracking-tighter sm:text-8xl lg:text-9xl">
                INFRASTRUCTURE <br />
                FOR THE <span className="opacity-20 italic font-light">ETHICAL.</span>
              </h1>

              <div className="grid grid-cols-1 gap-12 border-t border-[#2D2B28] pt-12 md:grid-cols-2">
                <p className="text-xl font-medium leading-snug">
                  You operate locally. You internalize your environmental costs. 
                  You are the architecture of the future. Ecodia provides the 
                  verification layer to connect your node with a generation that 
                  rejects the mainstream.
                </p>
                <div className="flex flex-col justify-end">
                  <button className="w-fit bg-[#2D2B28] px-12 py-6 text-xs font-black uppercase tracking-[0.2em] text-[#F9F8F5] transition-all hover:bg-[#7FD069] hover:text-[#2D2B28]">
                    Register Node
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LOGIC: THE FOUR PILLARS OF INTEGRATION */}
        <section className="mb-48 border border-[#2D2B28]">
          <div className="grid grid-cols-1 divide-y divide-[#2D2B28] md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
            <IntegrationPillar 
              icon={<ShieldCheck size={20} />}
              title="VERIFICATION" 
              desc="We don't do 'promotions.' We verify your node's alignment with Ecodia directives."
            />
            <IntegrationPillar 
              icon={<Zap size={20} />}
              title="DIRECT_OFFER" 
              desc="Implement a simple, high-impact threshold. 10% off. One free item. Frictionless."
            />
            <IntegrationPillar 
              icon={<Fingerprint size={20} />}
              title="THE_VOTE" 
              desc="Receive ECO signatures from participants. This is proof of systemic value."
            />
            <IntegrationPillar 
              icon={<BarChart3 size={20} />}
              title="TELEMETRY" 
              desc="Access raw data on your community impact. No marketing fluff. Just metrics."
            />
          </div>
        </section>

        {/* MATERIALITY: THE PROOF SECTION */}
        <section className="mb-48 grid grid-cols-1 gap-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="space-y-12">
              <h2 className="text-5xl font-black tracking-tighter">PROOF, NOT OFFSETS.</h2>
              <div className="space-y-8 text-lg opacity-80">
                <p>
                  Carbon offsets are a legacy hallucination. We focus on 
                  <strong> Local Residue</strong>. When a participant scans at your 
                  counter, they are not "redeeming a coupon"—they are transferring 
                  earned ECO to your node.
                </p>
                <p className="border-l-4 border-[#2D2B28] pl-6 italic">
                  "This transfer is a physical signal that your sustainable, 
                  local practices are the foundation of the world we build next."
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:col-span-5">
             {/* VISUAL GRAVITY: THE SENSOR GRID */}
             <div className="grid grid-cols-6 gap-2 opacity-10">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="h-1 w-1 bg-[#2D2B28]" />
                ))}
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 border-2 border-[#2D2B28] flex flex-col items-center justify-center gap-4">
                   <div className="h-px w-32 bg-[#2D2B28]" />
                   <div className="text-[10px] uppercase tracking-widest font-black">Node_Integrity_Locked</div>
                   <div className="h-px w-32 bg-[#2D2B28]" />
                </div>
             </div>
          </div>
        </section>

        {/* CTA: THE FINAL HANDSHAKE */}
        <section className="bg-[#2D2B28] p-12 text-[#F9F8F5] lg:p-32">
          <div className="mx-auto max-w-4xl text-center space-y-12">
            <h2 className="text-5xl font-black tracking-tighter sm:text-7xl">
              INITIATE THE <br />HANDSHAKE.
            </h2>
            <p className="mx-auto max-w-xl text-lg opacity-60">
              Stop competing for attention. Start building infrastructure. 
              Join the ecosystem that redefines value.
            </p>
            <div className="flex flex-col items-center gap-6">
              <SmoothLink
                href="https://ecodia.au/auth/login"
                className="bg-[#7FD069] px-16 py-8 text-sm font-black uppercase tracking-[0.3em] text-[#2D2B28] transition-transform active:scale-95"
              >
                Request Access
              </SmoothLink>
             
            </div>
          </div>
        </section>

        {/* FOOTER: MEASUREMENT TICKS */}
        <footer className="mt-40 border-t border-[#2D2B28] pt-8">
           <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="flex gap-2">
                 {[...Array(12)].map((_, i) => (
                    <div key={i} className={`h-4 w-[1px] bg-[#2D2B28] ${i % 4 === 0 ? 'h-8' : ''}`} />
                 ))}
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">
                Ecodia // Business_Unit // 2025
              </div>
           </div>
        </footer>
      </div>
    </main>
  );
}

/**
 * COMPONENT: INTEGRATION PILLAR
 */
function IntegrationPillar({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group p-10 transition-colors hover:bg-[#2D2B28] hover:text-[#F9F8F5]">
      <div className="mb-10 flex h-12 w-12 items-center justify-center border border-[#2D2B28] group-hover:border-[#F9F8F5]">
        {icon}
      </div>
      <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em]">{title}</h3>
      <p className="text-[11px] leading-relaxed opacity-60 group-hover:opacity-100">
        {desc}
      </p>
      
      {/* CROP MARK RESIDUE */}
      <div className="mt-8 h-[1px] w-8 bg-current opacity-20" />
    </div>
  );
}