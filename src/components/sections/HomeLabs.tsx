"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EXPERIMENTS = [
  { id: "LAB_01", title: "Sidequests", subtitle: "Small actions that build momentum.", status: "ACTIVE", accent: "#7FD069" },
  { id: "LAB_02", title: "Local Rewards", subtitle: "Value that stays with the neighbourhood.", status: "DRIFTING", accent: "#F4D35E" },
  { id: "LAB_03", title: "Shared Progress", subtitle: "See what we’re building together.", status: "STABLE", accent: "#2D2B28" },
];

export function HomeLabs() {
  return (
    <section className="relative w-full py-40 bg-[#2D2B28] text-[#F9F8F5] overflow-hidden">
      {/* Measurement ticks */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between opacity-20 font-mono text-[8px] tracking-[0.5em]">
        <span>ECODIA_LABS</span>
        <div className="flex gap-2">
          <div className="w-1 h-1 bg-[#F9F8F5]" />
          <div className="w-1 h-1 bg-[#F9F8F5] opacity-20" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <img src="/icons/leaf-white.svg" className="w-5 h-5" alt="residue" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#7FD069]">Labs</span>
          </div>

          <h2 className="font-black text-[12vw] lg:text-[10rem] leading-[0.8] tracking-tighter">
            THE <br /> LABS<span className="text-[#F4D35E]">.</span>
          </h2>
        </div>

        {/* Technical stream */}
        <div className="border-t border-[#F9F8F5]/10">
          {EXPERIMENTS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group relative py-12 border-b border-[#F9F8F5]/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-[#F9F8F5]/5 transition-colors"
            >
              <div className="md:col-span-2 font-mono text-[10px] opacity-30">[{item.id}]</div>

              <div className="md:col-span-6">
                <h3 className="font-black text-4xl uppercase tracking-tighter group-hover:text-[#7FD069] transition-colors">
                  {item.title}
                </h3>
                <p className="font-mono text-sm opacity-50 mt-1">{item.subtitle}</p>
              </div>

              <div className="md:col-span-3 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-current opacity-20" />
                <span className="font-mono text-[9px] tracking-widest uppercase">{item.status}</span>
              </div>

              <div className="md:col-span-1 text-right">
                <Link href="/labs" className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <Link
            href="/labs"
            className="inline-block border border-[#F9F8F5] px-12 py-6 font-mono text-[10px] uppercase tracking-[0.4em] hover:bg-[#F9F8F5] text-[#7fd069] hover:text-[#2D2B28] transition-all"
          >
            Enter the labs
          </Link>
        </div>
      </div>
    </section>
  );
}
