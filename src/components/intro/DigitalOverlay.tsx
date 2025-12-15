// DigitalOverlay.tsx
"use client";
import { motion } from "framer-motion";

export function DigitalOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      className="fixed inset-0 z-40 pointer-events-none"
    >
      {/* Subtle Grid Lines - FIX APPLIED HERE (Opacity 0. -> 0.1 for the first line) */}
      <div 
        className="absolute inset-0 w-full h-full opacity-10" 
        style={{ 
          backgroundImage: 
            `linear-gradient(to right, rgba(163, 135, 34, 0.1) 1px, transparent 1px), 
             linear-gradient(to bottom, rgba(163, 135, 34, 0.1) 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }}
      />
      {/* Scanline Effect (subtle animated wash) */}
      <div 
        className="absolute top-0 w-full h-4 bg-white/20 opacity-0 animate-scanline" 
        style={{ boxShadow: "0 0 50px 5px rgba(255, 255, 255, 0.2)" }} 
      />
      
      <style jsx global>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); opacity: 0.2; }
          50% { opacity: 0; }
          100% { transform: translateY(100vh); opacity: 0.2; }
        }
        .animate-scanline {
          animation: scanline 20s infinite linear;
        }
      `}</style>
    </motion.div>
  );
}