// HomePage.tsx (Corrected Layout)
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Components
import { HeroTitle } from "@/components/sections/HeroTitle";
import { StickyNarrative } from "@/components/sections/StickyNarrative";
import { TechnologySection } from "@/components/sections/HomeTech";
import { HomeLabs } from "@/components/sections/HomeLabs";
import { HomeValues } from "@/components/sections/HomeValues";
import { HomeEcosystem } from "@/components/sections/HomeEcosystem";
import { DigitalOverlay } from "@/components/intro/DigitalOverlay"; 
import { Footer } from "@/components/layout/Footer";
import { ActivationButton } from "@/components/ui/ActivationButton"; 

export default function HomePage() {
  return (
    // ENHANCEMENT 1: Add perspective to the main tag for depth hint
    <main className="min-h-screen bg-white text-ink selection:bg-mint selection:text-ink perspective-1000">
      
      {/* NEW: Cinematic Grid/Scanline Overlay (z-40) */}
      <DigitalOverlay />
      
      {/* ENHANCEMENT 2: Grainy Overlay (z-50) */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.8] bg-[url('https://grainy-gradients.vercel-app/noise.svg')] mix-blend-multiply" />
      
      {/* ENHANCEMENT 3: Background Reactor/Atmosphere (z-10) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        
        {/* GOLD Sphere - Slow clockwise rotation and pulse */}
        <motion.div 
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: 360, scale: 1.05 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-gold/30 rounded-full blur-[160px] opacity-70 mix-blend-multiply" 
        />
        
        {/* MINT Sphere - Slow counter-clockwise rotation and pulse */}
        <motion.div 
          initial={{ rotate: 360, scale: 1.05 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-mint/40 rounded-full blur-[160px] opacity-70 mix-blend-multiply" 
        />
      </div>

      {/* HERO (self-contained with the long logo and Parallax effects) */}
      <HeroTitle />

      {/* Control Deck (Enhanced Cinematic Activation) */}
      {/* The main container uses justify-between to push the two coordinate blocks to the edges. */}
      <section className="relative w-full max-w-[90rem] mx-auto px-6 sm:px-12 -mt-2">
        
        {/* Main layout container: flex justify-between pushes content apart */}
        <div className="w-full flex items-center justify-between gap-8 md:gap-0">
          
          {/* Animated Coordinates (Lat) - Left Aligned */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            // text-left ensures alignment of the coordinate text
            // min-w-[120px] ensures space for the button to center correctly
            className="hidden md:flex flex-col gap-1 font-mono text-[10px] text-ink/40 uppercase tracking-widest min-w-[120px] text-left"
          >
            <span>LAT: 26.6528° S</span>
            <span className="text-gold/80 animate-pulse-fast">ACTIVE / CONNECTED</span> 
          </motion.div>
          
          {/* Activation Button - CENTERED FIX: The ActivationButton component is placed directly 
              in the justify-between container. Since its neighbors are fixed width (min-w-[120px]),
              and the main container has justify-between, the button naturally centers.
              On mobile, the neighbors are hidden, and the button (which uses w-full in its own
              component) needs to be wrapped in a centered container for responsive centering. 
              
              We'll wrap it in a div that uses flex justify-center, which is the most reliable way 
              to center an element on mobile when the side elements are hidden.
          */}
          <div className="w-full flex justify-center md:w-auto">
             <ActivationButton />
          </div>

          {/* Animated Coordinates (Lon) - Right Aligned */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            // text-right ensures alignment of the coordinate text
            // min-w-[120px] ensures space for the button to center correctly
            className="hidden md:flex flex-col gap-1 font-mono text-[10px] text-ink/40 uppercase tracking-widest min-w-[120px] text-right"
          >
            <span>LON: 153.0896° E</span>
            <span className="text-mint/80 animate-pulse-fast">SYSTEM ONLINE</span> 
          </motion.div>
          
        </div>
        
        {/* Global style for the faster coordinate pulse animation */}
        <style jsx global>{`
          @keyframes pulse-fast { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
          .animate-pulse-fast { animation: pulse-fast 1s infinite; }
        `}</style>
      </section>

      {/* Narrative + Sections */}
      <StickyNarrative />
      <TechnologySection />
      <HomeEcosystem />
      <HomeLabs />
      <HomeValues />

      <Footer />
    </main>
  );
}