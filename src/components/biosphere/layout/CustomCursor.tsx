"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useReducedMotion } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // 1. Optimized Spring: Lower stiffness for the "Laggy/Organic" feel
  // and better performance on high-refresh-rate monitors.
  const springConfig = { damping: 30, stiffness: 120, restDelta: 0.01 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // 2. Mobile Check: If it's a touch device, don't even add the listener
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY, isVisible]);

  // 3. Early exit for Mobile & Reduced Motion users
  if (!isVisible || shouldReduceMotion) return null;

  return (
    <motion.div
      className="custom-cursor"
      style={{
        left: cursorX,
        top: cursorY,
        // 4. Transform-based movement is 10x faster than 'top/left'
        // But since we are using springs, Framer handles this best via 'x/y'
        // if we weren't already setting the container position.
        position: 'fixed',
        pointerEvents: 'none',
      }}
    />
  );
}