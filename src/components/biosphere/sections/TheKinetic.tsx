"use client";

import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useBiosphere } from "@/context/BiosphereProvider";

const pathStages = [
  { season: "Equinox", title: "Seeding the Mesh", desc: "Deployment of initial node clusters." },
  { season: "Solstice", title: "Solar Expansion", desc: "Kinetic energy harvesting protocols live." },
  { season: "Harvest", title: "The Sovereign Yield", desc: "Full decentralization of local community data." },
];

export const TheKinetic = () => {
  const { setActiveBiome } = useBiosphere();

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) setActiveBiome("kinetic");
  }, [inView, setActiveBiome]);

  // ✅ Fix TS2322:
  // In some framer-motion typings, `ease` must be an Easing function/array (not a string).
  // Using a cubic-bezier tuple is always accepted by the type system.
  const containerVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
      },
    }),
    []
  );

  const itemVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, x: 10 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1], // "easeOut" as a bezier curve (typed correctly)
        },
      },
    }),
    []
  );

  return (
    <section
      ref={ref}
      id="kinetic"
      className="relative min-h-screen lg:min-h-[150vh] py-20 md:py-32 px-6 md:px-12 bg-[var(--bg-primary)] overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-[var(--accent-color)] opacity-[0.07] blur-[80px] md:blur-[120px] rounded-full pointer-events-none will-change-[opacity]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="source-code text-[10px] tracking-[0.5em] uppercase text-[var(--accent-color)] mb-4 block">
              03. The Movement
            </span>

            <div className="space-y-6">
              <div className="relative w-[200px] md:w-[320px] h-[70px] md:h-[84px]">
                <Image
                  src="/img/labs-logo.png"
                  alt="Ecodia Labs"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 200px, 320px"
                  priority
                />
              </div>

              <h2 className="text-5xl md:text-8xl font-light uppercase tracking-tighter text-[var(--text-primary)] mb-8">
                <span className="italic">Kinetic</span> <br /> Flow.
              </h2>
            </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Timeline */}
          <motion.div
            className="lg:col-span-8 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--accent-color)] via-[var(--accent-color)] to-transparent opacity-20" />

            <div className="space-y-20 md:space-y-32 relative">
              {pathStages.map((stage) => (
                <motion.div key={stage.title} variants={itemVariants} className="relative pl-16 md:pl-20">
                  <div className="absolute left-[19px] top-2 w-[11px] h-[11px] rounded-full bg-[var(--accent-color)] md:shadow-[0_0_15px_var(--accent-color)]" />

                  <span className="source-code text-[9px] md:text-[10px] uppercase opacity-40 mb-2 block">
                    {stage.season} Stage
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[var(--text-primary)]">
                    {stage.title}
                  </h3>
                  <p className="max-w-md text-base md:text-lg opacity-60 font-serif leading-relaxed">
                    {stage.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnerships */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 border border-current/10 rounded-2xl bg-white/[0.02] md:backdrop-blur-md"
            >
              <h4 className="text-xs tracking-widest uppercase mb-6 opacity-80">Partnerships</h4>
              <p className="text-sm opacity-60 mb-8 leading-loose italic">
                "We don't seek 'Users.' We seek systemic anchors."
              </p>
              <button
                type="button"
                className="w-full py-4 border border-[var(--accent-color)] text-[var(--accent-color)] text-[10px] tracking-[0.3em] uppercase hover:bg-[var(--accent-color)] hover:text-black transition-colors"
              >
                Sync with the Mesh
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative curve */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 800" className="h-full w-full" preserveAspectRatio="none">
          <path
            d="M100,0 C-50,200 150,400 0,800"
            fill="none"
            stroke="var(--accent-color)"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </section>
  );
};
