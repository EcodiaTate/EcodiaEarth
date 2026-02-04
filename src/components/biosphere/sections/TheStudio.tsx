"use client";

import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const { ref, inView } = useInView({ threshold: 0.4 });

  // Custom parallax for the "Hanging Fabric" effect
  const { scrollYProgress } = useScroll();
  const yLeft = useTransform(scrollYProgress, [0.5, 1], [0, -150]);
  const yRight = useTransform(scrollYProgress, [0.5, 1], [0, 150]);

  useEffect(() => {
    if (inView) setActiveBiome("studio");
  }, [inView, setActiveBiome]);

  return (
    <section
      ref={ref}
      id="studio"
      className="relative min-h-screen py-32 px-12 bg-[var(--bg-primary)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Context & Macro Details */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
          <header>
            <span className="source-code text-[10px] tracking-[0.5em] uppercase opacity-50 mb-4 block">
              04. The Physical
            </span>

            {/* REPLACED "The Studio" TEXT WITH LOGO */}
            <div className="flex flex-col gap-6">
              <div className="relative w-[220px] md:w-[280px] h-[90px]">
                <Image
                  src="/img/studio-logo.png"
                  alt="Studio"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <h2 className="text-5xl md:text-7xl font-light font-serif leading-tight">
                of Tangible <br /> Logic.
              </h2>
            </div>
          </header>

          <p className="max-w-md text-lg opacity-80 leading-relaxed font-serif">
            Digital architecture meets physical craft. In the Studio, we translate code into fiber, and vision into
            material reality. Every piece is a "Physical Field Note."
          </p>

          <div className="pt-8 space-y-6">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-current/20 flex items-center justify-center group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-all">
                <span className="text-xs">→</span>
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase">View the Lookbook</span>
            </div>
          </div>
        </div>

        {/* Right Column: The "Vertical Strips" Gallery */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-8 h-[80vh]">
          {/* Column A - Moving Up */}
          <motion.div style={{ y: yLeft }} className="space-y-8 mt-24">
            {creations.slice(0, 2).map((item) => (
              <div key={item.id} className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover contrast-[1.05] grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <p className="source-code text-[8px] uppercase">{item.material}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Column B - Moving Down */}
          <motion.div style={{ y: yRight }} className="space-y-8">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-300">
              <Image
                src={creations[2].image}
                alt={creations[2].title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 text-white z-10">
                <p className="source-code text-[8px] uppercase">{creations[2].material}</p>
              </div>
            </div>

            {/* Texture Detail Block */}
            <div className="aspect-square w-full bg-[var(--text-primary)] p-8 flex flex-col justify-end">
              <p className="text-[var(--bg-primary)] text-xs font-serif italic opacity-70">
                "We reject the synthetic. We embrace the raw, the tactile, and the enduring."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
