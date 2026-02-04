"use client";

import React from 'react';
import { useBiosphere, BiomeType } from '@/context/BiosphereProvider';
import { motion } from 'framer-motion';

const biomes: { id: BiomeType; label: string; tier: string }[] = [
  { id: 'horizon', label: 'The Horizon', tier: 'MACRO' },
  { id: 'soil', label: 'The Soil', tier: 'MACRO' },
  { id: 'kinetic', label: 'The Kinetic', tier: 'MESO' },
  { id: 'studio', label: 'The Studio', tier: 'MESO' },
  { id: 'source', label: 'The Source', tier: 'MICRO' },
  { id: 'roots', label: 'The Roots', tier: 'MICRO' },
];

export const ScaleSelector = () => {
  const { activeBiome, setActiveBiome } = useBiosphere();

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-[80] flex flex-col gap-12">
      {/* The Scale Labels */}
      <div className="absolute -left-4 h-full w-[1px] bg-current opacity-10" />
      
      {biomes.map((biome) => (
        <button
          key={biome.id}
          onClick={() => setActiveBiome(biome.id)}
          className="group relative flex items-center text-left"
        >
          {/* Tier Marker (Macro/Meso/Micro) */}
          <span className="absolute -left-8 text-[10px] rotate-[-90deg] opacity-0 group-hover:opacity-40 transition-opacity">
            {biome.tier}
          </span>

          <div className="flex flex-col">
            <span className={`text-[10px] tracking-widest transition-all ${
              activeBiome === biome.id ? 'opacity-100' : 'opacity-0'
            }`}>
              {activeBiome === biome.id ? '● ACTIVE' : ''}
            </span>
            <span className={`scale-nav text-xs transition-all duration-500 ${
              activeBiome === biome.id ? 'translate-x-4 opacity-100' : 'opacity-30 group-hover:opacity-60'
            }`}>
              {biome.label}
            </span>
          </div>

          {/* Indicator Dot */}
          {activeBiome === biome.id && (
            <motion.div 
              layoutId="selector-dot"
              className="absolute -left-[34px] w-2 h-2 rounded-full bg-current"
            />
          )}
        </button>
      ))}
    </nav>
  );
};