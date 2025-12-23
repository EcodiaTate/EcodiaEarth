"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation"; 
import { SmoothLink } from "@/components/nav/SmoothLink";
import { ArrowLeft, ArrowDown, Activity, Zap, Compass, Wind } from "lucide-react";

/**
 * ECODIA GREENPRINT (THE ROADMAP)
 * Materiality: Warm Paper (#F9F8F5) | Charcoal Ink (#2D2B28)
 * Strategy: Documentation of Progress. Inertial Drift.
 */

const phases = [
  {
    year: "2023",
    id: "01",
    title: "THE SEED",
    desc: "Guerrilla testing in urban zones. 100 manual nodes planted to validate the mycorrhizal network.",
    stat: "PROOF_OF_LIFE",
    trace: "#396041"
  },
  {
    year: "2024",
    id: "02",
    title: "GERMINATION",
    desc: "Impact Graph deployment. Transition from tracking attention to documenting carbon. Philosophy translated to code.",
    stat: "MAINNET_BETA",
    trace: "#7FD069"
  },
  {
    year: "2025",
    id: "03",
    title: "PHOTOSYNTHESIS",
    desc: "Verification Engine (VRR) activation. Closing the loop: Attention → Action → Residue.",
    stat: "SCALING_L2",
    trace: "#F4D35E"
  },
  {
    year: "2026",
    id: "04",
    title: "CANOPY",
    desc: "Open API. Local communities fork the protocol to govern their own bioregions and shared spaces.",
    stat: "DAO_GOVERNANCE",
    trace: "#396041"
  }
];

export default function GreenprintSection() {
  const router = useRouter(); 
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // MEASUREMENT TICKS DRIFT
  const rulerY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <main 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]"
    >
      {/* 1. EXIT PROTOCOL */}
      <div className="fixed right-12 top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-3 border border-[#2D2B28] px-4 py-2 transition-all hover:bg-[#2D2B28] hover:text-[#F9F8F5]"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return</span>
        </button>
      </div>

      {/* 2. TOPOGRAPHIC CALIBRATION */}
      <motion.div 
        style={{ y: rulerY }} 
        className="absolute left-12 top-0 bottom-0 w-px bg-[#2D2B28]/10 hidden md:block z-0"
      >
        {[...Array(30)].map((_, i) => (
          <div key={i} className="absolute left-0 w-4 h-px bg-[#2D2B28]/20" style={{ top: `${i * 100}px` }}>
            <span className="absolute left-6 -top-2 text-[8px] opacity-30">{i * 10}cm</span>
          </div>
        ))}
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-32">
        
        {/* HEADER: MASSIVE ANCHOR */}
        <header className="mb-64 space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 bg-[#396041]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Archive_Ref // Roadmap_v2.0</span>
          </div>
          
          <h1 className="text-6xl font-black leading-[0.8] tracking-tighter sm:text-8xl lg:text-9xl">
            THE <br />
            <span className="italic font-light opacity-30 text-[#396041]">GREENPRINT.</span>
          </h1>

          <p className="max-w-2xl text-2xl font-medium leading-tight tracking-tight opacity-70">
            The biological timeline of the protocol. From urban guerrilla testing to 
            autonomous bioregion governance.
          </p>
        </header>

        {/* 3. TIMELINE: INERTIAL DRIFT */}
        <div className="relative space-y-48">
          {phases.map((phase, i) => (
            <BlueprintRow key={i} data={phase} index={i} />
          ))}
          
          {/* THE CONNECTING FILAMENT */}
          <div className="absolute left-6 top-0 -z-10 h-full w-px bg-gradient-to-b from-[#2D2B28]/20 via-[#2D2B28]/5 to-transparent md:left-[50%]" />
        </div>

        {/* 4. FOOTER: SYSTEM CHECK */}
        <footer className="mt-64 border-t-2 border-[#2D2B28] pt-12 opacity-30">
           <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.4em]">
              <span>Sequence_End</span>
              <div className="flex gap-2">
                 <div className="h-4 w-4 border border-[#2D2B28]" />
                 <div className="h-4 w-4 bg-[#2D2B28]" />
              </div>
              <span>26.6500° S // Drift_Stable</span>
           </div>
        </footer>
      </div>
    </main>
  );
}

function BlueprintRow({ data, index }: { data: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start ${isEven ? "" : "md:text-right"}`}
    >
      <div className={`md:col-span-5 ${isEven ? "md:col-start-1" : "md:col-start-8"}`}>
        <div className="space-y-6">
          {/* STATE MARKER */}
          <div className={`flex items-center gap-4 ${isEven ? "" : "flex-row-reverse"}`}>
            <span className="text-4xl font-black tracking-tighter opacity-10">{data.year}</span>
            <div className="h-px flex-1 bg-[#2D2B28]/10" />
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: data.trace }} />
          </div>

          {/* CONTENT */}
          <div className="space-y-4">
            <h3 className="text-4xl font-black tracking-tighter uppercase">{data.title}</h3>
            <p className="text-lg leading-snug opacity-70">
              {data.desc}
            </p>
          </div>

          {/* CALIBRATION READOUT */}
          <div className={`flex items-center gap-3 ${isEven ? "" : "justify-end"}`}>
            <div className="text-[10px] font-black uppercase tracking-widest opacity-40">
              State: {data.stat}
            </div>
            <div className="h-2 w-10 bg-[#2D2B28]/10" />
          </div>
        </div>
      </div>
      
      {/* ATOMIC HINGE POINT */}
      <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 items-start pt-12">
        <div className="h-4 w-4 border-2 border-[#2D2B28] bg-[#F9F8F5] rotate-45" />
      </div>
    </motion.section>
  );
}