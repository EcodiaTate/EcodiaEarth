// src/components/sections/HomeEntry.tsx (Stakeholder Revision: Partners / Investors / Deployments)
"use client";

import Link from "next/link";

export function HomeEntry() {
  // Colors for extreme contrast and high tension
  const FOREST_GREEN = "#396041"; // Primary Structural
  const LIGHT_MINT = "#7fd069"; // Secondary Energy
  const GOLD = "#f4d35e"; // Critical Attention
  const PURE_BLACK = "#000000"; // High Contrast Base
  const NEAR_BLACK = "#111111"; // CTA Background

  return (
    <section
      id="entry"
      className="relative py-24 sm:py-40 text-black overflow-hidden border-4 border-dashed border-gray-400/50"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* --- KINETIC OVERLAY TEXT --- */}
      <div className="absolute top-[-10rem] left-[-20rem] md:top-[-15rem] md:left-[-30rem] text-[25rem] md:text-[40rem] font-display pointer-events-none opacity-[0.03] text-gray-900/10 rotate-[-15deg] tracking-[-0.2em] transform skewY(-15deg)">
        ENTRY
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        {/* --- HEADER BLOCK --- */}
        <header className="mb-12 md:mb-24 max-w-5xl">
          <p className="font-mono text-sm sm:text-xl uppercase tracking-[0.4em] text-black/80 mb-4 md:mb-8 text-shadow-sm border-b-2 border-black/40 pb-1 inline-block">
            // ENTRY POINT
          </p>

          <h2 className="font-display text-5xl sm:text-[110px] tracking-tighter leading-[1.0] md:leading-[0.9] text-black">
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: `2px ${PURE_BLACK}`,
                WebkitFilter: "blur(0.5px)",
              }}
            >
              WORK WITH
            </span>
            <br />
            <span className="relative inline-block ml-0 sm:ml-4">
              <span
                className="text-black font-extrabold tracking-[-0.05em]"
                style={{ textShadow: `4px 4px 0 ${GOLD}` }}
              >
                ECODIA
              </span>
              {/* kinetic underline */}
              <span className="absolute bottom-[-15px] left-0 w-full h-1 bg-black/60 transform skewX(-15deg)" />
              <span
                className="absolute bottom-[-18px] left-0 w-full h-1"
                style={{ backgroundColor: GOLD, transform: "skewX(10deg)" }}
              />
            </span>
            <span
              className="text-transparent block sm:inline"
              style={{ WebkitTextStroke: `2px ${FOREST_GREEN}` }}
            >
              .
            </span>
          </h2>

          <p className="mt-6 md:mt-10 max-w-3xl font-serif text-lg md:text-2xl leading-relaxed text-black/75">
            For investors, collaborators, project partners, sponsors, and future participants.
            A short path to alignment, a concrete next step, and a clear place to start.
          </p>
        </header>

        {/* --- STAKEHOLDER CARDS --- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 -mb-20 md:-mb-32">
          {/* Card 1: Partners */}
          <div className="p-6 md:p-8 border-4 border-black/80 relative overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl hover:bg-gray-50 transform rotate-[-1deg] md:rotate-[-2deg] origin-bottom-left">
            <h3 className="font-mono text-xs uppercase tracking-widest text-black/60 mb-2 mt-2 border-b border-dashed border-black/30 pb-1">
              PATH: PARTNERS
            </h3>
            <p className="font-display text-3xl md:text-4xl text-black leading-snug">
              Deploy in real places.
            </p>
            <p className="mt-4 font-serif text-base md:text-lg text-black/70 leading-relaxed">
              Councils, schools, community groups, venues, local operators. Bring a site. We bring the system,
              onboarding, and measurement.
            </p>
            <div className="absolute bottom-0 right-0 h-4 w-4 border-b-4 border-r-4" style={{ borderColor: GOLD }} />
          </div>

          {/* Card 2: Investors / Sponsors */}
          <div
            className="p-6 md:p-8 border-4 relative overflow-hidden shadow-xl transition-all duration-300 transform rotate-[1deg] md:rotate-[1deg] mt-4 md:mt-16"
            style={{ borderColor: GOLD, backgroundColor: NEAR_BLACK, color: GOLD }}
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-white/80 mb-2">
              PATH: BACKERS
            </h3>
            <p className="font-display text-3xl md:text-4xl leading-snug font-bold">
              Fund scale with clarity.
            </p>
            <p className="mt-4 font-serif text-base md:text-lg leading-relaxed text-white/75">
              Capital, sponsorship, or strategic support to accelerate deployment, partnerships, and product velocity.
              We’ll share the roadmap and the operating model.
            </p>
            <div
              className="absolute inset-0 border-r border-l border-dashed opacity-50 pointer-events-none"
              style={{ borderColor: LIGHT_MINT }}
            />
          </div>

          {/* Card 3: Builders */}
          <div className="p-6 md:p-8 border-4 border-black/80 relative overflow-hidden bg-white transition-all duration-300 hover:shadow-lg hover:bg-gray-50 transform rotate-[1deg] md:rotate-[3deg] origin-top-right mt-4 md:-mt-12">
            <h3 className="font-mono text-xs uppercase tracking-widest text-black/60 mb-2 mt-2 border-b border-dashed border-black/30 pb-1">
              PATH: BUILDERS
            </h3>
            <p className="font-display text-3xl md:text-4xl text-black leading-snug">
              Ship the mechanism.
            </p>
            <p className="mt-4 font-serif text-base md:text-lg text-black/70 leading-relaxed">
              Product, engineering, design, operations, and field work. If you build systems that people actually
              return to, you’ll fit here.
            </p>
            <div className="absolute top-0 left-0 h-4 w-4 border-t-4 border-l-4" style={{ borderColor: GOLD }} />
          </div>
        </div>

        {/* --- CTA FIELD --- */}
        <div className="pt-32 md:pt-48 flex flex-col items-start justify-start border-t border-dashed border-black/30">
          <Link
            href="/entry"
            className="group relative inline-flex items-center justify-between w-full md:w-auto gap-4 md:gap-12 p-6 md:pl-20 md:pr-12 md:py-10 font-mono text-base md:text-2xl uppercase tracking-[0.2em] transition-all duration-200 transform hover:scale-[1.01] hover:shadow-2xl"
            style={{
              backgroundColor: GOLD,
              color: PURE_BLACK,
              border: `6px solid ${PURE_BLACK}`,
              filter: "brightness(1.05)",
            }}
          >
            <span className="relative z-10 font-extrabold text-shadow-sm">
              <span className="inline-block transition-transform duration-500 group-hover:-translate-x-1">
                OPEN THE ENTRY BRIEF
              </span>
            </span>
            <span className="text-5xl md:text-8xl transition-transform duration-300 group-hover:translate-x-4 font-black">
              &gt;
            </span>

            {/* ghost text */}
            <span className="absolute left-6 top-6 text-black/50 transition-all duration-300 group-hover:top-[22px] group-hover:left-[23px] pointer-events-none">
              OPEN THE ENTRY BRIEF
            </span>
          </Link>

          <div className="flex flex-wrap items-center gap-6 mt-8">
            <Link
              href="/vision"
              className="self-start text-black/80 hover:text-black font-mono text-sm md:text-base tracking-wider transition-colors pt-2 border-t-2 border-black/30"
            >
              &gt; View the architecture
            </Link>

            <Link
              href="/contact?intent=partner"
              className="self-start text-black/80 hover:text-black font-mono text-sm md:text-base tracking-wider transition-colors pt-2 border-t-2 border-black/30"
            >
              &gt; Propose a deployment site
            </Link>

            <Link
              href="/contact?intent=invest"
              className="self-start text-black/80 hover:text-black font-mono text-sm md:text-base tracking-wider transition-colors pt-2 border-t-2 border-black/30"
            >
              &gt; Discuss backing / sponsorship
            </Link>
          </div>

          <p className="mt-10 max-w-2xl font-serif text-base md:text-lg text-black/65 leading-relaxed">
            One message away.
          </p>
        </div>
      </div>
    </section>
  );
}
