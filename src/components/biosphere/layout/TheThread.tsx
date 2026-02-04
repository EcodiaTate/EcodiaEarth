"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useBiosphere } from '@/context/BiosphereProvider';

export const TheThread = () => {
  const { activeBiome } = useBiosphere();
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress for the path drawing animation
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Define how the thread looks in different biomes
  const getThreadStyles = () => {
    switch (activeBiome) {
      case 'soil':
        return { strokeWidth: 2, dashArray: "0 0", opacity: 0.4 }; // Solid Root
      case 'studio':
        return { strokeWidth: 1.5, dashArray: "5 5", opacity: 0.6 }; // Stitched Thread
      case 'source':
        return { strokeWidth: 1, dashArray: "0 0", opacity: 1 }; // Laser Beam
      default:
        return { strokeWidth: 1, dashArray: "10 10", opacity: 0.2 }; // Ethereal Horizon
    }
  };

  const styles = getThreadStyles();

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <svg className="w-full h-full">
        {/* The Dynamic Path */}
        <motion.path
          d="M 50,0 Q 45,250 50,500 T 50,1000" // A subtle organic curve
          fill="none"
          stroke="var(--accent-color)"
          strokeWidth={styles.strokeWidth}
          strokeDasharray={styles.dashArray}
          initial={{ pathLength: 0 }}
          style={{ 
            pathLength, 
            opacity: styles.opacity,
            transition: "stroke-dasharray 0.8s ease, stroke-width 0.8s ease, stroke 1.2s ease"
          }}
        />
        
        {/* The "Growth Head" (A small pulse at the tip of the thread) */}
        <motion.circle
          cx="50"
          cy="0"
          r="2"
          fill="var(--accent-color)"
          style={{ 
            offsetPath: "path('M 50,0 Q 45,250 50,500 T 50,1000')",
            offsetDistance: useTransform(pathLength, [0, 1], ["0%", "100%"]),
          }}
        >
          <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
        </motion.circle>
      </svg>
    </div>
  );
};