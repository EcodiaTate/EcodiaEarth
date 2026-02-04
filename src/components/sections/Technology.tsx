"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Cpu, Database, Share2, Activity } from "lucide-react";

/**
 * ECODIA TECHNOLOGY
 * Strategy: Technology as craft.
 * Physics: Inertial drift [0.19, 1, 0.22, 1]
 */

const ECODIA_BEZIER = [0.19, 1, 0.22, 1] as const;

const MODULES = [
  {
    id: "SYS_01",
    name: "FIELD_SIGNALS",
    title: "Reality, held",
    desc: "Signals from the field - place, people, conditions - translated into prompts you can act on.",
    specs: ["SOURCE: Field", "TEMPO: Steady", "WEIGHT: Light"],
    trace: "#7FD069",
    icon: <Activity size={24} strokeWidth={1.5} />,
  },
  {
    id: "SYS_02",
    name: "SHARED_RECORD",
    title: "Plain record",
    desc: "A shared log of what happened. Human language. Short rules. Clean surfaces.",
    specs: ["RULES: Clear", "LOG: Shared", "STYLE: Calm"],
    trace: "#F4D35E",
    icon: <Database size={24} strokeWidth={1.5} />,
  },
  {
    id: "SYS_03",
    name: "LOCAL_RETURN",
    title: "Value, kept close",
    desc: "Participation creates value that stays near its source - returning to places and crews through the grid.",
    specs: ["FLOW: Near", "PATH: Direct", "PACE: Ongoing"],
    trace: "#396041",
    icon: <Share2 size={24} strokeWidth={1.5} />,
  },
] as const;

export default function TechnologySection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const rulerY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]"
    >
      {/* Exit */}
      <div className="fixed right-[8%] top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-4 border-b border-[#2D2B28] pb-1 transition-all"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-2 transition-transform duration-700"
          />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">
            Back
          </span>
        </button>
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute top-[12%] left-0 w-full h-px bg-[#2D2B28]" />
        <motion.div
          style={{ y: rulerY }}
          className="absolute right-[15%] top-0 h-full w-px bg-[#2D2B28] opacity-20"
        />
      </div>

      <div className="relative z-10 pl-[8%] pr-[15%] py-32">
        {/* Header */}
        <header className="mb-64 space-y-16 border-b-8 border-[#2D2B28] pb-24">
          <div className="flex items-center gap-4">
            <Cpu size={18} className="opacity-40" />
            <span className="text-[11px] font-black uppercase tracking-[0.6em] opacity-40">
              Technical briefing // Open build v2
            </span>
          </div>

          <h1 className="text-[8.5rem] font-black leading-[0.75] tracking-tighter sm:text-[11rem] lg:text-[13rem]">
            THE CRAFT <br />
            <span className="italic font-light opacity-10 text-[#396041]">
              UNDERNEATH.
            </span>
          </h1>

          <p className="max-w-3xl text-3xl font-medium leading-tight tracking-tighter opacity-80 border-l border-[#2D2B28] pl-12">
            Technology is material. We use it in public to shape the world,
            without noise.
          </p>
        </header>

        {/* Modules */}
        <div className="flex flex-col border-t-2 border-[#2D2B28]">
          {MODULES.map((mod, i) => (
            <TechRow key={mod.id} data={mod} index={i} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-64 flex items-center justify-between border-t border-[#2D2B28]/10 pt-16 opacity-30">
          <div className="text-[10px] font-black uppercase tracking-[0.8em]">
            Material source // 2025
          </div>
          <div className="flex gap-2">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`h-6 w-px bg-[#2D2B28] ${i % 4 === 0 ? "h-10" : ""}`}
              />
            ))}
          </div>
          <div className="text-[10px] uppercase tracking-[0.8em]">
            Ecodia.sys // Beta locked
          </div>
        </footer>
      </div>
    </main>
  );
}

function TechRow({ data, index }: { data: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: ECODIA_BEZIER, delay: index * 0.1 }}
      className="group relative border-b border-[#2D2B28]/10 py-24 transition-all duration-700 hover:bg-[#2D2B28]/[0.02] hover:pl-8"
    >
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:items-start">
        {/* Left */}
        <div className="md:col-span-3 space-y-6">
          <div className="flex items-center gap-4">
            <div
              className="h-4 w-4"
              style={{
                backgroundColor: data.trace,
                clipPath:
                  "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />
            <span className="text-[11px] font-black tracking-[0.4em] uppercase">
              {data.id}
            </span>
          </div>

          <div className="space-y-2 text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">
            {data.specs.map((s: string) => (
              <div key={s}>{s}</div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-9 space-y-8">
          <div className="flex items-center gap-6">
            <div className="opacity-20 group-hover:opacity-100 transition-opacity duration-700">
              {data.icon}
            </div>
            <h2 className="text-5xl font-black tracking-tighter uppercase sm:text-7xl leading-none">
              {data.title}
            </h2>
          </div>
          <p className="max-w-3xl text-2xl font-medium leading-tight opacity-70">
            {data.desc}
          </p>
        </div>
      </div>

      {/* Trace */}
      <div
        className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{ backgroundColor: data.trace }}
      />
    </motion.div>
  );
}
