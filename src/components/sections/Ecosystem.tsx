"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Layers, Fingerprint, Activity, Wind, ArrowLeft } from "lucide-react";

const ECODIA_BEZIER = [0.19, 1, 0.22, 1] as const;

const STRATA = [
  {
    zone: "ZONE 00",
    name: "Shared Ground",
    role: "Overlap",
    desc: "Streets, parks, coastlines. Shared ground where the work begins.",
    trace: "#F4D35E",
    icon: <Layers size={20} strokeWidth={1.5} />,
    offset: "lg:ml-[8%]",
  },
  {
    zone: "ZONE 01",
    name: "Regenerators",
    role: "Nurturing",
    desc: "Repair and upkeep. Returning to the same place until it holds.",
    trace: "#7FD069",
    icon: <Fingerprint size={20} strokeWidth={1.5} />,
    offset: "lg:ml-[25%]",
  },
  {
    zone: "ZONE 02",
    name: "Intelligence",
    role: "Memory",
    desc: "Patterns noticed, then shared. Memory that keeps places steady over time.",
    trace: "#396041",
    icon: <Activity size={20} strokeWidth={1.5} />,
    offset: "lg:ml-[15%]",
  },
  {
    zone: "ZONE 03",
    name: "Circulation",
    role: "Flow",
    desc: "Effort routes into opportunity. Circulation keeps a place responsive.",
    trace: "#F4D35E",
    icon: <Wind size={20} strokeWidth={1.5} />,
    offset: "lg:ml-[35%]",
  },
] as const;

export default function EcosystemSection() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]">
      {/* 1. ASYMMETRIC EXIT PROTOCOL */}
      <div className="fixed right-[8%] top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-4 border-b border-[#2D2B28] pb-1 transition-all"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform duration-700" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Return</span>
        </button>
      </div>

      {/* 2. TECTONIC GRID (0.05 OPACITY) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28] opacity-5" />
        <div className="absolute right-[15%] top-0 h-full w-px bg-[#2D2B28] opacity-5" />
        <div className="absolute left-0 top-[12%] w-full h-px bg-[#2D2B28] opacity-5" />
        {/* Measurement Ticks */}
        <div className="absolute left-[7.5%] top-1/2 h-16 w-px bg-[#2D2B28] opacity-20" />
      </div>

      <div className="relative z-10 pl-[8%] pr-[15%] py-32">
        {/* HEADER: MASS-BASED TYPOGRAPHY */}
        <header className="mb-64 max-w-6xl space-y-16">
          <div className="flex items-center gap-4 opacity-30">
            <div
              className="h-4 w-4 bg-[#2D2B28]"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            />
            <span className="text-[10px] uppercase tracking-[0.6em]">System_Mapping // Strata_v01</span>
          </div>

          <h1 className="text-[9rem] font-black leading-[0.75] tracking-tighter sm:text-[11rem] lg:text-[14rem]">
            SYSTEMS <br />
            <span className="italic font-light opacity-10 text-[#396041]">BREATHE.</span>
          </h1>

          <p className="max-w-xl text-3xl font-medium leading-tight tracking-tighter opacity-80 border-l border-[#2D2B28] pl-12">
            Ecodia is a topography. Layers of place and work that support one another.
          </p>
        </header>

        {/* STRATA SECTIONS: INERTIAL DRIFT */}
        <div className="relative space-y-96 pb-64">
          {STRATA.map((layer) => (
            <motion.section
              key={layer.zone}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: ECODIA_BEZIER }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative max-w-3xl ${layer.offset}`}
            >
              <div className="flex flex-col gap-12">
                {/* ZONE MARKER */}
                <div className="flex items-center gap-8">
                  <div
                    className="flex h-16 w-16 items-center justify-center border border-[#2D2B28]"
                    style={{ color: layer.trace }}
                  >
                    {layer.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="text-[11px] font-black uppercase tracking-[0.5em] opacity-30">
                      {layer.zone}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.3em] font-black">
                      Protocol: {layer.role}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="space-y-8">
                  <h2 className="text-6xl font-black tracking-tighter leading-none">
                    {layer.name.toUpperCase()}
                  </h2>
                  <p className="text-2xl font-medium leading-[1.1] opacity-70 max-w-2xl">
                    {layer.desc}
                  </p>
                </div>

                {/* FUNCTIONAL RESIDUE */}
                <div className="flex items-center gap-6 pt-12 border-t border-[#2D2B28]/10">
                  <div className="h-1 w-32" style={{ backgroundColor: layer.trace }} />
                  <div className="text-[9px] font-black opacity-30 uppercase tracking-[0.4em]">
                    Stable_State
                  </div>
                </div>
              </div>
            </motion.section>
          ))}

          {/* THE CONNECTING LINE (VERTICAL DRIFT) */}
          <div className="absolute left-8 top-0 -z-10 h-full w-px bg-gradient-to-b from-[#2D2B28]/20 via-[#2D2B28]/5 to-transparent" />
        </div>

        {/* FOOTER: CALIBRATION */}
        <footer className="mt-64 flex flex-col md:flex-row items-end justify-between border-t border-[#2D2B28]/10 pt-16 opacity-30">
          <div className="flex gap-1 mb-12 md:mb-0">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-8 w-px bg-[#2D2B28]" />
            ))}
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.8em] mb-4">Atlas // 2025</div>
            <div className="text-[10px] font-black tracking-widest opacity-40">
              COORDINATES: 26.6500° S // 153.0667° E
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
