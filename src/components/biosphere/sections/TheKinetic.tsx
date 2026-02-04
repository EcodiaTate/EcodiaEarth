"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useBiosphere } from '@/context/BiosphereProvider';

const pathStages = [
  { season: "Equinox", title: "Seeding the Mesh", desc: "Deployment of initial node clusters." },
  { season: "Solstice", title: "Solar Expansion", desc: "Kinetic energy harvesting protocols live." },
  { season: "Harvest", title: "The Sovereign Yield", desc: "Full decentralization of local community data." }
];

export const TheKinetic = () => {
  const { setActiveBiome } = useBiosphere();
  const { ref, inView } = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) setActiveBiome('kinetic');
  }, [inView, setActiveBiome]);

  return (
    <section 
      ref={ref}
      id="kinetic"
      className="relative min-h-[150vh] py-32 px-12 bg-[var(--bg-primary)] overflow-hidden"
    >
      {/* High-Energy Visuals: Blurred Motion Trails */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[var(--accent-color)] opacity-10 blur-[120px] rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="source-code text-[10px] tracking-[0.5em] uppercase text-[var(--accent-color)] mb-4 block">
              03. The Movement
            </span>
            <h2 className="text-6xl md:text-8xl font-light uppercase tracking-tighter text-[var(--text-primary)] mb-8">
              The <span className="italic">Kinetic</span> <br/> Flow.
            </h2>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* The Seasonal Path (Roadmap as a Vine) */}
          <div className="lg:col-span-8 relative">
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--accent-color)] via-[var(--accent-color)] to-transparent opacity-30" />
            
            <div className="space-y-32 relative">
              {pathStages.map((stage, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className="relative pl-20"
                >
                  {/* The "Bloom" Point */}
                  <div className="absolute left-[18px] top-2 w-[15px] h-[15px] rounded-full bg-[var(--accent-color)] shadow-[0_0_20px_var(--accent-color)]" />
                  
                  <span className="source-code text-[10px] uppercase opacity-40 mb-2 block">
                    {stage.season} Stage
                  </span>
                  <h3 className="text-3xl font-serif mb-4 text-[var(--text-primary)]">{stage.title}</h3>
                  <p className="max-w-md text-lg opacity-60 font-serif leading-relaxed">
                    {stage.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partnerships in Growth (Business) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.div 
              className="p-10 border border-current/10 backdrop-blur-md rounded-2xl bg-white/5"
              whileHover={{ borderColor: 'var(--accent-color)' }}
            >
              <h4 className="text-xs tracking-widest uppercase mb-6 opacity-80">Partnerships in Growth</h4>
              <p className="text-sm opacity-60 mb-8 leading-loose italic">
                "We don't seek 'Users.' We seek systemic anchors—businesses ready to transition to the Biosphere."
              </p>
              <button className="w-full py-4 border border-[var(--accent-color)] text-[var(--accent-color)] text-[10px] tracking-[0.3em] uppercase hover:bg-[var(--accent-color)] hover:text-black transition-all">
                Sync with the Mesh
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background SVG Curve (The Vine Thread) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 800" className="h-full w-full">
          <path d="M100,0 C-50,200 150,400 0,800" fill="none" stroke="var(--accent-color)" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
};