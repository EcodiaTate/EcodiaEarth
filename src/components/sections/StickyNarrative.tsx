// src/components/sections/StickyNarrative.tsx
"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ActivationButton } from "@/components/ui/ActivationButton";
import { useRef } from "react";

const FEATURES = [
  {
    id: "01",
    title: "PLAY",
    subtitle: "Step in. Start small. It counts.",
    desc: "It shouldn’t feel heavy to take part. You do something small, and you become part of what’s already happening.",
    align: "items-start text-left",
    color: "text-ink",
    barColor: "bg-ink",
  },
  {
    id: "02",
    title: "CREATE",
    subtitle: "Make the culture, that builds the world.",
    desc: "Culture isn’t something we consume. It’s something people make, together, from where they are - and where they want to be.",
    align: "items-end text-right",
    color: "text-mint",
    barColor: "bg-mint",
  },
  {
    id: "03",
    title: "THRIVE",
    subtitle: "A world that gives back.",
    desc: "A world you don’t have to fight to stay in.",
    align: "items-center text-center",
    color: "text-gold",
    barColor: "bg-gold",
  },
] as const;

type Feature = (typeof FEATURES)[number];

export function StickyNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollHeight = `${FEATURES.length * 100}vh`;

  // Progress bar fades away at the very end
  const progressBarOpacity = useTransform(
    scrollYProgress,
    [0, 0.92, 0.98, 1],
    [1, 1, 0, 0]
  );
  const progressBarScaleY = useTransform(
    scrollYProgress,
    [0, 0.92, 0.98, 1],
    [1, 1, 0.001, 0.001]
  );

  return (
    <>
      <section
        ref={containerRef}
        className="relative bg-white"
        style={{ height: scrollHeight }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
          {/* BACKGROUND GRID */}
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
                  showActivation={feature.id === "03"}
                />
              );
            })}
          </div>

          {/* PROGRESS BAR */}
          <motion.div
            className="absolute bottom-0 left-0 h-2 w-full z-20 origin-bottom bg-transparent"
            style={{ opacity: progressBarOpacity, scaleY: progressBarScaleY }}
          >
            <motion.div
              className="h-full bg-ink origin-left"
              style={{ scaleX: scrollYProgress }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

function NarrativeItem({
  feature,
  range,
  progress,
  showActivation,
}: {
  feature: Feature;
  range: [number, number];
  progress: MotionValue<number>;
  showActivation?: boolean;
}) {
  const [start, end] = range;

  const opacity = useTransform(
    progress,
    [start, start + 0.08, end - 0.08, end],
    [0, 1, 1, 0]
  );

  const y = useTransform(progress, [start, end], [70, -70]);
  const clip = useTransform(
    progress,
    [start, start + 0.1],
    ["inset(110% 0 0 0)", "inset(0% 0 0 0)"]
  );

  const pointerEvents = useTransform(opacity, (v) =>
    v > 0.15 ? "auto" : "none"
  );

  /* ---------------- BUTTON TIMING (FIXED) ---------------- */

  // Appears very early, stays visible most of the panel
  const btnOpacity = useTransform(
    progress,
    [start + 0.08, start + 0.16, end - 0.12, end],
    [0, 1, 1, 0]
  );

  const btnY = useTransform(
    progress,
    [start + 0.08, start + 0.18],
    [24, 0]
  );

  return (
    <motion.div
      className={`absolute inset-0 flex flex-col justify-center ${feature.align} px-4 md:px-20`}
      style={{ opacity, pointerEvents }}
    >
      {/* DECORATIVE BAR */}
      <motion.div
        className={`mb-6 h-2 w-24 ${feature.barColor}`}
        style={{
          scaleX: useTransform(progress, [start, start + 0.2], [0, 1]),
          originX: 0,
        }}
      />

      {/* SUBTITLE */}
      <div className="overflow-hidden mb-2">
        <motion.span
          className="block font-serif italic text-2xl text-muted"
          style={{ y }}
        >
          {feature.subtitle}
        </motion.span>
      </div>

      {/* TITLE */}
      <motion.h2
        className={`font-display text-[15vw] leading-[0.92] tracking-tighter ${feature.color} pt-[0.08em]`}
        style={{ clipPath: clip }}
      >
        {feature.title}
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p className="mt-8 text-xl md:text-2xl text-muted font-light max-w-lg leading-relaxed">
        {feature.desc}
      </motion.p>

      {/* ACTIVATION BUTTON (THRIVE ONLY) */}
      {showActivation && (
        <motion.div
          className="mt-12 flex justify-center"
          style={{ opacity: btnOpacity, y: btnY }}
        >
          <ActivationButton />
        </motion.div>
      )}
    </motion.div>
  );
}
