"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * ECODIA ENTRY: THE HANDSHAKE
 * 1. No 3D Perspective/Glows (Rule 1)
 * 2. Heavy Strokes & Charcoal Ink (Rule 4)
 * 3. Functional Checklist Logic (Rule 6)
 */

export function HomeEntry() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Inertial Drift (Rule 8)
  const yDrift = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);

  return (
    <section
      ref={ref}
      id="entry"
      className="relative py-48 bg-[#F9F8F5] text-[#2D2B28] overflow-hidden border-t-4 border-[#2D2B28]"
    >
      {/* 1. CALIBRATION RESIDUE (Rule 6) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute left-[5%] top-0 h-full w-[1px] bg-[#2D2B28]" />
        <div className="absolute right-[5%] top-0 h-full w-[1px] bg-[#2D2B28]" />
      </div>

      <div className="mx-auto max-w-7xl px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* HEADER: MAXIMUM MASS (Rule 2) */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-10">
              <img src="/icons/leaf-black.svg" className="w-6 h-6" alt="residue" />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40">
                Entry
              </span>
            </div>

            <h2 className="font-black text-[10vw] lg:text-[9rem] leading-[0.8] tracking-tighter mb-12">
              WORK WITH <br />
              <span className="text-[#396041]">ECODIA.</span>
            </h2>

            <p className="font-mono text-xl md:text-2xl opacity-70 max-w-2xl leading-relaxed">
              For partners, backers, and builders. Practical next steps.
              The entry brief is a simple check of intent.
            </p>
          </div>

          {/* 2. OFFSET STATUS (Rule 1) */}
          <motion.div
            style={{ y: yDrift }}
            className="lg:col-span-4 lg:pt-24 font-mono text-[10px] uppercase tracking-widest space-y-2 opacity-30"
          >
            <p>LAT: 26.6528° S</p>
            <p>LNG: 153.0896° E</p>
            <div className="h-[1px] w-full bg-[#2D2B28]" />
            <p>Ready for calibration</p>
          </motion.div>
        </div>

        {/* 3. THE PATHS: NO CARDS, ONLY BOUNDARIES (Rule 2) */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#2D2B28]">
          <PathItem
            code="PATH_01"
            title="Partners"
            desc="Councils, schools, venues. Bring a site. We bring tools and proof."
            link="/contact?intent=partner"
            action="Propose site"
          />
          <PathItem
            code="PATH_02"
            title="Backers"
            desc="Strategic support to speed deployment. Capital aligned with intent."
            link="/contact?intent=invest"
            action="Back a deployment"
            isGold
          />
          <PathItem
            code="PATH_03"
            title="Builders"
            desc="Engineering, design, and field work. For those who build what people return to."
            link="/entry"
            action="View brief"
          />
        </div>

        {/* 4. FINAL CALL: THE ENTRY BRIEF (Rule 10) */}
        <div className="mt-32 border-t-2 border-[#2D2B28] pt-12 flex flex-col md:flex-row justify-between items-start gap-12">
          <Link
            href="/entry"
            className="group relative inline-flex items-center gap-12 bg-[#2D2B28] text-[#F9F8F5] px-12 py-8 transition-all hover:bg-[#396041]"
          >
            <span className="font-mono text-xl md:text-2xl uppercase tracking-[0.2em] font-black">
              Open the entry brief
            </span>
            <span className="text-4xl transition-transform group-hover:translate-x-2">→</span>
          </Link>

          <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest opacity-40">
            <Link href="/vision" className="hover:opacity-100 hover:text-[#396041]">
              / See the map
            </Link>
            <Link href="/contact?intent=partner" className="hover:opacity-100 hover:text-[#396041]">
              / Propose a site
            </Link>
            <p className="mt-4 opacity-50">Built for those who pay attention.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PathItem({ code, title, desc, link, action, isGold }: any) {
  return (
    <div className={`p-10 border-b md:border-b-0 md:border-r border-[#2D2B28]/10 last:border-r-0 hover:bg-[#2D2B28]/5 transition-colors`}>
      <span className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-40 mb-8 block">[{code}]</span>
      <h3 className={`font-black text-4xl uppercase tracking-tighter mb-4 ${isGold ? "text-[#F4D35E]" : ""}`}>
        {title}
      </h3>
      <p className="font-mono text-sm opacity-60 leading-relaxed mb-10">
        {desc}
      </p>
      <Link
        href={link}
        className="font-mono text-[10px] uppercase tracking-widest font-black border-b border-[#2D2B28] pb-1 hover:text-[#396041] hover:border-[#396041] transition-all"
      >
        {action} →
      </Link>
    </div>
  );
}
