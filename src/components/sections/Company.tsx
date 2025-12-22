"use client";

import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SmoothLink } from "@/components/nav/SmoothLink"

/**
 * THE CANONICAL ECODIA (OP CO) REGISTRY
 * A transition from "Seed" (Bland/Document) to "Sprout" (Functional Color).
 */

const SECTIONS = [
  {
    id: "01",
    label: "Product",
    sub: "Real-world sidequests",
    theme: "#7FD069", // Mint (Action)
    content: [
      "Ecodia is a system for physical participation. It is the infrastructure for small actions that add up over time.",
      "Prompts are issued, residues are left. You act, the system documents. No noise.",
    ],
    calibration: "Structural_Residue_v1",
  },
  {
    id: "02",
    label: "Local",
    sub: "Value kept close",
    theme: "#F4D35E", // Gold (Calibration)
    content: [
      "We focus on the immediate grid. When you participate, the local architecture—businesses, studios, community nodes—reaches its potential.",
      "The value loop is shortened until you can feel the air change.",
    ],
    calibration: "Node_Density_v4",
  },
  {
    id: "03",
    label: "Studio",
    sub: "Upcycled logic",
    theme: "#396041", // Forest (Permanence)
    content: [
      "Studio is the remaking of existing matter. Repair, rewear, upcycle. This is the rejection of the disposable.",
      "It is built around the durability of craft, not the dopamine of the new.",
    ],
    calibration: "Matter_Integrity_v2",
  },
] as const;

export default function CompanySection() {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const item = SECTIONS[active];

  return (
    <motion.section 
      className="relative min-h-screen w-full overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* 1. INERTIAL NAV: EXIT PROTOCOL (OFFSET) */}
      <div className="fixed right-12 top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-3 border border-[#2D2B28] px-4 py-2 transition-all hover:bg-[#2D2B28] hover:text-[#F9F8F5]"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Exit</span>
        </button>
      </div>

      {/* 2. CALIBRATION MARKS (TRACES) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute left-1/4 top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute left-0 top-1/3 w-full h-px bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-24">
        
        {/* HEADER: VISUAL MASS */}
        <header className="mb-24 space-y-8 border-b-4 border-[#2D2B28] pb-12">
          <div className="flex items-center gap-3">
             {/* THE LEAF AS FUNCTIONAL STATE */}
             <div className="h-3 w-3 bg-[#7FD069]" />
             <span className="text-[10px] uppercase tracking-[0.5em] opacity-50">Ecodia / Operating_Company</span>
          </div>
          <h1 className="text-6xl font-black leading-[0.85] tracking-tighter sm:text-8xl">
            BUILDING <br />
            <span className="italic font-light opacity-30">INFRASTRUCTURE.</span>
          </h1>
          <div className="flex justify-between items-end">
            <p className="max-w-xl text-lg opacity-70">
              Tools designed to lower the friction of real-world existence. 
              We are documenting the transition from consumer to builder.
            </p>
            <div className="text-right">
              <div className="text-[9px] uppercase tracking-widest opacity-40">Status</div>
              <div className="text-xs font-black">ACTIVE_ITERATION</div>
            </div>
          </div>
        </header>

        {/* SECTION NAV: THE GRID TENSION */}
        <nav className="mb-16 grid grid-cols-1 gap-px bg-[#2D2B28]/10 md:grid-cols-3">
          {SECTIONS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActive(idx)}
              className={`group relative flex flex-col items-start p-8 transition-colors ${
                active === idx ? "bg-[#2D2B28] text-[#F9F8F5]" : "bg-[#F9F8F5] hover:bg-[#2D2B28]/5"
              }`}
            >
              <span className={`mb-8 text-[10px] font-black ${active === idx ? "text-[#7FD069]" : "opacity-30"}`}>
                /{s.id}
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tighter">{s.label}</h3>
              <span className="text-[10px] uppercase tracking-widest opacity-50">{s.sub}</span>
              
              {/* THE TRACE: Only visible on active */}
              {active === idx && (
                <motion.div 
                  layoutId="trace"
                  className="absolute bottom-0 left-0 h-1 w-full"
                  style={{ backgroundColor: s.theme }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* MAIN CONTENT: DOCUMENTATION STYLE */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                <div className="space-y-8">
                  {item.content.map((p, i) => (
                    <p key={i} className="text-2xl font-medium leading-tight tracking-tight">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-8 border-t border-[#2D2B28]/10">
                   <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.theme }} />
                   <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                     Calibration: {item.calibration}
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SIDE CARD: THE HANDSHAKE */}
          <aside className="lg:col-span-4">
            <div className="border-2 border-[#2D2B28] p-8">
               <h4 className="mb-4 text-xs font-black uppercase tracking-widest">Inquire</h4>
               <p className="mb-8 text-sm opacity-60">
                 Partnerships, node registration, creator pilots. 
                 The system is open to those who build.
               </p>
               <div className="space-y-4">
                 <SmoothLink
                    href="/contact"
                    className="flex w-full items-center justify-between border border-[#2D2B28] px-6 py-4 text-[10px] font-black uppercase tracking-widest transition-colors hover:bg-[#2D2B28] hover:text-[#F9F8F5]"
                 >
                   Send_Briefing <ArrowUpRight size={14} />
                 </SmoothLink>
                 <SmoothLink
                    href="/ecosystem"
                    className="flex w-full items-center justify-between bg-[#2D2B28] px-6 py-4 text-[10px] font-black uppercase tracking-widest text-[#F9F8F5] transition-opacity hover:opacity-80"
                 >
                   Explore_Grid <ArrowUpRight size={14} />
                 </SmoothLink>
               </div>
               <div className="mt-8 text-[9px] leading-relaxed opacity-40">
                 Note: Response times drift based on system load. Include coordinates if applicable.
               </div>
            </div>
          </aside>
        </div>

        {/* FOOTER: THE RESIDUE */}
        <footer className="mt-48 flex items-center justify-between border-t border-[#2D2B28]/10 pt-8 opacity-20">
            <div className="text-[8px] uppercase tracking-[0.5em]">Ecodia.Op_Co // Archive_Ref_77</div>
            <div className="flex gap-1">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className="h-1 w-1 bg-[#2D2B28]" />
               ))}
            </div>
            <div className="text-[8px] uppercase tracking-[0.5em]">2025 // Drift_Enabled</div>
        </footer>
      </div>
    </motion.section>
  );
}