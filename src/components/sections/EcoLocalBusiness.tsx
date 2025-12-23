"use client";

import * as React from "react";
import { motion, cubicBezier } from "framer-motion";
import { SmoothLink } from "@/components/nav/SmoothLink";
import { ArrowLeft, ShieldCheck, BarChart3, Fingerprint, Zap, ArrowRight } from "lucide-react";

const EASE = cubicBezier(0.19, 1, 0.22, 1);

export default function ECOLocalBusinessSection() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#2D2B28] selection:text-[#F9F8F5]">
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

      <div className="relative z-10 pl-[8%] pr-[15%] py-32">
        {/* Hero */}
        <section className="mb-48">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: EASE }}
            className="space-y-12"
          >
            <div className="flex items-center gap-4">
              <div
                className="h-3 w-3 bg-[#7FD069]"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />
              <span className="text-[10px] uppercase tracking-[0.6em] opacity-40">Local onboarding</span>
            </div>

            <h1 className="text-[8rem] font-black leading-[0.75] tracking-tighter sm:text-[10rem] lg:text-[12rem]">
              BUILT FOR <br />
              PLACES THAT <span className="opacity-10 italic font-light">LAST.</span>
            </h1>

            <div className="grid grid-cols-1 gap-16 border-t border-[#2D2B28] pt-16 md:grid-cols-2">
              <p className="text-3xl font-medium leading-[1.1] tracking-tighter opacity-80">
                If you carry your own costs and care how things are made, this fits. Ecodia makes it visible, and easy to take part.
              </p>
              <div className="flex flex-col justify-end items-start md:items-end">
                <SmoothLink
                  href="/business/register"
                  className="group relative flex w-full max-w-sm items-center justify-between bg-[#2D2B28] p-10 text-[#F9F8F5] transition-all hover:bg-[#7FD069] hover:text-[#2D2B28]"
                >
                  <span className="text-xs font-black uppercase tracking-[0.4em]">Register your place</span>
                  <ArrowRight className="transition-transform group-hover:translate-x-2" />
                </SmoothLink>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Pillars */}
        <section className="mb-48 border border-[#2D2B28]">
          <div className="grid grid-cols-1 divide-y divide-[#2D2B28] md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
            <IntegrationPillar
              icon={<ShieldCheck size={20} strokeWidth={1.5} />}
              title="Check"
              desc="A simple fit check. Do your practices hold up day to day?"
            />
            <IntegrationPillar
              icon={<Zap size={20} strokeWidth={1.5} />}
              title="Offer"
              desc="Set one clear, useful offer. Something people will feel."
            />
            <IntegrationPillar
              icon={<Fingerprint size={20} strokeWidth={1.5} />}
              title="Backed by ECO"
              desc="Visitors can send ECO to your place. A quiet vote for how you run things."
            />
            <IntegrationPillar
              icon={<BarChart3 size={20} strokeWidth={1.5} />}
              title="Signals"
              desc="See what’s happening, not ad metrics. Real visits, real marks."
            />
          </div>
        </section>

        {/* Proof */}
        <section className="mb-64 grid grid-cols-1 gap-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="space-y-16">
              <h2 className="text-6xl font-black tracking-tighter leading-none">PROOF, NOT <br />OFFSETS.</h2>
              <div className="space-y-12 text-2xl font-medium leading-tight opacity-70 border-l border-[#2D2B28] pl-12">
                <p>We don’t do offsets. We show what was done here.</p>
                <p className="italic opacity-40">
                  When someone scans at your counter, ECO moves to your node. It’s a mark of work, not a slogan.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative flex items-center justify-center bg-[#2D2B28]/[0.02] border border-[#2D2B28]/10 aspect-square">
            <div className="grid grid-cols-6 gap-4 opacity-10">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="h-1 w-1 bg-[#2D2B28]" />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-48 w-48 border border-[#2D2B28] flex flex-col items-center justify-center p-8 text-center">
                <div className="text-[10px] uppercase tracking-[0.5em] font-black leading-relaxed">
                  Place integrity<br />locked
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#2D2B28] p-24 text-[#F9F8F5] relative overflow-hidden">
          <div className="max-w-4xl space-y-16">
            <h2 className="text-7xl font-black tracking-tighter sm:text-9xl leading-[0.8]">
              JOIN THE <br />GRID.
            </h2>
            <p className="max-w-xl text-2xl opacity-60 leading-tight">
              Skip ads. Build structure. Let your place speak for itself.
            </p>
            <SmoothLink
              href="https://ecodia.au/auth/login"
              className="inline-block border-4 border-[#7FD069] px-16 py-8 text-sm font-black uppercase tracking-[0.4em] text-[#7FD069] transition-all hover:bg-[#7FD069] hover:text-[#2D2B28]"
            >
              Request access
            </SmoothLink>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-48 border-t border-[#2D2B28]/10 pt-16 flex flex-col md:flex-row justify-between items-end opacity-30">
          <div className="flex gap-1 mb-8 md:mb-0">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`h-6 w-px bg-[#2D2B28] ${i % 4 === 0 ? "h-10" : ""}`} />
            ))}
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.6em]">
            Ecodia • Business • Ref 42
          </div>
        </footer>
      </div>
    </main>
  );
}

function IntegrationPillar({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group p-12 transition-all duration-700 hover:bg-[#2D2B28] hover:text-[#F9F8F5]">
      <div className="mb-12 flex h-14 w-14 items-center justify-center border border-[#2D2B28] group-hover:border-[#F9F8F5]">
        {icon}
      </div>
      <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.4em]">{title}</h3>
      <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-100">{desc}</p>
    </div>
  );
}
