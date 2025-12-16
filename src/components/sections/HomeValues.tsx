// src/components/sections/HomeValues.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PRINCIPLES = [
  {
    id: "01",
    title: "Shared Upside",
    text:
      "When a place improves, the upside should circulate through the people who live there. Value returns to the setting and keeps moving through local life.",
    gradient: "from-mint via-mint to-indigo-400",
  },
  {
    id: "02",
    title: "Design Over Discipline",
    text:
      "Good systems lower friction. Participation becomes easy to begin, easy to repeat, and simple to carry into real days.",
    gradient: "from-mint via-mint to-mint",
  },
  {
    id: "03",
    title: "Doing Counts",
    text:
      "Progress is made of what gets done. Small actions leave a trace when they’re shared and carried forward. Quiet participation still counts.",
    gradient: "from-gold via-orange-400 to-red-400",
  },
  {
    id: "04",
    title: "Small Is Powerful",
    text:
      "Approachable actions keep a world playable. Scale comes from consistency—many people returning to the same simple act over time.",
    gradient: "from-mint via-mint to-mint",
  },
  {
    id: "05",
    title: "Mutual Benefit",
    text:
      "Participation lasts when everyone gets something real from it. Personal benefit and shared good reinforce each other and keep the system alive.",
    gradient: "from-mint via-mint to-indigo-400",
  },
];

export function HomeValues() {
  return (
    <section
      id="values"
      className="relative w-full py-40 bg-white text-ink overflow-hidden"
    >
      {/* Header */}
      <div className="mx-auto max-w-5xl px-6 text-left">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink/40 block mb-6">
          Document_Ref: FIELD_NOTES
        </span>

        <h2 className="font-display text-6xl md:text-[7vw] leading-[0.85] tracking-tighter text-ink mb-8">
          HOW THIS
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#396041] to-black">
            WORLD WORKS
          </span>
          .
        </h2>

        <p className="max-w-xl text-lg text-ink/70 leading-relaxed">
          Recurring patterns you’ll notice as you spend time here.
        </p>
      </div>

      {/* Value Rows */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 mt-20">
        <div className="flex flex-col">
          {PRINCIPLES.map((p, i) => (
            <PrincipleRow key={p.id} data={p} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex items-center justify-between gap-6 border-t-4 border-black/10 pt-8">
          <div className="font-mono text-xs uppercase tracking-widest text-ink/40">
            Written as we build
            <br />
            And revised as we learn
          </div>

          <Link
            href="/values"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#f4d35e] text-black font-mono text-xs uppercase tracking-widest hover:scale-[1.03] transition-transform"
          >
            <span>Explore the full values</span>
            <span className="text-base">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PrincipleRow({
  data,
  index,
}: {
  data: { title: string; text: string; gradient: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className="relative group border-b-2 border-black/10"
    >
      {/* Ambient gradient strip */}
      <div
        className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${data.gradient} opacity-50`}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 md:py-16">
        {/* Index */}
        <div className="md:col-span-2 flex items-center">
          <span className="font-display text-6xl md:text-7xl leading-none text-black/10 select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <h3 className="font-display text-3xl md:text-4xl leading-[1.05] tracking-tight text-ink group-hover:text-[#396041] transition-colors duration-300">
            {data.title}
          </h3>
        </div>

        {/* Text */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <p className="font-serif text-lg md:text-xl leading-relaxed text-ink/80 group-hover:text-ink transition-colors duration-300">
            {data.text}
          </p>
        </div>
      </div>

      {/* Hover outline */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 ring-1 ring-[#7fd069]/40" />
      </div>
    </motion.div>
  );
}
