// src/components/motion/Cinematic.tsx
"use client";

import { motion, cubicBezier, HTMLMotionProps } from "framer-motion";
import React from "react";

// 1. THE SIGNATURE CURVE
// This is the "Ecodia Feel". It starts fast, then brakes smoothly.
// It gives weight to your content.
const easeCinema = cubicBezier(0.16, 1, 0.3, 1);

// Shared Props
type MotionProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

// ------------------------------------------------------------------
// 1. FADE (The "Soft Focus" Enter)
// Replaces: standard Fade
// Upgrade: Adds a subtle blur that sharpens as opacity hits 100%.
// ------------------------------------------------------------------
export const CineFade = ({ children, delay = 0, className = "" }: MotionProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ 
      duration: 0.6, 
      ease: easeCinema, 
      delay 
    }}
  >
    {children}
  </motion.div>
);

// ------------------------------------------------------------------
// 2. RISE (The "Hero" Landing)
// Replaces: standard Rise
// Upgrade: Adds scale + blur. It feels like the element is stepping 
// forward towards the user, not just sliding up.
// ------------------------------------------------------------------
export const CineRise = ({ children, delay = 0, className = "" }: MotionProps) => (
  <motion.div
    className={className}
    initial={{ 
      opacity: 0, 
      y: 24,           // More travel distance
      scale: 0.95,     // Slight zoom-in effect
      filter: "blur(8px)" 
    }}
    whileInView={{ 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: "blur(0px)" 
    }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ 
      duration: 0.8,   // Slower, more majestic
      ease: easeCinema, 
      delay 
    }}
  >
    {children}
  </motion.div>
);

// ------------------------------------------------------------------
// 3. STAGGER (The Orchestrator)
// Replaces: standard Stagger
// Upgrade: Tighter coordination.
// ------------------------------------------------------------------
export const CineStagger = ({ children, gap = 0.1, className = "" }: MotionProps & { gap?: number }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-10% 0px" }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: gap,
          delayChildren: 0.1,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

// ------------------------------------------------------------------
// 4. ITEM (The Child)
// Replaces: standard Item
// Upgrade: Inherits the blurry rise effect.
// ------------------------------------------------------------------
export const CineItem = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { 
        opacity: 0, 
        y: 20, 
        filter: "blur(4px)" 
      },
      show: { 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)",
        transition: { 
          duration: 0.6, 
          ease: easeCinema 
        } 
      },
    }}
  >
    {children}
  </motion.div>
);