// src/app/page.tsx
import Link from "next/link";
import { HeroTitle } from "@/components/sections/HeroTitle";
import { StickyNarrative } from "@/components/sections/StickyNarrative";
import { TechnologySection } from "@/components/sections/TechSection"; // The Blueprint (Dark)
import { HomeLabs } from "@/components/sections/HomeLabs"; // New Component
import { HomeValues } from "@/components/sections/HomeValues"; // The Moral Compass (NEW)
import { HomeEcosystem } from "@/components/sections/HomeEcosystem"; // The Garden (Warm)
import { InfiniteTicker } from "@/components/ui/InfiniteTicker";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-ink selection:bg-mint selection:text-ink">
      
      {/* 1. TEXTURE & ATMOSPHERE */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-gold/30 rounded-full blur-[120px] opacity-60 mix-blend-multiply" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-mint/40 rounded-full blur-[120px] opacity-60 mix-blend-multiply" />
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-screen w-full flex flex-col px-6 sm:px-12 pt-32 pb-24 max-w-[90rem] mx-auto">
         {/* Top Tag */}
         <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-ink animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
               Regenerative_OS_v1.0
            </span>
         </div>
         {/* Title */}
         <div className="flex-1 flex flex-col justify-center items-center py-12">
            <HeroTitle />
         </div>
         {/* Control Deck (FIXED FOR CENTERING) */}
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mt-auto">
        
        {/* LEFT: Geo Data (Visible on Desktop) */}
        <div className="hidden md:flex flex-col gap-1 font-mono text-[10px] text-ink/40 uppercase tracking-widest text-left opacity-100 min-w-[120px]">
            <span>Lat: 26.6528° S</span>
        </div>
        
        {/* CENTER: Main Action (Explicitly linked to /company) */}
        <a 
            href="/company" 
            className="group relative px-10 py-4 bg-ink text-white rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-ink/20 w-full md:w-auto text-center"
        >
            <div className="relative z-10 flex items-center justify-center gap-3 font-medium tracking-wide text-sm md:text-base">
                <span>Step In</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
        </a>
        {/* LEFT: Geo Data (Visible on Desktop) */}
        <div className="hidden md:flex flex-col gap-1 font-mono text-[10px] text-ink/40 uppercase tracking-widest text-left opacity-100 min-w-[120px]">
            <span>Lon: 153.0896° E</span>
        </div>
       

    </div>
</section>

      {/* 3. TICKER */}
      <div className="border-y border-ink/10 bg-white py-4 md:py-6">
         <InfiniteTicker items={[
            "Optimism is a strategy", "•", "Ecology is Technology", "•", "The Commons", "•", "Regeneration", "•"
         ]} />
      </div>

      {/* 4. NARRATIVE (Sticky Scroll) */}
      <StickyNarrative />

      {/* 5. SEGMENT: TECHNOLOGY (Dark Blueprint) */}
      <TechnologySection />

      {/* 6. SEGMENT: ECOSYSTEM (Warm Network) */}
      <HomeEcosystem />
      <HomeLabs />
      <HomeValues />
      
      {/* (You could add a 'HomeLabs' segment here too if you wanted, 
         but usually 2 big feature sections is enough before the footer) 
      */}

      <Footer />
    </main>
  );
}