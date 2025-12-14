"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

type Experiment = {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  type: "WAVE" | "NODES" | "RADAR" | "BARS";
  accentHex: string;
  hoverBorderHex: string;
  tintHex: string;
};

const EXPERIMENTS: Experiment[] = [
  {
    id: "LAB_01",
    title: "Sidequests",
    subtitle: "Small actions you can finish in real life.",
    status: "IN BUILD",
    type: "WAVE",
    accentHex: "#7FD069",
    hoverBorderHex: "#7FD069",
    tintHex: "#7FD069",
  },
  {
    id: "LAB_02",
    title: "Local rewards",
    subtitle: "Benefits that stay nearby.",
    status: "IN BUILD",
    type: "NODES",
    accentHex: "#F4D35E",
    hoverBorderHex: "#F4D35E",
    tintHex: "#F4D35E",
  },
  {
    id: "LAB_03",
    title: "Shared progress",
    subtitle: "A running record of what’s been done.",
    status: "IN BUILD",
    type: "RADAR",
    accentHex: "#A78BFA",
    hoverBorderHex: "#A78BFA",
    tintHex: "#A78BFA",
  },
  {
    id: "LAB_04",
    title: "Designed to follow through",
    subtitle: "Clear steps. Less effort to start.",
    status: "IN BUILD",
    type: "BARS",
    accentHex: "#7FD069",
    hoverBorderHex: "#7FD069",
    tintHex: "#7FD069",
  },
];

export function HomeLabs() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full py-32 bg-ink text-white border-t border-[#222222] overflow-hidden">
      {/* BACKGROUND: dark grid */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* HEADER */}
      <div className="relative z-10 px-6 sm:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: "#7FD069",
                boxShadow: "0 0 10px rgba(127,208,105,0.35)",
              }}
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mint">
              The world we build next
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl leading-none tracking-tight">
            Ecodia
            <br />
            Labs
          </h2>

          <p className="mt-4 max-w-xl text-white/65 text-sm sm:text-base">
            A few parts of the world in progress. Sidequests, local rewards, shared progress.
          </p>
        </div>

        {/* Desktop Link */}
        <div className="hidden md:block">
          <Link
            href="/labs"
            className="font-mono text-xs uppercase tracking-widest text-mint hover:text-white transition-colors"
          >
            Open labs →
          </Link>
        </div>
      </div>

      {/* SCROLL CONTAINER */}
      <div className="relative w-full">
        {/* FADE MASKS */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-ink to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ink to-transparent z-20 pointer-events-none flex items-center justify-end pr-4">
          <div className="animate-pulse text-white/20 text-2xl">→</div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 px-6 sm:px-12 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-12"
        >
          {EXPERIMENTS.map((item, i) => (
            <div key={item.id} className="snap-center shrink-0 w-[300px] sm:w-[350px]">
              <LabCard item={item} index={i} />
            </div>
          ))}

          {/* View All Mobile Card */}
          <div className="snap-center shrink-0 w-[200px] flex items-center justify-center border border-dashed border-[#333333] rounded-xl md:hidden">
            <Link
              href="/labs"
              className="font-mono text-xs uppercase tracking-widest text-mint text-center p-8 hover:text-white transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="w-12 shrink-0" />
        </div>
      </div>

      {/* Global Style to hide scrollbar but keep functionality */}
      <style jsx global>{`
        .scrollbar-none {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-30%);
            opacity: 0.35;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateX(30%);
            opacity: 0.35;
          }
        }
      `}</style>
    </section>
  );
}

function LabCard({ item, index }: { item: Experiment; index: number }) {
  const tint = `rgba(${hexToRgb(item.tintHex)}, 0.10)`;
  const glow = `rgba(${hexToRgb(item.accentHex)}, 0.16)`;

  return (
    <Link href="/labs" className="block group">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        className="relative h-[450px] bg-[#111111] border border-[#222222] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/30"
      >
        {/* Hover border */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: `inset 0 0 0 1px ${item.hoverBorderHex}` }}
        />

        {/* TOP BAR */}
        <div className="flex justify-between items-center p-6 border-b border-[#222222] bg-[#151515]">
          <span className="font-mono text-[10px] text-[#666666] uppercase">{item.id}</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: item.accentHex }} />
            <span className="font-mono text-[9px] font-bold tracking-[0.12em] text-white/70">
              {item.status}
            </span>
          </div>
        </div>

        {/* MONITOR */}
        <div className="relative flex-1 bg-black/50 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          />

          {item.type === "WAVE" && (
            <div className="flex items-end gap-1 h-12">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 rounded-t-sm animate-pulse"
                  style={{
                    height: `${20 + Math.random() * 80}%`,
                    animationDelay: `${i * 0.1}s`,
                    background: tint,
                  }}
                />
              ))}
            </div>
          )}

          {item.type === "NODES" && (
            <div className="relative w-24 h-24 animate-[spin_10s_linear_infinite]">
              {["top", "bottom", "left", "right"].map((pos) => (
                <div
                  key={pos}
                  className={[
                    "absolute w-3 h-3 rounded-full",
                    pos === "top" ? "top-0 left-1/2 -translate-x-1/2" : "",
                    pos === "bottom" ? "bottom-0 left-1/2 -translate-x-1/2" : "",
                    pos === "left" ? "left-0 top-1/2 -translate-y-1/2" : "",
                    pos === "right" ? "right-0 top-1/2 -translate-y-1/2" : "",
                  ].join(" ")}
                  style={{ background: tint }}
                />
              ))}
              <div
                className="absolute inset-0 border border-dashed rounded-full opacity-50"
                style={{ borderColor: item.hoverBorderHex }}
              />
            </div>
          )}

          {item.type === "RADAR" && (
            <div
              className="relative w-32 h-32 rounded-full border flex items-center justify-center"
              style={{ borderColor: item.hoverBorderHex }}
            >
              <div
                className="w-1 h-1/2 absolute top-0 left-1/2 origin-bottom opacity-50 animate-[spin_2s_linear_infinite]"
                style={{
                  background: `linear-gradient(to top, transparent, ${item.accentHex})`,
                  transform: "translateX(-50%)",
                }}
              />
              <div className="w-2 h-2 rounded-full" style={{ background: tint }} />
            </div>
          )}

          {item.type === "BARS" && (
            <div className="w-32 space-y-2">
              {[0.6, 0.8, 0.4].map((w, idx) => (
                <div key={idx} className="h-1 w-full bg-[#222222] overflow-hidden rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${w * 100}%`,
                      background: tint,
                      animation: `${2 + idx * 0.7}s shimmer infinite ease-in-out`,
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="p-6 border-t border-[#222222] bg-[#151515] relative z-10">
          <h3 className="font-display text-2xl text-white mb-1 group-hover:text-mint transition-colors">
            {item.title}
          </h3>
          <p className="font-serif text-sm text-[#888]">{item.subtitle}</p>
        </div>

        {/* Hover tint */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          style={{ background: glow }}
        />
      </motion.div>
    </Link>
  );
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "").trim();
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `${r}, ${g}, ${b}`;
}
