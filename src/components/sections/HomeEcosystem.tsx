// src/components/sections/HomeEcosystem.tsx
"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const ZONES = [
  {
    id: "ZONE_01",
    title: "PEOPLE",
    subtitle: "The ones who show up",
    desc: "It starts with ordinary people doing one real thing. Friends, neighbours, builders - choosing to take part. Ecodia makes that participation visible, shared, and easy to keep going.",
    color: "bg-[#fffbeb]",
    text: "text-[#78350f]",
    border: "border-gold",
    icon: "🫂",
  },
  {
    id: "ZONE_02",
    title: "TECH",
    subtitle: "An engine, not a feed",
    desc: "Technology belongs in the same world as people and nature. Here it’s used as a craft: to notice what’s happening, reduce effort, and help good choices travel further than one moment.",
    color: "bg-gold",
    text: "text-ink",
    border: "border-[#b45309]",
    icon: "⟡",
  },
  {
    id: "ZONE_03",
    title: "PLANET",
    subtitle: "The commons we live inside",
    desc: "The planet isn’t a goal. It’s the setting. Beaches, streets, soil, air - the shared places life happens. Ecodia is built for care that doesn’t feel lonely, and a world you don’t have to fight to stay in.",
    color: "bg-ink",
    text: "text-[#fffbeb]",
    border: "border-[#78350f]",
    icon: "🌍",
  },
];

export function HomeEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Slight extra runway so the PLANET card feels deliberate, but not “stuck”.
  const stackMinHeight = `calc(${ZONES.length} * 100dvh + 35dvh)`;

  return (
    <section ref={containerRef} className="relative w-full bg-[#fffbeb]">
      {/* HEADER (light base) */}
      <div className="relative bg-[#fff7ed]">
        <div className="pt-24 pb-12 px-6 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-gold/10 bg-white">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold/60">
              Ecosystem_Map_v1.0
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl text-ink tracking-tight leading-[0.9]">
            A WORLD
            <br />
            <span className="italic font-serif text-gold opacity-80">
              WITH LAYERS.
            </span>
          </h2>
        </div>

       
      </div>

      {/* STICKY STACK */}
      <div className="relative w-full px-0" style={{ minHeight: stackMinHeight }}>
        {ZONES.map((zone, i) => {
          const rangeStart = i / ZONES.length;

          return (
            <EcosystemCard
              key={zone.id}
              data={zone}
              index={i}
              range={[rangeStart, 1]}
              progress={scrollYProgress}
              total={ZONES.length}
              showExplore={zone.id === "ZONE_03"}
              isLast={zone.id === "ZONE_03"}
            />
          );
        })}

        {/* subtle fade to ink at the very bottom (kept low so it doesn’t “announce” itself) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40dvh]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
        </div>
      </div>

      <div className="h-20 sm:h-28 bg-ink" />
    </section>
  );
}

function EcosystemCard({
  data,
  index,
  range,
  progress,
  total,
  showExplore,
  isLast,
}: {
  data: any;
  index: number;
  range: [number, number];
  progress: MotionValue<number>;
  total: number;
  showExplore?: boolean;
  isLast?: boolean;
}) {
  const scale = useTransform(progress, range, [
    1,
    // Keep last card scale at 1 to prevent shrinking and expose the ink background underneath early
    total - index <= 1 ? 1 : 0.95,
  ]);

  // Explore button appears quickly and stays for most of the PLANET window
  const fadeOutStart = isLast ? 0.85 : 0.965;
  const btnOpacity = useTransform(
    progress,
    [range[0] + 0.02, range[0] + 0.06, fadeOutStart, fadeOutStart + 0.1],
    [0, 1, 1, 0]
  );

  // Fixed Y for the button (no float-in)
  const btnY = useTransform(progress, [range[0], range[0] + 0.01], [0, 0]);

  // Fullscreen sheet for ALL cards (no borders/shadows/rounding)
  const frameClass = `
    relative w-screen h-[100dvh]
    border-none ${data.color}
    rounded-none
    shadow-none
    origin-top overflow-hidden
  `;

  return (
    <div className="h-[100dvh] sticky top-0 flex items-start justify-center">
      <motion.div style={{ scale }} className={frameClass}>
        <div className="h-full w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 pt-24 pb-12">
          {/* TOP Metadata/Icon */}
          <div className="flex justify-between items-start mb-20">
            <span
              className={`font-mono text-xs font-bold uppercase tracking-widest opacity-60 ${data.text}`}
            >
              {data.id} // {data.subtitle}
            </span>
            <div className="text-4xl md:text-6xl">{data.icon}</div>
          </div>

          {/* CONTENT */}
          <div className="max-w-3xl">
            <h3
              className={`font-display text-5xl md:text-7xl mb-8 leading-none ${data.text}`}
            >
              {data.title}
            </h3>
            <p
              className={`font-serif text-xl md:text-2xl leading-relaxed ${data.text} opacity-90`}
            >
              {data.desc}
            </p>
          </div>

          {/* REAL BUTTON (ZONE_03 only) */}
          {showExplore && (
            <motion.div
              className="mt-12 flex justify-center"
              style={{ opacity: btnOpacity, y: btnY }}
            >
              <Link
                href="/ecosystem"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#fffbeb] text-ink rounded-full font-mono text-xs uppercase tracking-widest hover:scale-105 transition-transform border border-[#fffbeb]/60"
              >
                <span>Explore the world</span>
                <span>→</span>
              </Link>
            </motion.div>
          )}

          {/* DECOR removed - clean sheet look */}
        </div>
      </motion.div>
    </div>
  );
}
