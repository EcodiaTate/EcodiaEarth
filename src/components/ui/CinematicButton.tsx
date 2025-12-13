"use client";

import { motion } from "framer-motion";
import React from "react";

// NOTICE: "export function", NOT "export default function"
export function CinematicButton({ 
  children, 
  href, 
  className = "" 
}: { 
  children: React.ReactNode, 
  href: string, 
  className?: string 
}) {
  return (
    <motion.a
      href={href}
      className={`relative inline-flex items-center justify-center overflow-hidden group ${className}`}
      whileTap={{ scale: 0.9, transition: { type: "spring", stiffness: 400, damping: 10 } }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
        animate={{ translateX: ["-100%", "200%"] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 3.5,
          ease: "easeInOut",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}