"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useBiosphere } from '@/context/BiosphereProvider';

const members = [
  { role: "Youth Activist", count: "1,200+", note: "Roots in the city" },
  { role: "Local Growers", count: "450+", note: "Nurturing the mesh" },
  { role: "Eco-Architects", count: "85", note: "Building the bloom" }
];

export const TheSoil = () => {
  const { setActiveBiome } = useBiosphere();
  
  const { ref, inView } = useInView({ 
    threshold: 0.2, // Lower threshold = smoother trigger
    rootMargin: "-10% 0px" 
  });

  useEffect(() => {
    if (inView) setActiveBiome('soil');
  }, [inView, setActiveBiome]);

  return (
    <section 
      ref={ref}
      id="soil"
      className="relative min-h-screen py-20 md:py-32 px-6 md:px-12 flex items-center bg-[var(--bg-primary)] overflow-hidden"
    >
      {/* 1. PERF FIX: Replaced mix-blend-multiply texture with a subtle background color or lower opacity image */}
      {/* Blending modes are massive battery/CPU drains on mobile scroll */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/textures/paper-grain.jpg')] bg-repeat" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center z-10">
        
        {/* Visual Column */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            // 2. PERF FIX: Removed real-time blur/clip-path for mobile. 
            // Using a simple opacity + slide for high-speed devices.
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative aspect-[4/5] overflow-hidden rounded-t-[8rem] md:rounded-t-[10rem] rounded-b-[2rem] will-change-transform"
          >
            <div className="absolute inset-0 bg-stone-200" /> 
            <Image 
              src="/images/soil-community.jpg" 
              alt="Members of the Soil"
              fill
              className="object-cover grayscale transition-transform duration-[3s] hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </motion.div>
          
          {/* Marginalia */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-6 bg-[var(--bg-primary)] p-6 md:p-8 shadow-xl max-w-[200px] md:max-w-[240px] border border-stone-200/50"
          >
            <span className="source-code text-[9px] uppercase tracking-widest opacity-40 block mb-3">
              Observation_082
            </span>
            <p className="font-serif text-xs md:text-sm italic leading-relaxed text-[var(--text-primary)]">
              "Every member is a node."
            </p>
          </motion.div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-7 space-y-10 md:space-y-12">
          <motion.header 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-8 md:w-12 bg-[var(--accent-color)]" />
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src="/img/eco-local-logo.png"
                  alt="Eco Local"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-[10px] tracking-[0.5em] uppercase opacity-60">
                The Community
              </h2>
            </div>

            <h3 className="text-4xl md:text-6xl font-serif leading-[1.1] text-[var(--text-primary)]">
              Grounded in <br/>
              <span className="italic text-[var(--accent-color)]">Collective Intent.</span>
            </h3>
          </motion.header>

          {/* Member Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 pt-4">
            {members.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <span className="source-code text-[8px] md:text-[9px] block mb-2 opacity-40">
                  {member.note}
                </span>
                <div className="text-2xl md:text-3xl font-light tracking-tighter mb-1 font-sans">
                  {member.count}
                </div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] opacity-50 font-sans">
                  {member.role}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-6">
            <button className="group relative px-8 py-4 md:px-10 md:py-5 overflow-hidden rounded-full bg-[var(--text-primary)] transition-transform active:scale-95">
              <span className="relative text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-[var(--bg-primary)] z-10">
                Enter the Understory
              </span>
            </button>
            <p className="mt-6 text-[9px] uppercase tracking-widest opacity-30 italic">
              * Participation requires a local mesh invitation.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 w-[1px] h-20 md:h-32 bg-gradient-to-b from-[var(--accent-color)] to-transparent opacity-20" />
    </section>
  );
};