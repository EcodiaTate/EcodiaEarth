// src/components/sections/HomeEntry.tsx
"use client";

import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function HomeEntry() {
  const FOREST_GREEN = "#396041";
  const LIGHT_MINT = "#7fd069";
  const GOLD = "#f4d35e";
  const PURE_BLACK = "#000000";
  const NEAR_BLACK = "#111111";
  const OFF_WHITE = "#ffffff";

  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Smooth, gentle mappings (scroll-linked)
  const yBg = useSpring(useTransform(scrollYProgress, [0, 1], [0, -80]), { stiffness: 60, damping: 20 });
  const rotBg = useSpring(useTransform(scrollYProgress, [0, 1], [0, -6]), { stiffness: 60, damping: 20 });
  const leafOrbit = useSpring(useTransform(scrollYProgress, [0, 1], [0, 120]), { stiffness: 60, damping: 20 });
  const cardsRise = useSpring(useTransform(scrollYProgress, [0, 1], [40, -10]), { stiffness: 80, damping: 18 });
  const cardsScale = useSpring(useTransform(scrollYProgress, [0, 1], [0.98, 1.02]), { stiffness: 80, damping: 18 });
  const headerFade = useSpring(useTransform(scrollYProgress, [0, 0.35], [1, 0.85]), { stiffness: 70, damping: 18 });

  // Mouse parallax (tiny)
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - (r.left + r.width / 2)) / r.width) * 2;  // -1..1
      const y = ((e.clientY - (r.top + r.height / 2)) / r.height) * 2; // -1..1
      setMx(x);
      setMy(y);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  // Respect reduced motion
  const prefersReduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      id="entry"
      className="relative py-24 sm:py-40 text-black overflow-hidden"
      style={{ backgroundColor: OFF_WHITE }}
      ref={ref}
    >
      {/* 3D stage */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Subtle mint grid plane (depth) */}
        <motion.div
          aria-hidden
          style={{
            y: prefersReduced ? 0 : yBg,
            rotateZ: prefersReduced ? 0 : rotBg,
            transform: `translateZ(-200px)`,
          }}
          className="absolute -top-48 left-1/2 -translate-x-1/2 w-[160vw] h-[80vh] rounded-[70px] opacity-30"
        >
          <div
            className="w-full h-full rounded-[70px]"
            style={{
              background:
                "linear-gradient(transparent 49%, rgba(127,208,105,0.15) 50%), linear-gradient(90deg, transparent 49%, rgba(127,208,105,0.15) 50%)",
              backgroundSize: "30px 30px, 30px 30px",
              boxShadow: `0 0 90px ${LIGHT_MINT}22`,
            }}
          />
        </motion.div>

        {/* Orbiting circuit-leaf token (monochrome hint) */}
        <motion.div
          aria-hidden
          style={{
            x: prefersReduced ? 0 : leafOrbit,
            y: prefersReduced ? 0 : leafOrbit,
            transform: `translateZ(-80px)`,
            rotate: prefersReduced ? 0 : rotBg,
          }}
          className="absolute right-[-6rem] bottom-[-6rem] w-[26rem] h-[26rem] rounded-full"
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              boxShadow: `0 0 0 2px ${FOREST_GREEN}22 inset, 0 0 120px ${LIGHT_MINT}1f`,
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.1), rgba(255,255,255,0.0) 70%)",
            }}
          />
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.header
          className="mb-12 md:mb-20 max-w-5xl"
          style={{ opacity: headerFade, transform: prefersReduced ? undefined : `translateZ(40px)` }}
        >
          <p className="font-mono text-sm sm:text-xl uppercase tracking-[0.35em] text-black/70 mb-4 md:mb-6 border-b border-black/20 pb-1 inline-block">
            // Entry Point
          </p>

          <h2 className="font-display text-5xl sm:text-[110px] tracking-tighter leading-[1.0] md:leading-[0.9]">
            <span className="text-transparent" style={{ WebkitTextStroke: `2px ${PURE_BLACK}` }}>
              WORK WITH
            </span>
            <br />
            <span className="inline-block" style={{ color: FOREST_GREEN }}>
              ECODIA
            </span>
            <span className="text-transparent" style={{ WebkitTextStroke: `2px ${FOREST_GREEN}` }}>
              .
            </span>
          </h2>

          <p className="mt-6 md:mt-8 max-w-3xl font-serif text-lg md:text-2xl leading-relaxed text-black/75">
            For partners, backers, and builders.
            A clear way in. A practical next step. Shared outcomes.
          </p>
        </motion.header>

        {/* Cards: scroll + tiny mouse tilt via translate */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 -mb-20 md:-mb-28"
          style={{
            y: prefersReduced ? 0 : cardsRise,
            scale: prefersReduced ? 1 : cardsScale,
            transform:
              prefersReduced
                ? undefined
                : `rotateX(${my * 1.2}deg) rotateY(${mx * -1.2}deg) translateZ(20px)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Partners */}
          <motion.div
            className="p-6 md:p-8 bg-white border border-black/15 rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
            style={{ transform: "translateZ(30px)" }}
          >
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-black/60 mb-2 pb-1 border-b border-dashed border-black/20">
              PATH: PARTNERS
            </h3>
            <p className="font-display text-3xl md:text-4xl leading-snug text-ink">Deploy in real places.</p>
            <p className="mt-4 font-serif text-base md:text-lg text-black/70 leading-relaxed">
              Councils, schools, venues, community groups. Bring a site. We bring the system, onboarding, and measurement.
            </p>
            <div className="mt-5">
              <Link
                href="/contact?intent=partner"
                className="font-mono text-xs md:text-sm uppercase tracking-widest text-ink/80 hover:text-ink"
              >
                &gt; Propose a site
              </Link>
            </div>
          </motion.div>

          {/* Backers */}
          <motion.div
            className="p-6 md:p-8 rounded-2xl shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
            style={{ backgroundColor: NEAR_BLACK, color: GOLD, border: `1px solid ${GOLD}50`, transform: "translateZ(10px)" }}
          >
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-white/70 mb-2">PATH: BACKERS</h3>
            <p className="font-display text-3xl md:text-4xl leading-snug font-bold">Fund what works.</p>
            <p className="mt-4 font-serif text-base md:text-lg leading-relaxed text-white/75">
              Capital, sponsorship, or strategic support to accelerate deployments and product velocity.
              We’ll share the roadmap and operating model.
            </p>
            <div className="mt-5">
              <Link
                href="/contact?intent=invest"
                className="font-mono text-xs md:text-sm uppercase tracking-widest text-white/80 hover:text-white"
              >
                &gt; Back a deployment
              </Link>
            </div>
          </motion.div>

          {/* Builders */}
          <motion.div
            className="p-6 md:p-8 bg-white border border-black/15 rounded-2xl shadow-[0_12px_50px_rgba(0,0,0,0.06)]"
            style={{ transform: "translateZ(20px)" }}
          >
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-black/60 mb-2 pb-1 border-b border-dashed border-black/20">
              PATH: BUILDERS
            </h3>
            <p className="font-display text-3xl md:text-4xl leading-snug text-ink">Build the mechanism.</p>
            <p className="mt-4 font-serif text-base md:text-lg text-black/70 leading-relaxed">
              Product, engineering, design, operations, field work. If you build systems people return to, you’ll fit here.
            </p>
            <div className="mt-5">
              <Link href="/entry" className="font-mono text-xs md:text-sm uppercase tracking-widest text-ink/80 hover:text-ink">
                &gt; View the entry brief
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="pt-32 md:pt-48 border-t border-black/10"
          style={{
            transform: prefersReduced ? undefined : `translateZ(30px)`,
          }}
        >
          <Link
            href="/entry"
            className="group relative inline-flex items-center justify-between w-full md:w-auto gap-6 md:gap-10 px-6 md:px-12 py-6 md:py-7 font-mono text-base md:text-xl uppercase tracking-[0.22em] transition-all duration-200 rounded-2xl"
            style={{
              backgroundColor: GOLD,
              color: PURE_BLACK,
              border: `4px solid ${PURE_BLACK}`,
              filter: "brightness(1.03)",
            }}
          >
            <span className="relative z-10 font-extrabold">
              <span className="inline-block transition-transform duration-500 group-hover:-translate-x-1">
                Open the entry brief
              </span>
            </span>
            <span className="text-5xl md:text-6xl leading-none transition-transform duration-300 group-hover:translate-x-2 font-black">
              &gt;
            </span>
          </Link>

          <div className="flex flex-wrap items-center gap-6 mt-8">
            <Link
              href="/vision"
              className="text-black/75 hover:text-black font-mono text-sm md:text-base tracking-wider transition-colors pt-2 border-t border-black/20"
            >
              &gt; See the system
            </Link>
            <Link
              href="/contact?intent=partner"
              className="text-black/75 hover:text-black font-mono text-sm md:text-base tracking-wider transition-colors pt-2 border-t border-black/20"
            >
              &gt; Propose a site
            </Link>
            <Link
              href="/contact?intent=invest"
              className="text-black/75 hover:text-black font-mono text-sm md:text-base tracking-wider transition-colors pt-2 border-t border-black/20"
            >
              &gt; Back a deployment
            </Link>
          </div>

          <p className="mt-10 max-w-2xl font-serif text-base md:text-lg text-black/65 leading-relaxed">Built for people who pay attention.</p>
        </motion.div>
      </div>
    </section>
  );
}
 