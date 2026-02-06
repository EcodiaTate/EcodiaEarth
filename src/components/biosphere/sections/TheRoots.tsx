"use client";

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useBiosphere } from '@/context/BiosphereProvider';

export const TheRoots = () => {
  const { setActiveBiome } = useBiosphere();
  
  // 1. Lower threshold (0.2) makes the biome switch feel more fluid and less laggy
  const { ref, inView } = useInView({ 
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px' // Trigger slightly before it hits the center
  });

  useEffect(() => {
    if (inView) setActiveBiome('roots');
  }, [inView, setActiveBiome]);

  return (
    <footer 
      ref={ref} 
      // 2. Added 'contain-paint' to prevent the footer from affecting the layout of elements above it
      className="relative bg-[#050505] text-[#e5e5e5] py-20 md:py-24 px-6 md:px-12 overflow-hidden contain-paint"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          
          {/* Brand/Identity */}
          <div className="col-span-1">
            <div className="mb-6">
               <div className="w-10 h-10 border border-[var(--accent-color)] rounded-full flex items-center justify-center">
                  <span className="text-[8px] text-[var(--accent-color)]">EE</span>
               </div>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 leading-relaxed">
              Ecodia Earth <br/> The Biosphere Manifesto <br/> © 2026
            </p>
          </div>

          {/* Root Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase mb-6 md:mb-8 opacity-30">The Covenant</h4>
            <ul className="space-y-4 text-xs tracking-widest uppercase">
              {['Legal Archive', 'Privacy Mycelium', 'Terms of Growth'].map((link) => (
                <li key={link} className="hover:text-[var(--accent-color)] cursor-pointer transition-colors duration-300">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase mb-6 md:mb-8 opacity-30">The Network</h4>
            <ul className="space-y-4 text-xs tracking-widest uppercase">
              {['Press Kit', 'Company DNA', 'Global Nodes'].map((link) => (
                <li key={link} className="hover:text-[var(--accent-color)] cursor-pointer transition-colors duration-300">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase mb-6 md:mb-8 opacity-30">Connect</h4>
            <p className="text-lg md:text-xl font-serif italic mb-6">"Reach out to the source."</p>
            <a 
              href="mailto:hello@ecodia.earth" 
              className="text-xs border-b border-current pb-1 hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] cursor-pointer transition-all inline-block"
            >
              hello@ecodia.earth
            </a>
          </div>
        </div>

        {/* 3. Optimized Large Text: select-none and pointer-events-none save CPU on hover checks */}
        <div className="mt-24 md:mt-32 flex justify-center pointer-events-none select-none">
           <div className="opacity-5 text-[14vw] font-light tracking-[-0.05em] uppercase transition-opacity duration-1000">
             Biosphere
           </div>
        </div>
      </div>

      {/* 4. Optimized Visuals: No heavy filters or blurs here */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>
    </footer>
  );
};