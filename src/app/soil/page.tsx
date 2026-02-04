"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBiosphere } from '@/context/BiosphereProvider';
import Link from 'next/link';

const fieldNotes = [
  { 
    id: "FN_01", 
    title: "Urban Mycelium Initiative", 
    location: "Berlin Node", 
    tags: ["Youth", "Fungi"],
    excerpt: "Deploying bio-remediation clusters in decommissioned industrial zones."
  },
  { 
    id: "FN_02", 
    title: "The Coastal Mesh", 
    location: "Portugal Node", 
    tags: ["Local", "Water"],
    excerpt: "Restoring saline balance through community-led mangrove planting."
  },
  { 
    id: "FN_03", 
    title: "Youth Spore Program", 
    location: "Global", 
    tags: ["Education", "Digital"],
    excerpt: "Training the next generation of 'Soil Members' in decentralized ecological tracking."
  }
];

export default function SoilDeepDive() {
  const { setActiveBiome, setIsDeepDive } = useBiosphere();

  useEffect(() => {
    setActiveBiome('soil');
    setIsDeepDive(true);
    return () => setIsDeepDive(false);
  }, [setActiveBiome, setIsDeepDive]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24 px-8 md:px-24 relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.08] pointer-events-none bg-[url('/textures/paper-grain.jpg')] mix-blend-multiply" />

      {/* Nav */}
      <nav className="fixed top-12 left-12 z-50">
        <Link href="/" className="group flex items-center gap-4">
          <div className="w-8 h-[1px] bg-current transition-all group-hover:w-12" />
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-50">Back to Surface</span>
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-24 space-y-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="source-code text-[10px] tracking-[0.5em] uppercase text-[var(--accent-color)]">
              Registry: Members of the Soil
            </span>
          </motion.div>
          <h1 className="text-6xl font-serif">
            Field <span className="italic">Observations</span>
          </h1>
          <p className="max-w-xl text-lg opacity-70 font-serif italic">
            "A record of local actions blooming into a global mesh."
          </p>
        </header>

        {/* The Field Note Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {fieldNotes.map((note, i) => (
            <motion.div 
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-stone-200 mb-6 overflow-hidden relative">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-300/50 to-transparent" />
                <span className="absolute top-4 left-4 source-code text-[9px] opacity-40">{note.id}</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex gap-2">
                  {note.tags.map(tag => (
                    <span key={tag} className="text-[8px] border border-current/20 px-2 py-0.5 rounded-full uppercase tracking-widest opacity-60">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-serif group-hover:text-[var(--accent-color)] transition-colors">
                  {note.title}
                </h3>
                <p className="text-sm opacity-60 leading-relaxed font-serif">
                  {note.excerpt}
                </p>
                <div className="pt-4 flex items-center gap-2 opacity-30 text-[9px] uppercase tracking-tighter">
                  <span className="w-1 h-1 bg-current rounded-full" />
                  {note.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Interactive Element: Join the Ledger */}
        <section className="mt-32 p-16 border border-current/5 bg-stone-50/50 flex flex-col items-center text-center space-y-8">
           <h2 className="text-2xl font-serif italic">Ready to contribute your own observations?</h2>
           <button className="px-12 py-4 bg-[var(--text-primary)] text-[var(--bg-primary)] text-[10px] tracking-[0.4em] uppercase hover:bg-[var(--accent-color)] transition-all">
             Apply for Local Node Access
           </button>
        </section>
      </div>
    </div>
  );
}