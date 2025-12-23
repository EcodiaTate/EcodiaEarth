"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SmoothLink } from "@/components/nav/SmoothLink";
import { ArrowLeft, ArrowDownRight, Compass, Cpu, Activity, Zap } from "lucide-react";

const ECODIA_BEZIER = [0.19, 1, 0.22, 1] as const;

export default function LabsSection() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]">
      {/* Exit */}
      <div className="fixed right-[8%] top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-4 border-b border-[#2D2B28] pb-1 transition-all"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform duration-700" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back</span>
        </button>
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28] opacity-5" />
        <div className="absolute right-[15%] top-0 h-full w-px bg-[#2D2B28] opacity-5" />
        <div className="absolute left-0 top-[12%] w-full h-px bg-[#2D2B28] opacity-5" />
      </div>

      <div className="relative z-10 pl-[8%] pr-[15%] py-32">
        {/* Header */}
        <header className="mb-64 space-y-16">
          <div className="flex items-center gap-4">
            <div
              className="h-4 w-4 bg-[#7FD069]"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] opacity-40">
              Ecodia Labs // R&amp;D
            </span>
          </div>

          <h1 className="text-[10rem] font-black leading-[0.75] tracking-tighter sm:text-[12rem] lg:text-[15rem]">
            LABS.
          </h1>

          <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-3xl font-medium leading-tight tracking-tighter opacity-80 border-l border-[#2D2B28] pl-12">
                Field-grade tools. <br />
                Sensors, coordination, and rules that survive contact.
              </p>
            </div>
            <nav className="flex flex-col gap-6 lg:col-span-4 lg:items-end lg:justify-end">
              <Jump href="#work">Work</Jump>
              <Jump href="#ip">IP</Jump>
              <Jump href="#partner">Contact</Jump>
            </nav>
          </div>
        </header>

        {/* Work log */}
        <section id="work" className="mb-96">
          <div className="mb-24 border-b-4 border-[#2D2B28] pb-10 flex justify-between items-end">
            <h2 className="text-[11px] font-black uppercase tracking-[0.6em]">Work log</h2>
            <span className="text-[10px] opacity-20 uppercase tracking-widest italic">Active</span>
          </div>

          <div className="divide-y divide-[#2D2B28]/10 border-b border-[#2D2B28]/10">
            <LineItem
              id="01"
              code="DISTRICT_ARCHITECTURE"
              title="District foundation"
              body="Requirements for a district. Participation mechanics and local wiring that keep working."
              tags={["Mechanics", "Nodes", "Integration"]}
            />
            <LineItem
              id="02"
              code="STRUCTURAL_GREENING"
              title="Urban heat mitigation"
              body="Street sensing for shade, water, heat load. Tools that make conditions legible."
              tags={["Sensors", "Biodiversity", "Heat"]}
            />
            <LineItem
              id="03"
              code="SYSTEMIC_COORDINATION"
              title="Coordination software"
              body="Collective work rendered as a grid. Jobs move. People stay oriented."
              tags={["Coordination", "Tooling", "Legibility"]}
            />
          </div>
        </section>

        {/* IP & research */}
        <section id="ip" className="mb-96 grid grid-cols-1 gap-32 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-16">
            <div className="text-[11px] font-black uppercase tracking-[0.6em] opacity-30 italic">
              Section 02 // IP
            </div>
            <h2 className="text-7xl font-black leading-[0.8] tracking-tighter sm:text-9xl">
              HOW WE <br /> HOLD <br /> THE WORK.
            </h2>
            <div className="space-y-12 text-2xl font-medium leading-tight opacity-70 border-l border-[#2D2B28] pl-12">
              <p>Long timelines live here. Prototypes, docs, and tests before they ship into public use.</p>
              <p>Licensing and publication live here too. The pattern stays transferable.</p>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-end">
            <div className="border-4 border-[#2D2B28] bg-[#F9F8F5] p-12 space-y-12 relative w-full">
              <h3 className="text-[11px] font-black uppercase tracking-[0.5em] border-b border-[#2D2B28]/10 pb-6">
                Build notes
              </h3>
              <ul className="space-y-8">
                <Principle icon={<Compass size={18} strokeWidth={1.5} />} text="Field runs over claims." />
                <Principle icon={<Cpu size={18} strokeWidth={1.5} />} text="Parts that extend." />
                <Principle icon={<Activity size={18} strokeWidth={1.5} />} text="Human intent stays central." />
                <Principle icon={<Zap size={18} strokeWidth={1.5} />} text="Use first. Theory later." />
              </ul>
              <div className="absolute -top-2 -left-2 h-6 w-6 border-t-4 border-l-4 border-[#2D2B28]" />
            </div>
          </div>
        </section>

        {/* Handshake */}
        <section id="partner" className="border-t-8 border-[#2D2B28] pt-24 pb-64">
          <div className="max-w-5xl space-y-16">
            <h2 className="text-8xl font-black tracking-tighter lg:text-[10rem] leading-[0.8]">
              INITIATE <br /> COLLABORATION.
            </h2>
            <p className="text-3xl font-medium tracking-tighter opacity-60 max-w-2xl leading-tight">
              Districts. Streets. Coordination. If you’re working in the same direction, step in.
            </p>
            <SmoothLink
              href="/contact"
              className="inline-block bg-[#2D2B28] px-16 py-8 text-xs font-black uppercase tracking-[0.5em] text-[#F9F8F5] transition-all duration-700 hover:bg-[#396041]"
            >
              Start
            </SmoothLink>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-48 flex items-center justify-between border-t border-[#2D2B28]/10 pt-16 opacity-30">
          <div className="text-[10px] font-black uppercase tracking-[0.8em]">Ecodia.Labs // Archive</div>
          <div className="flex gap-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-8 w-px bg-[#2D2B28]" />
            ))}
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.8em]">2025</div>
        </footer>
      </div>
    </main>
  );
}

function Jump({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-[11px] font-black uppercase tracking-[0.4em] opacity-30 transition-all duration-700 hover:opacity-100 hover:text-[#7FD069] flex items-center gap-4 group"
    >
      {children}
      <ArrowDownRight
        size={14}
        className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
      />
    </a>
  );
}

function LineItem({
  id,
  code,
  title,
  body,
  tags,
}: {
  id: string;
  code: string;
  title: string;
  body: string;
  tags: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: ECODIA_BEZIER }}
      className="group relative py-20 transition-all duration-700 hover:pl-8"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-2">
          <div className="text-[11px] font-black opacity-20 mb-2">[{id}]</div>
          <div className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">{code}</div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-5xl font-black tracking-tighter uppercase leading-none">{title}</h3>
          <p className="text-2xl font-medium opacity-70 leading-tight max-w-3xl">{body}</p>
        </div>

        <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end">
          {tags.map((t) => (
            <span
              key={t}
              className="border border-[#2D2B28] px-4 py-1 text-[10px] uppercase font-black opacity-20 group-hover:opacity-100 transition-opacity"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-0 h-full w-1 bg-[#7FD069] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </motion.div>
  );
}

function Principle({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center gap-6 text-xl font-medium opacity-60 transition-all duration-700 hover:opacity-100 group">
      <div className="text-[#396041] transition-transform group-hover:scale-110">{icon}</div>
      <span className="tracking-tighter">{text}</span>
    </li>
  );
}
