"use client";

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export const TheHorizon = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // ✅ Framer Motion's UseScrollOptions doesn't include `layoutEffect` in many versions.
  // Keeping options strictly valid fixes TS2353.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out scroll values (or disable if user prefers reduced motion)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 1 : 100,
    damping: reduceMotion ? 1 : 30,
    restDelta: 0.001,
  });

  // Parallax (keep values small to avoid repaints)
  const ySky = useTransform(smoothProgress, [0, 1], [0, reduceMotion ? 0 : -100]);
  const opacityText = useTransform(smoothProgress, [0, 0.15, 0.4], [1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] md:min-h-[200vh] w-full">
      {/* 01. THE ENTRY */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={reduceMotion ? undefined : { y: ySky, opacity: opacityText }}
          className="z-10 flex flex-col items-center text-center px-6 will-change-transform"
        >
          <span className="text-[10px] tracking-[0.6rem] md:tracking-[1rem] uppercase opacity-50 mb-6">
            Layer 01: The Understory
          </span>

          <div className="flex flex-col items-center gap-4">
            <div className="relative w-[280px] md:w-[400px] h-[100px] md:h-[120px]">
              <Image
                src="/img/ecodia-logo.png"
                alt="Ecodia"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 280px, 400px"
              />
            </div>
          </div>

          <motion.p
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="mt-12 max-w-xl text-base md:text-lg italic text-black font-serif"
          >
            "The world we build next."
          </motion.p>
        </motion.div>

        {/* Background blurs (kept light for perf) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 md:w-96 md:h-96 bg-blue-100/20 rounded-full blur-[60px] md:blur-[120px]" />
          <div className="absolute bottom-[20%] right-[5%] w-72 h-72 md:w-[500px] md:h-[500px] bg-indigo-50/10 rounded-full blur-[80px] md:blur-[150px]" />
        </div>
      </div>

      {/* 02. THE VISION & VALUES */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div className="space-y-8 md:space-y-12">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-accent-color">
            The Covenant
          </h2>

          <p className="text-2xl md:text-3xl leading-relaxed font-serif">
            To restore the link between <span className="italic">human creation</span> and{" "}
            <span className="italic">biological necessity.</span>
          </p>

          <Link href="/horizon" className="inline-block pt-4">
            <button
              type="button"
              className="px-8 py-4 border border-current/20 hover:border-[var(--accent-color)] transition-all uppercase tracking-widest text-[10px]"
            >
              Read the Manifesto
            </button>
          </Link>
        </div>

        <div className="space-y-12 md:space-y-16">
          <div className="border-l border-current/10 pl-6 md:pl-8">
            <h3 className="text-sm tracking-widest uppercase mb-4">Radical Transparency</h3>
            <p className="opacity-70 text-sm leading-loose">
              Every seed planted, every line of code written, is an open record.
            </p>
          </div>

          <div className="border-l border-current/10 pl-6 md:pl-8">
            <h3 className="text-sm tracking-widest uppercase mb-4">Tactile Future</h3>
            <p className="opacity-70 text-sm leading-loose">
              Digital interfaces should feel like stone, fabric, and earth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
