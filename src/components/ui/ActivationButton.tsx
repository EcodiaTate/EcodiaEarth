// ActivationButton.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as React from "react";

export function ActivationButton() {
  const [pressed, setPressed] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.5, ease: [0.19, 1, 0.22, 1] }}
      className="relative w-full md:w-auto"
    >
      <motion.div
        whileTap={{ scale: 0.985 }}
        onTapStart={() => setPressed(true)}
        onTapCancel={() => setPressed(false)}
        onTap={() => setPressed(false)}
        className="relative"
      >
        <Link
          href="/company"
          className="relative z-10 block w-full text-center rounded-full px-10 py-5 bg-ink text-white border border-ink overflow-hidden select-none touch-manipulation"
          aria-label="Enter the world of Ecodia"
        >
          {/* Idle “charge” rail (always on, subtle) */}
          <motion.div
            aria-hidden
            className="absolute inset-0 opacity-30"
            animate={{ opacity: [0.18, 0.32, 0.18] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "radial-gradient(60% 70% at 50% 120%, rgba(244,211,94,0.35) 0%, rgba(244,211,94,0.0) 65%)",
            }}
          />

          {/* Press “mint surge” (tap-driven, not hover) */}
          <motion.div
            aria-hidden
            className="absolute inset-0"
            animate={
              pressed
                ? { y: "0%", opacity: 1 }
                : { y: "110%", opacity: 0.0 }
            }
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            style={{
              background:
                "linear-gradient(180deg, rgba(127,208,105,0.95) 0%, rgba(57,96,65,0.95) 55%, rgba(15,23,18,0.0) 100%)",
            }}
          />

          {/* Edge glow that reads on mobile (no hover) */}
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full pointer-events-none"
            animate={pressed ? { opacity: 1 } : { opacity: 0.35 }}
            transition={{ duration: 0.25 }}
            style={{
              boxShadow:
                pressed
                  ? "0 18px 50px rgba(15,23,18,0.45), 0 0 0 1px rgba(127,208,105,0.55) inset"
                  : "0 10px 28px rgba(15,23,18,0.28), 0 0 0 1px rgba(244,211,94,0.25) inset",
            }}
          />

          {/* Content */}
          <span className="relative z-20 flex items-center justify-center gap-3 font-semibold tracking-widest text-sm md:text-base">
            <span>WORLD OF ECODIA</span>
            <motion.span
              aria-hidden
              animate={pressed ? { x: 6 } : { x: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              →
            </motion.span>
          </span>

          {/* Accessibility: focus ring (not hover) */}
          <span className="absolute inset-0 rounded-full ring-0 focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-white" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
