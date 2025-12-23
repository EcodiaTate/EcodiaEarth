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
import { HomeLeafIndex } from "@/components/sections/HomePorts";
import { HomePressLegal } from "@/components/sections/HomePressLegal";

// Shell
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-ink selection:bg-mint selection:text-ink perspective-1000">
      {/* Cinematic overlays */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.8] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

      <HeroTitle />
      <section id="values"><HomeLeafIndex /></section>
      <HomeVision />
      <StickyNarrative />
      <section id="tech"><TechnologySection /></section>
      <section id="eco"><HomeEcosystem /></section>
      <section id="labs"><HomeLabs /></section>
      <section id="values"><HomeValues /></section>
      <HomeEntry />
      <HomePressLegal />
      <Footer />
    </main>
  );
}
