// src/components/ui/LivingBackground.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function LivingBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track page scroll for color shifting AND parallax movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Color Narrative (Same as before - tells the story)
  // Amber (Dawn) -> Emerald (Life) -> Indigo (Depth)
  const color1 = useTransform(scrollYProgress, [0, 0.5, 1], ["#fbbf24", "#34d399", "#6366f1"]);
  const color2 = useTransform(scrollYProgress, [0, 0.5, 1], ["#f472b6", "#60a5fa", "#8b5cf6"]);

  // 2. Vertical Parallax (Mobile USP)
  // The blobs move slower than the scroll, creating depth.
  // y1 moves down slightly, y2 moves up slightly.
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); 
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 overflow-hidden bg-border"
      style={{ willChange: "transform" }} // Hints for mobile GPU
    >
      {/* NOISE TEXTURE: Essential for "Tactile" feel on high-res mobile screens */}
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-multiply pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* BLOB 1: Top Left -> Drifts Down */}
      <motion.div
        className="absolute -top-[10%] -left-[20%] w-[120vw] h-[120vw] sm:w-[80vh] sm:h-[80vh] rounded-full mix-blend-multiply blur-[80px] opacity-60"
        style={{
          backgroundColor: color1,
          y: y1, // Tied to scroll
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut", // Smoother breathing
        }}
      />

      {/* BLOB 2: Bottom Right -> Drifts Up */}
      <motion.div
        className="absolute top-[20%] -right-[20%] w-[120vw] h-[120vw] sm:w-[90vh] sm:h-[90vh] rounded-full mix-blend-multiply blur-[80px] opacity-60"
        style={{
          backgroundColor: color2,
          y: y2, // Tied to scroll
        }}
        animate={{
          scale: [1.05, 1, 1.05],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}