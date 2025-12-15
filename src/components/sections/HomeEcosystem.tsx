// src/components/sections/HomeEcosystem.tsx
"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const ZONES = [
  {
    id: "ZONE_01",
    title: "PEOPLE",
    subtitle: "Presence",
    desc: "People shaping the world through small choices. The kind that become culture when they’re shared.",
    color: "bg-[#fffbeb]",
    text: "text-[#78350f]",
    border: "border-gold",
    icon: "🌱",
  },
  {
    id: "ZONE_02",
    title: "PLACES",
    subtitle: "Shared ground",
    desc: "Neighbourhoods, streets, and spaces shaped by how people use them. Where daily life and nature meet.",
    color: "bg-gold",
    text: "text-ink",
    border: "border-[#b45309]",
    icon: "🏙️",
  },
  {
    id: "ZONE_03",
    title: "COEXISTENCE",
    subtitle: "Living together",
    desc: "The ongoing balance between people, places, and the wider world. Built through use, not instruction.",
    color: "bg-ink",
    text: "text-[#fffbeb]",
    border: "border-[#78350f]",
    icon: "⟡",
  },
];

export function HomeEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Total scroll area needed for sticky stack
  const stackMinHeight = `calc(${ZONES.length} * 100dvh)`;

  return (
    <section ref={containerRef} className="relative w-full bg-[#fff7ed]">
      {/* HEADER */}
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

      {/* STICKY STACK - FULL WIDTH + FULL HEIGHT */}
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
            />
          );
        })}
      </div>

      {/* Small breathing room after last panel */}
      <div className="h-20 sm:h-28" />

      {/* FOOTER */}
      <div className="text-center pb-32">
        <Link
          href="/ecosystem"
          className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-[#fffbeb] rounded-full font-mono text-xs uppercase tracking-widest hover:scale-105 transition-transform"
        >
          <span>Explore the world</span>
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}

function EcosystemCard({
  data,
  index,
  range,
  progress,
  total,
}: {
  data: any;
  index: number;
  range: [number, number];
  progress: MotionValue<number>;
  total: number;
}) {
  const scale = useTransform(progress, range, [
    1,
    total - index <= 1 ? 1 : 0.95,
  ]);

  return (
    // CHANGE 1: Use `items-start` to push the card content to the top of the sticky area.
    // This allows the content to appear immediately when the card becomes sticky at top-0.
    <div className="h-[100dvh] sticky top-0 flex items-start justify-center">
      <motion.div
        style={{ scale }}
        className={`
          relative w-screen h-[100dvh]
          border-y-2 sm:border-2 ${data.border} ${data.color}
          rounded-none sm:rounded-3xl
          shadow-2xl origin-top overflow-hidden
        `}
      >
        {/* INNER CONTENT - We are NOT using `justify-between` or flex-col now.
            We use a simple structure that starts near the top. */}
        <div 
          className="h-full w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 
                     pt-24 pb-12" // CHANGE 2: Using generous padding-top (`pt-24`) to place the content section just below the browser chrome/header.
        >
          {/* TOP Metadata/Icon */}
          <div className="flex justify-between items-start mb-20"> {/* INCREASED MARGIN BELOW */}
            <span
              className={`font-mono text-xs font-bold uppercase tracking-widest opacity-60 ${data.text}`}
            >
              {data.id} // {data.subtitle}
            </span>
            <div className="text-4xl md:text-6xl">{data.icon}</div>
          </div>

          {/* CONTENT (The Title and Description) */}
          <div className="max-w-3xl"> {/* Increased max-width for better flow */}
            <h3 className={`font-display text-5xl md:text-7xl mb-8 leading-none ${data.text}`}> {/* INCREASED MARGIN BELOW */}
              {data.title}
            </h3>
            <p className={`font-serif text-xl md:text-2xl leading-relaxed ${data.text} opacity-90`}>
              {data.desc}
            </p>
          </div>

          {/* DECOR - Placed much lower on the screen for separation, using margin-top */}
          <div className={`w-full h-1 bg-current opacity-20 ${data.text} mt-48`} />
        </div>
      </motion.div>
    </div>
  );
}