"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SmoothLink } from "@/components/nav/SmoothLink";
import { ArrowLeft, ArrowDownRight, Compass, Cpu, Activity, Zap } from "lucide-react";

/**
 * ECODIA LABS (IP + R&D)
 * Strategy: Structural Gravity. No Cards. No Gimmicks.
 * Materiality: Warm Paper (#F9F8F5) | Charcoal Ink (#2D2B28)
 */

export default function LabsSection() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]">
      
      {/* 1. EXIT PROTOCOL (OFFSET) */}
      <div className="fixed right-12 top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-3 border border-[#2D2B28] px-4 py-2 transition-all hover:bg-[#2D2B28] hover:text-[#F9F8F5]"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return</span>
        </button>
      </div>

      {/* 2. CALIBRATION GRID (RESIDUE) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute left-[5%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute left-0 top-[15%] w-full h-px bg-[#2D2B28]" />
        <div className="absolute left-0 top-[60%] w-full h-px bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-32">
        
        {/* HEADER: MAXIMUM MASS */}
        <header className="mb-48 space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-3 w-3 bg-[#7FD069]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-50">
              Ecodia_Labs // IP + R&D_Unit
            </span>
          </div>
          
          <h1 className="text-[18vw] font-black leading-[0.75] tracking-tighter md:text-[12rem] lg:text-[14rem]">
            LABS
          </h1>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-2xl font-medium leading-tight tracking-tight opacity-80 sm:text-3xl">
                The assembly of tools behind the world. <br />
                Hardware. Intelligence. Field logic.
              </p>
            </div>
            <nav className="flex flex-col gap-4 lg:col-span-4 lg:items-end lg:justify-end">
              <Jump href="#work">Work_Log</Jump>
              <Jump href="#ip">Intellectual_Property</Jump>
              <Jump href="#partner">Initiate_Handshake</Jump>
            </nav>
          </div>
        </header>

        {/* 3. WORK LOG: THE LINE ITEMS (NO CARDS) */}
        <section id="work" className="mb-64">
          <div className="mb-16 border-b-2 border-[#2D2B28] pb-8">
             <h2 className="text-xs font-black uppercase tracking-[0.4em]">Current_Deployments</h2>
          </div>

          <div className="divide-y divide-[#2D2B28]/10">
            <LineItem 
              id="01"
              code="DISTRICT_ARCHITECTURE"
              title="District Foundation"
              body="Mapping the requirements for an Ecodia district to function. This includes participation mechanics and local integration protocols."
              tags={["Mechanics", "Nodes", "Integration"]}
            />
            <LineItem 
              id="02"
              code="STRUCTURAL_GREENING"
              title="Urban Heat Mitigation"
              body="Field exploration of street-level biodiversity. Utilizing sensors and physical tooling to manage shade, water, and heat."
              tags={["Sensors", "Biodiversity", "Heat"]}
            />
            <LineItem 
              id="03"
              code="SYSTEMIC_COORDINATION"
              title="Coordination Software"
              body="Infrastructure that facilitates collective action. Making large-scale projects legible and repeatable for the local grid."
              tags={["Coordination", "Tooling", "Legibility"]}
            />
            <LineItem 
              id="04"
              code="ASSISTIVE_INTELLIGENCE"
              title="Decision Support Models"
              body="Utilizing models to identify patterns and reduce systemic friction. Human intent remains the primary directive."
              tags={["Pattern_Finding", "Assistance"]}
            />
          </div>
        </section>

        {/* 4. IP + RESEARCH: THE DEEP WORK */}
        <section id="ip" className="mb-64 grid grid-cols-1 gap-20 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-12">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Section_02 // IP</div>
            <h2 className="text-5xl font-black leading-none tracking-tighter sm:text-7xl">
              HOW WE HOLD <br />THE WORK.
            </h2>
            <div className="space-y-8 text-xl opacity-70 leading-relaxed">
              <p>
                Labs serves as the anchor for ideas requiring long-term calibration. 
                We test the hard parts in isolation before they enter the ecosystem.
              </p>
              <p>
                Licensing, open-source documentation, and experimental technology 
                are managed here to ensure the durability of the local grid.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-[#2D2B28] p-10 space-y-10">
              <h3 className="text-xs font-black uppercase tracking-widest">Principles of Build</h3>
              <ul className="space-y-6">
                <Principle icon={<Compass size={14} />} text="Field pilots over theoretical claims." />
                <Principle icon={<Cpu size={14} />} text="Extensible components only." />
                <Principle icon={<Activity size={14} />} text="Human intent remains the center." />
                <Principle icon={<Zap size={14} />} text="Use-case driven development." />
              </ul>
              {/* CROP MARK RESIDUE */}
              <div className="flex gap-2">
                 <div className="h-4 w-[1px] bg-[#2D2B28]" />
                 <div className="h-4 w-[1px] bg-[#2D2B28] opacity-20" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. HANDSHAKE (PARTNER) */}
        <section id="partner" className="border-t-4 border-[#2D2B28] pt-24 pb-48">
          <div className="max-w-4xl space-y-12">
            <h2 className="text-6xl font-black tracking-tighter lg:text-8xl">
              INITIATE <br />COLLABORATION.
            </h2>
            <p className="text-xl opacity-60">
              If you are building districts, greening streets, or engineering 
              the world we build next, we require your labor.
            </p>
            <SmoothLink
              href="/contact"
              className="inline-block bg-[#2D2B28] px-12 py-6 text-xs font-black uppercase tracking-widest text-[#F9F8F5] transition-all hover:bg-[#396041]"
            >
              Start_Handshake →
            </SmoothLink>
          </div>
        </section>

        {/* FOOTER: MEASUREMENT TICKS */}
        <footer className="flex items-center justify-between opacity-20">
            <div className="text-[8px] uppercase tracking-[0.5em]">Ecodia.Labs // IP_Holding</div>
            <div className="h-px flex-1 mx-12 bg-[#2D2B28]" />
            <div className="text-[8px] uppercase tracking-[0.5em]">2025 // Phase_Beta</div>
        </footer>
      </div>
    </main>
  );
}

/** ----------------------------- UI bits ----------------------------- */

function Jump({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-xs font-black uppercase tracking-widest opacity-40 transition-opacity hover:opacity-100 flex items-center gap-2 group"
    >
      {children}
      <ArrowDownRight size={14} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
    </a>
  );
}

function LineItem({ id, code, title, body, tags }: { id: string, code: string, title: string, body: string, tags: string[] }) {
  return (
    <div className="group relative py-12 transition-all hover:pl-4">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-2">
          <div className="text-[10px] font-black opacity-30">/{id}</div>
          <div className="text-[9px] uppercase tracking-widest opacity-40">{code}</div>
        </div>
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-3xl font-black tracking-tighter uppercase">{title}</h3>
          <p className="text-lg opacity-70 max-w-2xl leading-snug">{body}</p>
        </div>
        <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end">
          {tags.map(t => (
            <span key={t} className="border border-[#2D2B28]/20 px-3 py-1 text-[9px] uppercase font-bold opacity-50 group-hover:opacity-100">
              {t}
            </span>
          ))}
        </div>
      </div>
      {/* THE TRACE: ACTIVE ON HOVER */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#7FD069] opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}

function Principle({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <li className="flex items-center gap-4 text-sm font-medium opacity-70 transition-opacity hover:opacity-100">
      <div className="text-[#396041]">{icon}</div>
      <span>{text}</span>
    </li>
  );
}