// src/components/sections/CompanySection.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Ecodia (Op Co) - homepage/section
 * Brighter, mobile-first, NO layout jitter:
 * - content area is a consistent height
 * - panel swaps are absolute (no height collapse)
 * - right rail becomes a second "card" on mobile (stacked)
 */

// --- DATA: PANELS (Op Co) ---
const FILES = [
  {
    id: "01",
    label: "Product",
    sub: "Real-world sidequests",
    kicker: "What it’s like",
    theme: {
      bg: "from-[#0F1712] via-[#132019] to-[#1A2A21]",
      orbA: "bg-mint/32",
      orbB: "bg-gold/28",
      accent: "text-mint",
      text: "text-white",
      muted: "text-white/70",
      border: "border-white/14",
      chip: "border-mint/35 text-mint",
      line: "bg-mint/75",
      surface: "bg-white/10",
      surfaceSoft: "bg-white/7",
    },
    content: [
      "Ecodia is a system for doing real things — small actions that fit the day and add up over time.",
      "You get clear prompts, real places, and progress that’s easy to pick back up.",
    ],
    bullets: ["Fits real life", "Progress you can return to", "Shared, without the noise"],
    tags: ["SIDEQUESTS", "PROGRESS", "REAL_PLACES"],
  },
  {
    id: "02",
    label: "Local",
    sub: "Value kept close",
    kicker: "Where it lands",
    theme: {
      bg: "from-[#0F1712] via-[#152119] to-[#243425]",
      orbA: "bg-gold/32",
      orbB: "bg-mint/22",
      accent: "text-gold",
      text: "text-white",
      muted: "text-white/70",
      border: "border-white/14",
      chip: "border-gold/35 text-gold",
      line: "bg-gold/75",
      surface: "bg-white/10",
      surfaceSoft: "bg-white/7",
    },
    content: [
      "We start local because it’s easier to feel what’s changing.",
      "The goal is simple: when people participate, the places around them get stronger — businesses, venues, community spaces.",
    ],
    bullets: ["Nearby quests", "Local rewards", "Back into place"],
    tags: ["NEARBY", "PLACES", "RETURN_VALUE"],
  },
  {
    id: "03",
    label: "Studio",
    sub: "Upcycled marketplace",
    kicker: "Make it again",
    theme: {
      bg: "from-[#0F1712] via-[#151F1A] to-[#24223A]",
      orbA: "bg-mint/24",
      orbB: "bg-indigo-400/22",
      accent: "text-indigo-200",
      text: "text-white",
      muted: "text-white/70",
      border: "border-white/14",
      chip: "border-indigo-200/35 text-indigo-200",
      line: "bg-indigo-200/75",
      surface: "bg-white/10",
      surfaceSoft: "bg-white/7",
    },
    content: [
      "Studio is for remaking things — upcycle, repair, rewear. Practical and creative.",
      "It’s built around craft and taste, not guilt. Just better defaults.",
    ],
    bullets: ["Upcycled drops", "Repair-friendly", "Creators close to community"],
    tags: ["UPCYCLE", "REPAIR", "REWEAR"],
  },
] as const;

type FileItem = (typeof FILES)[number];

export default function CompanySection() {
  const [active, setActive] = useState(0);
  const router = useRouter();

  const item: FileItem = FILES[active];

  return (
    <motion.section className="relative w-full overflow-hidden" initial={false}>
      {/* CLOSE */}
      <motion.button
        onClick={() => router.back()}
        initial={{ y: -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="fixed z-50 top-4 right-4 sm:top-6 sm:right-6 rounded-2xl active:scale-[0.98] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
        aria-label="Close"
      >
        <div className="group flex items-center gap-3 rounded-2xl px-4 py-2 border border-white/14 bg-gradient-to-b from-white/10 to-white/4 shadow-[0_10px_30px_rgba(0,0,0,0.28)] hover:from-white/14 hover:to-white/6 transition-colors">
          <span className="text-lg leading-none text-white/80">×</span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/75">
            Close
          </span>
        </div>
      </motion.button>

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.theme.bg} transition-colors duration-700`}
        />

        <motion.div
          key={`${item.id}-orb-a`}
          className={`absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl ${item.theme.orbA}`}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          key={`${item.id}-orb-b`}
          className={`absolute -bottom-48 -right-48 h-[620px] w-[620px] rounded-full blur-3xl ${item.theme.orbB}`}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        <div className="absolute inset-0 opacity-[0.10] mix-blend-overlay bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.42)_72%,rgba(0,0,0,0.62)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24">
        {/* HEADER */}
        <div
          className={`flex flex-col gap-8 pb-8 sm:pb-10 border-b ${item.theme.border}`}
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className={`h-2 w-2 rounded-full ${item.theme.line}`} />
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.22em] ${item.theme.muted}`}
              >
                Ecodia / Operating Company
              </span>
            </div>

            <h2
              className={`font-display text-4xl sm:text-5xl md:text-6xl leading-[0.98] tracking-tight ${item.theme.text}`}
            >
              What we’re building.
            </h2>

            <p
              className={`mt-5 text-base sm:text-lg leading-relaxed ${item.theme.muted} max-w-2xl`}
            >
              Tools that make real-world action easier to start, and easier to keep going.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div
              className={`font-mono text-[10px] uppercase tracking-widest ${item.theme.muted}`}
            >
              Status
            </div>
            <div
              className={`font-mono text-[10px] uppercase tracking-widest ${item.theme.text}`}
            >
              BUILDING / ITERATING
            </div>
          </div>
        </div>

        <div className="mt-10">
          {/* NAV */}
          <div
            className={`rounded-3xl border ${item.theme.border} ${item.theme.surface} backdrop-blur-xl`}
          >
            <div className={`p-4 sm:p-5 border-b ${item.theme.border}`}>
              <div
                className={`font-mono text-[10px] uppercase tracking-[0.22em] ${item.theme.muted}`}
              >
                Sections
              </div>
            </div>

            <div className="p-3 sm:p-4">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {FILES.map((f, idx) => {
                  const isActive = idx === active;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setActive(idx)}
                      className={`
                        rounded-2xl px-3 py-3 sm:px-4 sm:py-4 text-left
                        transition-colors
                        ${isActive ? "bg-white/12" : "bg-white/0 hover:bg-white/7"}
                      `}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`font-mono text-[10px] tracking-widest ${
                            isActive ? item.theme.accent : "text-white/45"
                          }`}
                        >
                          /{f.id}
                        </span>
                        <span
                          className={`font-mono text-[10px] uppercase tracking-widest ${
                            isActive ? "text-white/70" : "text-white/35"
                          }`}
                        >
                          {isActive ? "OPEN" : "VIEW"}
                        </span>
                      </div>
                      <div
                        className={`mt-2 font-display text-lg sm:text-xl tracking-tight ${
                          isActive ? "text-white" : "text-white/70"
                        }`}
                      >
                        {f.label}
                      </div>
                      <div
                        className={`mt-1 font-mono text-[9px] uppercase tracking-widest ${
                          isActive ? "text-white/60" : "text-white/40"
                        }`}
                      >
                        {f.sub}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className={`px-4 sm:px-5 pb-5 pt-2 ${item.theme.muted} text-xs leading-relaxed`}
            >
              <span className="font-mono uppercase tracking-widest text-[10px] block mb-2 opacity-70">
                Note
              </span>
              A quick snapshot — this changes fast.
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 lg:gap-8 items-stretch">
            {/* Main Card */}
            <div
              className={`rounded-3xl border ${item.theme.border} ${item.theme.surface} backdrop-blur-xl overflow-hidden`}
            >
              <div className={`p-6 sm:p-8 border-b ${item.theme.border}`}>
                <div className="flex flex-col gap-5">
                  <div>
                    <div
                      className={`font-mono text-[10px] uppercase tracking-[0.22em] ${item.theme.muted}`}
                    >
                      {item.kicker}
                    </div>

                    <h3
                      className={`mt-3 font-display text-3xl sm:text-4xl tracking-tight ${item.theme.text}`}
                    >
                      {item.label}
                      <span className={`ml-3 ${item.theme.muted} font-display`}>/</span>
                      <span
                        className={`ml-3 ${item.theme.muted} font-serif italic text-2xl sm:text-3xl`}
                      >
                        {item.sub}
                      </span>
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border ${item.theme.chip} bg-white/0`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`h-[2px] w-10 ${item.theme.line}`} />
                    <div className="h-[2px] w-10 bg-white/12" />
                    <div className="h-[2px] w-10 bg-white/12" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative min-h-[520px] sm:min-h-[520px] md:min-h-[480px] lg:min-h-[520px]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={item.id}
                      className="absolute inset-0"
                      initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                      style={{ willChange: "transform, opacity, filter" }}
                    >
                      <div className="p-6 sm:p-8">
                        <div>
                          {item.content.map((p, i) => (
                            <p
                              key={i}
                              className={`text-base sm:text-lg leading-relaxed ${item.theme.text} ${
                                i === 0 ? "" : "mt-4"
                              } opacity-90`}
                            >
                              {p}
                            </p>
                          ))}
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                          {item.bullets.map((b) => (
                            <div
                              key={b}
                              className={`rounded-2xl border ${item.theme.border} ${item.theme.surfaceSoft} px-5 py-4`}
                            >
                              <div
                                className={`font-mono text-[10px] uppercase tracking-widest ${item.theme.muted}`}
                              >
                                Detail
                              </div>
                              <div
                                className={`mt-2 font-display text-lg sm:text-xl ${item.theme.text}`}
                              >
                                {b}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className={`mt-10 pt-6 border-t ${item.theme.border} overflow-hidden`}>
                          <motion.div
                            className={`whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] ${item.theme.muted}`}
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                            style={{ willChange: "transform" }}
                          >
                            {Array.from({ length: 10 }).map((_, i) => (
                              <span key={i} className="mr-10">
                                {item.label} / {item.sub} / Ecodia
                              </span>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Side card */}
            <div
              className={`rounded-3xl border ${item.theme.border} ${item.theme.surface} backdrop-blur-xl overflow-hidden`}
            >
              <div className={`p-6 sm:p-8 border-b ${item.theme.border}`}>
                <div
                  className={`font-mono text-[10px] uppercase tracking-widest ${item.theme.muted}`}
                >
                  Reaching out
                </div>
                <p className={`mt-3 text-sm sm:text-base leading-relaxed ${item.theme.muted}`}>
                  Partnerships, venues, creator work, pilots. Short and specific is perfect.
                </p>
              </div>

              <div className="p-6 sm:p-8 min-h-[220px] flex flex-col gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-full rounded-2xl h-12 bg-white text-ink font-mono text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform"
                >
                  Send a message →
                </a>

                <a
                  href="/ecosystem"
                  className={`inline-flex items-center justify-center w-full rounded-2xl h-12 border ${item.theme.border} text-white/85 font-mono text-xs uppercase tracking-widest hover:bg-white/7 transition-colors`}
                >
                  Explore →
                </a>

                <div className={`mt-2 text-xs leading-relaxed ${item.theme.muted}`}>
                  If there’s a link or a location, include it. We’ll reply with the next step.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
