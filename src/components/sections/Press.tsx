"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download, Copy, Check, FileText, Camera, Type } from "lucide-react";

/**
 * ECODIA PRESS REGISTRY
 * Strategy: Public assets and approved copy.
 */

const ECODIA_BEZIER = [0.19, 1, 0.22, 1] as const;

const ASSETS = [
  {
    id: "LOG_01",
    type: "VECTOR",
    title: "ECO_ATOMIC",
    format: "SVG / PNG",
    size: "12KB",
    trace: "#7FD069",
    icon: <img src="/icons/leaf-black.svg" alt="" className="w-8 h-8 opacity-80" />,
  },
  {
    id: "LOG_02",
    type: "WORDMARK",
    title: "ECODIA_CANONICAL",
    format: "SVG / PNG",
    size: "18KB",
    trace: "#396041",
    icon: <span className="font-black text-xl tracking-tighter uppercase">Ecodia</span>,
  },
  {
    id: "FNT_01",
    type: "TYPEFACE",
    title: "SYSTEM_MONO",
    format: "WOFF2",
    size: "45KB",
    trace: "#2D2B28",
    icon: <Type size={20} strokeWidth={1.5} />,
  },
  {
    id: "IMG_01",
    type: "FIELD_LOG",
    title: "PRESS_PHOTOGRAPHY",
    format: "RAW / JPG",
    size: "142MB",
    trace: "#F4D35E",
    icon: <Camera size={20} strokeWidth={1.5} />,
  },
];

const COPY = {
  oneLiner: "A world where doing good is how the game works.",
  short: "Ecodia turns real-world action into sidequests, with rewards that circulate locally.",
  long:
    "Ecodia is a world we are building.\n\nIt runs on sidequests — real-world actions that strengthen local life and leave marks behind.\n\nPeople participate for the experience, the structure, and the shared benefit.\n\nNo mission statements. No attention games. Just the work, made legible.",
  usage:
    "Use “sidequests” for the unit of action.\nKeep tone calm and direct.\nAvoid mission language.\nAvoid urgency.\nAvoid moral framing.",
};

export default function PressSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

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
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform duration-700" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back</span>
        </button>
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute top-[12%] left-0 w-full h-px bg-[#2D2B28]" />
        <div className="absolute right-[15%] top-0 h-full w-px bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 pl-[8%] pr-[15%] py-32">
        {/* Header */}
        <header className="mb-64 space-y-16 border-b-8 border-[#2D2B28] pb-24">
          <div className="flex items-center gap-4">
            <FileText size={18} className="opacity-40" />
            <span className="text-[11px] font-black uppercase tracking-[0.6em] opacity-40">
              Media registry // Public assets
            </span>
          </div>

          <h1 className="text-[9rem] font-black leading-[0.75] tracking-tighter sm:text-[11rem] lg:text-[14rem]">
            PRESS <br />
            <span className="italic font-light opacity-10 text-[#396041]">KIT.</span>
          </h1>

          <p className="max-w-3xl text-3xl font-medium leading-tight tracking-tighter opacity-80 border-l border-[#2D2B28] pl-12">
            Approved copy. Approved assets. Nothing else.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-48 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-7 space-y-32">
            <div className="text-[11px] font-black uppercase tracking-[0.6em] opacity-30 italic mb-12">
              Section 01 // Copy
            </div>
            <CopyBlock title="One line" text={COPY.oneLiner} />
            <CopyBlock title="Short" text={COPY.short} />
            <CopyBlock title="Long" text={COPY.long} isMultiline />
            <CopyBlock title="Usage" text={COPY.usage} isMultiline isSubtle />
          </div>

          {/* Assets */}
          <aside className="lg:col-span-5">
            <div className="sticky top-48 space-y-16 lg:pl-24 border-l border-[#2D2B28]/10">
              <div className="text-[11px] font-black uppercase tracking-[0.6em] opacity-30 italic">
                Section 02 // Assets
              </div>

              <div className="space-y-2 border border-[#2D2B28]">
                {ASSETS.map((asset, i) => (
                  <AssetRow key={asset.id} data={asset} index={i} />
                ))}
              </div>

              <div className="pt-16 space-y-8">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] opacity-30">
                  Palette
                </h3>
                <div className="grid grid-cols-5 gap-4">
                  <Swatch color="#0F1712" />
                  <Swatch color="#396041" />
                  <Swatch color="#7FD069" />
                  <Swatch color="#F4D35E" />
                  <Swatch color="#F9F8F5" border />
                </div>
              </div>

              <div className="pt-16">
                <a
                  href="mailto:press@ecodia.au"
                  className="flex items-center justify-between w-full bg-[#2D2B28] p-10 text-[11px] font-black uppercase tracking-[0.5em] text-[#F9F8F5] transition-all hover:bg-[#396041]"
                >
                  Request brief <Download size={20} />
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-96 flex flex-col md:flex-row items-end justify-between border-t border-[#2D2B28]/10 pt-16 opacity-30">
          <div className="text-[10px] font-black uppercase tracking-[0.8em] italic">
            Ecodia press // 2025
          </div>
          <div className="flex gap-1 my-12 md:my-0">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-px w-6 bg-[#2D2B28]" />
            ))}
          </div>
          <div className="text-[10px] uppercase tracking-[0.8em]">
            26.6500° S // Drift stable
          </div>
        </footer>
      </div>
    </main>
  );
}

function CopyBlock({ title, text, isMultiline = false, isSubtle = false }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`group relative transition-all duration-700 ${isSubtle ? "opacity-30" : ""}`}>
      <div className="mb-6 flex items-baseline gap-6">
        <span className="text-[11px] font-black uppercase tracking-[0.4em] opacity-20 group-hover:opacity-100 transition-opacity">
          [{title}]
        </span>
        <button
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-40 transition-opacity hover:opacity-100"
        >
          {copied ? <Check size={14} className="text-[#7FD069]" /> : <Copy size={14} />}
        </button>
      </div>

      <p
        className={`tracking-tighter transition-colors ${
          copied ? "text-[#7FD069]" : ""
        } ${isMultiline ? "text-2xl font-medium leading-tight whitespace-pre-line" : "text-4xl font-medium leading-[1.1]"}`}
      >
        {isMultiline ? text : `"${text}"`}
      </p>
    </div>
  );
}

function AssetRow({ data, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: ECODIA_BEZIER, delay: index * 0.1 }}
      className="group flex items-center justify-between p-10 border-b border-[#2D2B28] last:border-b-0 transition-all duration-700 hover:bg-[#2D2B28] hover:text-[#F9F8F5]"
    >
      <div className="flex items-center gap-8">
        <div className="h-14 w-14 flex items-center justify-center border border-current opacity-20 group-hover:opacity-100">
          {data.icon}
        </div>
        <div>
          <div className="text-xl font-black tracking-tighter uppercase leading-none mb-1">
            {data.title}
          </div>
          <div className="text-[10px] opacity-40 group-hover:opacity-60 uppercase tracking-[0.2em] font-black">
            {data.format} // {data.size}
          </div>
        </div>
      </div>
      <button className="opacity-0 group-hover:opacity-100 transition-all duration-700 hover:scale-110">
        <Download size={24} />
      </button>
    </motion.div>
  );
}

function Swatch({ color, border = false }: { color: string; border?: boolean }) {
  return (
    <div className="space-y-3">
      <div
        className={`aspect-square w-full rounded-full transition-all duration-700 hover:scale-110 ${
          border ? "border border-[#2D2B28]/20" : ""
        }`}
        style={{ backgroundColor: color }}
      />
      <div className="text-[8px] font-black text-center opacity-20">{color}</div>
    </div>
  );
}
