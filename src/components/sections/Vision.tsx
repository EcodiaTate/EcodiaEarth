"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type ViewMode = "friction" | "clarity" | "system";

/**
 * ECODIA VISION PROTOCOL
 * Materiality: Transitions from Grainy Dark (#080808) to Warm Paper (#F9F8F5)
 * Strategy: Documentation of the Shift.
 */

export default function VisionSection() {
  const [mode, setMode] = useState<ViewMode>("friction");

  return (
    <main className={`relative w-full min-h-screen transition-colors duration-1000 ${mode === 'system' ? 'bg-[#F9F8F5] text-[#2D2B28]' : 'bg-[#080808] text-white'}`}>
      
      {/* 1. EXIT PROTOCOL (OFFSET) */}
      <motion.button
        onClick={() => window.history.back()}
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed z-50 top-12 right-12 group flex items-center gap-3 border border-current px-4 py-2 transition-all hover:bg-current hover:invert"
      >
        <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em]">Return</span>
      </motion.button>

      {/* 2. BACKGROUND TOPOGRAPHY */}
      <div className="sticky top-0 h-screen w-full overflow-hidden isolate pointer-events-none">
        <BackgroundLens mode={mode} />
        <InertialHUD mode={mode} />
      </div>

      {/* 3. CONTENT STREAM (FIELD LOGS) */}
      <div className="relative z-30 -mt-[100vh]">
        <Scene
          onEnter={() => setMode("friction")}
          align="left"
          kicker="Log_01.1 // The Weight"
          title="THE FUTURE FELT HEAVY."
          body="Sustainability was a burden to carry. Participation asked for sacrifice and offered no return. Good intent stayed private, scattered, and stalled by friction."
          notes={["System_Strain", "Participation_Gap", "Inertial_Resistance"]}
        />

        <div className="h-[50vh]" />

        <Scene
          onEnter={() => setMode("clarity")}
          align="right"
          kicker="Log_02.0 // The Sprout"
          title="BUILD BETTER DEFAULTS."
          body="Ecodia is the architecture of the world we build next. A world where participation is the default condition—calm, structural, and worth repeating."
          notes={["Node_Activation", "Shared_Upside", "Visible_Drift"]}
        />

        <div className="h-[50vh]" />

        <SceneCenter
          onEnter={() => setMode("system")}
          kicker="Protocol_Active"
          title="ECOLOGY AS OS."
          body="A world is shaped by residue. Ecodia makes participation natural—allowing progress to accumulate without the noise of marketing."
          columns={[
            {
              title: "Visibility",
              items: ["Progress becomes physical", "Care becomes structural", "Momentum travels through nodes"],
            },
            {
              title: "Benefit",
              items: ["Personal and shared logic overlap", "Local economies gain mass", "Collective good is the default"],
            },
            {
              title: "Continuity",
              items: ["Projects outlive attention", "Communities hold memory", "The grid builds forward"],
            },
          ]}
        />

        <div className="h-[50vh]" />
      </div>
    </main>
  );
}

/* =============================================================================
    BACKGROUND EVOLUTION
============================================================================= */
function BackgroundLens({ mode }: { mode: ViewMode }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* BASE TOPOGRAPHY */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${mode === 'system' ? 'opacity-20 grayscale' : 'opacity-40'}`}>
        <Image
          src="/img/eco-district.png"
          alt="District Map"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* MODE: FRICTION (DARK / GRAIN) */}
      <div className={`absolute inset-0 bg-[#080808] transition-opacity duration-1000 ${mode === 'friction' ? 'opacity-80' : 'opacity-0'}`}>
         <div className="absolute inset-0 backdrop-blur-xl" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />
      </div>

      {/* MODE: SYSTEM (WARM PAPER / GRID) */}
      <div className={`absolute inset-0 bg-[#F9F8F5] transition-opacity duration-1000 ${mode === 'system' ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(#2D2B28 1px, transparent 1px), linear-gradient(90deg, #2D2B28 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
    </div>
  );
}

/* =============================================================================
    HUD: INERTIAL READOUTS
============================================================================= */
function InertialHUD({ mode }: { mode: ViewMode }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 p-12 flex flex-col justify-between">
      <div className="flex justify-between items-start opacity-30">
        <div className="font-mono text-[9px] uppercase tracking-[0.5em]">
          Vision_Telemetry // {mode.toUpperCase()}
        </div>
        <div className="text-right font-mono text-[8px] tracking-[0.2em]">
          Lat: -26.6500 <br /> Lon: 153.0667
        </div>
      </div>
      
      {/* CENTER CALIBRATION (SYSTEM ONLY) */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 border border-current transition-all duration-1000 ${mode === 'system' ? 'opacity-10 scale-100' : 'opacity-0 scale-150'}`} />

      <div className="flex justify-between items-end opacity-30">
        <div className="flex gap-8 font-mono text-[9px] uppercase tracking-widest">
          <span>Stasis</span>
          <span>Emergence</span>
          <span className={mode === 'system' ? 'font-black underline' : ''}>Active</span>
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
    SCENE: TOPOGRAPHIC CONTENT
============================================================================= */
function Scene({ align, kicker, title, body, notes, onEnter }: any) {
  return (
    <TriggerSection onEnter={onEnter}>
      <div className={`mx-auto max-w-7xl px-12 grid grid-cols-12 min-h-[70vh] items-center`}>
        <div className={`${align === 'left' ? 'col-span-12 lg:col-span-6' : 'col-span-12 lg:col-start-7 lg:col-span-6'} space-y-12`}>
          <div className="space-y-4">
             <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">{kicker}</div>
             <h2 className="text-6xl font-black leading-[0.85] tracking-tighter sm:text-7xl lg:text-8xl">
                {title}
             </h2>
          </div>
          <p className="text-2xl font-medium leading-tight tracking-tight opacity-70">
            {body}
          </p>
          <div className="flex gap-4 opacity-40">
            {notes.map((n: string) => (
              <span key={n} className="text-[9px] uppercase tracking-widest border border-current px-2 py-1">{n}</span>
            ))}
          </div>
        </div>
      </div>
    </TriggerSection>
  );
}

function SceneCenter({ kicker, title, body, columns, onEnter }: any) {
  return (
    <TriggerSection onEnter={onEnter}>
      <div className="mx-auto max-w-7xl px-12 py-32 space-y-24">
        <div className="space-y-12 text-center">
           <div className="inline-block border-2 border-current px-6 py-2 text-xs font-black uppercase tracking-[0.4em]">
             {kicker}
           </div>
           <h2 className="text-[15vw] font-black leading-[0.8] tracking-tighter md:text-[12rem]">
             {title}
           </h2>
           <p className="mx-auto max-w-3xl text-2xl font-medium opacity-70">
             {body}
           </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-current/10 border border-current/10 md:grid-cols-3">
          {columns.map((c: any) => (
            <div key={c.title} className="bg-inherit p-10 space-y-8">
               <h3 className="text-xl font-black tracking-tighter uppercase">{c.title}</h3>
               <ul className="space-y-4 opacity-70">
                 {c.items.map((it: string) => (
                   <li key={it} className="flex gap-4 text-sm leading-snug italic">
                     <span className="text-[#7FD069]">•</span>
                     {it}
                   </li>
                 ))}
               </ul>
            </div>
          ))}
        </div>
      </div>
    </TriggerSection>
  );
}

function TriggerSection({ children, onEnter }: any) {
  return (
    <motion.section
      onViewportEnter={onEnter}
      viewport={{ margin: "-50% 0px -50% 0px" }}
      className="min-h-screen flex items-center"
    >
      {children}
    </motion.section>
  );
}