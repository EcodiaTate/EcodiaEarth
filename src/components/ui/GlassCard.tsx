// src/components/ui/GlassCard.tsx
"use client";

import { motion } from "framer-motion";

export default function GlassCard({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode, 
  className?: string 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`
        relative overflow-hidden
        rounded-2xl 
        border border-white/40 
        bg-white/40 
        backdrop-blur-xl 
        shadow-sm
        p-6 sm:p-8
        ${className}
      `}
    >
      {/* Mobile USP: 
         bg-white/40 + backdrop-blur-xl creates the "Frosted" effect.
         The moving blobs behind this will look like soft, shifting gradients.
      */}
      {children}
    </motion.div>
  );
}