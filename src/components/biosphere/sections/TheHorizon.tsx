"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from "next/link"

export const TheHorizon = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effects for the "Air" vibe
  const ySky = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[200vh] w-full">
      {/* 01. THE ENTRY (The "Why") */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: ySky, opacity: opacityText }}
          className="z-10 flex flex-col items-center text-center px-6"
        >
          <span className="text-[10px] tracking-[1rem] uppercase opacity-50 mb-6">
            Layer 01: The Understory
          </span>

          {/* LOGO + EARTH */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-[320px] md:w-[400px] h-[120px]">
              <Image
                src="/img/ecodia-logo.png"
                alt="Ecodia"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="mt-12 max-w-xl text-lg italic text-black font-serif"
          >
            "The world we build next."
          </motion.p>
        </motion.div>

        {/* Ethereal Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-100/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-indigo-50/20 rounded-full blur-[150px]" />
        </div>
      </div>

      {/* 02. THE VISION & VALUES (The "Manifesto") */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-12 py-32 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-12">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-accent-color">
            The Covenant
          </h2>
          <p className="text-3xl leading-relaxed font-serif">
            To restore the link between <span className="italic">human creation</span> and <span className="italic">biological necessity.</span>
          </p>
        </div>

        <div className="space-y-16 pt-24">
          <div className="border-l border-current/10 pl-8">
            <h3 className="text-sm tracking-widest uppercase mb-4">Radical Transparency</h3>
            <p className="opacity-70 text-sm leading-loose">
              Every seed planted, every line of code written, is an open record. We move away from the "Black Box" of tech into the "Luminous Glass" of the Source.
            </p>
          </div>
          <div className="border-l border-current/10 pl-8">
            <h3 className="text-sm tracking-widest uppercase mb-4">Tactile Future</h3>
            <p className="opacity-70 text-sm leading-loose">
              Digital interfaces should feel like stone, fabric, and earth. We reject the sterile pixels of the old web.
            </p>
          </div>
        </div>
      </div>
      <Link href="/horizon">
    <button className="px-8 py-4 border border-current/20 hover:border-[var(--accent-color)] transition-all uppercase tracking-widest text-[10px]">
      Read the Manifesto
    </button>
  </Link>
    </section>
    
  );
};
