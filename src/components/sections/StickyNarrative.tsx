// src/components/sections/StickyNarrative.tsx
"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const FEATURES = [
  {
    id: "01",
    title: "PLAY",
    subtitle: "A world you can step into",
    desc: "Sidequests turn participation into something you can feel. Small actions become shared momentum.",
    align: "items-start text-left",
    color: "text-ink",
    barColor: "bg-ink",
  },
  {
    id: "02",
    title: "CREATE",
    subtitle: "Culture, made on purpose",
    desc: "Design, repair, reuse, build. A new layer of everyday life - shaped by people who show up.",
    align: "items-end text-right",
    color: "text-mint",
    barColor: "bg-mint",
  },
  {
    id: "03",
    title: "THRIVE",
    subtitle: "A world that holds",
    desc: "Cities that breathe, districts that green, communities that benefit together - as the world grows.",
    align: "items-center text-center",
    color: "text-gold",
    barColor: "bg-gold",
  },
];

export function StickyNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* 1. BACKGROUND GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative w-full max-w-[90rem] mx-auto px-6 sm:px-12 h-full z-10">
          {FEATURES.map((feature, index) => {
            const rangeStep = 1 / FEATURES.length;
            const start = index * rangeStep;
            const end = start + rangeStep;

            return (
              <NarrativeItem
                key={feature.id}
                feature={feature}
                range={[start, end]}
                progress={scrollYProgress}
              />
            );
          })}
        </div>

        {/* 2. PROGRESS BAR */}
        <div className="absolute bottom-0 left-0 h-2 w-full bg-border z-20">
          <motion.div className="h-full bg-ink origin-left" style={{ scaleX: scrollYProgress }} />
        </div>
      </div>
    </section>
  );
}

function NarrativeItem({
  feature,
  range,
  progress,
}: {
  feature: typeof FEATURES[0];
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const [start, end] = range;
  const opacity = useTransform(
    progress,
    [start, start + 0.10, end - 0.10, end],
    [0, 1, 1, 0]
  );
  
  const y = useTransform(progress, [start, end], [70, -70]);
  const clip = useTransform(
    progress,
    [start, start + 0.12],
    ["inset(110% 0 0 0)", "inset(0% 0 0 0)"]
  );
    const pointerEvents = useTransform(opacity, (val) => (val > 0.1 ? "auto" : "none"));

  return (
    <motion.div
      className={`absolute inset-0 flex flex-col justify-center ${feature.align} px-4 md:px-20`}
      style={{ opacity, pointerEvents }}
    >
      {/* 1. DECORATIVE BAR */}
      <motion.div
        className={`mb-6 h-2 w-24 ${feature.barColor}`}
        style={{ scaleX: useTransform(progress, [start, start + 0.2], [0, 1]), originX: 0 }}
      />

      {/* 2. SUBTITLE */}
      <div className="overflow-hidden mb-2">
        <motion.span className="block font-serif italic text-2xl text-muted" style={{ y }}>
          {feature.subtitle}
        </motion.span>
      </div>

      <motion.h2
  className={`font-display text-[15vw] leading-[0.92] tracking-tighter ${feature.color} pt-[0.08em]`}
  style={{ clipPath: clip }}
>
  {feature.title}
</motion.h2>


      {/* 4. DESCRIPTION */}
      <motion.p
        className="mt-8 text-xl md:text-2xl text-muted font-light max-w-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {feature.desc}
      </motion.p>
    </motion.div>
  );
}
