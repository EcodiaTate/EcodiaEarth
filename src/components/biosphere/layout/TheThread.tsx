"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useBiosphere } from "@/context/BiosphereProvider";

export const TheThread = () => {
  const { activeBiome } = useBiosphere();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Softer + less “invasive” overall presence
  const styles = useMemo(() => {
    switch (activeBiome) {
      case "soil":
        return { strokeWidth: 1.25, dashArray: "0 0", opacity: 0.18 };
      case "studio":
        return { strokeWidth: 1, dashArray: "6 10", opacity: 0.22 };
      case "source":
        return { strokeWidth: 0.9, dashArray: "0 0", opacity: 0.28 };
      default:
        return { strokeWidth: 0.9, dashArray: "10 18", opacity: 0.12 };
    }
  }, [activeBiome]);

  // ✅ Make it more organic than a “single central spine”
  // - Start off-center
  // - Add multiple, subtle lateral sweeps
  // - Avoid perfect symmetry so it feels “thread-like”
  const pathData =
    "M 62,-40 C 48,80 74,170 56,260 " +
    "S 44,420 64,520 " +
    "S 78,700 54,820 " +
    "S 40,950 60,1060";

  const pathLength = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 1 : 70,
    damping: reduceMotion ? 1 : 28,
    restDelta: 0.001,
  });

  const draw = useTransform(pathLength, (v) => Math.min(1, Math.max(0, v)));

  // Dot position motion values
  const cx = useSpring(0, { stiffness: 160, damping: 34, restDelta: 0.001 });
  const cy = useSpring(0, { stiffness: 160, damping: 34, restDelta: 0.001 });

  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (reduceMotion) return;

    const unsub = draw.on("change", (v) => {
      const pathEl = pathRef.current;
      if (!pathEl) return;

      const total = pathEl.getTotalLength();
      const p = pathEl.getPointAtLength(total * v);

      cx.set(p.x);
      cy.set(p.y);
    });

    return () => unsub();
  }, [draw, reduceMotion, cx, cy]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 1000"
        preserveAspectRatio="xMidYMid meet"
        shapeRendering="geometricPrecision"
      >
        {/* Subtle halo line behind (adds richness without feeling heavy) */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="var(--accent-color)"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={styles.strokeWidth + 1.2}
          opacity={styles.opacity * 0.18}
          style={{ filter: "blur(0.6px)" }}
        />

        {/* Main thread */}
        <motion.path
          ref={pathRef}
          d={pathData}
          fill="none"
          stroke="var(--accent-color)"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={styles.strokeWidth}
          strokeDasharray={styles.dashArray}
          initial={{ pathLength: 0 }}
          style={{
            pathLength: draw,
            opacity: styles.opacity,
            willChange: "pathLength, opacity",
          }}
          transition={{
            strokeDasharray: { duration: 0.7 },
            strokeWidth: { duration: 0.7 },
            opacity: { duration: 0.7 },
          }}
        />

        {/* Moving “knot” — smaller + softer */}
        {!reduceMotion && (
          <motion.circle
            r="1.6"
            fill="var(--accent-color)"
            vectorEffect="non-scaling-stroke"
            style={{ cx, cy, opacity: 0.55 }}
            className="threadDot"
          />
        )}

        {/* Tiny grain dots along the thread to break up the “boring line” feel */}
        <g opacity={Math.min(0.22, styles.opacity)} className="threadGrain">
          <circle cx="58" cy="210" r="0.7" fill="var(--accent-color)" vectorEffect="non-scaling-stroke" />
          <circle cx="63" cy="380" r="0.6" fill="var(--accent-color)" vectorEffect="non-scaling-stroke" />
          <circle cx="55" cy="615" r="0.7" fill="var(--accent-color)" vectorEffect="non-scaling-stroke" />
          <circle cx="66" cy="760" r="0.6" fill="var(--accent-color)" vectorEffect="non-scaling-stroke" />
        </g>

        <style jsx>{`
          .threadDot {
            animation: pulse 2.2s infinite ease-in-out;
            transform-origin: center;
          }

          /* keep it calm; no big radius pumping */
          @keyframes pulse {
            0%,
            100% {
              opacity: 0.45;
              transform: scale(1);
            }
            50% {
              opacity: 0.75;
              transform: scale(1.25);
            }
          }
        `}</style>
      </svg>
    </div>
  );
};
