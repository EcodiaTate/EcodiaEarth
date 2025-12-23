"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation"; 
import { ArrowLeft } from "lucide-react";

/**
 * ECODIA GREENPRINT (THE ROADMAP)
 * Strategy: Biological Timeline Documentation.
 * Physics: Inertial Drift [0.19, 1, 0.22, 1]
 */

const ECODIA_BEZIER = [0.19, 1, 0.22, 1] as const;

const phases = [
  {
    year: "2023",
    id: "01",
    title: "THE SEED",
    desc: "Urban field tests. 100 manual nodes placed to prove the network is alive.",
    stat: "FIELD_PROOF",
    trace: "#396041",
  },
  {
    year: "2024",
    id: "02",
    title: "GERMINATION",
    desc: "Impact Graph comes online. We stop measuring attention and log residue.",
    stat: "GRAPH_ACTIVE",
    trace: "#7FD069",
  },
  {
    year: "2025",
    id: "03",
    title: "PHOTOSYNTHESIS",
    desc: "Verification engine live. Closed loop: Notice → Do → Leave trace.",
    stat: "VERIFIER_ON",
    trace: "#F4D35E",
  },
  {
    year: "2026",
    id: "04",
    title: "CANOPY",
    desc: "Open interfaces. Local crews fork patterns to run their own regions.",
    stat: "LOCAL_RULES",
    trace: "#396041",
  },
];

export default function GreenprintSection() {
  const router = useRouter(); 
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const rulerY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <main 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]"
    >
      {/* 1. ASYMMETRIC EXIT */}
      <div className="fixed right-[8%] top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-4 border-b border-[#2D2B28] pb-1 transition-all"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform duration-700" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Return_History</span>
        </button>
      </div>

      {/* 2. CALIBRATION RULER (TECTONIC DRIFT) */}
      <motion.div 
        style={{ y: rulerY }} 
        className="absolute left-[8%] top-0 bottom-0 w-px bg-[#2D2B28] opacity-5 hidden md:block z-0"
      >
        {[...Array(40)].map((_, i) => (
          <div key={i} className="absolute left-0 w-8 h-[2px] bg-[#2D2B28] opacity-20" style={{ top: `${i * 120}px` }}>
            <span className="absolute left-12 -top-3 text-[9px] font-black opacity-30 tracking-widest">{i * 10}mm</span>
          </div>
        ))}
      </motion.div>

      <div className="relative z-10 pl-[8%] pr-[15%] py-32">
        
        {/* HEADER: MASSIVE ANCHOR */}
        <header className="mb-96 space-y-16">
          <div className="flex items-center gap-4">
             <div className="h-4 w-4 bg-[#396041]" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
             <span className="text-[11px] font-black uppercase tracking-[0.6em] opacity-40">Archive_Ref // Roadmap_v2.0</span>
          </div>
          
          <h1 className="text-[9rem] font-black leading-[0.75] tracking-tighter sm:text-[11rem] lg:text-[14rem]">
            THE <br />
            <span className="italic font-light opacity-10 text-[#396041]">GREENPRINT.</span>
          </h1>

          <p className="max-w-3xl text-3xl font-medium leading-tight tracking-tighter opacity-80 border-l border-[#2D2B28] pl-12">
            The biological timeline of the protocol. From urban guerrilla testing to 
            autonomous bioregion governance.
          </p>
        </header>

        {/* 3. TIMELINE: INERTIAL DRIFT */}
        <div className="relative space-y-96 pb-96">
          {phases.map((phase, i) => (
            <BlueprintRow key={i} data={phase} index={i} />
          ))}
          
          {/* THE CONNECTING FILAMENT */}
          <div className="absolute left-0 right-0 top-0 -z-10 h-full w-px bg-gradient-to-b from-[#2D2B28]/20 via-[#2D2B28]/5 to-transparent md:left-[50%]" />
        </div>

        {/* 4. FOOTER */}
        <footer className="mt-64 border-t-8 border-[#2D2B28] pt-16 opacity-30 flex flex-col md:flex-row justify-between items-end gap-12">
           <div className="flex items-center gap-6">
              <span className="text-[11px] font-black uppercase tracking-[0.8em]">Sequence_End</span>
              <div className="flex gap-2">
                 <div className="h-6 w-6 border-2 border-[#2D2B28]" />
                 <div className="h-6 w-6 bg-[#2D2B28]" />
              </div>
           </div>
           <div className="text-[10px] uppercase tracking-[0.8em] font-black">26.6500° S // Drift_Stable // 2025</div>
        </footer>
      </div>
    </main>
  );
}

function BlueprintRow({ data, index }: { data: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: ECODIA_BEZIER }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative grid grid-cols-1 md:grid-cols-12 gap-12 items-start ${isEven ? "" : "md:text-right"}`}
    >
      <div className={`md:col-span-5 ${isEven ? "md:col-start-1" : "md:col-start-8"}`}>
        <div className="space-y-12">
          {/* STATE MARKER */}
          <div className={`flex items-center gap-8 ${isEven ? "" : "flex-row-reverse"}`}>
            <span className="text-7xl font-black tracking-tighter opacity-10 leading-none">{data.year}</span>
            <div className="h-px flex-1 bg-[#2D2B28] opacity-10" />
            <div className="h-4 w-4" style={{ backgroundColor: data.trace, clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
          </div>

          {/* CONTENT */}
          <div className="space-y-8">
            <h3 className="text-6xl font-black tracking-tighter uppercase leading-none">{data.title}</h3>
            <p className="text-2xl font-medium leading-tight opacity-70">
              {data.desc}
            </p>
          </div>

          {/* CALIBRATION READOUT */}
          <div className={`flex items-center gap-6 ${isEven ? "" : "justify-end"}`}>
            <div className="text-[11px] font-black uppercase tracking-[0.5em] opacity-30 italic">
              Calibration: {data.stat}
            </div>
            <div className="h-[1px] w-24 bg-[#2D2B28] opacity-20" />
          </div>
        </div>
      </div>
      
      {/* ATOMIC HINGE POINT */}
      <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 items-start pt-16">
        <div className="h-8 w-8 border-4 border-[#2D2B28] bg-[#F9F8F5] rotate-45 z-10" />
      </div>
    </motion.section>
  );
}