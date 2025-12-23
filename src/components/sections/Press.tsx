"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download, Copy, Check, FileText, Camera, Type } from "lucide-react";

/**
 * ECODIA PRESS REGISTRY (MEDIA KIT)
 * Strategy: Asset Documentation. No Invitation.
 * Materiality: Warm Paper (#F9F8F5) | Charcoal Ink (#2D2B28)
 */

const ASSETS = [
  {
    id: "LOG_01",
    type: "VECTOR",
    title: "ECO",
    format: "SVG / PNG",
    size: "12KB",
    trace: "#7FD069", // Mint
    icon: <img src="/icons/leaf-black.svg" alt="" className="w-8 h-8 opacity-80" />,
  },
  {
    id: "LOG_02",
    type: "WORDMARK",
    title: "ECODIA_TYPE",
    format: "SVG / PNG",
    size: "18KB",
    trace: "#396041", // Forest
    icon: <span className="font-black text-xl tracking-tighter uppercase">Ecodia</span>,
  },
  {
    id: "FNT_01",
    type: "TYPEFACE",
    title: "SYSTEM_MONO",
    format: "WOFF2",
    size: "45KB",
    trace: "#2D2B28",
    icon: <Type size={20} />,
  },
  {
    id: "IMG_01",
    type: "FIELD_LOG",
    title: "PRESS_PHOTOGRAPHY",
    format: "RAW / JPG",
    size: "142MB",
    trace: "#F4D35E", // Gold
    icon: <Camera size={20} />,
  },
];

const COPY = {
  oneLiner: "Infrastructure for the world we build next.",
  short: `Ecodia captures the residue of physical action. We facilitate the transition from theoretical care to practical infrastructure.`,
  long: `Ecodia is a system for physical participation. \n\nIt is designed around verified sidequests—tangible actions that strengthen local ecosystems and make progress visible as physical residue.\n\nEcodia does not support the attention economy. It relies on structural defaults: clear prompts, shared labor, and inertial growth.`,
  usage: `Use “sidequests” to describe labor units.\nDo not use mission statements.\nMaintain a technical, calm, and documentarian tone.`,
};

export default function PressSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const driftY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]"
    >
      {/* 1. EXIT PROTOCOL (OFFSET) */}
      <div className="fixed right-12 top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-3 border border-[#2D2B28] px-4 py-2 transition-all hover:bg-[#2D2B28] hover:text-[#F9F8F5]"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Exit</span>
        </button>
      </div>

      {/* 2. TOPOGRAPHIC GRID (RESIDUE) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute left-[5%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute top-[15%] left-0 w-full h-px bg-[#2D2B28]" />
        <div className="absolute right-[10%] top-0 h-full w-px bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-32">
        
        {/* HEADER: VISUAL MASS */}
        <header className="mb-48 space-y-12 border-b-4 border-[#2D2B28] pb-16">
          <div className="flex items-center gap-4">
            <FileText size={14} className="opacity-40" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
              Media_Registry // Public_Assets_v4.2
            </span>
          </div>

          <h1 className="text-6xl font-black leading-[0.8] tracking-tighter sm:text-8xl lg:text-9xl">
            THE <br />
            <span className="italic font-light opacity-30 text-[#396041]">STORY.</span>
          </h1>

          <p className="max-w-2xl text-2xl font-medium leading-tight tracking-tight opacity-70">
            Systemic residues and documentation blocks. 
            Calm. Practical. True to the work.
          </p>
        </header>

        {/* 3. MAIN GRID: INERTIAL POSITIONING */}
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
          
          {/* COPY SECTION */}
          <div className="lg:col-span-7 space-y-16">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-8">Section_01 // Verbals</div>
            <CopyBlock title="Constant" text={COPY.oneLiner} />
            <CopyBlock title="Brief" text={COPY.short} />
            <CopyBlock title="Extended" text={COPY.long} isMultiline />
            <CopyBlock title="Doctrine" text={COPY.usage} isMultiline isSubtle />
          </div>

          {/* ASSET SECTION */}
          <aside className="lg:col-span-5">
            <div className="sticky top-32 space-y-12 lg:pl-12 border-l border-[#2D2B28]/10">
              <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Section_02 // Visuals</div>
              
              <div className="space-y-4">
                {ASSETS.map((asset, i) => (
                  <AssetRow key={asset.id} data={asset} index={i} />
                ))}
              </div>

              {/* PALETTE TRACES */}
              <div className="pt-12 space-y-6">
                 <h3 className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">System_Palette</h3>
                 <div className="grid grid-cols-5 gap-2">
                    <Swatch color="#0F1712" />
                    <Swatch color="#396041" />
                    <Swatch color="#7FD069" />
                    <Swatch color="#F4D35E" />
                    <Swatch color="#F9F8F5" border />
                 </div>
              </div>

              <div className="pt-12 border-t border-[#2D2B28]/10">
                 <a href="mailto:press@ecodia.au" className="flex items-center justify-between w-full border-2 border-[#2D2B28] p-6 text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:bg-[#2D2B28] hover:text-[#F9F8F5]">
                    Request_Briefing <Download size={14} />
                 </a>
              </div>
            </div>
          </aside>
        </div>

        {/* FOOTER: MEASUREMENT TICKS */}
        <footer className="mt-64 flex items-center justify-between opacity-20 border-t border-[#2D2B28]/10 pt-12">
            <div className="text-[8px] uppercase tracking-[0.5em]">26.6500° S // Post-Marketing</div>
            <div className="h-px flex-1 mx-12 bg-[#2D2B28]" />
            <div className="text-[8px] uppercase tracking-[0.5em]">Ecodia.Press // 2025</div>
        </footer>
      </div>
    </main>
  );
}

/** ----------------------------- COMPONENTS ----------------------------- */

function CopyBlock({ title, text, isMultiline = false, isSubtle = false }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`group relative transition-all ${isSubtle ? 'opacity-40' : ''}`}>
      <div className="mb-4 flex items-baseline gap-4">
        <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-30">{title}</span>
        <button onClick={handleCopy} className="opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? <Check size={12} className="text-[#7FD069]" /> : <Copy size={12} />}
        </button>
      </div>
      <p className={`text-2xl font-medium tracking-tight leading-tight transition-colors ${copied ? 'text-[#7FD069]' : ''} ${isMultiline ? 'text-lg whitespace-pre-line' : ''}`}>
        {isMultiline ? text : `"${text}"`}
      </p>
    </div>
  );
}

function AssetRow({ data, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group flex items-center justify-between border border-[#2D2B28]/10 p-6 transition-colors hover:bg-[#2D2B28] hover:text-[#F9F8F5]"
    >
      <div className="flex items-center gap-6">
        <div className="h-10 w-10 flex items-center justify-center border border-current opacity-40">
          {data.icon}
        </div>
        <div>
          <div className="text-[10px] font-black tracking-tighter uppercase">{data.title}</div>
          <div className="text-[8px] opacity-40 uppercase tracking-widest">{data.format} // {data.size}</div>
        </div>
      </div>
      <button className="opacity-0 group-hover:opacity-100 transition-opacity">
        <Download size={16} />
      </button>
    </motion.div>
  );
}

function Swatch({ color, border = false }: { color: string, border?: boolean }) {
  return (
    <div 
      className={`aspect-square w-full rounded-full transition-transform hover:scale-110 ${border ? 'border border-[#2D2B28]/20' : ''}`}
      style={{ backgroundColor: color }}
    />
  );
}