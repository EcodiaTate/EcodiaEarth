"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBiosphere } from '@/context/BiosphereProvider';
import Link from 'next/link';
import Image from 'next/image';

const materials = [
  {
    title: "Raw Hemp Mesh",
    origin: "Ecodia Node 04",
    spec: "Non-chemically treated fibers",
    desc: "A breathable, high-tensile membrane designed for the long-arc of wear.",
    color: "bg-[#d2ceca]"
  },
  {
    title: "Indigo Mycelium",
    origin: "Ecodia Node 12",
    spec: "Bio-dyed fungal leather",
    desc: "Grown in dark-labs, this material replaces petroleum-based synthetics with a living grain.",
    color: "bg-[#242a3d]"
  }
];

export default function StudioDeepDive() {
  const { setActiveBiome, setIsDeepDive } = useBiosphere();

  useEffect(() => {
    setActiveBiome('studio');
    setIsDeepDive(true);
    return () => setIsDeepDive(false);
  }, [setActiveBiome, setIsDeepDive]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24 px-8 md:px-24">
      {/* Navigation */}
      <nav className="fixed top-12 left-12 z-50">
        <Link href="/" className="group flex items-center gap-4">
          <div className="w-8 h-[1px] bg-current transition-all group-hover:w-12" />
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-50">Return to Surface</span>
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-6">
            <span className="source-code text-[10px] tracking-[0.5em] uppercase text-[var(--accent-color)]">
              Registry: Material Logic
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight">
              The <span className="italic">Craft</span> <br/> of Mesh.
            </h1>
          </div>
          <p className="max-w-xs text-sm opacity-60 font-serif leading-relaxed italic">
            "We do not manufacture. We nurture the thread until it becomes a garment."
          </p>
        </header>

        {/* The Lookbook Strips */}
        <div className="space-y-40">
          {materials.map((item, i) => (
            <section key={i} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              {/* Macro Texture Image */}
              <motion.div 
                initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                className={`md:col-span-7 aspect-video relative overflow-hidden ${item.color}`}
              >
                {/* Image would go here */}
                <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('/textures/fabric-weave.jpg')]" />
                <div className="absolute bottom-6 right-6 source-code text-[9px] uppercase tracking-widest text-white/50">
                  Macro_Scan_{i+1}
                </div>
              </motion.div>

              {/* Text Specs */}
              <div className="md:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-[9px] uppercase tracking-[0.3em] opacity-40">{item.origin}</span>
                  <h2 className="text-3xl font-serif italic">{item.title}</h2>
                </div>
                <p className="text-lg opacity-80 leading-relaxed font-serif">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-current/10">
                  <span className="source-code text-[10px] uppercase opacity-50">Specification:</span>
                  <p className="text-[10px] uppercase tracking-widest mt-2">{item.spec}</p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* The "Page Turn" Footer */}
        <footer className="mt-40 pt-20 border-t border-current/10 flex justify-between items-center">
          <span className="source-code text-[9px] opacity-30">Studio_Ref_2026</span>
          <Link href="/source">
            <button className="group flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase">
              Enter The Source
              <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-all">
                →
              </div>
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
}