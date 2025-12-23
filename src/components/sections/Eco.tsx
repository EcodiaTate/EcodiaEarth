"use client";

import * as React from "react";
import { motion, cubicBezier } from "framer-motion";
import { SmoothLink } from "@/components/nav/SmoothLink";
import { ArrowLeft } from "lucide-react";

const EASE = cubicBezier(0.19, 1, 0.22, 1);

export default function EcoSection() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]">
      {/* Exit */}
      <div className="fixed right-[8%] top-12 z-50">
        <SmoothLink
          href="/"
          className="group flex items-center gap-4 border-b border-[#2D2B28] pb-1 transition-all"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-2 transition-transform duration-700"
          />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">
            Back to index
          </span>
        </SmoothLink>
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute top-[12%] left-0 w-full h-px bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 pl-[8%] pr-[15%] py-32">
        {/* THE UNIT (Leaf) */}
        <section className="mb-64 grid grid-cols-1 gap-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="mb-12 aspect-square w-full border border-[#2D2B28] p-24 flex items-center justify-center relative overflow-hidden bg-[#2D2B28]/[0.02]">
                {/* Canonical asset */}
                <img
                  src="/icons/leaf-black.svg"
                  alt="Leaf"
                  className="w-full h-full object-contain opacity-90 transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-110"
                />
                {/* Alignment overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                  <div className="absolute left-1/2 top-0 h-full w-[0.5px] bg-current" />
                  <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-current" />
                </div>
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.6em] opacity-30">
                <span className="text-[#396041]">●</span> Leaf • unit
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: EASE }}
              viewport={{ once: true }}
              className="space-y-24"
            >
              <h1 className="text-[8rem] font-black leading-[0.75] tracking-tighter sm:text-[10rem] lg:text-[12rem]">
                NOT A PITCH. <br />
                <span className="opacity-10 italic font-light">RESIDUE.</span>
              </h1>

              <div className="space-y-16 max-w-2xl border-l border-[#2D2B28] pl-12">
                <p className="text-3xl font-medium leading-tight tracking-tight">
                  The leaf is the unit.
                  <br />
                  A mark left after contact.
                </p>

                <div className="space-y-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 italic">
                    Placement
                  </p>
                  <ul className="space-y-12">
                    {[
                      {
                        id: "01",
                        text: "Where hands already go — edges, latches, touch points.",
                      },
                      {
                        id: "02",
                        text: "Where wear collects — surfaces shaped by use.",
                      },
                      {
                        id: "03",
                        text: "As a maintenance note — a mark that stays with the object.",
                      },
                    ].map((item) => (
                      <li key={item.id} className="flex items-start gap-8 group">
                        <span className="text-xs font-black opacity-20 group-hover:opacity-100 transition-opacity">
                          [{item.id}]
                        </span>
                        <span className="text-xl opacity-80 leading-snug">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE STATE (Open Loop) */}
        <section className="mb-64 border-t border-[#2D2B28]/10 pt-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 bg-[#F4D35E]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.6em] opacity-40">
                    State marker
                  </span>
                </div>
                <h2 className="text-[7rem] font-black tracking-tighter sm:text-[9rem] leading-none">
                  OPEN <br />
                  LOOP.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
                  <p className="text-2xl font-medium opacity-70 leading-tight">
                    A gap left on purpose.
                    <br />
                    The moment before it lands.
                  </p>
                  <div className="flex gap-12 justify-end">
                    <div className="h-24 w-24 border border-[#2D2B28]/20 flex items-center justify-center group hover:bg-[#2D2B28] hover:text-[#F9F8F5] transition-colors duration-700">
                      <OpenLoopGlyph />
                    </div>
                    <div className="h-24 w-24 border border-[#2D2B28]/20 flex items-center justify-center opacity-30">
                      <OpenLoopGlyph rotation={90} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE MEASURE (ECO) */}
        <section className="mb-64">
          <div className="border-t-8 border-[#2D2B28] pt-24">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="text-[10px] font-black uppercase tracking-[0.6em] mb-12 opacity-30">
                  Constant
                </div>
                <h2 className="text-[14vw] font-black leading-none tracking-tighter lg:text-[18rem]">
                  ECO
                </h2>
              </div>
              <div className="lg:col-span-6">
                <div className="space-y-20">
                  <p className="text-4xl font-medium leading-[1.1] tracking-tighter">
                    Progress you can carry.
                    <br />
                    Measured in work.
                  </p>
                  <div className="grid grid-cols-2 gap-px bg-[#2D2B28]/10 border border-[#2D2B28]/10">
                    <MetricBox label="Unit" value="1 leaf" />
                    <MetricBox label="State" value="Open loop" />
                    <MetricBox label="Source" value="Work" />
                    <MetricBox label="Trace" value="Mint" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-64 flex flex-col items-start justify-between border-t border-[#2D2B28]/10 pt-16 md:flex-row opacity-30">
          <div className="text-[9px] uppercase tracking-[0.8em]">
            Field notes • 01
          </div>
          <div className="flex gap-1 my-8 md:my-0">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-px w-6 bg-[#2D2B28]" />
            ))}
          </div>
          <div className="text-[9px] uppercase tracking-[0.8em]">
            Registry • 2025
          </div>
        </footer>
      </div>
    </main>
  );
}

function OpenLoopGlyph({ rotation = 0 }: { rotation?: number }) {
  return (
    <motion.svg
      style={{ rotate: rotation }}
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <path d="M18 6C18 6 18 18 6 18" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" />
    </motion.svg>
  );
}

function MetricBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#F9F8F5] p-12 group transition-all duration-700 hover:bg-[#2D2B28] hover:text-[#F9F8F5]">
      <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 mb-4 group-hover:opacity-100">
        {label}
      </div>
      <div className="text-xl font-black uppercase tracking-tighter">
        {value}
      </div>
    </div>
  );
}
