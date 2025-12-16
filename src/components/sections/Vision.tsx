"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type ViewMode = "friction" | "clarity" | "system";

export default function VisionSection() {
  const [mode, setMode] = useState<ViewMode>("friction");

  return (
    <main className="relative w-full bg-ink text-white selection:bg-mint/30 selection:text-ink">
      {/* CLOSE BUTTON */}
      <motion.button
        onClick={() => window.history.back()}
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="fixed z-50 top-6 right-6 active:scale-[0.98] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        aria-label="Close"
      >
        <div className="flex items-center gap-3 h-12 pl-4 pr-3 rounded-full bg-ink/90 border border-white/15 shadow-[0_18px_46px_rgba(0,0,0,0.65)] hover:border-white/25 transition-colors active:translate-y-[1px]">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
            Close
          </span>
          <span className="relative flex items-center justify-center w-8 h-8 rounded-full border border-white/15">
            <span className="absolute w-4 h-[2px] bg-white/80 rotate-45" />
            <span className="absolute w-4 h-[2px] bg-white/80 -rotate-45" />
          </span>
        </div>
      </motion.button>

      {/* STICKY VIEWPORT */}
      <div className="sticky top-0 h-screen w-full overflow-hidden isolate">
        <BackgroundLens mode={mode} />
        <InterfaceOverlay mode={mode} />
      </div>

      {/* CONTENT STREAM (scroll triggers) */}
      <div className="relative z-30 -mt-[100vh]">
        <Scene
          onEnter={() => setMode("friction")}
          align="left"
          kicker="Fig_01.1 // Before"
          title={
            <>
              The future
              <br />
              felt heavy.
            </>
          }
          body={
            <>
              Sustainability became a tone people had to carry.
              <br />
              Participation asked for sacrifice and offered little to return.
              <br />
              Good intent stayed private, scattered, and hard to keep going.
            </>
          }
          notes={[
            "Too many expectations",
            "Participation without belonging",
            "Effort without shared momentum",
          ]}
        />

        {/* Increased vertical spacing between scenes for a more generous scroll area */}
        <div className="h-[25vh] sm:h-[35vh]" />

        <Scene
          onEnter={() => setMode("clarity")}
          align="right"
          kicker="Fig_02.0 // Shift"
          kickerAccent="text-mint"
          title={
            <>
              Build better
              <br />
              defaults.
            </>
          }
          body={
            <>
              Ecodia is a world we are building.
              <br />
              A world where doing good fits into life - calm, natural, and worth repeating.
              <br />
              People join what feels right, and what’s shared becomes easier to carry.
            </>
          }
          notes={[
            "Invitation over instruction",
            "Shared benefit",
            "Local, visible progress",
          ]}
        />

        {/* Increased vertical spacing between scenes */}
        <div className="h-[25vh] sm:h-[35vh]" />

        <SceneCenter
          onEnter={() => setMode("system")}
          kicker="World_Mechanics"
          title={
            <>
              ECOLOGY
              <br />
              AS OS.
            </>
          }
          body={
            <>
              A world is shaped by what gets noticed, what gets shared, and what people can
              return to.
              <br />
              Ecodia is learning how to make participation feel natural - and how to let
              progress build without noise.
            </>
          }
          columns={[
            {
              title: "Visibility",
              items: [
                "Progress becomes something people can see",
                "Care becomes shared, not private",
                "Momentum can travel between people and places",
              ],
            },
            {
              title: "Benefit",
              items: [
                "Participation supports the person taking part",
                "Local life gains support through everyday choices",
                "Collective good can feel normal",
              ],
            },
            {
              title: "Continuity",
              items: [
                "Projects can outlive attention cycles",
                "Communities can hold memory over time",
                "The world keeps building forward",
              ],
            },
          ]}
        />

        {/* Final scroll spacer - Increased size for better bottom margin */}
        <div className="h-[40vh] sm:h-[50vh]" />
      </div>
    </main>
  );
}

/* =============================================================================
    BACKGROUND (No Changes)
============================================================================= */
function BackgroundLens({ mode }: { mode: ViewMode }) {
  return (
    <div className="relative w-full h-full bg-[#080808]">
      {/* BASE IMAGE (always) */}
      <Image
        src="/img/eco-district.png"
        alt="Background"
        fill
        className="object-cover opacity-60"
        priority
      />

      {/* GLOBAL DARKEN for legibility */}
      <div className="absolute inset-0 bg-black/55" />

      {/* MODE: FRICTION (blur + grain) */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          mode === "friction" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 backdrop-blur-[6px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80" />
      </div>

      {/* MODE: CLARITY (crisper, brighter, NO invert) */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          mode === "clarity" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-mint/5 mix-blend-soft-light" />
      </div>

      {/* MODE: SYSTEM (INVERTED + data overlay) */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          mode === "system" ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Invert ONLY this mode */}
        <div className="absolute inset-0 mix-blend-exclusion brightness-[1.6] invert">
          <Image
            src="/img/eco-district.png"
            alt="System Layer"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* bring it back down so it's readable */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-35" />

        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(to_right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to_bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>
    </div>
  );
}


/* =============================================================================
    HUD OVERLAY (No Changes)
============================================================================= */
function InterfaceOverlay({ mode }: { mode: ViewMode }) {
  const fileName =
    {
      friction: "IMG_0042_RAW.PNG",
      clarity: "IMG_0042_VIEW.JPG",
      system: "SYS_LOG.DAT",
    }[mode];

  const metaColor =
    {
      friction: "text-white/70",
      clarity: "text-mint",
      system: "text-white",
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
          REC ● 00:00:14:22
          <br />
          ISO 800
        </div>
      </div>

      {/* Crosshairs (fades in system) */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
          mode === "system" ? "opacity-30 scale-100" : "opacity-10 scale-110"
        }`}
      >
        <div className="w-[20vw] h-[1px] bg-white/50" />
        <div className="h-[20vh] w-[1px] bg-white/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end">
        <div className="flex gap-4 font-mono text-[10px] text-white/40">
          <span className={mode === "friction" ? "text-white underline" : ""}>RAW</span>
          <span className={mode === "clarity" ? "text-mint underline" : ""}>VIEW</span>
          <span className={mode === "system" ? "text-white underline" : ""}>DATA</span>
        </div>

        <div className={`transition-opacity duration-500 ${mode === "system" ? "opacity-100" : "opacity-0"}`}>
          <div className="h-10 w-24 border border-white/20 bg-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
            <div className="flex items-end h-full gap-[2px] p-1 justify-center opacity-50">
              {[40, 60, 30, 80, 100, 40, 20, 50, 70, 30].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="w-1.5 bg-white" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
    SCENES (Padding and Margin Refinements)
============================================================================= */

function Scene({
  onEnter,
  align,
  kicker,
  kickerAccent,
  title,
  body,
  notes,
}: {
  onEnter: () => void;
  align: "left" | "right";
  kicker: string;
  kickerAccent?: string;
  title: React.ReactNode;
  body: React.ReactNode;
  notes: string[];
}) {
  return (
    <TriggerSection onEnter={onEnter}>
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-12">
        <div className="grid grid-cols-12 items-end md:items-center min-h-[60vh] md:min-h-[70vh]">
          {/* alignment */}
          <div className={`${align === "left" ? "col-span-12 md:col-span-7 lg:col-span-6" : "col-span-12 md:col-start-6 lg:col-start-7 md:col-span-7 lg:col-span-6"} `}>
            
            {/* Scrim for readability (NOT a card, is a large, soft gradient overlay) */}
            <div className="relative">
              {/* Increased inset for a larger, softer shadow area */}
              <div
                className={`pointer-events-none absolute -inset-10 sm:-inset-16 rounded-[3rem] ${
                  align === "left"
                    ? "bg-gradient-to-r from-black/85 via-black/45 to-transparent"
                    : "bg-gradient-to-l from-black/85 via-black/45 to-transparent"
                }`}
              />
              
              {/* Added padding to the content within the scrim area for breathing room */}
              <div className={`relative p-4 sm:p-6 ${align === "right" ? "text-right" : "text-left"}`}>
                
                {/* Kicker (small label) - Increased bottom margin */}
                <div className={`flex items-center gap-3 mb-8 ${align === "right" ? "justify-end" : "justify-start"}`}>
                  {align === "right" ? (
                    <>
                      <span className={`font-mono text-xs uppercase tracking-[0.2em] font-bold ${kickerAccent ?? "text-white/60"}`}>
                        {kicker}
                      </span>
                      <div className={`w-2 h-2 rounded-full ${kickerAccent ? "bg-mint" : "bg-white/30"}`} />
                    </>
                  ) : (
                    <>
                      <div className="w-2 h-2 rounded-full bg-white/30" />
                      <span className={`font-mono text-xs uppercase tracking-[0.2em] font-bold ${kickerAccent ?? "text-white/60"}`}>
                        {kicker}
                      </span>
                    </>
                  )}
                </div>

                {/* Body - Increased top margin for separation from Title */}
                <p className="mt-10 font-serif text-xl sm:text-2xl leading-relaxed text-white/85">
                  {body}
                </p>

                {/* Notes/Metadata - Increased top margin and padding for separation */}
                <div className="mt-12 pt-10 border-t border-white/20">
                  <ul className={`space-y-4 font-mono text-[11px] uppercase tracking-widest text-white/60 ${align === "right" ? "ml-auto" : ""}`}>
                    {notes.map((n) => (
                      <li key={n} className={`flex gap-3 ${align === "right" ? "justify-end" : ""}`}>
                        <div className="w-[1px] h-3 bg-white/20" /> 
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* spacer column to keep right scene truly right on desktop */}
          <div className={`${align === "left" ? "hidden md:block md:col-span-5 lg:col-span-6" : "hidden md:block md:col-span-5 lg:col-span-6 md:col-start-1"}`} />
        </div>
      </div>
    </TriggerSection>
  );
}

function SceneCenter({
  onEnter,
  kicker,
  title,
  body,
  columns,
}: {
  onEnter: () => void;
  kicker: string;
  title: React.ReactNode;
  body: React.ReactNode;
  columns: { title: string; items: string[] }[];
}) {
  return (
    <TriggerSection onEnter={onEnter}>
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-12">
        <div className="min-h-[70vh] flex items-center">
          <div className="w-full text-center">
            
            {/* Kicker Badge - Increased bottom margin for more separation from Title */}
            <div className="inline-flex items-center justify-center bg-ink/80 border border-white/10 px-6 py-2 rounded-full mb-12 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-white font-bold">
                {kicker}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-7xl sm:text-[10rem] leading-[0.82] tracking-tighter text-white mix-blend-difference">
              {title}
            </h2>

            {/* Body - Increased top margin for better separation from Title */}
            <p className="mt-12 mx-auto max-w-4xl font-serif text-xl sm:text-2xl leading-relaxed text-white/85">
              {body}
            </p>

            {/* Column Content - Increased top margin and padding for significant separation */}
            <div className="mt-24 text-left">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/25 pt-16">
                {columns.map((c) => (
                  <div key={c.title} className="pl-6 border-l border-white/40">
                    <div className="font-display text-3xl text-white mb-5">{c.title}</div>
                    <ul className="space-y-4 font-serif text-lg text-white/75 leading-relaxed">
                      {c.items.map((it) => (
                        <li key={it} className="flex gap-3">
                          <span className="text-mint text-xl leading-none">•</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* soft scrim behind columns for legibility - adjusted margin for new spacing */}
              <div className="pointer-events-none mt-[-20rem] h-[20rem] w-full bg-gradient-to-t from-black/55 via-black/10 to-transparent rounded-[2rem]" />
            </div>
          </div>
        </div>
      </div>
    </TriggerSection>
  );
}

function TriggerSection({
  children,
  onEnter,
}: {
  children: React.ReactNode;
  onEnter: () => void;
}) {
  return (
    <motion.section
      className="h-screen w-full flex items-end md:items-center"
      onViewportEnter={onEnter}
      viewport={{ margin: "-50% 0px -50% 0px" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28, filter: "blur(1px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full pb-20 md:pb-0"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}