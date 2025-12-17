// src/components/sections/HomeLegalPress.tsx (Open by Design)
"use client";

import Link from "next/link";

const DOCUMENTATION = [
  { title: "Public Manifest", desc: "What we’re building and why.", link: "/manifest" },
  { title: "Data Model", desc: "What we collect and how it’s protected.", link: "/data-model" },
  { title: "Governance", desc: "How decisions are made and changed.", link: "/governance" },
  { title: "Press Desk", desc: "Facts, assets, and contact.", link: "/press" },
];

export function HomePressLegal() {
  const DEEP_JADE = "#2d4a33";
  const BRIGHT_GOLD = "#f4d35e";
  const PURE_WHITE = "#ffffff";

  return (
    <section
      className="relative w-full py-24 md:py-40 px-4 md:px-8 text-white overflow-hidden"
      style={{ backgroundColor: DEEP_JADE }}
    >
      {/* soft glow */}
      <div className="absolute top-0 left-1/2 w-full h-1/2 bg-white/10 opacity-50 blur-3xl rounded-full transform -translate-x-1/2" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* header */}
        <header className="mb-12 md:mb-20 max-w-4xl border-b-2 border-white/30 pb-4">
          <p className="font-mono text-lg uppercase tracking-[0.4em] text-white/90 mb-4">
            SYSTEM ARCHIVE / OPEN ACCESS
          </p>

          <h2 className="font-display text-5xl sm:text-7xl tracking-tighter leading-[1.05]">
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: `2px ${BRIGHT_GOLD}`,
                textShadow: `0 0 5px rgba(255, 255, 255, 0.4)`,
              }}
            >
              OPEN BY
            </span>
            <span className="block" style={{ color: PURE_WHITE }}>
              DESIGN.
            </span>
          </h2>
        </header>

        {/* glass panel */}
        <div
          className="w-full p-6 md:p-12 shadow-2xl border-4 border-white/50 backdrop-blur-xl"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            borderRadius: "20px",
            boxShadow: `0 0 20px rgba(255, 255, 255, 0.1), 0 0 80px ${BRIGHT_GOLD}20`,
          }}
        >
          <p className="font-mono text-sm uppercase tracking-widest text-white/70 mb-8 border-b border-white/30 pb-2">
            // Core documents. Always available.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DOCUMENTATION.map((doc, index) => (
              <Link
                key={index}
                href={doc.link}
                className="block relative p-4 border-b border-white/40 pb-6 transition-colors duration-300
                           md:border-b-0 md:border-r md:pr-6 md:pb-4 md:h-full"
                style={{
                  borderRightColor:
                    index % 2 === 0 ? "rgba(255, 255, 255, 0.4)" : "transparent",
                  borderBottomColor:
                    index >= DOCUMENTATION.length - 2 ? "transparent" : "rgba(255, 255, 255, 0.4)",
                }}
              >
                <span
                  className="font-mono text-xs uppercase tracking-widest block mb-2"
                  style={{ color: BRIGHT_GOLD }}
                >
                  // 0{index + 1}
                </span>

                <h3 className="font-display text-2xl md:text-3xl tracking-tight text-white">
                  {doc.title}
                </h3>
                <p className="mt-2 text-base text-white/70">{doc.desc}</p>

                <span className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-white/70">
                  Open
                  <span className="text-xl inline-block font-extrabold" style={{ color: BRIGHT_GOLD }}>
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>

          {/* footer link */}
          <div className="mt-12 pt-6 border-t border-white/30 text-center">
            <Link
              href="/press"
              className="font-mono text-sm uppercase tracking-[0.3em] text-white/90 underline underline-offset-4 decoration-white/50"
            >
              // Press desk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
