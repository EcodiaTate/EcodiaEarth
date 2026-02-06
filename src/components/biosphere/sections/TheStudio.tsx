"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useBiosphere } from "@/context/BiosphereProvider";
import Image from "next/image";

const creations = [
  { id: "01", title: "Raw Mycelium Fabric", material: "Organic Hemp / Spore", image: "/images/fabric-1.jpg" },
  { id: "02", title: "Kinetic Weave", material: "Recycled Copper Thread", image: "/images/fabric-2.jpg" },
  { id: "03", title: "Soil-Dyed Indigo", material: "Earth Pigment / Raw Cotton", image: "/images/fabric-3.jpg" },
];

export const TheStudio = () => {
  const { setActiveBiome } = useBiosphere();
  const shouldReduceMotion = useReducedMotion();

  // Intersection observer ref expects a callback that can receive HTMLElement | null
  const { ref: inViewRef, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  // ✅ Fix TS2322: type the ref to accept HTMLElement | null (not `null`)
  const sectionRef = useRef<HTMLElement | null>(null);

  // Localized scroll tracking (relative to this section)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: shouldReduceMotion ? 1 : 80,
    damping: shouldReduceMotion ? 1 : 25,
    restDelta: 0.001,
  });

  const yLeft = useTransform(smoothProgress, [0, 1], [50, -50]);
  const yRight = useTransform(smoothProgress, [0, 1], [-50, 50]);

  useEffect(() => {
    if (inView) setActiveBiome("studio");
  }, [inView, setActiveBiome]);

  // Combine refs safely + with correct typing
  const setRefs = (node: HTMLElement | null) => {
    inViewRef(node);
    sectionRef.current = node;
  };

  return (
    <section
      ref={setRefs}
      id="studio"
      className="relative min-h-screen py-20 md:py-32 px-6 md:px-12 bg-[var(--bg-primary)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
          <header>
            <span className="source-code text-[10px] tracking-[0.5em] uppercase opacity-50 mb-4 block">
              04. The Physical
            </span>
            <div className="flex flex-col gap-6">
              <div className="relative w-[200px] md:w-[280px] h-[70px] md:h-[90px]">
                <Image
                  src="/img/studio-logo.png"
                  alt="Studio"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 200px, 280px"
                  priority
                />
              </div>
              <h2 className="text-4xl md:text-7xl font-light font-serif leading-tight text-[var(--text-primary)]">
                of Tangible <br /> Logic.
              </h2>
            </div>
          </header>

          <p className="max-w-md text-base md:text-lg opacity-80 leading-relaxed font-serif text-[var(--text-primary)]">
            Every piece is a "Physical Field Note."
          </p>

          <div className="pt-4">
            <div className="flex items-center gap-6 group cursor-pointer w-fit">
              <div className="w-12 h-12 rounded-full border border-current/20 flex items-center justify-center group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors">
                <span className="text-xs">→</span>
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase">View the Lookbook</span>
            </div>
          </div>
        </div>

        {/* Right Column: The "Vertical Strips" Gallery */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-8 min-h-[60vh] md:h-[80vh]">
          {/* Column A */}
          <motion.div
            style={shouldReduceMotion ? undefined : { y: yLeft }}
            className="space-y-4 md:space-y-8 mt-12 md:mt-24 will-change-transform"
          >
            {creations.slice(0, 2).map((item) => (
              <div key={item.id} className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 rounded-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            ))}
          </motion.div>

          {/* Column B */}
          <motion.div
            style={shouldReduceMotion ? undefined : { y: yRight }}
            className="space-y-4 md:space-y-8 will-change-transform"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-300 rounded-sm">
              <Image
                src={creations[2].image}
                alt={creations[2].title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="aspect-square w-full bg-[var(--text-primary)] p-6 md:p-8 flex flex-col justify-end rounded-sm">
              <p className="text-[var(--bg-primary)] text-[10px] md:text-xs font-serif italic opacity-70">
                "We reject the synthetic. We embrace the raw."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
