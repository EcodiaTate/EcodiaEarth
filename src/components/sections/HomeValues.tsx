"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MOTIFS = [
  {
    id: "01",
    title: "The Fortune of the Commons",
    line: "When everyone participates, everyone gains.",
    body:
      "Ecodia is built around shared upside. When participation is rewarded, shared places can grow stronger over time.",
  },
  {
    id: "02",
    title: "Design Over Discipline",
    line: "Better systems beat better intentions.",
    body:
      "Ecodia doesn’t ask people to try harder. It’s designed so positive action fits the day, and participation becomes the default.",
  },
  {
    id: "03",
    title: "Action Beats Optics",
    line: "What you do matters more than what you signal.",
    body:
      "Progress here is cumulative. It isn’t built for performance. Doing is enough.",
  },
  {
    id: "04",
    title: "Mutual Benefit",
    line: "Shared good lasts longer than sacrifice.",
    body:
      "Ecodia is shaped so personal benefit and collective good reinforce each other, instead of competing.",
  },
];

export function HomeValues() {
  return (
    <section className="relative w-full py-28 sm:py-32 bg-white text-ink overflow-hidden border-t border-black/5">
      {/* Paper grain */}
      <div className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

      {/* Soft “ink wash” */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-[0.10] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(127,208,105,0.9), transparent 55%), radial-gradient(circle at 70% 70%, rgba(244,211,94,0.9), transparent 55%)",
        }}
        animate={{ x: [0, -24, 0], y: [0, 16, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 px-6 sm:px-12">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-ink/60 rounded-full" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                How the world works here
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight"
            >
              The world we build next
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 h-[2px] w-40 bg-ink origin-left"
            />

            <p className="mt-6 text-base sm:text-lg text-ink/70 leading-relaxed max-w-2xl">
              These aren’t rules. They’re the physics of the world we’re building.
            </p>
          </div>

          {/* Quiet link (desktop) */}
          <div className="hidden lg:block">
            <Link
              href="/values"
              className="group inline-flex items-center gap-3"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-ink/55 group-hover:text-ink transition-colors">
                Read the field guide
              </span>
              <span className="text-ink/35 group-hover:text-ink transition-colors">→</span>
            </Link>
          </div>
        </div>

        {/* Layout: spine + motifs */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-[64px_1px_1fr] gap-8 lg:gap-12">
          {/* Left rail */}
          <div className="hidden lg:flex flex-col justify-between">
            <div className="font-mono text-[11px] tracking-widest text-ink/30">
              01–04
            </div>
            <div className="font-mono text-[11px] tracking-widest text-ink/30">
              /values
            </div>
          </div>

          {/* Spine */}
          <div className="hidden lg:block bg-black/10" />

          {/* Motifs list */}
          <div className="divide-y divide-black/10">
            {MOTIFS.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
                className="py-10 sm:py-12"
              >
                <div className="flex items-baseline justify-between gap-8">
                  <h3 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.02] tracking-tight">
                    {m.title}
                  </h3>
                  <span className="font-mono text-[11px] tracking-widest text-ink/30">
                    {m.id}
                  </span>
                </div>

                <p className="mt-5 font-serif text-lg sm:text-xl text-ink/80 leading-relaxed max-w-2xl">
                  {m.line}
                </p>

                <p className="mt-4 text-sm sm:text-base text-ink/65 leading-relaxed max-w-2xl">
                  {m.body}
                </p>

                {/* tiny accent that feels “designed”, not “card” */}
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-mint/70" />
                  <span className="h-[2px] w-10 bg-ink/10" />
                  <span className="h-[2px] w-10 bg-gold/60" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quiet link (mobile) */}
        <div className="mt-12 lg:hidden">
          <Link href="/values" className="inline-flex items-center gap-2 text-ink/55 hover:text-ink transition-colors">
            <span className="font-mono text-xs uppercase tracking-widest">Read the field guide</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
