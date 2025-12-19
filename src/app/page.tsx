// HomePage.tsx
"use client";

import { motion } from "framer-motion";

// Sections
import { HeroTitle } from "@/components/sections/HeroTitle";
import { StickyNarrative } from "@/components/sections/StickyNarrative";
import { TechnologySection } from "@/components/sections/HomeTech";
import { HomeLabs } from "@/components/sections/HomeLabs";
import { HomeValues } from "@/components/sections/HomeValues";
import { HomeEcosystem } from "@/components/sections/HomeEcosystem";
import { HomeVision } from "@/components/sections/HomeVision";
import { HomeEntry } from "@/components/sections/HomeEntry";
import { HomePressLegal } from "@/components/sections/HomePressLegal";

// Shell
import { DigitalOverlay } from "@/components/intro/DigitalOverlay";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-ink selection:bg-mint selection:text-ink perspective-1000">
      {/* Cinematic overlays */}
      <DigitalOverlay />
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.8] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

      {/* Atmosphere */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: 360, scale: 1.05 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-gold/30 rounded-full blur-[160px] opacity-70 mix-blend-multiply"
        />
        <motion.div
          initial={{ rotate: 360, scale: 1.05 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-mint/40 rounded-full blur-[160px] opacity-70 mix-blend-multiply"
        />
      </div>

      {/* Hero */}
      <HeroTitle />

      {/* Vision peek near the top; full page lives at /vision */}
     

      {/* Control Deck — coordinates & global pulse keyframes */}
      <section className="relative w-full max-w-[90rem] mx-auto px-6 sm:px-12 -mt-2">
        <div className="w-full flex items-center justify-between gap-8 md:gap-0">
          <div className="hidden md:flex flex-col gap-1 font-mono text-[10px] text-ink/40 uppercase tracking-widest min-w-[120px] text-left">
            <span>LAT: 26.6528° S</span>
            <span className="text-gold/80 animate-pulse-fast">ACTIVE / CONNECTED</span>
          </div>
          <div className="hidden md:flex flex-col gap-1 font-mono text-[10px] text-ink/40 uppercase tracking-widest min-w-[120px] text-right">
            <span>LNG: 153.0896° E</span>
            <span className="text-mint/80 animate-pulse-fast">SYSTEM ONLINE</span>
          </div>
        </div>
        <style jsx global>{`
          @keyframes pulse-fast { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
          .animate-pulse-fast { animation: pulse-fast 1s infinite; }
        `}</style>
      </section>
      <HomeVision />
      {/* Narrative + core sections (with anchor IDs for Wayfinder) */}
      <StickyNarrative />
      <section id="tech"><TechnologySection /></section>
      <section id="eco"><HomeEcosystem /></section>
      <section id="labs"><HomeLabs /></section>
      <section id="values"><HomeValues /></section>
      <HomePressLegal />
      {/* CTA-style Entry placed near the bottom */}
      <HomeEntry />

      {/* Press / Legal hub */}
  

      <Footer />
    </main>
  );
}
