"use client";

import { motion } from "framer-motion";

export function HeroTitle() {
  return (
    <div className="relative w-full text-center py-12 select-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-start gap-2 pointer-events-none">
        <div className="w-[1px] h-12 bg-ink" />
        <span className="font-mono text-[10px] text-ink uppercase tracking-widest" style={{ textOrientation: "mixed" }}>
          Fig. 01 - ECODIA
        </span>
      </div>

      <h1 className="relative font-display text-[13vw] sm:text-[12vw] leading-[0.82] tracking-tighter overflow-visible pb-[0.06em]">

        {/* LINE 1 — GOLD / DARK GOLD (SEAMLESS) */}
        <motion.span className="block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <span
            className="inline-block text-transparent bg-clip-text bg-[length:300%_100%] animate-[shine_10s_linear_infinite]"
            style={{
              paddingBlock: "0.08em",
              backgroundImage:
                "repeating-linear-gradient(135deg,#f4d35e 0%,#f4d35e 11%,#e7c84f 12%,#a38722 15%,#a38722 18%,#c9aa35 20%,#f4d35e 22%,#f4d35e 58%,#e7c84f 59%,#a38722 62%,#a38722 66%,#c9aa35 68%,#f4d35e 70%,#f4d35e 100%)",
              backgroundPosition: "-100% 50%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            THE WORLD
          </span>
        </motion.span>

        {/* LINE 2 — STROKE */}
        <motion.span className="block relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
          <span className="relative z-10 text-transparent eco-stroke-fix" style={{ WebkitTextStroke: "1.5px #396041", paddingBlock: "0.08em" }}>
            WE BUILD
          </span>
        </motion.span>

        {/* LINE 3 — FOREST → MINT → DARK FOREST (SEAMLESS) */}
        <motion.span className="block relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
          <span
            className="inline-block text-transparent bg-clip-text bg-[length:300%_100%] animate-[shine_7s_linear_infinite]"
            style={{
              backgroundImage: "linear-gradient(90deg,#396041 0%,#7fd069 40%,#2d4a33 80%,#396041 100%)",
              backgroundPosition: "-100% 50%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NEXT.
          </span>

          <sup className="absolute top-4 -right-3 md:right-[12%] text-4xl text-gold animate-pulse">✦</sup>
        </motion.span>
      </h1>

      <style jsx global>{`
        @keyframes shine { from { background-position: -100% 50%; } to { background-position: 0% 50%; } }

        .eco-mode .eco-gradient-fix,
        .eco-mode .eco-stroke-fix {
          color: #a3a3a3 !important;
          background: none !important;
          -webkit-text-fill-color: #a3a3a3 !important;
          -webkit-text-stroke: 0px !important;
        }

        .eco-mode .eco-hidden { display: none !important; }
      `}</style>
    </div>
  );
}
