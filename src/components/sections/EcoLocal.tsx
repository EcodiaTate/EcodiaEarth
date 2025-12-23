"use client";

import * as React from "react";
import { motion, cubicBezier } from "framer-motion";
import { ArrowRight, Store, Users } from "lucide-react";
import { SmoothLink } from "@/components/nav/SmoothLink";

const EASE = cubicBezier(0.19, 1, 0.22, 1);

export default function EcoLocalSection() {
  return (
    <div className="relative min-h-screen w-full select-none overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28]">
      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute left-0 top-[15%] h-px w-full bg-[#2D2B28]" />
        <div className="absolute right-[15%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute left-[7.8%] top-1/4 h-8 w-px bg-[#2D2B28] opacity-50" />
        <div className="absolute right-[14.8%] top-3/4 h-8 w-px bg-[#2D2B28] opacity-50" />
      </div>

      {/* Residue asset */}
      <div className="absolute right-[8%] top-12 z-50">
        <img
          src="/icons/leaf-black.svg"
          alt="Leaf"
          className="w-10 h-10 opacity-60"
        />
      </div>

      <main className="relative z-10 pl-[8%] pr-[15%] py-32">
        {/* Hero */}
        <section className="mb-48">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: EASE }}
            className="space-y-16"
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#2D2B28] opacity-20" />
              <span className="text-[10px] tracking-[0.6em] uppercase opacity-40">
                Local registry
              </span>
            </div>

            <h1 className="text-[9rem] font-black leading-[0.75] tracking-tighter sm:text-[11rem] lg:text-[14rem]">
              LOCAL <br />
              REWARDS<span className="opacity-10 italic font-light">.</span>
            </h1>

            <div className="grid grid-cols-1 gap-24 border-l border-[#2D2B28] pl-16 lg:grid-cols-2 lg:items-end">
              <p className="text-3xl font-medium leading-tight tracking-tighter opacity-80 max-w-xl">
                Places you return to become part of the world. Value circulates.
              </p>

              <div className="pb-4">
                <SmoothLink
                  href="/youth"
                  className="group relative flex w-full items-center justify-between border-4 border-[#2D2B28] bg-[#2D2B28] px-12 py-10 text-[#F9F8F5] transition-all hover:bg-transparent hover:text-[#2D2B28]"
                >
                  <span className="text-xs font-black uppercase tracking-[0.5em]">
                    Open map
                  </span>
                  <ArrowRight className="h-6 w-6 transition-transform duration-700 group-hover:translate-x-4" />
                </SmoothLink>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Steps */}
        <section className="mt-64 grid grid-cols-1 md:grid-cols-3 border-y border-[#2D2B28]">
          <DocumentationCard
            step="01"
            title="Spot"
            body="Find the places that set the tone."
          />
          <DocumentationCard
            step="02"
            title="Mark"
            body="Do the sidequest. Leave the leaf."
          />
          <DocumentationCard
            step="03"
            title="Share"
            body="Your ECO builds. Others step in."
          />
        </section>

        {/* Split content */}
        <section className="mt-64 grid grid-cols-1 lg:grid-cols-12 gap-px bg-[#2D2B28]/10 border-x border-[#2D2B28]/10">
          <div className="lg:col-span-7 bg-[#F9F8F5] p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-[#2D2B28]/10">
            <div className="mb-16 flex items-center gap-3 opacity-30">
              <Users size={14} strokeWidth={3} />
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">
                People
              </span>
            </div>
            <h2 className="mb-12 text-6xl font-black tracking-tighter uppercase leading-[0.85]">
              MAKE YOUR <br />
              REGULARS COUNT.
            </h2>
            <p className="mb-16 max-w-md text-xl opacity-70 leading-tight">
              Return with intent. Collect marks from places that hold up.
            </p>
            <div className="h-px w-48 bg-[#2D2B28]" />
          </div>

          <div className="lg:col-span-5 bg-[#F9F8F5] p-16 lg:p-24 flex flex-col justify-between">
            <div>
              <div className="mb-16 flex items-center gap-3 opacity-30">
                <Store size={14} strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">
                  Places
                </span>
              </div>
              <h2 className="mb-12 text-5xl font-black tracking-tighter uppercase leading-none">
                JOIN THE GRID.
              </h2>
              <p className="mb-16 text-lg opacity-70 leading-snug">
                Register as a place. Shops, studios, hubs — the ones people come
                back to.
              </p>
            </div>
            <SmoothLink
              href="/business"
              className="inline-block text-xs font-black border-b-2 border-[#2D2B28] pb-2 uppercase tracking-[0.4em] hover:text-[#7FD069] hover:border-[#7FD069] transition-all duration-700"
            >
              Start
            </SmoothLink>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-64 flex flex-col items-end justify-between border-t border-[#2D2B28]/10 pt-16 md:flex-row opacity-30">
          <div className="text-[10px] uppercase tracking-[0.8em]">
            26.6500° S // 153.0667° E
          </div>
          <div className="flex gap-1 my-12 md:my-0">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-8 w-px bg-[#2D2B28]" />
            ))}
          </div>
          <div className="text-[10px] uppercase tracking-[0.8em]">Status • 2025</div>
        </footer>
      </main>
    </div>
  );
}

function DocumentationCard({
  step,
  title,
  body,
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <div className="group relative bg-[#F9F8F5] p-16 transition-all duration-700 hover:bg-[#2D2B28] hover:text-[#F9F8F5]">
      <div className="mb-24 text-[10px] font-black opacity-20 group-hover:opacity-100 uppercase tracking-[0.5em]">
        {step}
      </div>
      <h3 className="mb-8 text-5xl font-black tracking-tighter uppercase leading-none">
        {title}
      </h3>
      <p className="text-xl leading-tight opacity-70 group-hover:opacity-100">
        {body}
      </p>
      {/* State glyph */}
      <div className="absolute top-12 right-12">
        <div className="h-3 w-3 border border-current opacity-20 group-hover:bg-[#7FD069] group-hover:opacity-100 transition-all duration-700" />
      </div>
    </div>
  );
}
