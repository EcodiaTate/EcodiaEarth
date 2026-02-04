"use client";

import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useBiosphere } from '@/context/BiosphereProvider';
import Link from 'next/link';

const seasons = [
  { 
    period: "Equinox 2026", 
    status: "Completed", 
    title: "Germination of the Mesh",
    details: "Deployment of the first 500 local nodes across European urban centers. Establishing the 'Soil' protocols."
  },
  { 
    period: "Solstice 2026", 
    status: "In Progress", 
    title: "The Solar Pulse",
    details: "Integration of kinetic energy harvesting hardware. Every step taken by a 'Member of the Soil' fuels the digital ledger."
  },
  { 
    period: "Harvest 2026", 
    status: "Planned", 
    title: "Sovereign Yield",
    details: "Full migration to the decentralized Ecodia OS. Partnerships in Growth (Business) nodes go live."
  },
  { 
    period: "Winter 2027", 
    status: "Visionary", 
    title: "The Deep Root",
    details: "Cross-continental mesh expansion. The biosphere becomes self-sustaining."
  }
];

export default function KineticDeepDive() {
  const { setActiveBiome, setIsDeepDive } = useBiosphere();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setActiveBiome('kinetic');
    setIsDeepDive(true);
    return () => setIsDeepDive(false);
  }, [setActiveBiome, setIsDeepDive]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24 px-8 md:px-24 relative overflow-hidden">
      {/* Back Nav */}
      <nav className="fixed top-12 left-12 z-50">
        <Link href="/" className="group flex items-center gap-4 text-[var(--text-primary)]">
          <div className="w-8 h-[1px] bg-current transition-all group-hover:w-12" />
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-50">Return to Surface</span>
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto relative z-10">
        <header className="mb-32">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="source-code text-[10px] tracking-[0.5em] uppercase text-[var(--accent-color)]">
            Log: The Seasonal Path
          </motion.span>
          <h1 className="text-7xl md:text-9xl font-light uppercase tracking-tighter mt-4">
            Kinetic <br/> <span className="italic font-serif normal-case tracking-normal text-[var(--accent-color)]">Momentum</span>
          </h1>
        </header>

        {/* The Seasonal Vine (Roadmap) */}
        <div className="relative">
          {/* The Growing Vine Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-[var(--accent-color)] to-transparent origin-top"
          />

          <div className="space-y-40">
            {seasons.map((season, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 group"
              >
                {/* Bloom Node */}
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-color)] group-hover:bg-[var(--accent-color)] transition-colors shadow-[0_0_15px_rgba(255,179,0,0.3)]" />
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                  <span className="source-code text-[10px] uppercase opacity-40 whitespace-nowrap">
                    [{season.period}] - {season.status}
                  </span>
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif">{season.title}</h2>
                    <p className="max-w-xl text-lg opacity-60 leading-relaxed">
                      {season.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Section: Partnerships in Growth */}
        <section className="mt-48 pt-24 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-sm tracking-[0.3em] uppercase opacity-50">Partnerships in Growth</h3>
            <p className="text-2xl font-serif italic">
              "We don't scale through extraction; we grow through symbiotic integration."
            </p>
          </div>
          <div className="bg-white/5 p-12 backdrop-blur-sm border border-white/5 space-y-6">
            <p className="opacity-70 text-sm leading-loose">
              If your organization is ready to move beyond the "OS of old" and join a living mesh, our kinetic protocols are open for integration.
            </p>
            <button className="text-[10px] tracking-[0.4em] uppercase border-b border-[var(--accent-color)] pb-2 text-[var(--accent-color)] hover:opacity-50 transition-all">
              Initiate Node Sync
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}