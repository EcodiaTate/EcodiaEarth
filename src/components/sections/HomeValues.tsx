"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MOTIFS = [
  {
    id: "01",
    title: "Shared Upside",
    line: "Participation should strengthen the place it comes from.",
    body:
      "When people show up, value returns close to home. It moves through local life and leaves places better to live in over time.",
  },
  {
    id: "02",
    title: "Design Holds",
    line: "The world should make good choices easy to repeat.",
    body:
      "Ecodia is shaped for real days, not perfect behaviour. When the design fits, participation becomes a habit instead of a decision.",
  },
  {
    id: "03",
    title: "Small Adds Up",
    line: "Repeatable actions create momentum.",
    body:
      "Most change comes from small things done often. Shared over time, they shape culture, streets, and everyday life.",
  },
  {
    id: "04",
    title: "A World You Can Re-Enter",
    line: "Play keeps effort alive.",
    body:
      "Curiosity and return matter more than intensity. Ecodia is built to be entered, explored, and revisited, so progress can keep going.",
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
              A few principles that keep the world coherent as it grows.
            </p>
          </div>

          {/* CTA (desktop) */}
          <div className="hidden lg:block">
            <Link
              href="/values"
              className="
                group inline-flex items-center gap-3
                rounded-full px-6 py-3
                border border-ink/15
                bg-[#faf3e0]
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                hover:shadow-[0_14px_40px_rgba(0,0,0,0.50)]
                hover:-translate-y-[1px]
                transition-all
                focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white
              "
            >
              <span className="font-mono text-xs uppercase tracking-widest text-ink/75 group-hover:text-ink transition-colors">
                Read our  field guide
              </span>

              <span
                className="
                  inline-flex items-center justify-center
                  w-8 h-8 rounded-full
                  border border-ink/10
                  bg-ink/[0.03]
                  group-hover:bg-ink/[0.06]
                  transition-colors
                "
                aria-hidden
              >
                <span className="text-ink/70 group-hover:text-ink transition-colors">→</span>
              </span>
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

        {/* CTA (mobile) */}
        <div className="mt-12 lg:hidden">
          <Link
            href="/values"
            className="
              inline-flex items-center justify-between gap-4
              w-full sm:w-auto
              rounded-2xl px-5 py-4
              border border-ink/15
              bg-white
              shadow-[0_10px_30px_rgba(0,0,0,0.06)]
              hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)]
              transition-all
              focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white
            "
          >
            <span className="font-mono text-xs uppercase tracking-widest text-ink/75">
              Read the field guide
            </span>
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-ink/10 bg-ink/[0.03]">
              <span aria-hidden className="text-ink/70">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
