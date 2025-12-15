"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import * as React from "react";

// --- Base Transition (EXTRACTED FIX) ---
const baseSpringTransition = {
  type: "spring" as const, 
  stiffness: 80,
  damping: 20,
  mass: 0.8,
};

// The title lines still use the dramatic spring entrance
// *** 'transition' property REMOVED from the 'visible' state ***
const titleLineVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    // The transition properties are no longer here
  },
};

type HeroTitleProps = {
  /** Transparent PNG with the long root */
  logoSrc?: string;
  logoHeight?: string;
  logoOffset?: string;
  headroom?: string;
  containerMax?: string; // This is now used primarily for the image's height/width calculation
  className?: string;
};

export function HeroTitle({
  logoSrc = "/img/labs-logo-long.png",
  logoHeight = "150vh", 
  logoOffset = "-5vh",  
  headroom = "120vh",   
  // Adjusted containerMax for better image centering on all screens
  containerMax = "max(100vh, 100vw)",
  className,
}: HeroTitleProps) {
  
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const yLogo = useTransform(scrollYProgress, [0, 1], ["0px", "600px"]); 
  const opacityLogo = useTransform(scrollYProgress, [0.3, 1], [1, 0.3]);
  const scaleTitle = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]); 

  return (
    // Max width set to 100vw to allow the image centering logic to use full viewport width
    <section
      ref={ref} 
      className={`relative w-full max-w-[100vw] mx-auto px-6 sm:px-12 overflow-visible ${className ?? ""}`}
      style={
        {
          ["--logo-space" as any]: headroom,
          ["--img-height" as any]: logoHeight,
          ["--logo-offset" as any]: logoOffset,
          // We use containerMax to define the size that is centered
          ["--img-size-max" as any]: containerMax, 
        } as React.CSSProperties
      }
    >
      {/* Glitch/Flare Component on Load (Z-index 30) */}
      <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1, times: [0, 0.1, 0.5, 1] }}
          className="fixed inset-0 z-30 pointer-events-none bg-white mix-blend-overlay"
      >
          <motion.div
              initial={{ filter: "hue-rotate(0deg)" }}
              animate={{ filter: "hue-rotate(360deg)" }}
              transition={{ duration: 0.2, repeat: 2, repeatType: "reverse" }}
              className="absolute inset-0 bg-gold/50 opacity-50"
          />
      </motion.div>

      {/* Cinematic Shadow/Aura Layer (Z-index 5) */}
      <motion.div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-[5] w-full max-w-[90rem] h-[100vh]"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
          {/* Subtle gold halo around where the seedling appears */}
          <div className="absolute top-[20vh] left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gold/10 blur-3xl" />
          {/* Mint wash over the title area */}
          <div className="absolute top-[80vh] left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-mint/5 blur-3xl" />
      </motion.div>
      
      {/* SEEDLING LOGO (Z-index 10) - Image centering fix applied here */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[10] flex justify-center">
        <motion.div 
          className="relative" // Use relative to allow motion.div to size content
          style={{ 
            height: "var(--img-height)", 
            top: "var(--logo-offset)", 
            // Ensures the image takes up the full size defined by containerMax (now img-size-max)
            width: "var(--img-size-max)", 
            y: yLogo,           
            opacity: opacityLogo,
          }}
        >
          {/* The image is now contained within a centered, full-size motion.div */}
          <div className="relative h-full w-full">
            <img 
              src={logoSrc} 
              alt="Ecodia Labs" 
              // object-contain + object-center ensures it scales to fit inside the motion.div and stays centered
              className="block w-full h-full object-contain object-center select-none" 
              style={{ margin: "0" }} 
              draggable={false} 
            />
          </div>
        </motion.div>
      </div>

      {/* Reserved Headroom for Initial Viewport */}
      <div style={{ height: "var(--logo-space)" }} />

      {/* HERO TITLE (The Dramatic Focus Point - Z-index 20) */}
      {/* Adjusted top-[40vh] to top-[30vh] for better initial placement */}
      <motion.div 
          className="relative z-[20] sticky top-[30vh]" 
          style={{ scale: scaleTitle }} 
      >
        
        {/* Marker & Context Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-start justify-center gap-2 pointer-events-none"
        >
          <div className="w-[1px] h-12 bg-ink" />
          <span className="font-mono text-[10px] text-ink uppercase tracking-widest">Fig. 01 - ECODIA</span>
        </motion.div>
        
        {/* Pulsing Detail Lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full max-w-4xl h-0.5 pointer-events-none z-[25] opacity-50">
            <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-mint/50 origin-center absolute top-0" 
            />
            <motion.div 
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-gold/50 blur-sm origin-center absolute top-0" 
            />
        </div>

        {/* Title */}
        <h1 
          // Increased pb-[0.06em] to pb-40 for more space below the title
          className="relative font-display text-[15vw] sm:text-[14vw] leading-[0.75] tracking-tighter overflow-visible pt-8 pb-40 text-center"
        >
          
          {/* LINE 1 — GOLD / DARK GOLD */}
          <motion.span 
            className="block" 
            variants={titleLineVariants} 
            initial="hidden" 
            animate="visible" 
            // FIX APPLIED HERE: Use baseSpringTransition instead of the faulty spread
            transition={{ ...baseSpringTransition, delay: 0.4 }} 
          >
            <span 
              className="inline-block text-transparent bg-clip-text bg-[length:300%_100%] animate-[shine_10s_linear_infinite]" 
              style={{ 
                paddingBlock: "0.08em", 
                backgroundImage: "repeating-linear-gradient(135deg,#f4d35e 0%,#f4d35e 11%,#e7c84f 12%,#a38722 15%,#a38722 18%,#c9aa35 20%,#f4d35e 22%,#f4d35e 58%,#e7c84f 59%,#a38722 62%,#a38722 66%,#c9aa35 68%,#f4d35e 70%,#f4d35e 100%)", 
                backgroundPosition: "-100% 50%", 
                WebkitBackgroundClip: "text", 
                WebkitTextFillColor: "transparent" 
              }}
            >
              THE WORLD
            </span>
          </motion.span>

          {/* LINE 2 — STROKE */}
          <motion.span 
            className="block relative" 
            variants={titleLineVariants} 
            initial="hidden" 
            animate="visible" 
            // FIX APPLIED HERE
            transition={{ ...baseSpringTransition, delay: 0.5 }}
          >
            <span 
              className="relative z-[20] text-transparent" 
              style={{ WebkitTextStroke: "1.5px #396041", paddingBlock: "0.08em" }}
            >
              WE BUILD
            </span>
          </motion.span>

          {/* LINE 3 — FOREST → MINT → DARK FOREST */}
          <motion.span 
            className="block relative" 
            variants={titleLineVariants} 
            initial="hidden" 
            animate="visible" 
            // FIX APPLIED HERE
            transition={{ ...baseSpringTransition, delay: 0.6 }}
          >
            <span 
              className="inline-block text-transparent bg-clip-text bg-[length:300%_100%] animate-[shine_7s_linear_infinite]" 
              style={{ 
                backgroundImage: "linear-gradient(90deg,#396041 0%,#7fd069 40%,#2d4a33 80%,#396041 100%)", 
                backgroundPosition: "-100% 50%", 
                WebkitBackgroundClip: "text", 
                WebkitTextFillColor: "transparent" 
              }}
            >
              NEXT.
            </span>
            <motion.sup 
              className="absolute top-4 -right-3 md:right-[12%] text-4xl text-gold" 
              initial={{ opacity: 0, scale: 0 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 1.0, duration: 0.3, type: "spring" }} 
            >
              ✦
            </motion.sup>
          </motion.span>
        </h1>
      </motion.div>

      <style jsx global>{`
        @keyframes shine { from { background-position: -100% 50%; } to { background-position: 0% 50%; } }
      `}</style>
    </section>
  );
}