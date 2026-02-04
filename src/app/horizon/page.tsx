"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBiosphere } from '@/context/BiosphereProvider';
import Link from 'next/link';

export default function HorizonDeepDive() {
  const { setActiveBiome, setIsDeepDive } = useBiosphere();

  useEffect(() => {
    setActiveBiome('horizon');
    setIsDeepDive(true);
    // Cleanup when leaving the page
    return () => setIsDeepDive(false);
  }, [setActiveBiome, setIsDeepDive]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24 px-8 md:px-24">
      {/* Back to Surface Navigation */}
      <nav className="fixed top-12 left-12 z-50">
        <Link href="/" className="group flex items-center gap-4">
          <div className="w-8 h-[1px] bg-current transition-all group-hover:w-12" />
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-50 group-hover:opacity-100 transition-opacity">
            Return to Surface
          </span>
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto space-y-32">
        {/* Header Section: The Vision Expanded */}
        <header className="space-y-8">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="source-code text-[10px] tracking-[0.5em] uppercase text-[var(--accent-color)]"
          >
            Archive Section 01 // Vision & Intent
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif leading-tight"
          >
            The <span className="italic">Ecodia</span> <br/>Mandate.
          </motion.h1 >
        </header>

        {/* Content Body: The Values Collapsed from your original folders */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <aside className="md:col-span-4">
            <div className="sticky top-40 space-y-6 border-l border-current/10 pl-6">
              <p className="source-code text-[9px] uppercase opacity-40">Primary Values</p>
              <ul className="text-[10px] tracking-widest uppercase space-y-3">
                <li>01. Biological Parity</li>
                <li>02. Radical Logic</li>
                <li>03. Tactile Trust</li>
              </ul>
            </div>
          </aside>

          <article className="md:col-span-8 space-y-16 text-xl font-serif leading-relaxed opacity-90">
            <p>
              We believe that the current digital landscape has been stripped of its biological context. We build not to extract, but to integrate. 
            </p>
            
            <div className="space-y-8">
              <h2 className="text-sm font-sans font-bold tracking-[0.3em] uppercase">The First Principle</h2>
              <p className="opacity-70">
                Biological Parity ensures that for every digital interaction, a physical ecological pulse is recorded. We are creating a "Proof of Growth" protocol that moves beyond the sterile calculations of the old web.
              </p>
            </div>

            <div className="py-12 border-y border-current/5 italic text-3xl text-[var(--accent-color)]">
              "The interface is not a barrier; it is a membrane."
            </div>

            <p className="opacity-70">
              By collapsing our vision and values into this single biosphere, we are committing to a future where code is as vital as soil. Our roadmap - the Seasonal Path - is governed by the cycles of the earth, not the quarters of a fiscal year.
            </p>
          </article>
        </section>

        {/* Marginalia Note at Bottom */}
        <footer className="pt-24 opacity-30 text-[9px] source-code tracking-[0.2em] flex justify-between">
          <span>COORDINATES: 00.00.00.H</span>
          <span>ESTABLISHED: 2026.02.04</span>
        </footer>
      </div>
    </div>
  );
}