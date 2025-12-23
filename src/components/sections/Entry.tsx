"use client";

import * as React from "react";
import { SmoothLink } from "@/components/nav/SmoothLink";
import { ArrowLeft, ArrowUpRight, Anchor, ToolCase, Map, Eye } from "lucide-react";

const ECODIA_BEZIER = [0.19, 1, 0.22, 1] as const;

const DOORS = [
  {
    label: "PARTNER",
    sub: "Bring a place. We’ll map a first pass together.",
    intent: "partner",
    icon: <Anchor size={20} strokeWidth={1.5} />,
  },
  {
    label: "BUILD",
    sub: "Design and ship. Keep it usable.",
    intent: "build",
    icon: <ToolCase size={20} strokeWidth={1.5} />,
  },
  {
    label: "DEPLOY",
    sub: "Stand up a node. Keep it running.",
    intent: "deploy",
    icon: <Map size={20} strokeWidth={1.5} />,
  },
  {
    label: "OBSERVE",
    sub: "Look closely. Tell us what you notice.",
    intent: "other",
    icon: <Eye size={20} strokeWidth={1.5} />,
  },
];

export default function EntryPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]">
      {/* Top rail */}
      <header className="sticky top-0 z-50 border-b border-[#2D2B28]/10 bg-[#F9F8F5]/80 backdrop-blur-md">
        <div className="pl-[8%] pr-[8%] py-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className="h-3 w-3 bg-[#396041]"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            />
            <span className="text-[11px] font-black uppercase tracking-[0.5em] opacity-40">
              Entry
            </span>
          </div>
          <SmoothLink
            href="/"
            className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.4em]"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform duration-700" />
            Back
          </SmoothLink>
        </div>
      </header>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute left-0 top-[15%] h-px w-full bg-[#2D2B28]" />
        <div className="absolute -right-[10%] -top-[10%] h-[800px] w-[800px] rounded-full border border-[#2D2B28]" />
      </div>

      <div className="relative z-10 pl-[8%] pr-[15%] py-32">
        {/* Hero */}
        <section className="mb-64 grid grid-cols-1 gap-24 lg:grid-cols-12">
          <div className="lg:col-span-9 space-y-16">
            <div className="flex items-center gap-6">
              <span className="text-[11px] font-black uppercase tracking-[0.6em] opacity-20">
                Brief
              </span>
              <div className="h-px w-32 bg-[#2D2B28] opacity-10" />
            </div>

            <h1 className="text-[9rem] font-black leading-[0.75] tracking-tighter sm:text-[11rem] lg:text-[13rem]">
              START <br />
              <span className="italic font-light opacity-10 text-[#396041]">
                HERE.
              </span>
            </h1>

            <div className="inline-block border-2 border-[#2D2B28] px-8 py-4 text-[11px] font-black uppercase tracking-[0.4em]">
              Built to repeat
            </div>

            <p className="max-w-3xl text-3xl font-medium leading-tight tracking-tighter opacity-80 border-l-4 border-[#2D2B28] pl-12">
              Ecodia turns participation into something you can actually do.
              Clear entry points. Real places. Momentum that holds.
            </p>
          </div>

          {/* Protocol block */}
          <div className="lg:col-span-3 flex items-end">
            <div className="border-4 border-[#2D2B28] bg-[#F9F8F5] p-10 relative w-full">
              <div className="mb-10 border-b-2 border-[#2D2B28] pb-6">
                <span className="text-[11px] font-black uppercase tracking-[0.5em]">
                  Steps
                </span>
              </div>
              <ul className="space-y-8">
                {[
                  { id: "01", text: "Pick a door." },
                  { id: "02", text: "Write the short version." },
                  { id: "03", text: "We reply. It moves." },
                ].map((step) => (
                  <li key={step.id} className="flex gap-6 items-start">
                    <span className="text-[10px] font-black opacity-20 mt-1">{step.id}</span>
                    <span className="text-sm font-black uppercase tracking-widest">{step.text}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute -top-2 -left-2 h-6 w-6 border-t-4 border-l-4 border-[#2D2B28]" />
              <div className="absolute -bottom-2 -right-2 h-6 w-6 border-b-4 border-r-4 border-[#2D2B28]" />
            </div>
          </div>
        </section>

        {/* Orientation */}
        <section className="relative -ml-[8%] -mr-[15%] bg-[#2D2B28] px-[8%] py-48 text-[#F9F8F5]">
          <div className="max-w-7xl grid grid-cols-1 gap-24 lg:grid-cols-2 lg:items-center">
            <div className="space-y-12">
              <div className="text-[11px] font-black uppercase tracking-[0.6em] opacity-40 italic">
                Orientation
              </div>
              <h2 className="text-[6rem] font-black leading-[0.85] tracking-tighter sm:text-[8rem]">
                STRUCTURE <br /> OVER NOISE.
              </h2>
              <p className="text-2xl font-medium opacity-60 leading-tight max-w-lg">
                People already know what matters. This is about making participation
                easy to enter and hard to lose.
              </p>
            </div>

            <div className="border-l border-[#F9F8F5]/20 p-16 space-y-10">
              <p className="text-4xl font-black tracking-tighter text-[#7FD069] leading-none">
                Participation, by default.
              </p>
              <div className="h-px w-full bg-[#F9F8F5]/10" />
              <p className="text-[11px] font-black uppercase tracking-[0.4em] opacity-40">
                Status: live
              </p>
            </div>
          </div>
        </section>

        {/* Doors */}
        <section id="doors" className="py-64">
          <div className="flex items-center gap-8 mb-24">
            <span className="text-[11px] font-black uppercase tracking-[0.6em] opacity-20">
              Access
            </span>
            <div className="h-px flex-1 bg-[#2D2B28] opacity-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#2D2B28]">
            {DOORS.map((d) => (
              <SmoothLink
                key={d.label}
                href={`/contact?intent=${d.intent}`}
                className="group relative bg-[#F9F8F5] p-16 transition-all duration-700 hover:bg-[#2D2B28] hover:text-[#F9F8F5] border-r border-[#2D2B28] last:border-r-0"
              >
                <div className="mb-20 flex h-16 w-16 items-center justify-center border border-[#2D2B28] group-hover:border-[#F9F8F5]">
                  {d.icon}
                </div>
                <h3 className="text-4xl font-black tracking-tighter mb-6 uppercase">
                  {d.label}
                </h3>
                <p className="text-sm font-medium opacity-60 group-hover:opacity-100 leading-tight mb-12">
                  {d.sub}
                </p>
                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-40 transition-opacity">
                  <ArrowUpRight size={24} />
                </div>
              </SmoothLink>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-64 border-t-8 border-[#2D2B28] pt-16 flex flex-col md:flex-row justify-between items-end gap-16">
          <div className="space-y-6">
            <div className="text-[11px] font-black uppercase tracking-[0.6em] opacity-30 italic">
              Final frame
            </div>
            <h2 className="text-8xl font-black tracking-tighter leading-none">
              THE WORLD WE <br /> BUILD NEXT.
            </h2>
          </div>
          <SmoothLink
            href="/contact?intent=partner"
            className="bg-[#2D2B28] px-20 py-10 text-xs font-black uppercase tracking-[0.5em] text-[#F9F8F5] hover:bg-[#396041] transition-all duration-700"
          >
            Begin
          </SmoothLink>
        </footer>
      </div>
    </main>
  );
}
