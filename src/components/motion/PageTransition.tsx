// src/components/motion/PageTransition.tsx
"use client";
import { motion, cubicBezier } from "framer-motion";

const easeCinema = cubicBezier(0.16, 1, 0.3, 1);

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0.98,        // Start slightly small
        filter: "blur(10px)" // Start out of focus
      }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        filter: "blur(0px)" 
      }}
      exit={{ 
        opacity: 0, 
        scale: 1.02,        // Float towards user on exit
        filter: "blur(5px)" 
      }}
      transition={{ 
        duration: 0.5,      // Perfect speed for mobile transitions
        ease: easeCinema 
      }}
      className="will-change-transform" // Performance hint
    >
      {children}
    </motion.div>
  );
}