// src/components/sections/PressSection.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

// Brand refs (for humans, not code):
// Mint  #7FD069
// Gold  #F4D35E
// Forest#396041
// Ink   #0F1712

const ASSETS = [
  {
    id: "LOG_01",
    type: "VECTOR",
    title: "Primary logo",
    format: "SVG / PNG",
    size: "12KB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-forest">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 2a10 10 0 0 1 10 10h-2a8 8 0 0 0-8-8V2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "LOG_02",
    type: "WORDMARK",
    title: "Wordmark",
    format: "SVG / PNG",
    size: "18KB",
    icon: <span className="font-display text-2xl text-forest">Ecodia</span>,
  },
  {
    id: "FNT_01",
    type: "TYPE",
    title: "Fonts",
    format: "WOFF2",
    size: "45KB",
    icon: <span className="font-mono text-[10px] uppercase tracking-widest text-forest/70">Aa</span>,
  },
  {
    id: "IMG_01",
    type: "PHOTO",
    title: "Press photos",
    format: "JPG",
    size: "2.4MB",
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <span className="font-mono text-[8px] text-forest/60 uppercase tracking-widest">
          Preview
        </span>
      </div>
    ),
  },
];

const COPY = {
  oneLiner: "A new way to do good, together.",
  short: `Ecodia turns real-world impact into sidequests - small actions that fit the day and add up when they’re shared.`,
  long: `Ecodia is a world we’re building.\n\nIt’s designed around real-world sidequests - small, tangible actions that strengthen local places and make progress visible over time.\n\nIt doesn’t rely on guilt or motivation. It relies on better defaults: clear prompts, shared progress, and systems that make participation feel natural.`,
  usage: `Use “sidequests” as the core metaphor.\nAvoid mission language.\nKeep it practical, calm, and specific.`,
};

export default function PressSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const halo = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const docRef = useMemo(() => "Media_Kit / Notes_v1", []);

  return (
    <main
      ref={containerRef}
      className="relative w-full min-h-screen bg-white text-forest overflow-hidden selection:bg-[#FF4D35] selection:text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* grain */}
        <div className="absolute inset-0 opacity-35 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#396041 1px, transparent 1px), linear-gradient(90deg, #396041 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        {/* soft halos */}
        <motion.div
          style={{ y: halo }}
          className="absolute -top-44 -right-44 w-[70vw] h-[70vw] rounded-full bg-[#7FD069]/18 blur-[90px]"
        />
        <div className="absolute -bottom-52 -left-52 w-[70vw] h-[70vw] rounded-full bg-[#F4D35E]/18 blur-[100px]" />

        {/* big whisper text */}
        <motion.div style={{ y: bgTextY }} className="absolute top-24 left-0 w-full text-center">
          <h1 className="font-display text-[18vw] text-[#7FD069] opacity-[0.16] leading-none select-none uppercase">
            PRESS
            <br />
            KIT
          </h1>
        </motion.div>
      </div>

      {/* CLOSE */}
<motion.button
  onClick={() => router.back()}
  initial={{ y: -24, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  className="fixed top-6 right-6 z-50 active:scale-[0.99] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D35]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
  aria-label="Close"
>
  <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-forest/12 shadow-[0_10px_24px_rgba(15,23,18,0.10)] hover:border-[#FF4D35]/35 transition-colors active:translate-y-[1px]"
 >
    <span className="relative flex items-center justify-center w-6 h-6 rounded-full border border-[#FF4D35]/35 bg-[#FF4D35]/10">
      <span className="absolute w-3.5 h-[2px] bg-[#FF4D35] rotate-45" />
      <span className="absolute w-3.5 h-[2px] bg-[#FF4D35] -rotate-45" />
    </span>

    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF4D35]">
      Close
    </span>

    <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-forest/35">
      Press kit
    </span>
  </div>
</motion.button>


      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* HEADER */}
        <div className="mb-16 md:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 border-b-2 border-forest/10 pb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 bg-[#FF4D35]/10 rounded-full border border-[#FF4D35]/20">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#FF4D35]">
                {docRef}
              </span>
            </div>

            <h2 className="font-display text-[12vw] sm:text-7xl md:text-9xl tracking-tighter uppercase leading-[0.82] text-forest">
              THE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-[#7FD069]">
                STORY
              </span>
            </h2>

            <p className="mt-6 font-serif text-xl text-forest/65 leading-relaxed max-w-2xl">
              A small set of copy blocks and assets you can lift directly. Written to stay calm, practical, and true to the product.
            </p>
          </div>

          {/* mini quick facts */}
          <div className="hidden lg:block text-right">
            <div className="font-mono text-[10px] uppercase tracking-widest text-forest/50 mb-2">
              Quick notes
            </div>
            <div className="space-y-1 font-mono text-xs uppercase tracking-widest text-forest/70">
              <div>Location: Australia</div>
              <div>Focus: real-world sidequests</div>
              <div>Style: calm / minimal</div>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* COPY */}
          <div className="lg:col-span-7 space-y-6">
            <CopyCard title="One-liner" text={COPY.oneLiner} />
            <CopyCard title="Short" text={COPY.short} />
            <CopyCard title="Long" text={COPY.long} multiline />
            <CopyCard title="Usage notes" text={COPY.usage} multiline subtle />
          </div>

          {/* ASSETS */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center justify-between border-b border-forest/10 pb-2 mb-2">
              <span className="font-mono text-xs font-bold uppercase text-forest">
                Visual assets
              </span>
              <span className="font-mono text-xs text-[#FF4D35]">Ready when you are</span>
            </div>

            {/* Asset shelf */}
            <div className="rounded-3xl border border-forest/10 bg-white/70 backdrop-blur-sm p-4 md:p-5 shadow-sm">
              <div className="space-y-3">
                {ASSETS.map((asset, i) => (
                  <AssetCartridge key={asset.id} data={asset} index={i} />
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-forest/10">
                <p className="font-serif text-sm text-forest/60 leading-relaxed">
                  If you need a specific format or lockup, leave a note - we’ll add it to the kit.
                </p>
              </div>
            </div>

            {/* Tiny brand cues */}
            <div className="grid grid-cols-3 gap-3">
              <Swatch name="Ink" value="#0F1712" />
              <Swatch name="Forest" value="#396041" />
              <Swatch name="Mint" value="#7FD069" />
              <Swatch name="Gold" value="#F4D35E" />
              <Swatch name="Gem" value="#7F69D0" />
              </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-24 rounded-3xl overflow-hidden border border-[#7FD069]/30 shadow-sm">
          <div className="relative p-8 md:p-10 bg-[linear-gradient(135deg,rgba(127,208,105,0.14),rgba(244,211,94,0.10),rgba(255,255,255,0.0))]">
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h3 className="font-display text-3xl text-forest mb-2">Press</h3>
                <p className="font-serif text-forest/65">
                  Quotes, context, or a clean asset pack.
                </p>
              </div>

              <a
                href="mailto:press@ecodia.au"
                className="w-full md:w-auto px-6 py-4 bg-forest text-white rounded-2xl active:scale-95 transition-transform text-center"
              >
                <span className="font-mono text-xs uppercase tracking-widest">
                  press@ecodia.au
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* quiet final note */}
        <div className="mt-12 text-center font-mono text-[10px] uppercase tracking-widest text-forest/40">
          // Keep it practical. Let the product speak //
        </div>
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* CopyCard                                                                    */
/* -------------------------------------------------------------------------- */

function CopyCard({
  title,
  text,
  multiline,
  subtle,
}: {
  title: string;
  text: string;
  multiline?: boolean;
  subtle?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div
      onClick={handleCopy}
      className={`
        group relative cursor-pointer rounded-3xl border transition-all duration-200
        active:scale-[0.985]
        ${copied ? "bg-forest border-forest text-white" : "bg-white/80 backdrop-blur border-forest/10 text-forest hover:border-[#7FD069]/60"}
      `}
    >
      {/* top label */}
      <div
        className={`
          absolute -top-3 left-6 text-[10px] font-mono uppercase px-3 py-1 rounded-md border
          ${copied ? "bg-[#7FD069] text-forest border-[#7FD069]" : "bg-white text-forest border-forest/20"}
        `}
      >
        {title}
      </div>

      <div className="p-7 md:p-9">
        <p
          className={`
            font-serif leading-relaxed
            ${multiline ? "text-lg md:text-xl whitespace-pre-line" : "text-xl md:text-2xl"}
            ${subtle ? (copied ? "text-white/85" : "text-forest/65") : copied ? "text-white" : "text-forest"}
          `}
        >
          {multiline ? text : `“${text}”`}
        </p>

        <div className="mt-6 flex items-center gap-3">
          <div
            className={`
              w-9 h-9 rounded-full flex items-center justify-center border
              ${copied ? "bg-white border-white text-forest" : "bg-[#7FD069]/12 border-[#7FD069]/40 text-forest"}
            `}
          >
            {copied ? "✓" : "⎘"}
          </div>
          <span
            className={`
              font-mono text-[10px] uppercase font-bold tracking-wider
              ${copied ? "text-[#7FD069]" : "text-forest/45"}
            `}
          >
            {copied ? "Copied" : "Tap to copy"}
          </span>
        </div>
      </div>

      {/* underline */}
      <div className="absolute bottom-0 left-0 h-[3px] bg-[#7FD069] w-0 group-hover:w-full transition-all duration-500 ease-out opacity-70" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* AssetCartridge                                                              */
/* -------------------------------------------------------------------------- */

function AssetCartridge({ data, index }: { data: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group flex items-stretch h-20 md:h-24 bg-white border border-forest/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md active:scale-[0.99] transition-all"
    >
      {/* preview */}
      <div className="w-20 md:w-24 shrink-0 bg-forest/[0.04] flex items-center justify-center border-r border-forest/10">
        {data.icon}
      </div>

      {/* meta */}
      <div className="flex-1 p-3 md:p-4 flex flex-col justify-center min-w-0">
        <div className="flex items-center justify-between gap-3">
          <h4 className="font-display text-lg md:text-xl truncate text-forest">
            {data.title}
          </h4>
          <span className="hidden md:inline-flex font-mono text-[10px] uppercase tracking-widest text-forest/40">
            {data.type}
          </span>
        </div>

        <div className="mt-1 flex items-center gap-2">
          <span className="font-mono text-[10px] bg-forest/5 px-2 py-0.5 rounded text-forest/80">
            {data.format}
          </span>
          <span className="text-[10px] font-mono text-forest/40">{data.size}</span>
        </div>
      </div>

      {/* action */}
      <button
        type="button"
        className="w-16 md:w-20 bg-[#FF4D35] text-white flex flex-col items-center justify-center gap-1 active:bg-[#E53F2A] transition-colors"
        aria-label="Download"
      >
        <span className="text-xl">↓</span>
        <span className="hidden md:block text-[8px] font-mono uppercase tracking-widest">
          Get
        </span>
      </button>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Swatch                                                                      */
/* -------------------------------------------------------------------------- */

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <div className="rounded-2xl border border-forest/10 bg-white/70 backdrop-blur-sm p-4 text-center">
      <div className="h-10 rounded-xl border border-forest/10" style={{ background: value }} />
      <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-forest/55">
        {name}
      </div>
      <div className="mt-1 font-mono text-[10px] text-forest/35">{value}</div>
    </div>
  );
}
