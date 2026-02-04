"use client";

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useBiosphere } from '@/context/BiosphereProvider';

export const TheRoots = () => {
  const { setActiveBiome } = useBiosphere();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setActiveBiome('roots');
  }, [inView, setActiveBiome]);

  return (
    <footer ref={ref} className="relative bg-[#050505] text-[#e5e5e5] py-24 px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          
          {/* Brand/Identity */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
               <div className="w-10 h-10 border border-[var(--accent-color)] rounded-full flex items-center justify-center">
                  <span className="text-[8px] text-[var(--accent-color)]">EE</span>
               </div>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 leading-relaxed">
              Ecodia Earth <br/> The Biosphere Manifesto <br/> © 2026
            </p>
          </div>

          {/* Root Links: The Covenant & Archive */}
          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase mb-8 opacity-30">The Covenant</h4>
            <ul className="space-y-4 text-xs tracking-widest uppercase">
              <li className="hover:text-[var(--accent-color)] cursor-pointer transition-colors">Legal Archive</li>
              <li className="hover:text-[var(--accent-color)] cursor-pointer transition-colors">Privacy Mycelium</li>
              <li className="hover:text-[var(--accent-color)] cursor-pointer transition-colors">Terms of Growth</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase mb-8 opacity-30">The Network</h4>
            <ul className="space-y-4 text-xs tracking-widest uppercase">
              <li className="hover:text-[var(--accent-color)] cursor-pointer transition-colors">Press Kit</li>
              <li className="hover:text-[var(--accent-color)] cursor-pointer transition-colors">Company DNA</li>
              <li className="hover:text-[var(--accent-color)] cursor-pointer transition-colors">Global Nodes</li>
            </ul>
          </div>

          {/* Contact: The Direct Line */}
          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase mb-8 opacity-30">Connect</h4>
            <p className="text-xl font-serif italic mb-6">"Reach out to the source."</p>
            <span className="text-xs border-b border-current pb-1 hover:text-[var(--accent-color)] cursor-pointer transition-all">
              hello@ecodia.earth
            </span>
          </div>
        </div>

        <div className="mt-32 flex justify-center">
           <div className="opacity-10 text-[12vw] font-light tracking-[-0.05em] select-none uppercase">
             Biosphere
           </div>
        </div>
      </div>

      {/* Background Visual: Deep Roots */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
    </footer>
  );
};