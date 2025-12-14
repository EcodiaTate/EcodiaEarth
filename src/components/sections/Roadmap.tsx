"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation"; 

const phases = [
  {
    year: "2023",
    id: "01",
    title: "The Seed",
    desc: "Guerrilla testing in urban zones. 100 manual nodes planted to validate the mycorrhizal network.",
    stat: "PROOF_OF_LIFE"
  },
  {
    year: "2024",
    id: "02",
    title: "Germination",
    desc: "The Impact Graph goes live. We move from tracking clicks to tracking carbon. Philosophy becomes code.",
    stat: "MAINNET_BETA"
  },
  {
    year: "2025",
    id: "03",
    title: "Photosynthesis",
    desc: "Verification Engine (VRR) activation. The loop closes: Attention → Action → Reward.",
    stat: "SCALING_L2"
  },
  {
    year: "2026",
    id: "04",
    title: "Canopy",
    desc: "The API opens. Local communities fork the protocol to govern their own bioregions.",
    stat: "DAO_GOVERNANCE"
  }
];

export default function GreenprintSection() {
  const router = useRouter(); 
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const rulerY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-32 overflow-hidden bg-[#396041] eco-section-wrapper"
    >
      {/* CLOSE BUTTON */}
      <motion.button 
         initial={{ opacity: 0, rotate: -90 }}
         animate={{ opacity: 1, rotate: 0 }}
         transition={{ delay: 0.5, duration: 0.5 }}
         onClick={() => router.back()} 
         className="fixed top-6 right-6 md:top-10 md:right-10 z-50 group"
         aria-label="Close Greenprint"
      >
         <div className="eco-ui-element relative flex items-center justify-center w-14 h-14 rounded-full bg-[#396041]/90 backdrop-blur-xl border border-[#7fd069]/30 shadow-[0_0_30px_rgba(6,30,20,0.5)] group-hover:border-[#7fd069] group-hover:shadow-[0_0_20px_#7fd069] transition-all duration-300 active:scale-95">
            <div className="absolute inset-0 rounded-full border border-dashed border-[#7fd069]/30 opacity-0 group-hover:opacity-100 animate-[spin_10s_linear_infinite]" />
            <div className="relative w-5 h-5">
               <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white group-hover:bg-mint rotate-45 transition-colors duration-300" />
               <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white group-hover:bg-mint -rotate-45 transition-colors duration-300" />
            </div>
         </div>
      </motion.button>

      {/* BACKGROUNDS */}
      <div className="absolute inset-0 z-0 opacity-30 eco-hidden" 
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `, 
          backgroundSize: '40px 40px' 
        }} 
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.4),transparent_60%)] mix-blend-overlay eco-hidden" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(6,30,20,0.8)_100%)] eco-hidden" />

      {/* Decorative Ruler */}
      <motion.div style={{ y: rulerY }} className="absolute left-0 top-0 bottom-0 w-8 border-r border-white/10 hidden md:flex flex-col justify-between py-4 z-10">
          {[...Array(20)].map((_, i) => (
             <div key={i} className="w-full h-px bg-white/20 relative">
                <span className="absolute left-2 -top-2 text-[8px] font-mono text-white/40">{i * 10}</span>
             </div>
          ))}
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-24 text-center">
            <div className="eco-ui-element inline-block border border-[#7fd069] px-4 py-1 rounded-full bg-[#396041]/50 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(127,208,105,0.3)]">
                <span className="font-mono text-[#7fd069] text-xs tracking-[0.2em] uppercase">
                   Project_File: ECODIA_V1
                </span>
            </div>
            
            <h2 className="eco-text-bright font-display text-[12vw] md:text-9xl text-white tracking-tighter leading-[0.8] mix-blend-overlay opacity-90">
               THE <br/>
               <span className="text-transparent eco-stroke-bright" style={{ WebkitTextStroke: "2px #7fd069" }}>
                 GREENPRINT
               </span>
            </h2>
        </div>

        {/* TIMELINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#7fd069] to-transparent hidden md:block opacity-50" />
           {phases.map((phase, i) => (
              <BlueprintCard key={i} data={phase} index={i} />
           ))}
        </div>
      </div>

      {/* HIGH CONTRAST ECO STYLES */}
      <style jsx global>{`
        /* 1. Reset Container Backgrounds to Transparent (stops black boxes) */
        .eco-mode .eco-section-wrapper div {
            background-color: transparent !important;
            box-shadow: none !important;
        }

        /* 2. THE CARD: Give it a wireframe border so we can see it */
        .eco-mode .eco-card {
            border: 1px solid #333 !important;
            background-color: #000 !important; /* Force solid black backing for contrast */
        }
        
        /* 3. TITLE TEXT: Pure White & Solid */
        .eco-mode .eco-text-bright,
        .eco-mode .eco-card-title {
            color: #ffffff !important;
            mix-blend-mode: normal !important;
            opacity: 1 !important;
        }

        /* 4. BODY TEXT: Light Grey (Readable) */
        .eco-mode .eco-card-desc {
            color: #d4d4d4 !important;
            opacity: 1 !important;
        }

        /* 5. STROKE TEXT: Grey Outline */
        .eco-mode .eco-stroke-bright {
            -webkit-text-stroke: 1px #888 !important;
            -webkit-text-fill-color: transparent !important;
        }

        /* 6. ACCENTS: Bright Emerald */
        .eco-mode .eco-accent-text {
            color: #10b981 !important;
        }
        
        /* 7. UI ELEMENTS (Buttons/Tags): Clean borders */
        .eco-mode .eco-ui-element {
            background: transparent !important;
            border: 1px solid #333 !important;
        }

        /* 8. Hide Clutter */
        .eco-mode .eco-hidden {
            display: none !important;
        }
      `}</style>
    </section>
  );
}

function BlueprintCard({ data, index }: { data: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex ${isEven ? "md:justify-end" : "md:justify-start"} md:py-8`}
    >
        {/* CARD CONTAINER: Added 'eco-card' */}
        <div className="eco-card group relative w-full max-w-md backdrop-blur-md bg-[#396041]/40 border border-[#7fd069]/30 hover:border-[#7fd069] transition-colors duration-500 rounded-sm overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none eco-hidden" />

            {/* HEADER: Added 'eco-ui-element' to strip background */}
            <div className="eco-ui-element flex justify-between items-center px-6 py-3 border-b border-[#7fd069]/20 bg-[#000000]/20">
                <span className="font-mono text-xl text-[#7fd069] font-bold eco-accent-text">{data.year}</span>
                <span className="font-mono text-[10px] text-white/50 tracking-widest eco-accent-text">PHASE_{data.id}</span>
            </div>

            <div className="p-8 relative">
                <div className="absolute top-4 right-4 text-[#7fd069]/40 text-xs">+</div>
                <div className="absolute bottom-4 left-4 text-[#7fd069]/40 text-xs">+</div>

                {/* TITLE: Added 'eco-card-title' */}
                <h3 className="eco-card-title font-display text-3xl text-white mb-2 tracking-wide">
                  {data.title}
                </h3>
                
                {/* DESCRIPTION: Added 'eco-card-desc' */}
                <p className="eco-card-desc font-serif text-white/70 text-lg leading-relaxed mb-6 font-light">
                  {data.desc}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10 eco-ui-element">
                   <div className="w-2 h-2 bg-mint rounded-sm animate-pulse eco-accent-text" style={{ backgroundColor: 'currentColor' }} />
                   <span className="font-mono text-xs text-[#7fd069] tracking-wider uppercase eco-accent-text">
                      Status: {data.stat}
                   </span>
                </div>
            </div>
        </div>

        <div className={`hidden md:block absolute top-1/2 ${isEven ? "-left-[40px]" : "-right-[40px]"} w-[40px] h-[1px] bg-mint/50`}>
           <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? "left-0" : "right-0"} w-2 h-2 bg-[#396041] border border-[#7fd069] rounded-full`} />
        </div>
    </motion.div>
  );
}