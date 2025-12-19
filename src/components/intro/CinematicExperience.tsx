// src/components/intro/CinematicExperience.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  /** Your seedling PNG; use a sensible width so it’s never upscaled */
  logoSrc?: string;
  logoSrc2x?: string | null; // optional
  logoSrc3x?: string | null; // optional
  logoWidthPx?: number;      // default 680

  /** Timings (ms) */
  fadeInMs?: number;   // 250–400 feels sharp
  holdMs?: number;     // how long the logo stays before fade out
  fadeOutMs?: number;  // 500–700 feels confident

  /** Optional UI toggles */
  showGrain?: boolean;
  showVignette?: boolean;
};

export function CinematicExperience({
  logoSrc = "/img/labs-logo-long.png",
  logoSrc2x = null,
  logoSrc3x = null,
  logoWidthPx = 680,

  fadeInMs = 320,
  holdMs = 750,
  fadeOutMs = 620,

  showGrain = true,
  showVignette = true,
}: Props) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit" | "done">("enter");

  // Respect reduced motion
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setPhase("done");
      return;
    }

    const original = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const t1 = window.setTimeout(() => setPhase("hold"), fadeInMs);
    const t2 = window.setTimeout(() => setPhase("exit"), fadeInMs + holdMs);
    const t3 = window.setTimeout(() => setPhase("done"), fadeInMs + holdMs + fadeOutMs);

    return () => {
      document.documentElement.style.overflow = original || "";
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [fadeInMs, holdMs, fadeOutMs]);

  if (phase === "done") return null;

  const imgProps =
    logoSrc2x || logoSrc3x
      ? { srcSet: `${logoSrc} 1x${logoSrc2x ? `, ${logoSrc2x} 2x` : ""}${logoSrc3x ? `, ${logoSrc3x} 3x` : ""}` }
      : {};

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        className="fixed inset-0 z-[9999] bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: fadeInMs / 1000 } }}
        exit={{ opacity: 0, transition: { duration: fadeOutMs / 1000 } }}
        aria-hidden
      >
        {/* Atmosphere (static) */}
        {showVignette && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.10) 100%)",
            }}
          />
        )}
        {showGrain && (
          <div
            className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-20"
            style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
          />
        )}

        {/* Centered mark */}
        <div className="absolute inset-0 grid place-items-center">
          <img
            src={logoSrc}
            {...imgProps}
            alt="Ecodia Labs"
            draggable={false}
            style={{
              width: `${logoWidthPx}px`,
              height: "auto",
              display: "block",
              // avoid any render jank
              imageRendering: "auto",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          />
        </div>

        {/* Skip (just in case) */}
        <button
          onClick={() => setPhase("done")}
          className="absolute bottom-6 right-6 text-ink/60 hover:text-ink bg-white/70 hover:bg-white/90 border border-ink/10 rounded-full px-4 py-2 text-xs font-medium backdrop-blur-sm transition"
        >
          Skip
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
