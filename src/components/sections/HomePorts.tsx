"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ECODIA_EASE = cubicBezier(0.19, 1, 0.22, 1);

export function HomeLeafIndex() {
  const containerRef = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const massY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#F9F8F5] text-[#2D2B28] py-40 lg:py-72"
    >
      {/* Rails */}
      <div className="pointer-events-none absolute inset-0 border-r border-[#2D2B28] opacity-[0.03] right-[15%]" />
      <div className="pointer-events-none absolute inset-0 border-l border-[#2D2B28] opacity-[0.03] left-[8%]" />
      <div className="pointer-events-none absolute top-[12%] w-full h-px bg-[#2D2B28] opacity-[0.03]" />

      <div className="relative z-10 px-[8%]">
        {/* Header */}
        <header className="mb-40">
          <div className="mb-12 flex items-baseline gap-6">
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.8em]">
              Index 00.00
            </span>
            <div className="h-px w-24 bg-[#2D2B28] opacity-20" />
          </div>

          {/* Big leaf takes the title slot */}
          <motion.div style={{ y: massY }} className="relative">
            <img
              src="/icons/leaf-black.svg"
              alt="Ecodia leaf"
              className="h-[18vh] w-auto max-h-[220px] lg:max-h-[320px] opacity-90"
            />
          </motion.div>
        </header>

        {/* Nodes */}
        <div className="grid grid-cols-1 gap-32 lg:grid-cols-12">
          <UnitNode
            href="/eco"
            label="Door 01"
            title="ECO"
            detail="Sidequests."
            stamp="E"
            accent="#396041"
            className="lg:col-span-7"
          />

          <UnitNode
            href="/ecolocal"
            label="Door 02"
            title="ECOLOCAL"
            detail="Local."
            stamp="L"
            accent="#F4D35E"
            className="lg:col-start-8 lg:col-span-5 lg:-mt-16"
            titleClassName="text-6xl lg:text-7xl"
          />
        </div>

        {/* Footer */}
        <footer className="mt-60 flex flex-col gap-16">
          <div className="h-px w-full bg-[#2D2B28] opacity-10" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="space-y-2">
              <div className="font-mono text-[10px] font-black uppercase tracking-widest">
                Status
              </div>
              <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                Active
              </div>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(32)].map((_, i) => (
                <div
                  key={i}
                  className={`h-8 w-px bg-[#2D2B28] ${
                    i % 4 === 0 ? "opacity-40" : "opacity-10"
                  }`}
                />
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

function UnitNode({
  href,
  label,
  title,
  detail,
  stamp,
  accent,
  className,
  titleClassName,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: ECODIA_EASE }}
      viewport={{ once: true }}
      className={`relative group ${className}`}
    >
      <Link href={href} className="block">
        <div className="relative border-t-[2px] border-[#2D2B28] pt-8 overflow-hidden">
          {/* Label */}
          <div className="flex justify-between items-start mb-12">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em]">
                {label}
              </span>
              <div className="h-0.5 w-8" style={{ backgroundColor: accent }} />
            </div>
            <span className="font-mono text-[10px] font-black opacity-20 group-hover:opacity-100 transition-opacity">
              {stamp}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <h3
              className={`font-black leading-none tracking-tighter uppercase break-words ${
                titleClassName ?? "text-7xl lg:text-8xl"
              }`}
            >
              {title}
            </h3>

            <div className="pb-2">
              <p className="font-mono text-xs uppercase tracking-widest opacity-40 mb-6 leading-relaxed">
                {detail}
              </p>
              <div className="flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-700">
                <span className="font-mono text-[10px] font-black uppercase">
                  Open
                </span>
                <ArrowUpRight size={14} strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Trace */}
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-1000">
            <img src="/icons/leaf-black.svg" alt="" className="h-6 w-6" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
