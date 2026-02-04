"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBiosphere } from '@/context/BiosphereProvider';
import Link from 'next/link';

const protocols = [
  { 
    id: "0x_BIOMASS", 
    title: "Carbon-Link Protocol", 
    status: "Immutable", 
    desc: "A decentralized consensus mechanism that weights node influence based on verified local biomass restoration." 
  },
  { 
    id: "0x_MESH", 
    title: "Fungal Routing", 
    status: "Optimized", 
    desc: "Packet delivery logic modeled on mycorrhizal networks, ensuring 99.9% uptime in low-connectivity urban zones." 
  },
  { 
    id: "0x_ENCRYPT", 
    title: "Helix Auth", 
    status: "Quantum-Safe", 
    desc: "Biometric authentication derived from plant DNA sequences, securing the transition between physical and digital assets." 
  }
];

export default function SourceDeepDive() {
  const { setActiveBiome, setIsDeepDive } = useBiosphere();

  useEffect(() => {
    setActiveBiome('source');
    setIsDeepDive(true);
    return () => setIsDeepDive(false);
  }, [setActiveBiome, setIsDeepDive]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24 px-8 md:px-24 relative overflow-hidden source-code">
      {/* Background: Subtle Electronic Trace Lines */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/grid-mesh.png')] bg-repeat" />
      
      {/* Nav */}
      <nav className="fixed top-12 left-12 z-50">
        <Link href="/" className="group flex items-center gap-4 text-[var(--text-primary)]">
          <div className="w-8 h-[1px] bg-current transition-all group-hover:w-12" />
          <span className="text-[9px] tracking-[0.5em] uppercase opacity-50">Surface_Escape</span>
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-24 space-y-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="text-[10px] tracking-[0.6em] text-[var(--accent-color)] uppercase">
              Root_Directory // Labs_&_Tech
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-sans font-light tracking-tighter text-[var(--text-primary)] uppercase">
            The <span className="font-bold">Logic</span> Membrane.
          </h1>
          <p className="max-w-2xl text-sm opacity-50 leading-loose">
            Explaining the algorithmic photosynthesis that powers the Ecodia ecosystem. 
            All code is open-source. All logic is biological.
          </p>
        </header>

        {/* The Protocol Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {protocols.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-[var(--bg-primary)] group hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] text-[var(--accent-color)] border border-[var(--accent-color)] px-2 py-1">
                  {p.id}
                </span>
                <span className="text-[9px] opacity-30 uppercase">{p.status}</span>
              </div>
              <h3 className="text-2xl font-sans font-bold mb-6 text-[var(--text-primary)]">
                {p.title}
              </h3>
              <p className="text-xs leading-relaxed opacity-60 font-serif lowercase">
                {p.desc}
              </p>
            </motion.div>
          ))}

          {/* Call to Action: The Lab Access */}
          <div className="p-12 bg-[var(--accent-color)] text-black flex flex-col justify-between">
            <h3 className="text-2xl font-sans font-bold uppercase leading-none">
              Download <br/> Whitepaper.
            </h3>
            <div className="flex items-end justify-between">
              <span className="text-[9px] tracking-widest uppercase font-bold">Ver_4.02_Stable</span>
              <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-[var(--accent-color)] transition-all">
                ↓
              </button>
            </div>
          </div>
        </div>

        {/* Technical Diagram Block */}
        <section className="mt-32 p-12 border border-white/5 bg-white/[0.01] rounded-sm">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full animate-ping" />
            <h4 className="text-[10px] tracking-[0.4em] uppercase">Live_Node_Mesh_Simulation</h4>
          </div>
          
          <div className="aspect-video w-full flex items-center justify-center relative bg-black/20 overflow-hidden">
             {/*  */}
             <div className="text-[10px] opacity-20 uppercase tracking-[2em]">Visualizing_Mesh_Flow</div>
          </div>
        </section>
      </div>
    </div>
  );
}