// src/components/sections/StickyNarrative.tsx
"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const FEATURES = [
  {
    title: "Play",
    desc: "Sidequests spark real-world action.",
    color: "text-emerald-900",
  },
  {
    title: "Creation",
    desc: "Upcycling turns waste into culture.",
    color: "text-blue-900",
  },
  {
    title: "Economy",
    desc: "ECO rewards fuel a shared commons.",
    color: "text-indigo-900",
  },
];

export function StickyNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cameraZ = useTransform(scrollYProgress, [0, 1], [0, 2]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center perspective-1000">
        {FEATURES.map((feature, index) => (
          <TunnelItem
            key={feature.title}
            feature={feature}
            index={index}
            cameraZ={cameraZ}
          />
        ))}
      </div>
    </div>
  );
}

function TunnelItem({
  feature,
  index,
  cameraZ,
}: {
  feature: typeof FEATURES[0];
  index: number;
  cameraZ: MotionValue<number>;
}) {
  const distance = useTransform(cameraZ, (z) => index - z);

  // -- TUNED VISUALS --

  // 1. WIDENED SWEET SPOT:
  // We effectively "clamp" the scale to 1 for a bit so it rests in front of you.
  const scale = useTransform(distance, [1, 0.2, -0.2, -1], [0.8, 1, 1, 2.5]);

  // 2. OPACITY CONTROL:
  // It stays invisible (0) until it's much closer (0.5 distance).
  // It fades out fully before it gets too huge.
  const opacity = useTransform(distance, [1, 0.5, 0.1, -0.1, -0.8], [0, 0.2, 1, 1, 0]);

  // 3. REDUCED BLUR:
  // Background blur reduced to 4px (was 12).
  // Motion blur reduced to 8px (was 20).
  // Crucially: It stays at 0px blur for the range [0.2 to -0.2].
  const blurValue = useTransform(distance, [1, 0.2, -0.2, -1], [4, 0, 0, 8]);
  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);
  
  const zIndex = useTransform(distance, (d) => (d > 0.2 ? 0 : 10));

  return (
    <motion.div
      className="absolute px-6 text-center w-full max-w-3xl will-change-transform"
      style={{
        scale,
        opacity,
        filter,
        zIndex,
        y: 0,
      }}
    >
      <h2 className={`font-display text-5xl sm:text-7xl mb-6 ${feature.color}`}>
        {feature.title}
      </h2>
      <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-medium">
        {feature.desc}
      </p>
    </motion.div>
  );
}