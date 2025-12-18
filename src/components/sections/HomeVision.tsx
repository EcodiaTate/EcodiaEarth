// src/components/sections/HomeVision.tsx
"use client";

import Link from "next/link";
import { useParallax } from "@/components/ui/useParallax";

export function HomeVision() {
  useParallax("#vision [data-speed]");

  const FOREST_GREEN = "#396041";
  const LIGHT_MINT = "#7fd069";
  const GOLD = "#f4d35e";
  const OFF_WHITE = "#ffffff";

  return (
    <section
      id="vision"
      className="w-full py-20 md:py-48 text-black overflow-hidden relative min-h-[150vh]"
      style={{ backgroundColor: OFF_WHITE }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* --- TITLE BLOCK --- */}
        <div className="relative mb-14 md:mb-24">
          <p className="font-mono text-base md:text-xl uppercase tracking-[0.28em] text-black/50 mb-6 md:mb-10 border-b pb-2 border-black/10 inline-block">
            The World We Build Next
          </p>

          {/* PARALLAX 1 */}
          <div
            className="absolute top-[-5rem] left-[-2rem] opacity-7 text-[10rem] md:text-[20rem] leading-[0.8] tracking-tighter pointer-events-none font-display text-gray-900/10 [text-shadow:2px_2px_0_rgba(0,0,0,0.04)] hidden md:block"
            data-speed="-0.1"
          >
            SYSTEMS
          </div>

          <h2 className="font-display text-6xl md:text-[160px] tracking-tighter leading-[0.92] md:leading-[0.86] max-w-6xl">
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: `1px ${FOREST_GREEN}` }}
            >
              MAKE GOOD
            </span>

            <span className="block" style={{ color: FOREST_GREEN }}>
              THE DEFAULT.
            </span>

            {/* Badge */}
            <span
              className="block text-[22px] sm:text-[28px] md:text-[52px] mt-7 md:mt-10 font-mono tracking-normal leading-[1.1] font-normal px-4 py-2.5 rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.25)]"
              style={{
                color: GOLD,
                backgroundColor: "rgba(0,0,0,0.84)",
                display: "inline-block",
              }}
            >
              Watch it work.
            </span>
          </h2>
        </div>

        {/* --- BODY CONTENT --- */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-20 mt-14 md:mt-28">
          {/* PARALLAX 2 */}
          <div
            className="w-full md:w-[55%] p-7 md:p-10 bg-white/90 backdrop-blur-sm rounded-3xl ring-1"
            data-speed="-0.25"
            style={{
              borderColor: "transparent",
              boxShadow: "0 30px 90px rgba(0,0,0,0.10)",
              // @ts-ignore
              "--tw-ring-color": "rgba(127, 208, 105, 0.35)",
            }}
          >
            <p className="font-serif text-xl md:text-3xl leading-relaxed text-black max-w-xl">
              Ecodia turns real-world care into sidequests.
              <span className="block mt-5 md:mt-7 text-lg md:text-2xl font-light border-t pt-5 border-black/15">
                Clear actions. Small enough to start now. Designed to repeat.
                Progress you can see — alone or together.
              </span>
            </p>
          </div>

          {/* PARALLAX 3 */}
          <div
            className="w-full md:w-[45%] mt-6 md:-mt-10 pl-5 md:pl-8"
            data-speed="0.2"
          >
            <div className="rounded-3xl bg-white/70 backdrop-blur-sm ring-1 ring-black/10 px-6 md:px-8 py-6 md:py-8 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
              <div className="space-y-3 font-mono text-xs md:text-sm uppercase tracking-widest text-black/60">
                <p className="font-bold text-black">SYSTEM RULES</p>
                <p className="pl-4">Design reduces effort.</p>
                <p className="pl-4">Small actions compound.</p>
                <p className="pl-4">Shared makes it stick.</p>
              </div>
            </div>
          </div>
        </div>

        {/* PARALLAX 4 */}
        <div
          className="w-full mt-12 md:mt-24 md:max-w-4xl mx-auto -mb-12 md:-mb-20"
          data-speed="-0.3"
        >
          <Link
            href="/vision"
            className="group relative block w-full bg-black p-7 md:p-12 transition-all duration-300 rounded-3xl shadow-[0_30px_120px_rgba(0,0,0,0.35)] hover:shadow-[0_40px_140px_rgba(244,211,94,0.18)] ring-1 ring-white/10"
          >
            <div className="flex justify-between items-center text-white">
              <div className="text-left">
                <span className="font-display text-3xl md:text-6xl tracking-tight text-white block">
                  View the system
                </span>
                <span
                  className="font-mono text-xs md:text-base uppercase tracking-[0.2em] block mt-1.5 md:mt-2"
                  style={{ color: LIGHT_MINT }}
                >
                  Explore the map
                </span>
              </div>

              <span
                className="text-4xl md:text-8xl inline-block transition-all duration-500 group-hover:translate-x-4 md:group-hover:translate-x-7 group-hover:rotate-12 font-bold"
                style={{ color: LIGHT_MINT }}
              >
                &rarr;
              </span>
            </div>

            <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/10 rounded-b-3xl overflow-hidden">
              <span className="absolute left-0 top-0 h-[3px] w-[22%] bg-white/70 group-hover:w-full transition-all duration-1000 ease-out" />
            </div>

            {/* subtle outer accent (mint/gold) */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl ring-1"
              style={{
                // @ts-ignore
                "--tw-ring-color": "rgba(244, 211, 94, 0.18)",
              }}
            />
          </Link>
        </div>

        {/* Footer detail */}
        <div className="mt-28 md:mt-56 pt-6 md:pt-10 border-t border-black/10 mx-auto max-w-4xl text-center">
          <p className="font-mono text-[8px] md:text-[10px] tracking-widest text-black/40 uppercase">
            Built for repeatable action.
          </p>
        </div>
      </div>
    </section>
  );
}
