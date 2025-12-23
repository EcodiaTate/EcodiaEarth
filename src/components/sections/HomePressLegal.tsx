"use client";

import Link from "next/link";

const DOCUMENTATION = [
  { title: "Security", desc: "What we collect, why, and how it’s protected.", link: "https://ecodia.au/legal" },
  { title: "Legal", desc: "How decisions change over time.", link: "/legal" },
  { title: "Press Desk", desc: "Assets and field notes.", link: "/press" },
];

export function HomePressLegal() {
  return (
    <section className="relative w-full py-40 bg-[#F9F8F5] text-[#2D2B28] overflow-hidden">
      {/* Offset grid residue */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute left-[15%] h-full w-[1px] bg-[#2D2B28]" />
        <div className="absolute top-[30%] w-full h-[1px] bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-end mb-24">
          <header className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8 opacity-40">
              <img src="/icons/leaf-black.svg" className="w-4 h-4" alt="residue" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em]">Archive</span>
            </div>

            <h2 className="font-black text-[12vw] lg:text-[9rem] leading-[0.8] tracking-tighter">
              OPEN BY <br /> <span className="text-[#396041]">DESIGN.</span>
            </h2>
          </header>

          <div className="lg:col-span-4 border-l border-[#2D2B28] pl-8 pb-4">
            <p className="font-mono text-sm opacity-60 leading-relaxed max-w-[280px]">
              Everything here is working text from active development.
            </p>
          </div>
        </div>

        {/* Log grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[#2D2B28]">
          {DOCUMENTATION.map((doc, index) => (
            <Link
              key={index}
              href={doc.link}
              className="group relative p-8 border-b border-[#2D2B28]/10 lg:border-r lg:border-b-0 hover:bg-[#2D2B28] hover:text-[#F9F8F5] transition-all duration-300"
            >
              <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 group-hover:opacity-100">
                // 0{index + 1}
              </span>
              <h3 className="font-black text-2xl uppercase tracking-tighter mt-6 mb-2">
                {doc.title}
              </h3>
              <p className="font-mono text-[11px] opacity-60 leading-snug group-hover:opacity-80">
                {doc.desc}
              </p>
              <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                Open file →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
