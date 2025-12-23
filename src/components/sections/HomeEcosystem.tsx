"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ECODIA_BEZIER = [0.19, 1, 0.22, 1] as const;

const ZONES = [
  {
    id: "ZONE_01",
    title: "PEOPLE",
    subtitle: "Active_Nodes",
    desc: "It starts where you are. Friends, neighbours, builders—choosing to take part in the local grid.",
    color: "bg-[#F9F8F5]",
    text: "text-[#2D2B28]",
    metaOpacity: "opacity-40",
  },
  {
    id: "ZONE_02",
    title: "TECH",
    subtitle: "The_Engine",
    desc: "Technology as craft: notice more, remove effort, help good choices travel through the strata.",
    color: "bg-[#F9F8F5]",
    text: "text-[#2D2B28]",
    metaOpacity: "opacity-40",
  },
  {
    id: "ZONE_03",
    title: "PLANET",
    subtitle: "The_Commons",
    desc: "The shared places life happens. Care that isn't lonely. Physical residue that outlasts the digital.",
    color: "bg-[#396041]", // Forest
    text: "text-[#F9F8F5]", // Paper
    metaOpacity: "opacity-60",
  },
];

export function HomeEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative w-full bg-[#F9F8F5] overflow-x-clip">
      {/* Header: Visual Mass */}
      <div className="sticky top-0 h-[100svh] flex flex-col items-start justify-center pointer-events-none z-0 pl-[8%]">
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
            y: useTransform(scrollYProgress, [0, 0.2], [0, -50]),
          }}
          className="text-left"
        >
          <span className="font-mono text-[10px] tracking-[0.6em] opacity-40 uppercase italic">
            Structural_Topology
          </span>
          <h2 className="font-black text-[15vw] leading-[0.75] tracking-tighter mt-8">
            LAYERS.
          </h2>
        </motion.div>
      </div>

      {/* Calibration rails (kept inside the section to avoid fixed+transform weirdness) */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-5">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute right-[15%] top-0 h-full w-px bg-[#2D2B28]" />
      </div>

      <div className="relative z-20">
        {ZONES.map((zone, i) => (
          <EcosystemCard
            key={zone.id}
            zone={zone}
            index={i}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function EcosystemCard({
  zone,
  index,
  progress,
}: {
  zone: (typeof ZONES)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index * 0.33;
  const end = (index + 1) * 0.33;

  // Use real viewport pixels (mobile-safe), not "100vh" strings.
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const set = () => setVh(window.innerHeight);
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const y = useTransform(progress, [start, end], [vh, 0]);
  const scale = useTransform(progress, [end, end + 0.33], [1, 0.92]);
  const textDrift = useTransform(progress, [start, end], [100, 0]);

  return (
    <motion.div
      style={{ y, scale, zIndex: index + 10 }}
      transition={{ ease: ECODIA_BEZIER }}
      className={`sticky top-0 h-[100svh] w-full ${zone.color} flex flex-col justify-center pl-[8%] pr-[15%] border-t border-[#2D2B28]/10 overflow-x-clip`}
    >
      {/* Put “depth” on an inner wrapper so transforms don’t enlarge the visual overflow */}
      <div className="relative h-full w-full">
        <div className="max-w-5xl space-y-12">
          <motion.div style={{ x: textDrift }} className="flex items-center gap-6">
            <span
              className={`font-mono text-[11px] font-black tracking-[0.4em] ${zone.metaOpacity} ${zone.text}`}
            >
              [{zone.id}]
            </span>
            <div className={`h-px w-32 bg-current ${zone.metaOpacity}`} />
            <span
              className={`font-mono text-[11px] font-black tracking-[0.4em] ${zone.metaOpacity} ${zone.text}`}
            >
              {zone.subtitle}
            </span>
          </motion.div>

          <h3
            className={`font-black text-[12vw] md:text-[14rem] leading-[0.75] tracking-tighter ${zone.text}`}
          >
            {zone.title}
          </h3>

          <p
            className={`font-mono text-2xl md:text-4xl max-w-3xl leading-[1.1] tracking-tighter opacity-80 ${zone.text}`}
          >
            {zone.desc}
          </p>

          {index === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.9, ease: ECODIA_BEZIER }}
            >
              <Link
                href="/ecosystem"
                className="group relative inline-flex items-center justify-between bg-[#F4D35E] text-[#2D2B28] px-16 py-10 font-black text-xs uppercase tracking-[0.5em] hover:bg-[#7FD069] transition-all"
              >
                Explore_The_Strata
                <span className="ml-8 group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Calibration ticks */}
        <div
          className={`absolute bottom-16 right-[8%] flex flex-col items-end gap-2 ${zone.text} opacity-20`}
        >
          <div className="text-[9px] uppercase tracking-[0.4em]">
            Calibration_Ref: {zone.id}
          </div>
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-px h-8 bg-current" />
            ))}
          </div>
        </div>

        {/* Crop mark */}
        <div
          className={`absolute top-16 right-[8%] h-12 w-12 border-t-2 border-r-2 border-current opacity-10 ${zone.text}`}
        />
      </div>
    </motion.div>
  );
}
