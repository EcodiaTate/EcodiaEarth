"use client";

import React, { useMemo } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useBiosphere } from "@/context/BiosphereProvider";

export const TheThread = () => {
  const { activeBiome } = useBiosphere();
  const { scrollYProgress } = useScroll();

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  const styles = useMemo(() => {
    switch (activeBiome) {
      case "soil":
        return { strokeWidth: 2, dashArray: "0 0", opacity: 0.4 };
      case "studio":
        return { strokeWidth: 1.5, dashArray: "5 5", opacity: 0.6 };
      case "source":
        return { strokeWidth: 1, dashArray: "0 0", opacity: 1 };
      default:
        return { strokeWidth: 1, dashArray: "10 10", opacity: 0.2 };
    }
  }, [activeBiome]);

  const pathData = "M 50,0 Q 45,250 50,500 T 50,1000";

  // ✅ React warning fix:
  // `offsetDistance` and `offsetPath` are NOT React-recognized style props for SVG,
  // and Framer Motion will forward them to the DOM, causing the warning.
  //
  // Use a MotionValue -> transform: translate(x,y) approach via <animateMotion>,
  // BUT we still want scroll-driven + lightweight.
  //
  // The cleanest solution: use <motion.circle> with an SVG <motion.animateMotion />
  // and drive its `keyPoints`/`keyTimes` via CSS? (messy)
  //
  // Instead: render a <motion.g> that follows the path using Framer Motion's
  // `motionPath` approach is not built-in. So we do a tiny manual sampler:
  // use SVGPathElement.getPointAtLength in an effect-less way by caching the path element.
  //
  // To keep this "full file" and simple + performant, we use an <motion.circle>
  // whose `cx/cy` are MotionValues computed from the path element once it exists.

  // Progress 0..1 -> % along the path
  const t = useTransform(pathLength, (v) => Math.min(1, Math.max(0, v)));

  // MotionValues for circle position (numbers)
  const cx = useSpring(0, { stiffness: 120, damping: 30 });
  const cy = useSpring(0, { stiffness: 120, damping: 30 });

  // Ref callback to capture path element and update point as scroll changes
  const pathRef = React.useRef<SVGPathElement | null>(null);

  // Subscribe to t changes without causing React re-renders
  React.useEffect(() => {
    const unsub = t.on("change", (v) => {
      const pathEl = pathRef.current;
      if (!pathEl) return;

      const total = pathEl.getTotalLength();
      const p = pathEl.getPointAtLength(total * v);

      cx.set(p.x);
      cy.set(p.y);
    });

    return () => unsub();
  }, [t, cx, cy]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1000">
        <motion.path
          ref={pathRef}
          d={pathData}
          fill="none"
          stroke="var(--accent-color)"
          strokeWidth={styles.strokeWidth}
          strokeDasharray={styles.dashArray}
          initial={{ pathLength: 0 }}
          style={{
            pathLength,
            opacity: styles.opacity,
            willChange: "pathLength, opacity",
          }}
          transition={{
            strokeDasharray: { duration: 0.8 },
            strokeWidth: { duration: 0.8 },
            opacity: { duration: 0.8 },
          }}
        />

        {/* ✅ Dot follows the SVG path using cx/cy MotionValues (no offsetDistance prop) */}
        <motion.circle
          r="2"
          fill="var(--accent-color)"
          className="will-change-transform"
          style={{
            cx,
            cy,
          }}
        />

        {/* Lightweight pulse on the dot only */}
        <style jsx>{`
          circle {
            animation: pulse 2s infinite ease-in-out;
            transform-origin: center;
          }
          @keyframes pulse {
            0%,
            100% {
              opacity: 0.8;
            }
            50% {
              opacity: 1;
            }
          }
        `}</style>
      </svg>
    </div>
  );
};
