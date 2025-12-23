"use client";

import * as React from "react";
import { motion, useScroll, useTransform, MotionValue, useReducedMotion } from "framer-motion";
import Link from "next/link";

const ECODIA_BEZIER = [0.19, 1, 0.22, 1] as const;

type Zone = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  color: string;   // bg-* class
  text: string;    // text-* class
  metaOpacity: string;
};

const ZONES: Readonly<Zone[]> = [
  {
    id: "ZONE_01",
    title: "PEOPLE",
    subtitle: "Active_Nodes",
    desc: "It starts where you are. Friends, neighbours, builders - choosing to take part in the local grid.",
    color: "bg-[#F9F8F5]",
    text: "text-[#2D2B28]",
    metaOpacity: "opacity-50", // slight bump for contrast
  },
  {
    id: "ZONE_02",
    title: "TECH",
    subtitle: "The_Engine",
    desc: "Technology as craft: notice more, remove effort, help good choices travel through the strata.",
    color: "bg-[#F9F8F5]",
    text: "text-[#2D2B28]",
    metaOpacity: "opacity-50",
  },
  {
    id: "ZONE_03",
    title: "PLANET",
    subtitle: "The_Commons",
    desc: "The shared places life happens. Care that isn't lonely. Physical residue that outlasts the digital.",
    color: "bg-[#396041]", // Forest
    text: "text-[#F9F8F5]",
    metaOpacity: "opacity-70",
  },
] as const;

export function HomeEcosystem() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      aria-label="Ecodia Ecosystem Layers"
      className="relative w-full bg-[#F9F8F5]"
    >
      {/* Header: Visual Mass (Gravity Well) */}
      <div className="sticky top-0 z-0 flex h-screen flex-col items-start justify-center pl-[8%] pointer-events-none">
        <HeaderBlock progress={scrollYProgress} />
      </div>

      {/* Tectonic Calibration Lines */}
      <div aria-hidden className="fixed inset-0 z-10 pointer-events-none opacity-5">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute right-[15%] top-0 h-full w-px bg-[#2D2B28]" />
      </div>

      <div className="relative z-20">
        {ZONES.map((zone, i) => (
          <EcosystemCard key={zone.id} zone={zone} index={i} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}

function HeaderBlock({ progress }: { progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const opacity = reduce
    ? 1
    : useTransform(progress, [0, 0.15], [1, 0], { clamp: true });
  const y = reduce ? 0 : useTransform(progress, [0, 0.2], [0, -50], { clamp: true });

  return (
    <motion.div style={{ opacity, y }} className="text-left will-change-transform">
      <span className="font-mono text-[10px] tracking-[0.6em] opacity-40 uppercase italic">
        Structural_Topology
      </span>
      <h2 className="mt-8 font-black text-[15vw] leading-[0.75] tracking-tighter">LAYERS.</h2>
    </motion.div>
  );
}

function EcosystemCard({
  zone,
  index,
  progress,
}: {
  zone: Zone;
  index: number;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();

  // Segment the scroll into three equal windows (one per card)
  const seg = 1 / ZONES.length; // 0.3333…
  const start = index * seg;
  const end = (index + 1) * seg;

  // Parallax/scale (clamped to avoid jumpy handoff)
  const y = reduce
    ? 0
    : useTransform(progress, [start, end], ["100vh", "0vh"], { clamp: true });
  const scale = reduce
    ? 1
    : useTransform(progress, [end, end + seg], [1, 0.96], { clamp: true });

  const textDrift = reduce
    ? 0
    : useTransform(progress, [start, end], [100, 0], { clamp: true });

  return (
    <motion.section
      aria-labelledby={`${zone.id}-title`}
      style={{ y, scale }}
      transition={{ ease: ECODIA_BEZIER }}
      className={`sticky top-0 h-screen w-full ${zone.color} ${zone.text} will-change-transform border-t border-[#2D2B28]/10`}
    >
      <div className="flex h-full flex-col justify-center pl-[8%] pr-[15%]">
        <div className="max-w-5xl space-y-12">
          <motion.div style={{ x: textDrift }} className="flex items-center gap-6 will-change-transform">
            <span className={`font-mono text-[11px] font-black tracking-[0.4em] ${zone.metaOpacity}`}>
              [{zone.id}]
            </span>
            <div className={`h-px w-32 ${zone.metaOpacity}`} style={{ backgroundColor: "currentColor" }} />
            <span className={`font-mono text-[11px] font-black tracking-[0.4em] ${zone.metaOpacity}`}>
              {zone.subtitle}
            </span>
          </motion.div>

          <h3 id={`${zone.id}-title`} className="font-black text-[12vw] leading-[0.75] tracking-tighter md:text-[14rem]">
            {zone.title}
          </h3>

          <p className="font-mono text-2xl leading-[1.1] tracking-tighter opacity-80 md:text-4xl max-w-3xl">
            {zone.desc}
          </p>

          {index === 2 && (
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.4, once: true }}
              transition={{ delay: reduce ? 0 : 0.5, duration: 1 }}
            >
              <Link
                href="/ecosystem"
                className="group relative inline-flex items-center justify-between bg-[#F4D35E] px-16 py-10 text-xs font-black uppercase tracking-[0.5em] text-[#2D2B28] outline-none transition-all hover:bg-[#7FD069] focus:ring-2 focus:ring-offset-2 focus:ring-[#7FD069] focus:ring-offset-current/0"
              >
                Explore_The_Strata
                <span className="ml-8 transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Functional Residue: Calibration Ticks */}
        <div aria-hidden className="absolute bottom-16 right-[8%] flex flex-col items-end gap-2 opacity-25">
          <div className="text-[9px] uppercase tracking-[0.4em]">Calibration_Ref: {zone.id}</div>
          <div className="flex gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-8 w-px bg-current" />
            ))}
          </div>
        </div>

        {/* Asymmetric Crop Mark */}
        <div aria-hidden className="absolute top-16 right-[8%] h-12 w-12 opacity-10" style={{ borderTop: "2px solid currentColor", borderRight: "2px solid currentColor" }} />
      </div>
    </motion.section>
  );
}
