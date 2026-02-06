"use client";

import React from 'react';
import { useBiosphere, BiomeType } from '@/context/BiosphereProvider';
import { motion } from 'framer-motion';

const biomes: { id: BiomeType; label: string; tier: string }[] = [
  { id: 'horizon', label: 'Horizon', tier: 'Macro' },
  { id: 'soil', label: 'Soil', tier: 'Macro' },
  { id: 'kinetic', label: 'Kinetic', tier: 'Meso' },
  { id: 'studio', label: 'Studio', tier: 'Meso' },
  { id: 'source', label: 'Source', tier: 'Micro' },
  { id: 'roots', label: 'Roots', tier: 'Micro' },
];

export const ScaleSelector = () => {
  const { activeBiome, setActiveBiome } = useBiosphere();

  return (
    <nav className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-[80] flex flex-col gap-6 md:gap-8 group/nav">
      {/* The Scale Line (Visual Guide) */}
      <div className="absolute left-[3px] h-full w-[1px] bg-current opacity-10" />
      
      {biomes.map((biome) => {
        const isActive = activeBiome === biome.id;
        
        return (
          <button
            key={biome.id}
            onClick={() => setActiveBiome(biome.id)}
            className="group relative flex items-center outline-none"
            aria-label={`Maps to ${biome.label}`}
          >
            {/* The Indicator Dot (Always visible, clean) */}
            <div className={`relative w-[7px] h-[7px] rounded-full border border-current transition-all duration-500 ${
              isActive ? 'bg-current scale-125' : 'opacity-20 group-hover:opacity-60'
            }`}>
              {isActive && (
                <motion.div 
                  layoutId="selector-glow"
                  className="absolute inset-0 rounded-full bg-current blur-[4px] opacity-50"
                />
              )}
            </div>

            {/* Label - Hidden by default on mobile, revealed on hover/active */}
            <span className={`
              absolute left-6 whitespace-nowrap source-code text-[9px] tracking-[0.2em] uppercase transition-all duration-500
              ${isActive 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-2 md:group-hover/nav:opacity-40 md:group-hover/nav:translate-x-1'
              }
              max-md:pointer-events-none
            `}>
              {biome.label}
              <span className="ml-4 opacity-40 hidden md:inline-block">/ {biome.tier}</span>
            </span>
          </button>
        );
      })}
    </nav>
  );
};