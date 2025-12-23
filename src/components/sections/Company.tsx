"use client";

import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SmoothLink } from "@/components/nav/SmoothLink";

const EASE = cubicBezier(0.19, 1, 0.22, 1);

const SECTIONS = [
  {
    id: "01",
    label: "Product",
    sub: "Real-world sidequests",
    theme: "#7FD069",
    content: [
      "Real-world sidequests.",
      "Action becomes momentum. Progress becomes shared.",
    ],
    calibration: "Field v1",
  },
  {
    id: "02",
    label: "Local",
    sub: "Value kept close",
    theme: "#F4D35E",
    content: [
      "Local rewards that circulate.",
      "Participation that strengthens the places you’re already in.",
    ],
    calibration: "Local grid v4",
  },
  {
    id: "03",
    label: "Studio",
    sub: "Repair & reuse",
    theme: "#396041",
    content: [
      "Make better things with what already exists.",
      "Repair, reuse, and build taste for longevity.",
    ],
    calibration: "Materials v2",
  },
] as const;

export default function CompanySection() {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const item = SECTIONS[active];

  return (
    <motion.section
      className="relative min-h-screen w-full overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: EASE }}
    >
      {/* Exit */}
      <div className="fixed right-[8%] top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-4 border-b-2 border-[#2D2B28] pb-1 transition-all"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-2 transition-transform duration-500"
          />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">
            Back
          </span>
        </button>
      </div>

      {/* Grid residue */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28] opacity-5" />
        <div className="absolute left-0 top-[12%] w-full h-px bg-[#2D2B28] opacity-5" />
        <div className="absolute left-[7.5%] top-1/2 h-12 w-px bg-[#2D2B28] opacity-20" />
        <div className="absolute right-[14.5%] top-1/4 h-12 w-px bg-[#2D2B28] opacity-20" />
      </div>

      <div className="relative z-10 pl-[8%] pr-[15%] py-32">
        {/* Header */}
        <header className="mb-32 max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <div
              className="h-4 w-4 bg-[#2D2B28]"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />
            <span className="text-[10px] uppercase tracking-[0.6em] opacity-40">
              Ecodia
            </span>
          </div>

          <h1 className="text-[10rem] font-black leading-[0.75] tracking-tighter sm:text-[14rem]">
            BUILDING <br />
            <span className="italic font-light opacity-10">TOOLS.</span>
          </h1>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-start gap-12">
            <p className="max-w-md text-xl leading-tight opacity-80">
              A world where participation carries weight.
            </p>
            <div className="border-l border-[#2D2B28] pl-6">
              <div className="text-[9px] uppercase tracking-widest opacity-40 mb-1">
                Status
              </div>
              <div className="text-sm font-black uppercase">Active</div>
            </div>
          </div>
        </header>

        {/* Section nav */}
        <nav className="mb-24 grid grid-cols-1 md:grid-cols-3 border-t border-[#2D2B28]">
          {SECTIONS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActive(idx)}
              className={`relative flex flex-col items-start p-10 pt-6 transition-all duration-700 ${
                active === idx
                  ? "bg-[#2D2B28] text-[#F9F8F5]"
                  : "hover:bg-[#2D2B28]/5"
              }`}
            >
              <span
                className={`mb-12 text-[10px] font-black ${
                  active === idx ? "text-[#7FD069]" : "opacity-20"
                }`}
              >
                [{s.id}]
              </span>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-2">
                {s.label}
              </h3>
              <span className="text-[10px] uppercase tracking-widest opacity-50">
                {s.sub}
              </span>

              {active === idx && (
                <motion.div
                  layoutId="trace"
                  className="absolute top-0 right-0 h-full w-1"
                  style={{ backgroundColor: s.theme }}
                  transition={{ type: "tween", ease: EASE, duration: 0.8 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="space-y-16"
              >
                <div className="space-y-10">
                  {item.content.map((p, i) => (
                    <p
                      key={i}
                      className="text-3xl font-medium leading-[1.1] tracking-tight max-w-2xl"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-12 border-t border-[#2D2B28]/10">
                  <div className="h-2 w-2" style={{ backgroundColor: item.theme }} />
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">
                    {item.calibration}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Aside */}
          <aside className="lg:col-span-5 flex flex-col justify-end">
            <div className="bg-[#2D2B28] p-12 text-[#F9F8F5]">
              <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.5em]">
                Get in touch
              </h4>
              <p className="mb-12 text-sm opacity-60 leading-relaxed">
                For people building the world with us.
              </p>
              <div className="space-y-2">
                <SmoothLink
                  href="/contact"
                  className="flex w-full items-center justify-between border border-[#F9F8F5]/20 px-6 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#F9F8F5] hover:text-[#2D2B28] transition-colors"
                >
                  Send a note <ArrowUpRight size={14} />
                </SmoothLink>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-64 flex flex-col md:flex-row items-end justify-between border-t border-[#2D2B28]/10 pt-12 opacity-30">
          <div className="text-[9px] uppercase tracking-[0.6em]">
            Ecodia • [Ref 77]
          </div>
          <div className="flex items-center gap-12 mt-8 md:mt-0">
            <div className="flex gap-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-px w-4 bg-[#2D2B28]" />
              ))}
            </div>
            <div className="text-[9px] uppercase tracking-[0.6em]">
              2025 • Active
            </div>
          </div>
        </footer>
      </div>
    </motion.section>
  );
}
