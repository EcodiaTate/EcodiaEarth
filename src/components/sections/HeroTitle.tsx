"use client";

import { motion } from "framer-motion";

export function HeroTitle() {
  return (
    <div className="relative w-full text-center py-12 select-none">
      {/* Decorative Technical Marker */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-start gap-2 opacity-30 pointer-events-none">
        <div className="w-[1px] h-12 bg-ink" />
        <span
          className="font-mono text-[10px] text-ink uppercase tracking-widest"
          style={{ textOrientation: "mixed" }}
        >
          Fig. 01 - ECODIA
        </span>
      </div>

      <h1 className="relative font-display text-[13vw] sm:text-[12vw] leading-[0.82] tracking-tighter overflow-visible pb-[0.06em]">
        {/* LINE 1: Soft gradient */}
        <motion.span
          className="block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
         <span
  className="inline-block text-transparent bg-clip-text bg-[length:160%_auto] animate-[shine_8s_linear_infinite]"
  style={{
    paddingBlock: "0.08em",
    backgroundImage: "linear-gradient(90deg, #0F1712 0%, rgba(244,211,94,0.75) 50%, #0F1712 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  THE WORLD
</span>

          
        </motion.span>

        {/* LINE 2: Stroke */}
        <motion.span
          className="block relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="relative z-10 text-transparent eco-stroke-fix"
            style={{ WebkitTextStroke: "1.5px #396041", paddingBlock: "0.08em" }}
          >
            WE BUILD
          </span>
        </motion.span>

        {/* LINE 3: Hero gradient */}
        <motion.span
          className="block relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eco-gradient-fix inline-block text-transparent bg-clip-text bg-gradient-to-r from-ink via-mint to-ink bg-[length:200%_auto] animate-[shine_5s_linear_infinite]">
            NEXT.
          </span>

          <sup className="absolute top-4 -right-3 md:right-[12%] text-4xl text-gold animate-pulse">
            ✦
          </sup>
        </motion.span>
      </h1>

      {/* Keyframes + eco-mode overrides */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .eco-mode .eco-gradient-fix,
        .eco-mode .eco-stroke-fix {
          color: #a3a3a3 !important;
          background: none !important;
          -webkit-text-fill-color: #a3a3a3 !important;
          -webkit-text-stroke: 0px !important;
        }

        .eco-mode .eco-hidden {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
