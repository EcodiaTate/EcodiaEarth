"use client";

import * as React from "react";
import { motion, cubicBezier } from "framer-motion";
import { ArrowLeft, Activity, ArrowRight } from "lucide-react";
import { SmoothLink } from "@/components/nav/SmoothLink";

const EASE = cubicBezier(0.19, 1, 0.22, 1);

export default function ECOLocalYouthSection() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069] selection:text-[#F9F8F5]">
      {/* Exit */}
      <div className="fixed right-[8%] top-12 z-50">
        <SmoothLink
          href="/"
          className="group flex items-center gap-4 border-b border-[#2D2B28] pb-1 transition-all"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform duration-700" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back</span>
        </SmoothLink>
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute top-[12%] left-0 w-full h-px bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 pl={[8] as unknown as string}% pr-[15%] py-32" />
      <div className="relative z-10 pl-[8%] pr-[15%] py-32">
        {/* Briefing */}
        <section className="mb-64">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: EASE }}
            className="space-y-16"
          >
            <div className="text-[10px] uppercase tracking-[0.6em] opacity-30">
              Local • Youth
            </div>
            <h1 className="text-[8.5rem] font-black leading-[0.75] tracking-tighter sm:text-[11rem] lg:text-[13rem]">
              A FUTURE <br />
              THAT <span className="italic font-light opacity-10">ANSWERS BACK.</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-l border-[#2D2B28] pl-16">
              <p className="lg:col-span-8 text-3xl font-medium leading-tight tracking-tighter opacity-80">
                The old loop rewards attention. ECO Local rewards action. Small moves that change how a place feels.
              </p>
              <div className="lg:col-span-4 flex flex-col justify-end items-start">
                <SmoothLink
                  href="https://ecodia.au/auth/login"
                  className="group flex w-full items-center justify-between bg-[#2D2B28] p-10 text-[#F9F8F5] transition-all hover:bg-[#396041]"
                >
                  <span className="text-xs font-black uppercase tracking-[0.4em]">Open Ecodia</span>
                  <ArrowRight className="transition-transform group-hover:translate-x-2" />
                </SmoothLink>
                <div className="mt-6 flex items-center gap-3 text-[10px] opacity-40 uppercase tracking-widest">
                  <Activity size={12} className="text-[#7FD069]" />
                  Status: Emerging
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Steps */}
        <section className="mb-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-[#2D2B28]">
          <ManifestoStep num="01" title="Spot" desc="Find places that hold up. Start there." />
          <ManifestoStep num="02" title="Relief" desc="Get something useful, right now. No hoops." />
          <ManifestoStep num="03" title="Back" desc="Send ECO to a place you believe in." />
          <ManifestoStep num="04" title="Proof" desc="Watch the change add up. Quiet, visible, real." />
        </section>

        {/* ECO */}
        <section className="mb-64 grid grid-cols-1 gap-24 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 relative aspect-square border border-[#2D2B28]/20 flex items-center justify-center">
            <div className="h-2/3 w-2/3 rounded-full border-[8px] border-double border-[#2D2B28] flex flex-col items-center justify-center p-12 text-center">
              <div className="text-[10rem] font-black tracking-tighter leading-none mb-2">ECO</div>
              <div className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">Impact checksum</div>
            </div>
            <div className="absolute top-12 left-12 h-6 w-6 border-l border-t border-[#2D2B28]" />
            <div className="absolute bottom-12 right-12 h-6 w-6 border-r border-b border-[#2D2B28]" />
          </div>
          <div className="lg:col-span-6 space-y-12">
            <h2 className="text-6xl font-black tracking-tighter uppercase leading-[0.9]">ENERGY OF <br />SHARED PROGRESS.</h2>
            <div className="space-y-10 text-2xl font-medium leading-tight opacity-70">
              <p>ECO measures contribution. You can’t buy it. You earn it by doing things that hold together.</p>
              <p className="opacity-40 italic">It’s a signal you can point to.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-[#2D2B28] p-24 text-[#F9F8F5]">
          <div className="relative z-10 space-y-12">
            <h2 className="text-7xl font-black leading-[0.8] tracking-tighter lg:text-[10rem]">
              BELONGING <br />
              IS SOMETHING WE DO.
            </h2>
            <p className="max-w-xl text-2xl opacity-80 leading-tight">
              Come build with us. Free for youth. Built to last.
            </p>
            <SmoothLink
              href="https://ecodia.au/auth/login"
              className="inline-block border-4 border-[#7FD069] px-16 py-8 text-sm font-black uppercase tracking-[0.4em] text-[#7FD069] transition-all hover:bg-[#7FD069] hover:text-[#2D2B28]"
            >
              Join Ecodia
            </SmoothLink>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-48 flex items-center justify-between border-t border-[#2D2B28]/10 pt-16 opacity-30">
          <div className="text-[10px] uppercase tracking-[0.8em]">Youth • v0.9</div>
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-1 w-8 bg-[#2D2B28]" />
            ))}
          </div>
          <div className="text-[10px] uppercase tracking-[0.8em]">2025</div>
        </footer>
      </div>
    </main>
  );
}

function ManifestoStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="group relative bg-[#F9F8F5] p-16 transition-all duration-700 hover:bg-[#2D2B28] hover:text-[#F9F8F5]">
      <div className="mb-20 text-[10px] font-black opacity-20 group-hover:opacity-100 uppercase tracking-[0.6em]">
        {num}
      </div>
      <h3 className="mb-6 text-4xl font-black tracking-tighter uppercase leading-none">{title}</h3>
      <p className="text-lg leading-tight opacity-60 group-hover:opacity-100">{desc}</p>
      <div className="absolute top-0 right-0 h-8 w-8 border-r border-t border-current opacity-10 group-hover:opacity-40 transition-opacity" />
    </div>
  );
}
