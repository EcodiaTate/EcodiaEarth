// src/components/ui/EcoToggle.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function EcoToggle() {
  const [isEco, setIsEco] = useState(false);

  useEffect(() => {
    if (isEco) {
      document.documentElement.classList.add("eco-mode");
    } else {
      document.documentElement.classList.remove("eco-mode");
    }
  }, [isEco]);

  return (
    <button
      onClick={() => setIsEco(!isEco)}
      className="fixed bottom-6 left-6 z-[100] group flex items-center gap-3 mix-blend-difference"
      aria-label="Toggle Low Energy Mode"
    >
      {/* SWITCH UI */}
      <div className={`
        relative w-12 h-6 rounded-full border-2 transition-colors duration-300
        ${isEco ? "border-mint bg-black" : "border-white/50 bg-transparent"}
      `}>
         <motion.div 
            className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full ${isEco ? "bg-mint" : "bg-white"}`}
            animate={{ x: isEco ? 24 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
         />
      </div>

      {/* TEXT LABEL */}
      <span className={`hidden md:block font-mono text-[10px] uppercase tracking-widest transition-colors ${isEco ? "text-mint" : "text-white/50 group-hover:text-white"}`}>
        {isEco ? "ECO_MODE: ACTIVE" : "ECO_MODE: OFF"}
      </span>

      {/* THE "SCORCHED EARTH" CSS 
         This forces everything to Black/Grey. No exceptions.
      */}
      <style jsx global>{`
        .eco-mode {
          background-color: #000000 !important;
        }

        /* FORCE ALL ELEMENTS TO DARK MODE */
        .eco-mode * {
          background-image: none !important;
          background-color: #000000 !important;
          color: #a3a3a3 !important; /* Neutral Grey for text */
          border-color: #262626 !important; /* Dark Grey for borders */
          box-shadow: none !important;
          text-shadow: none !important;
          -webkit-text-stroke: 0px !important; /* Remove outlines */
          filter: none !important; /* Remove blurs/glows */
          backdrop-filter: none !important;
        }

        /* KEEP ACCENTS VISIBLE BUT DIM */
        .eco-mode .text-mint,
        .eco-mode button, 
        .eco-mode a {
           color: #10b981 !important; /* Dim Emerald for links/buttons */
        }
        
        /* HIDE DECORATIVE BLOBS/GRADIENTS COMPLETELY */
        .eco-mode [class*="gradient"],
        .eco-mode [class*="blur"], 
        .eco-mode svg {
           opacity: 0.2 !important;
        }

        /* EXCEPTIONS: MAKE SURE THE TOGGLE ITSELF IS VISIBLE */
        .eco-mode button[aria-label="Toggle Low Energy Mode"] * {
           background-color: transparent !important;
           border-color: currentColor !important;
        }
        .eco-mode button[aria-label="Toggle Low Energy Mode"] div {
           background-color: #000000 !important;
        }
      `}</style>
    </button>
  );
}