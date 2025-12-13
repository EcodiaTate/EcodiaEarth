"use client";

import { motion, cubicBezier } from "framer-motion"; // Import cubicBezier

export function HeroTitle() {
  // 1. Fix TypeScript Error: Use cubicBezier()
  const filmEase = cubicBezier(0.25, 0.4, 0.25, 1);

  const resolveParams = {
    hidden: { 
      opacity: 0, 
      filter: "blur(12px) brightness(2)", 
      scale: 1.1,
      y: 10 
    },
    visible: { 
      opacity: 1, 
      filter: "blur(0px) brightness(1)", 
      scale: 1,
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: filmEase, // Use the typed variable here
      } 
    },
  };

  return (
    <div className="relative z-10">
      <svg className="absolute w-0 h-0 pointer-events-none">
        <filter id="filmGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" /> 
          </feComponentTransfer>
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </svg>

      <h1 className="font-display text-6xl sm:text-8xl leading-[0.95] tracking-tight text-ink">
        
        {/* LINE 1: "We turn" */}
        {/* 2. Fix Clipping: Add 'py-2 -my-2' to expand the mask vertically */}
        <div className="overflow-hidden mb-2 sm:mb-4 py-2 -my-2">
          <motion.div
             initial="hidden"
             animate="visible"
             transition={{ staggerChildren: 0.1 }}
             className="flex gap-4"
          >
             <Word variants={resolveParams}>We</Word>
             <Word variants={resolveParams}>turn</Word>
          </motion.div>
        </div>

        {/* LINE 2: "Action into Joy" */}
        {/* 2. Fix Clipping: Add 'py-2 -my-2' here too */}
        <div className="overflow-hidden py-2 -my-2">
          <motion.div
             initial="hidden"
             animate="visible"
             transition={{ staggerChildren: 0.1, delayChildren: 0.4 }} 
             className="flex flex-wrap gap-x-4 gap-y-0"
          >
             <span className="relative inline-block">
               <motion.span 
                 variants={resolveParams}
                 className="block text-emerald-700 relative z-10"
                 style={{ filter: "url(#filmGrain)" }} 
               >
                 action
               </motion.span>
               
               <motion.span
                 variants={resolveParams} 
                 className="absolute inset-0 text-emerald-400 blur-md opacity-50 -z-10"
                 aria-hidden="true"
               >
                 action
               </motion.span>
             </span>

             <Word variants={resolveParams}>into</Word>

             <span className="relative inline-block">
               <motion.span 
                 variants={resolveParams}
                 className="block text-amber-600 relative z-10"
                 style={{ filter: "url(#filmGrain)" }}
               >
                 joy.
               </motion.span>
               
               <motion.span
                 variants={resolveParams} 
                 className="absolute inset-0 text-amber-400 blur-md opacity-60 -z-10"
                 aria-hidden="true"
               >
                 joy.
               </motion.span>
             </span>

          </motion.div>
        </div>
      </h1>
    </div>
  );
}

function Word({ children, variants }: { children: string, variants: any }) {
  return (
    <motion.span variants={variants} className="inline-block origin-bottom-left">
      {children}
    </motion.span>
  );
}