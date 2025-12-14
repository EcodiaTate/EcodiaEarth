// src/components/ui/InfiniteTicker.tsx
"use client";
import { motion } from "framer-motion";

export function InfiniteTicker({ items }: { items: string[] }) {
  return (
    <div className="relative w-full overflow-hidden flex select-none bg-white border-y border-border py-3">
      
      {/* 1. Gradient Masks (Matches the #fafaf9 background) */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

      {/* 2. The Moving Track */}
      <motion.div 
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {/* Double items for loop */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              
              {/* The Text */}
              <span className="font-mono text-xs md:text-sm font-bold tracking-[0.2em] text-muted uppercase">
                 {item}
              </span>
          

            </div>
        ))}
      </motion.div>
    </div>
  )
}