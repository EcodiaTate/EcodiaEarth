"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ECODIA_BEZIER = [0.19, 1, 0.22, 1] as const;

export function HomePorts() {
  return (
    <section
      id="ports"
      className="relative w-full overflow-hidden bg-[#F9F8F5] text-[#2D2B28]"
    >
      {/* perimeter + perforation (unique motif vs other sections) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-px w-full bg-[#2D2B28] opacity-[0.06]" />
        <div className="absolute left-0 bottom-0 h-px w-full bg-[#2D2B28] opacity-[0.06]" />

        {/* perforated rails */}
        <div className="absolute left-[6%] top-0 h-full w-[1px] bg-[#2D2B28] opacity-[0.06]" />
        <div className="absolute right-[6%] top-0 h-full w-[1px] bg-[#2D2B28] opacity-[0.06]" />

        <div className="absolute left-[6%] top-0 h-full w-10 opacity-[0.12]">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="absolute left-3 h-2 w-2 rounded-full border border-[#2D2B28]"
              style={{ top: `${i * 90 + 44}px` }}
            />
          ))}
        </div>

        <div className="absolute right-[6%] top-0 h-full w-10 opacity-[0.12]">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="absolute right-3 h-2 w-2 rounded-full border border-[#2D2B28]"
              style={{ top: `${i * 90 + 44}px` }}
            />
          ))}
        </div>

        {/* faint sweep mark */}
        <div className="absolute -left-[30%] top-[40%] h-[520px] w-[520px] rounded-full border border-[#2D2B28] opacity-[0.06]" />
        <div className="absolute -right-[25%] top-[10%] h-[680px] w-[680px] rounded-full border border-[#2D2B28] opacity-[0.05]" />
      </div>

      <div className="mx-auto max-w-7xl px-8 py-44">
        {/* header */}
        <div className="mb-20 max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <div
              className="h-3 w-3 bg-[#396041]"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40">
              Index
            </span>
          </div>

          <h2 className="font-black text-[8vw] lg:text-[6.5rem] leading-[0.9] tracking-tighter">
            ENTRY POINTS <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px #2D2B28" }}>
              IN USE.
            </span>
          </h2>

          <p className="mt-10 max-w-xl font-mono text-lg opacity-60 leading-relaxed">
            Start anywhere. It connects.
          </p>
        </div>

        {/* ports row */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <PortCard
            href="/eco"
            label="ECO"
            title="Sidequests + record"
            meta="Work → log → accumulate"
            accent="#7FD069"
            col="lg:col-span-7"
          />

          <PortCard
            href="/eco-local"
            label="ECO LOCAL"
            title="Local return"
            meta="Places → circulation → spend local"
            accent="#F4D35E"
            col="lg:col-span-5"
          />
        </div>

        {/* secondary rail (small, not “big choice”) */}
        <div className="mt-14 flex flex-col gap-8 border-t border-[#2D2B28]/10 pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 opacity-30">
            <div className="h-2 w-2 bg-[#2D2B28]" />
            <div className="font-mono text-[9px] uppercase tracking-[0.6em]">
              Home // Ports
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <MiniJump href="/values">Values</MiniJump>
            <MiniJump href="/greenprint">Greenprint</MiniJump>
            <MiniJump href="/labs">Labs</MiniJump>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortCard({
  href,
  label,
  title,
  meta,
  accent,
  col,
}: {
  href: string;
  label: string;
  title: string;
  meta: string;
  accent: string;
  col: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: ECODIA_BEZIER }}
      viewport={{ once: true, margin: "-80px" }}
      className={`relative ${col}`}
    >
      <Link
        href={href}
        className="group relative block border border-[#2D2B28]/20 bg-[#F9F8F5] p-14 lg:p-16 overflow-hidden"
      >
        {/* header stripe */}
        <div className="pointer-events-none absolute left-0 top-0 h-2 w-full opacity-[0.12]" style={{ backgroundColor: accent }} />

        {/* left trace */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ backgroundColor: accent }}
        />

        {/* internal grid lines */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="absolute left-10 top-0 h-full w-px bg-[#2D2B28]" />
          <div className="absolute right-10 top-0 h-full w-px bg-[#2D2B28]" />
          <div className="absolute left-0 top-10 h-px w-full bg-[#2D2B28]" />
        </div>

        <div className="relative z-10 space-y-10">
          <div className="flex items-start justify-between gap-10">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div
                  className="h-3 w-3"
                  style={{
                    backgroundColor: accent,
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                />
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.55em] opacity-40">
                  {label}
                </span>
              </div>

              <div className="font-mono text-[10px] uppercase tracking-[0.45em] opacity-30">
                {meta}
              </div>
            </div>

            <ArrowUpRight
              size={18}
              className="opacity-20 group-hover:opacity-60 transition-opacity"
            />
          </div>

          <h3 className="font-black text-4xl lg:text-6xl leading-[0.95] tracking-tighter">
            {title}
          </h3>

          <div className="pt-10 border-t border-[#2D2B28]/10 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">
              Open
            </span>
            <div className="flex gap-2 opacity-30">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="h-px w-8 bg-[#2D2B28]" />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function MiniJump({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 border border-[#2D2B28]/20 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.35em] opacity-50 hover:opacity-100 hover:bg-[#2D2B28] hover:text-[#F9F8F5] transition-all"
    >
      {children}
      <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-80" />
    </Link>
  );
}
