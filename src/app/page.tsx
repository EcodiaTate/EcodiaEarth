// src/app/page.tsx
import { LivingBackground } from "@/components/layout/LivingBackground"; 
import { StickyNarrative } from "@/components/sections/StickyNarrative";
import VisionSection from "@/components/sections/Vision";
import { HeroTitle } from "@/components/sections/HeroTitle";
import { CinematicButton } from "@/components/ui/CinematicButton";
import { SmoothLink } from "@/components/nav/SmoothLink";
import { CineRise, CineStagger, CineItem } from "@/components/motion/Cinematic";
import { CinematicNav } from "@/components/nav/CinematicNav"; // Import the new component

export default function HomePage() {
  return (
    // FIX: Removed 'overflow-x-hidden'. 
    // Now the sticky elements can "see" the viewport height and stick correctly.
    <main className="min-h-screen relative">
      
      {/* 1. ATMOSPHERE */}
      <div className="fixed inset-0 -z-10 bg-stone-50">
         <div className="opacity-40">
            <LivingBackground />
         </div>
      </div>

      {/* 2. HERO */}
      <section className="relative px-6 pt-32 pb-20 mx-auto max-w-6xl">
        <div className="mb-8">
           <HeroTitle />
        </div>

        <CineRise delay={0.4}>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
            Ecodia is a social economy where doing good feels good. Bright, human, and local.
          </p>
        </CineRise>
        
        <CineRise delay={0.6}>
          <div className="flex flex-wrap gap-4 mt-12">
             <CinematicButton className="btn-primary w-full sm:w-auto" href="https://ecodia.au">
               Enter the app
             </CinematicButton>
             
             <SmoothLink className="btn-outline w-full sm:w-auto justify-center" href="/vision">
               Our vision
             </SmoothLink>
          </div>
        </CineRise>
      </section>

      <div className="h-24" /> 

      {/* 3. EXPERIENCE: The "Deep Tunnel" Narrative 
          This will now stick perfectly for 300vh of scrolling.
      */}
      <StickyNarrative />

      {/* 3b. NAVIGATION: The Beacons */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {/* We wrap it in CineRise so the whole menu floats up together */}
        <CineRise delay={0.2}>
          <CinematicNav 
            items={[
              { 
                label: "01 — PROGRESS", 
                title: "See the roadmap", 
                href: "/roadmap", 
                color: "emerald" 
              },
              { 
                label: "02 — MEDIA", 
                title: "Press kit", 
                href: "/press", 
                color: "amber" 
              },
              { 
                label: "03 — TALK", 
                title: "Get in contact", 
                href: "/contact", 
                color: "indigo" 
              },
            ]} 
          />
        </CineRise>
      </section>

      <div className="h-24" /> 

      <div className="h-24" />

      {/* 5. STRUCTURE */}
      <section className="mx-auto max-w-6xl px-6 py-20">
         <div className="border-t border-slate-200 mb-16" /> 
         
         <div className="grid gap-16 md:grid-cols-2">
            <CineRise>
               <h3 className="font-display text-3xl mb-4 text-emerald-900">Ecodia Pty Ltd</h3>
               <p className="text-lg text-muted-foreground leading-relaxed max-w-prose">
                 The platform and community. Operations, partnerships, and the everyday experience.
               </p>
               <div className="mt-6">
                 <SmoothLink href="/company" className="font-medium underline underline-offset-4 decoration-slate-300 hover:decoration-emerald-500 transition-all">
                   Learn more
                 </SmoothLink>
               </div>
            </CineRise>

            <CineRise delay={0.2} className="md:border-l md:pl-16 border-slate-200">
               <h3 className="font-display text-3xl mb-4 text-indigo-900">Ecodia Labs Pty Ltd</h3>
               <p className="text-lg text-muted-foreground leading-relaxed max-w-prose">
                 R&D, IP, and ethics. We invent, test, and protect the engine behind Ecodia.
               </p>
               <div className="mt-6">
                 <SmoothLink href="/labs" className="font-medium underline underline-offset-4 decoration-slate-300 hover:decoration-indigo-500 transition-all">
                   Inside Labs
                 </SmoothLink>
               </div>
            </CineRise>
         </div>
      </section>

      {/* 6. FOOTER */}
      <section className="py-24 px-6 text-center border-t border-slate-200/60">
        <CineRise>
           <p className="text-xl sm:text-2xl font-display text-slate-800 mb-8">
             If you create, organise, or want to help — 
             <SmoothLink href="/contact" className="ml-2 underline underline-offset-4 decoration-2 decoration-emerald-400 hover:text-emerald-700 hover:decoration-emerald-600 transition-all">
               join us
             </SmoothLink>.
           </p>
        </CineRise>
      </section>
      
    </main>
  );
}