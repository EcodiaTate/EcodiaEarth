"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useBiosphere } from '@/context/BiosphereProvider';

const techSpecs = [
  { module: "Bio-Ledger", status: "Active", log: "Sequence_0x4F2" },
  { module: "Mesh-Node", status: "Syncing", log: "Frequency_88.4" },
  { module: "DNA-Auth", status: "Encrypted", log: "Helix_Protocol" }
];

export const TheSource = () => {
  const { setActiveBiome } = useBiosphere();
  const { ref, inView } = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) setActiveBiome('source');
  }, [inView, setActiveBiome]);

  return (
    <section 
      ref={ref}
      id="source"
      className="relative min-h-screen py-32 px-12 bg-[var(--bg-primary)] overflow-hidden"
    >
      {/* Background: Digital Photosynthesis Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(var(--accent-color) 1px, transparent 1px), linear-gradient(90deg, var(--accent-color) 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: The Logic Hub */}
          <div className="lg:col-span-7 space-y-12">
            <header>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-block px-3 py-1 border border-[var(--accent-color)] text-[var(--accent-color)] text-[9px] tracking-[0.4em] uppercase mb-6 source-code"
              >
                System Status: Stable
              </motion.div>
              <h2 className="text-6xl md:text-7xl font-light tracking-tighter text-[var(--text-primary)]">
                The <span className="source-code font-bold">Source</span> <br/> 
                <span className="italic opacity-60">Code of Life.</span>
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techSpecs.map((spec, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 border border-white/5 bg-white/5 backdrop-blur-xl rounded-sm hover:border-[var(--accent-color)] transition-colors group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="source-code text-[10px] opacity-40 group-hover:text-[var(--accent-color)]">{spec.log}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] animate-pulse" />
                  </div>
                  <h4 className="text-xl font-serif mb-1">{spec.module}</h4>
                  <p className="source-code text-[10px] uppercase tracking-widest opacity-40">{spec.status}</p>
                </motion.div>
              ))}
            </div>
            
            <p className="max-w-xl text-lg opacity-60 font-serif leading-relaxed">
              This is the photosynthesis of our technology. We use a peer-to-peer mesh that mirrors the mycorrhizal networks of a forest. Transparent, immutable, and powered by the sun.
            </p>
          </div>

          {/* Right Column: The "Microscope" Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square">
              {/* Circular DNA-like structures */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-[var(--accent-color)] rounded-full opacity-20"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 border-[1px] border-[var(--accent-color)] rounded-full opacity-10 border-dashed"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 bg-[var(--accent-color)] rounded-full shadow-[0_0_40px_10px_var(--accent-color)]" />
              </div>

              {/* Precise Labeling */}
              <div className="absolute top-0 right-0 source-code text-[9px] opacity-40 text-right">
                LAT: 45.32.11<br/>
                LNG: 12.09.43
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Light Trail Animation */}
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-30"
      />
    </section>
  );
};