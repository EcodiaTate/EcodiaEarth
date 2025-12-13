"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, cubicBezier } from "framer-motion";

type CineImageProps = ImageProps & {
  kenBurns?: boolean;
  scale?: number;
  seconds?: number;
  grain?: boolean;
  vignette?: boolean;
};

const easeCinema = cubicBezier(0.16, 1, 0.3, 1);

export function CineImage({
  kenBurns = true,
  scale = 1.1,
  seconds = 18,
  grain = true,
  vignette = true,
  alt,
  className = "",
  sizes, 
  quality,
  ...img
}: CineImageProps) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Note: IntersectionObserver with root: null uses the browser viewport.
    // This works fine even inside a modal as long as the modal is on screen.
    const io = new IntersectionObserver(
      (entries) => {
        setActive(entries[0]?.isIntersecting ?? false);
      },
      { rootMargin: "50% 0px 50% 0px" } 
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const shouldMove = kenBurns && !reduce && active;

  return (
    <div 
      ref={ref} 
      // FIX: Added 'w-full h-full' so this div fills the parent aspect-ratio box
      className={`relative w-full h-full overflow-hidden bg-stone-100 ${className}`} 
      style={{ contain: "paint" }}
    >
      {grain && (
        <div 
          className="absolute inset-0 z-20 opacity-20 pointer-events-none mix-blend-overlay"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {vignette && (
        <div 
          className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.15)]"
        />
      )}

      <motion.div
        className="relative w-full h-full"
        // Initial opacity 0 waits for the element to enter the viewport
        initial={{ opacity: 0, filter: "blur(8px) brightness(1.2)" }}
        whileInView={{ opacity: 1, filter: "blur(0px) brightness(1)" }}
        viewport={{ once: true, margin: "-10% 0px" }}
        animate={shouldMove ? { 
            scale: scale, 
            x: "-2%", 
            y: "-1%" 
        } : { 
            scale: 1, 
            x: "0%", 
            y: "0%" 
        }}
        transition={{ 
            opacity: { duration: 1.2, ease: easeCinema },
            default: { duration: seconds, ease: "linear" }
        }}
        style={{ willChange: "transform" }}
      >
        <Image
          alt={alt}
          {...img}
          className="object-cover w-full h-full"
          quality={quality ?? 90}
          sizes={sizes ?? "(max-width: 768px) 100vw, 1200px"}
        />
      </motion.div>
    </div>
  );
}