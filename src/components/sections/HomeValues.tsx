"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PRINCIPLES = [
  {
    id: "01",
    title: "Shared Upside",
    text: "When a place gains, value circulates through the people already living there. Return stays local first.",
    color: "text-[#2D2B28]",
  },
  {
    id: "02",
    title: "Design Over Discipline",
    text: "Structure decides what repeats. Participation follows what the world makes possible.",
    color: "text-[#7FD069]", // Mint Stain
  },
  {
    id: "03",
    title: "Doing Counts",
    text: "Progress is the work that lands. What gets done carries forward.",
    color: "text-[#2D2B28]",
  },
  {
    id: "04",
    title: "Mutual Benefit",
    text: "It lasts when benefit is shared. Personal return and shared return move together.",
    color: "text-[#F4D35E]", // Gold Stain
  },
];

export function HomeValues() {
  return (
    <section
      id="values"
      className="relative w-full py-48 bg-[#F9F8F5] text-[#2D2B28] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-8">
        {/* HEADER: OFFSET */}
        <div className="mb-32 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-6">
            Field notes
          </span>
          <h2 className="font-black text-[9vw] lg:text-[9rem] leading-[0.78] tracking-tighter">
  HOW THIS <br />
  <span className="text-transparent" style={{ WebkitTextStroke: "1px #2D2B28" }}>
    WORLD WORKS.
  </span>
</h2>



        </div>

        {/* VALUE DRIFT (No Symmetry) */}
        <div className="divide-y divide-[#2D2B28]/10">
          {PRINCIPLES.map((p, i) => (
            <PrincipleRow key={p.id} data={p} index={i} />
          ))}
        </div>

        {/* CTA: FOOTER MARK */}
        <div className="mt-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="font-mono text-[9px] uppercase tracking-widest opacity-30 leading-loose">
            In use <br />
            Revised in motion
          </div>
          <Link
            href="/values"
            className="border border-[#2D2B28] px-12 py-6 font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-[#2D2B28] hover:text-[#F9F8F5] transition-all"
          >
            Read the notes →
          </Link>
        </div>
      </div>
    </section>
  );
}

function PrincipleRow({ data, index }: { data: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="group py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative"
    >
      <div className="md:col-span-1 font-mono text-xs opacity-20">[{data.id}]</div>

      <div className="md:col-span-5">
        <h3
          className={`font-black text-4xl lg:text-6xl uppercase tracking-tighter transition-colors ${data.color}`}
        >
          {data.title}
        </h3>
      </div>

      <div className="md:col-span-6 max-w-lg">
        <p className="font-mono text-lg opacity-60 leading-relaxed">{data.text}</p>
      </div>

      {/* RESIDUE TRACE */}
      <div className="hidden group-hover:block absolute left-0 w-1 h-12 bg-[#7FD069] -translate-x-8" />
    </motion.div>
  );
}
