"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { CineImage } from "@/components/media/CineImage"; 
import { useRef } from "react";

export default function VisionSection({ headingId }: { headingId?: string }) {
  const containerRef = useRef(null);
  
  // Track scroll progress of the WHOLE section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main 
      ref={containerRef} 
      className="relative w-full bg-[#0a0a0a] text-[#e5e5e5]"
    >
      
      {/* 1. THE VISUAL CORE (Sticky Background) 
          It stays fixed while you scroll 300vh worth of content.
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Dynamic Transforms based on scroll */}
        <VisualCore scrollYProgress={scrollYProgress} />
      </div>

      {/* 2. THE SCROLLING MANIFESTO (Foreground) 
          This sits ON TOP of the sticky image. 
          We use mix-blend-mode to invert colors dynamically.
      */}
      <div className="relative z-10 -mt-[100vh]"> {/* Pull up to overlap sticky container */}
        
        {/* SECTION 1: THE HOOK */}
        <Section h="h-screen" align="items-center" justify="justify-center">
          <motion.h1 
            id={headingId}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] sm:text-[8vw] font-black leading-none text-center tracking-tighter mix-blend-difference text-white"
          >
            RADICAL<br/>JOY.
          </motion.h1>
        </Section>

        {/* SECTION 2: THE DATA */}
        <Section h="h-[150vh]" align="items-start" justify="justify-start">
           <div className="w-full h-full flex flex-col justify-center px-6 sm:px-24">
              <ManifestoItem index="01" title="FRICTION">
                 Systems are broken. We don't fix them with guilt. We fix them with play.
              </ManifestoItem>
              <ManifestoItem index="02" title="FUEL">
                 Upcycling isn't a chore. It is the currency of the new commons.
              </ManifestoItem>
              <ManifestoItem index="03" title="FUTURE">
                 A decentralized joy-machine for local impact and global reach.
              </ManifestoItem>
           </div>
        </Section>

        {/* SECTION 3: THE OUTRO */}
        <Section h="h-[50vh]" align="items-end" justify="justify-center">
            <div className="pb-24 mix-blend-difference text-white text-center">
               <span className="font-mono text-xs uppercase tracking-[0.5em] block mb-4">
                  Transmission End
               </span>
               <div className="w-px h-16 bg-white mx-auto" />
            </div>
        </Section>

      </div>

      {/* 3. THE HUD (Fixed Data Overlay) */}
      <HUD scrollYProgress={scrollYProgress} />

    </main>
  );
}

// --- SUB COMPONENTS ---

function VisualCore({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // 1. Scale: Starts at 1.0, slowly zooms to 1.5
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  
  // 2. Grayscale: Starts B&W (0% color), becomes Color (100%) halfway through
  const filter = useTransform(scrollYProgress, [0, 0.4], ["grayscale(100%)", "grayscale(0%)"]);
  
  // 3. Blur: Starts blurry, focuses instantly
  const blur = useTransform(scrollYProgress, [0, 0.15], ["blur(10px)", "blur(0px)"]);

  return (
    <motion.div 
      style={{ scale, filter: filter as any, WebkitFilter: blur as any }} 
      className="relative w-full h-full"
    >
      <CineImage 
        src="/img/eco-district.png"
        alt="Atmosphere"
        fill
        // We disable internal movement here because we control it via Scroll
        kenBurns={false} 
        grain={true}
        vignette={true}
        className="object-cover"
      />
      {/* Scanlines Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 mix-blend-overlay" />
    </motion.div>
  );
}

function Section({ children, h, align, justify }: any) {
  return (
    <div className={`${h} w-full flex ${align} ${justify} pointer-events-none`}>
      {/* Pointer events auto ensures text is selectable but layout passes clicks */}
      <div className="pointer-events-auto w-full">
        {children}
      </div>
    </div>
  )
}

function ManifestoItem({ index, title, children }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ margin: "-20% 0px" }}
      className="mb-24 sm:mb-32 max-w-2xl mix-blend-difference text-white"
    >
      <div className="flex items-baseline gap-4 mb-2 border-b border-white/40 pb-2">
         <span className="font-mono text-sm sm:text-base font-bold text-emerald-400">{index}</span>
         <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight">{title}</h2>
      </div>
      <p className="text-xl sm:text-3xl font-light leading-snug opacity-90">
        {children}
      </p>
    </motion.div>
  )
}

function HUD({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Rotating coordinate data simulation
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="fixed top-6 left-6 right-6 bottom-6 pointer-events-none z-50 mix-blend-difference text-white flex flex-col justify-between">
       {/* Top Bar */}
       <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase">
          <span>ECO-OS <span className="animate-pulse">●</span> REC</span>
          <span>Vision.tsx</span>
       </div>

       {/* Crosshairs */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px] border border-white/10 rounded-full flex items-center justify-center opacity-30">
          <motion.div style={{ rotate }} className="w-full h-px bg-white/20 absolute" />
          <motion.div style={{ rotate }} className="h-full w-px bg-white/20 absolute" />
       </div>

       {/* Bottom Bar */}
       <div className="flex justify-between items-end">
          <div className="text-[10px] font-mono space-y-1 opacity-60 hidden sm:block">
            <div>LAT: 34.0522° N</div>
            <div>LNG: 118.2437° W</div>
          </div>
          <span className="font-display text-2xl font-bold opacity-50">E/O</span>
       </div>
    </div>
  );
}