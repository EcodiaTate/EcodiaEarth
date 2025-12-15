// ActivationButton.tsx (New component file)
"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Assuming you use next/link for navigation

export function ActivationButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.5, ease: [0.19, 1, 0.22, 1] }} // Heavy delay after title
      className="relative w-full md:w-auto"
    >
      <Link 
        href="/company" 
        className="group relative z-10 block px-12 py-5 bg-ink text-white rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-ink/40 w-full text-center border border-ink"
      >
        {/* Background "Charge" Aura on Hover */}
        <motion.div 
          className="absolute inset-0 bg-gold/50 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-30" 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Inner Wipe Effect (Mint activation) */}
        <div className="absolute inset-0 bg-mint translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
        
        {/* Content */}
        <span className="relative z-20 flex items-center justify-center gap-3 font-semibold tracking-widest text-sm md:text-base">
          <span>ACTIVATE WORLD</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </Link>
    </motion.div>
  );
}