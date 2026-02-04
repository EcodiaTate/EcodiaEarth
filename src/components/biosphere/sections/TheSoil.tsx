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
  
  // Intersection Observer to trigger the "Soil" theme globally
  const { ref, inView } = useInView({ 
    threshold: 0.4, // Triggers when 40% of the section is visible
    rootMargin: "-10% 0px -10% 0px" 
  });

  useEffect(() => {
    if (inView) {
      setActiveBiome('soil');
    }
  }, [inView, setActiveBiome]);

  return (
    <section 
      ref={ref}
      id="soil"
      className="relative min-h-screen py-32 px-12 overflow-hidden flex items-center"
    >
      {/* Background Texture: Sun-bleached Paper Grain */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply bg-[url('/textures/paper-grain.jpg')]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center z-10">
        
        {/* Visual Column: The Earthy Visuals */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            initial={{ clipPath: 'inset(100% 0% 0% 0%)', filter: 'blur(10px)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', filter: 'blur(0px)' }}
            transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-b-[2rem]"
          >
            {/* Grainy Film Photography - Placeholder logic included */}
            <div className="absolute inset-0 bg-stone-200" /> 
            <Image 
              src="/images/soil-community.jpg" 
              alt="Members of the Soil"
              fill
              className="object-cover grayscale contrast-[1.1] brightness-[0.9] hover:grayscale-0 transition-all duration-[2s] scale-110 hover:scale-100"
              priority
            />
          </motion.div>
          
          {/* Marginalia: The Field Note */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute -bottom-10 -right-6 bg-[var(--bg-primary)] p-8 shadow-2xl max-w-[240px] border border-stone-200/50"
          >
            <span className="source-code text-[9px] uppercase tracking-widest opacity-40 block mb-3">
              Observation_082
            </span>
            <p className="font-serif text-sm italic leading-relaxed text-[var(--text-primary)]">
              "We track progress not in pixels, but in the depth of the root system. Every member is a node."
            </p>
            <div className="mt-4 w-8 h-[1px] bg-[var(--accent-color)]" />
          </motion.div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-7 space-y-12">
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[var(--accent-color)]" />
              <h2 className="text-[10px] tracking-[0.5em] uppercase opacity-60">The Community</h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-serif leading-[1.1] text-[var(--text-primary)]">
              Grounded in <br/>
              <span className="italic text-[var(--accent-color)]">Collective Intent.</span>
            </h3>
          </motion.header>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-xl text-lg opacity-80 leading-relaxed font-serif"
          >
            The Soil represents our local youth initiatives and ecological partnerships. No "User Profiles" here—only <b>Members of the Soil</b> contributing to the living mesh.
          </motion.p>

          {/* Member Grid: Non-OS Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
            {members.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}
                className="group cursor-default"
              >
                <span className="source-code text-[9px] block mb-2 opacity-40 group-hover:opacity-100 transition-opacity">
                  {member.note}
                </span>
                <div className="text-3xl font-light tracking-tighter mb-1 font-sans">
                  {member.count}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-sans">
                  {member.role}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action: The Token Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-10"
          >
            <button className="group relative px-10 py-5 overflow-hidden rounded-full transition-all">
              <div className="absolute inset-0 bg-[var(--text-primary)] transition-transform group-hover:scale-105" />
              <span className="relative text-[10px] tracking-[0.3em] uppercase text-[var(--bg-primary)] z-10">
                Enter the Understory
              </span>
            </button>
            
            <p className="mt-6 text-[10px] uppercase tracking-widest opacity-30 italic">
              * Participation requires a local mesh invitation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic Thread Piece: The Root */}
      <div className="absolute bottom-0 left-1/2 w-[1px] h-32 bg-gradient-to-b from-[var(--accent-color)] to-transparent opacity-20" />
    </section>
  );
};