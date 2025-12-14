// src/components/hero/ScannerBackground.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ScannerBackground() {
  return (
    <div className="relative w-full h-full bg-black select-none">
      
      {/* LAYER 1: The "Dormant" State (Dark, Grayscale, Noise) */}
      <div className="absolute inset-0 z-0">
         <Image 
            src="/img/eco-district.png" 
            alt="Background" 
            fill 
            className="object-cover opacity-40 grayscale contrast-125"
            priority
         />
         <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* LAYER 2: The "Scanner" Beam (Full Color, Revealed) 
          We animate the clip-path to move up and down.
      */}
      <motion.div 
         className="absolute inset-0 z-10"
         animate={{ 
            clipPath: [
               "inset(0 0 100% 0)", // Start (Hidden at top)
               "inset(0 0 0% 0)",   // End (Fully revealed)
               "inset(100% 0 0% 0)" // Hidden at bottom
            ]
         }}
         transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 1
         }}
      >
         {/* The Sharp Image */}
         <Image 
            src="/img/eco-district.png" 
            alt="Active Scan" 
            fill 
            className="object-cover brightness-110"
            priority
         />
         
         {/* The "Laser" Line at the bottom of the scan */}
         <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-mint shadow-[0_0_20px_2px_rgba(52,211,153,0.8)]" />
         
         {/* Scanlines Overlay (Only on the revealed part) */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </motion.div>

      {/* LAYER 3: Global Texture Overlay (Unifies everything) */}
      <div className="absolute inset-0 z-20 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

    </div>
  )
}