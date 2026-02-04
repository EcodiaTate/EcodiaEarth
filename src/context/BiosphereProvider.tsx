"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type BiomeType = 'horizon' | 'soil' | 'kinetic' | 'studio' | 'source' | 'roots';

interface BiosphereContextType {
  activeBiome: BiomeType;
  setActiveBiome: (biome: BiomeType) => void;
  isDeepDive: boolean;
  setIsDeepDive: (state: boolean) => void;
}

const BiosphereContext = createContext<BiosphereContextType | undefined>(undefined);

export const BiosphereProvider = ({ children }: { children: ReactNode }) => {
  const [activeBiome, setActiveBiome] = useState<BiomeType>('horizon');
  const [isDeepDive, setIsDeepDive] = useState(false);

  // Sync the theme class to the body for global CSS targeting
  useEffect(() => {
    const body = document.body;
    body.className = `theme-${activeBiome} ${isDeepDive ? 'mode-deep-dive' : 'mode-surface'}`;
  }, [activeBiome, isDeepDive]);

  return (
    <BiosphereContext.Provider value={{ activeBiome, setActiveBiome, isDeepDive, setIsDeepDive }}>
      <div className="biosphere-container relative min-h-screen transition-colors duration-1000 ease-in-out">
        {/* The Grain Overlay - Universal Texture */}
        <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] mix-blend-multiply bg-[url('/textures/film-grain.png')]" />
        
        {/* The Living Thread Container (Global SVG Space) */}
        <svg className="fixed inset-0 w-full h-full pointer-events-none z-40">
           <path id="the-thread" fill="none" stroke="currentColor" strokeWidth="1" className="transition-all duration-1000" />
        </svg>

        {children}
      </div>
    </BiosphereContext.Provider>
  );
};

export const useBiosphere = () => {
  const context = useContext(BiosphereContext);
  if (!context) throw new Error("useBiosphere must be used within BiosphereProvider");
  return context;
};