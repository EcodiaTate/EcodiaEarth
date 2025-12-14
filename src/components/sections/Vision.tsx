"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Types
type ViewMode = "friction" | "clarity" | "system";

export default function VisionSection() {
  const [mode, setMode] = useState<ViewMode>("friction");

  return (
    <main className="relative w-full bg-ink text-white selection:bg-ink/30">
      
      {/* 1. THE VIEWPORT (Sticky Background) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden isolate">
         <BackgroundLens mode={mode} />
         <InterfaceOverlay mode={mode} />
      </div>

      {/* 2. THE CONTENT STREAM */}
      <div className="relative z-30 -mt-[100vh]">
        
        {/* SCENE 01: THE FRICTION (Left Side / Raw) */}
        <TriggerSection onEnter={() => setMode("friction")} align="left">
           <div className="max-w-xl p-8 bg-black/40 border-l border-white/10 backdrop-filter-none">
              <div className="flex items-center gap-3 mb-6 opacity-60">
                <div className="w-2 h-2 rounded-full bg-muted" />
                <span className="font-mono text-xs tracking-widest uppercase">Fig_01.0 // Legacy</span>
              </div>
              
              <h2 className="font-display text-4xl sm:text-6xl tracking-tighter mb-6 text-muted">
                 Sustainability<br />was a <span className="line-through decoration-muted text-muted">chore</span>.
              </h2>
              <p className="text-lg sm:text-xl text-muted leading-relaxed font-light font-serif italic opacity-80">
                 "We tried to guilt the world into saving itself. It resulted in fatigue, not fuel."
              </p>
           </div>
        </TriggerSection>

        {/* SCENE 02: THE CLARITY (Right Side / Vibrant) */}
        <TriggerSection onEnter={() => setMode("clarity")} align="right">
           <div className="max-w-xl p-8 bg-black/40 border-r border-ink/20 backdrop-filter-none text-right">
              <div className="flex justify-end items-center gap-3 mb-6">
                <span className="font-mono text-xs tracking-widest uppercase text-mint">Fig_02.0 // Vision</span>
                <div className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              </div>

              <h2 className="font-display text-4xl sm:text-6xl tracking-tighter mb-6 text-white drop-shadow-2xl">
                 Joy is the<br /><span className="text-mint italic font-serif">renewable</span> energy.
              </h2>
              <p className="text-lg sm:text-xl text-border leading-relaxed font-light">
                 Gamify the commons. When you align personal dopamine with planetary health, the system fixes itself.
              </p>
           </div>
        </TriggerSection>

        {/* SCENE 03: THE SYSTEM (Center / Tech) */}
        <TriggerSection onEnter={() => setMode("system")} align="center">
           <div className="max-w-4xl mx-auto text-center p-6">
              {/* No blur here, just pure dark opacity (tech-panel) */}
              <div className="inline-flex items-center justify-center bg-ink/90 border border-white/10 px-4 py-1 rounded-full mb-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white">System_Architecture</span>
              </div>
              
              <h2 className="font-display text-6xl sm:text-[10rem] leading-[0.8] tracking-tighter mb-12 text-white mix-blend-difference">
                 ECOLOGY<br/>AS OS.
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left border-t border-white/20 pt-8 bg-black/80 sm:bg-transparent p-4 sm:p-0">
                 <Stat number="10k+" label="Active Nodes" />
                 <Stat number="4.2m" label="Carbon Offset" />
                 <Stat number="∞" label="Upside" />
              </div>
           </div>
        </TriggerSection>

        <div className="h-[20vh]" />
      </div>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function BackgroundLens({ mode }: { mode: ViewMode }) {
  return (
    <div className="relative w-full h-full bg-[#080808]">
      
      {/* 1. FRICTION (Blurred Asset) */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
          ${mode === 'friction' ? 'opacity-60 mix-blend-luminosity' : 'opacity-0'}
      `}>
        <Image 
           src="/img/eco-district-blur.jpg"
           alt="Blur Layer"
           fill
           className="object-cover scale-105"
           priority
        />
      </div>

      {/* 2. CLARITY (Sharp Asset) */}
      <div className={`absolute inset-0 transition-all duration-1000 ease-in-out
          ${mode === 'clarity' ? 'opacity-100 scale-100 grayscale-0' : 'opacity-0 scale-105 grayscale'}
      `}>
        <Image 
           src="/img/eco-district.png" 
           alt="Sharp Layer"
           fill
           className="object-cover"
           priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 3. SYSTEM (Inverted/Tech Asset) */}
      <div className={`absolute inset-0 transition-all duration-700 ease-linear
          ${mode === 'system' ? 'opacity-100' : 'opacity-0'}
      `}>
         <div className="absolute inset-0 mix-blend-exclusion brightness-[1.8] invert">
            <Image 
              src="/img/eco-district.png" 
              alt="System Layer"
              fill
              className="object-cover"
            />
         </div>
         <div className="absolute inset-0 bg-black/60" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40" />
      </div>
    </div>
  )
}

function InterfaceOverlay({ mode }: { mode: ViewMode }) {
  const fileName = {
    friction: "IMG_0042_RAW.PNG",
    clarity: "IMG_0042_EDIT_V2.JPG",
    system: "SYS_LOG.DAT"
  }[mode];

  const metaColor = {
    friction: "text-muted",
    clarity: "text-mint",
    system: "text-white"
  }[mode];

  return (
    <div className="absolute inset-0 pointer-events-none z-20 p-6 flex flex-col justify-between">
       {/* Top Bar */}
       <div className="flex justify-between items-start">
          <div className="flex flex-col">
             <span className={`font-mono text-[10px] uppercase tracking-widest mb-1 ${metaColor}`}>
                VISION.tsx / 
             </span>
             <AnimatePresence mode="wait">
                <motion.span 
                  key={fileName}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="font-mono text-sm uppercase font-bold"
                >
                  {fileName}
                </motion.span>
             </AnimatePresence>
          </div>
          <div className="font-mono text-[10px] text-white/30 text-right">
             REC ● 00:00:14:22<br/>ISO 800
          </div>
       </div>

       {/* Crosshairs */}
       <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700
          ${mode === 'clarity' ? 'opacity-0 scale-150' : 'opacity-30 scale-100'}
       `}>
          <div className="w-[20vw] h-[1px] bg-white/50" />
          <div className="h-[20vh] w-[1px] bg-white/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
       </div>

       {/* Bottom Bar */}
       <div className="flex justify-between items-end">
          <div className="flex gap-4 font-mono text-[10px] text-white/40">
             <span className={mode === 'friction' ? 'text-white underline' : ''}>RAW</span>
             <span className={mode === 'clarity' ? 'text-mint underline' : ''}>VIEW</span>
             <span className={mode === 'system' ? 'text-white underline' : ''}>DATA</span>
          </div>
          <div className={`transition-opacity duration-500 ${mode === 'system' ? 'opacity-100' : 'opacity-0'}`}>
             <div className="h-10 w-24 border border-white/20 bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
                <div className="flex items-end h-full gap-[2px] p-1 justify-center opacity-50">
                   {[40,60,30,80,100,40,20,50,70,30].map((h, i) => (
                      <div key={i} style={{ height: `${h}%`}} className="w-1.5 bg-white" />
                   ))}
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}

function TriggerSection({ 
  children, 
  onEnter, 
  align = "center" 
}: { 
  children: React.ReactNode, 
  onEnter: () => void,
  align?: "left" | "right" | "center"
}) {
  
  // Responsive Alignment Logic:
  // Mobile: Always 'items-end' (Content at bottom) or 'items-center'
  // Desktop: 'items-center' vertically, but justify-content varies.
  
  const alignmentClasses = {
     left: "md:justify-start justify-center items-end md:items-center",
     right: "md:justify-end justify-center items-end md:items-center",
     center: "justify-center items-center"
  }[align];

  return (
    <motion.div 
      className={`h-screen w-full flex px-6 sm:px-24 pb-24 sm:pb-0 ${alignmentClasses}`}
      onViewportEnter={onEnter}
      viewport={{ margin: "-50% 0px -50% 0px" }}
    >
      <motion.div 
         initial={{ opacity: 0, y: 40, filter: "blur(1px)" }}
         whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
         transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function Stat({ number, label }: { number: string, label: string }) {
  return (
    <div className="border-l border-white/40 pl-4">
       <div className="font-display text-4xl mb-1 text-white">{number}</div>
       <div className="font-mono text-[10px] uppercase text-white/60 tracking-wider">{label}</div>
    </div>
  )
}