"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { useRouter } from "next/navigation";

/**
 * Ecodia Legal - “Public record”
 * Calm, clear, minimal. Reader-first. No threats. No cosplay. No glass cards.
 */

type Clause = {
  id: string;
  section: "PRIVACY" | "TERMS" | "OPEN";
  title: string;
  desc: string;
  stamp: string;
  chips: string[];
};

const LEGAL_CLAUSES: Clause[] = [
  {
    id: "01",
    section: "PRIVACY",
    title: "Data minimisation",
    desc:
      "We collect as little as we can. We keep what’s necessary to run the product, and avoid everything else.\nWhere possible, sensitive details stay on your device.",
    stamp: "MINIMAL",
    chips: ["MINIMAL_DATA", "LOCAL_FIRST", "CONTROL"],
  },
  {
    id: "02",
    section: "TERMS",
    title: "Fair use",
    desc:
      "Ecodia is designed to be usable in good faith.\nIf someone tries to exploit the system, we’ll protect it - quietly, consistently, and without drama.",
    stamp: "FAIR",
    chips: ["GOOD_FAITH", "CONSISTENT", "PROTECTS_SYSTEM"],
  },
  {
    id: "03",
    section: "OPEN",
    title: "Right to build",
    desc:
      "Some parts of Ecodia are meant to be extended.\nWhere we publish code or patterns, you can learn from them, improve them, and carry them forward.",
    stamp: "OPEN",
    chips: ["EXTENDABLE", "FORKABLE", "LONG_HORIZON"],
  },
];

function slugify(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export default function LegalSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Small, tasteful motion: only a subtle rule shift.
  const ruleX = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  const docRef = useMemo(() => {
    return "Record_Ref: PUBLIC_NOTES_V1";
  }, []);

  const anchors = useMemo(
    () =>
      LEGAL_CLAUSES.map((c) => ({
        id: `${c.id}-${slugify(c.title)}`,
        label: `${c.section}: ${c.title}`,
        short: c.section,
      })),
    []
  );

  return (
    <main
      ref={containerRef}
      className="
        relative w-full min-h-screen
        bg-border text-ink
        selection:bg-gold selection:text-ink
      "
    >
      {/* CLOSE */}
      <motion.button
        onClick={() => router.back()}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="flex items-center gap-3 bg-border border-2 border-ink/70 px-4 py-2 rounded-xl shadow-[4px_4px_0px_rgba(15,23,18,0.30)] hover:bg-white/35 active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all"
        aria-label="Close"
      >
        <div className="flex items-center gap-3 bg-border border-2 border-ink/70 px-4 py-2 rounded-xl shadow-[4px_4px_0px_rgba(15,23,18,0.30)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink/80">
            Close
          </span>
          <span className="text-xl leading-none text-ink/70">×</span>
        </div>
      </motion.button>

      {/* BACKGROUND (paper only - no giant text, no blur) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-35 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(57,96,65,0.07),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_90%,rgba(244,211,94,0.10),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-border via-border/85 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-20 sm:py-24 md:py-28">
        {/* HEADER */}
        <header className="pb-10 sm:pb-12 border-b-4 border-ink">
          {/* top ref row */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink/60">
                <span className="w-2 h-2 rounded-full bg-gold/80" />
                {docRef}
              </span>

              {/* Title: still bold, but not poster-black on mobile */}
              <h1 className="font-display uppercase tracking-tight leading-[0.92]">
                <span className="block text-[clamp(44px,10vw,108px)] text-ink">
                  Public
                </span>
                <span className="block text-[clamp(44px,10vw,108px)] text-ink/70">
                  Record
                </span>
              </h1>

              <p className="max-w-2xl font-serif text-[17px] sm:text-xl text-ink/60 leading-relaxed">
                A reader-friendly index of how we handle privacy, terms, and what we publish openly.
                Built for clarity. Written for real people.
              </p>
            </div>

            {/* A small, real “filed” mark - optional, quiet */}
            <div className="self-start sm:self-auto">
              <div className="inline-flex items-center gap-3 border-2 border-ink/60 px-4 py-3 rounded-xl bg-border">
                <div className="w-2 h-2 rounded-full bg-mint/80" />
                <div className="text-left">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink/70 font-bold">
                    Filed notes
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink/45">
                    v1 • public
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* moving rule (tiny motion, feels “alive” but stays readable) */}
          <div className="mt-8 relative">
            <div className="h-[2px] bg-ink/15" />
            <motion.div
              style={{ x: ruleX }}
              className="absolute top-0 left-0 h-[2px] w-28 bg-gold"
            />
          </div>

          {/* anchor nav */}
          <nav className="mt-8 flex flex-wrap gap-2">
            {anchors.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="
                  inline-flex items-center gap-2
                  px-3 py-2 rounded-full
                  border border-ink/20
                  bg-white/40
                  hover:bg-white/60
                  transition-colors
                "
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/55 font-bold">
                  {a.short}
                </span>
                <span className="font-serif text-sm text-ink/70">
                  {a.label.replace(`${a.short}: `, "")}
                </span>
              </a>
            ))}
          </nav>
        </header>

        {/* BODY */}
        <section className="mt-12 sm:mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* MAIN COLUMN */}
            <div className="lg:col-span-8">
              <ol className="space-y-12">
                {LEGAL_CLAUSES.map((c) => (
                  <ClauseBlock key={c.id} clause={c} />
                ))}
              </ol>

              {/* quiet note */}
              <div className="mt-14 pt-10 border-t border-dashed border-ink/30">
                <p className="font-serif italic text-ink/45">
                  Clear terms. Quietly enforced.
                </p>
              </div>
            </div>

            {/* SIDE COLUMN (plain, not card) */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-10">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink/55 mb-3">
                    Quick summary
                  </div>
                  <ul className="space-y-3 font-serif text-ink/65 leading-relaxed">
                    <li>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/45 mr-2">
                        Privacy
                      </span>
                      Minimal data by default.
                    </li>
                    <li>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/45 mr-2">
                        Terms
                      </span>
                      Good-faith use, consistent enforcement.
                    </li>
                    <li>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/45 mr-2">
                        Open
                      </span>
                      Some patterns are meant to be learned from.
                    </li>
                  </ul>
                </div>

                <div className="border-t border-ink/15 pt-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink/55 mb-3">
                    Entities
                  </div>

                  <div className="space-y-6">
                    <EntityRow
                      label="Operating entity"
                      name="Ecodia Pty Ltd"
                      meta={[
                        "ABN: XX XXX XXX XXX",
                        "Jurisdiction: Australia",
                      ]}
                    />
                    <EntityRow
                      label="Research entity"
                      name="Ecodia Labs Pty Ltd"
                      meta={[
                        "ABN: YY YYY YYY YYY",
                        "Where published: open notes",
                      ]}
                    />
                  </div>
                </div>

                <div className="border-t border-ink/15 pt-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink/55 mb-3">
                    Contact
                  </div>
                  <a
                    href="mailto:legal@ecodia.earth"
                    className="
                      inline-flex items-center justify-center w-full
                      px-5 py-3
                      border-2 border-ink/60
                      bg-border
                      rounded-xl
                      shadow-[4px_4px_0px_rgba(15,23,18,0.25)]
                      active:translate-y-[2px] active:translate-x-[2px] active:shadow-none
                      transition-all
                    "
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-ink/80 font-bold">
                      legal@ecodia.earth
                    </span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* bottom whisper */}
        <div className="mt-14 text-center font-mono text-[10px] uppercase tracking-widest text-ink/35">
          // Public notes, not posturing //
        </div>
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Clause block                                                                */
/* -------------------------------------------------------------------------- */

function ClauseBlock({ clause }: { clause: Clause }) {
  const anchorId = `${clause.id}-${slugify(clause.title)}`;

  return (
    <li id={anchorId} className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* section label row */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs font-bold text-ink/35">
              SECTION {clause.id}
            </span>
            <span className="font-mono text-[10px] font-bold bg-ink text-border px-2 py-1 uppercase tracking-widest rounded-lg">
              {clause.section}
            </span>
          </div>

          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold/80" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/55">
              {clause.stamp}
            </span>
          </div>
        </div>

        {/* rule */}
        <div className="mt-5 h-[2px] bg-gradient-to-r from-ink/25 via-ink/10 to-transparent" />

        {/* content */}
        <div className="mt-6">
          <h2 className="font-display text-[28px] sm:text-3xl md:text-4xl text-ink tracking-tight">
            {clause.title}
          </h2>

          <p className="mt-4 font-serif text-[17px] sm:text-lg md:text-xl text-ink/70 leading-relaxed whitespace-pre-line max-w-3xl">
            {clause.desc}
          </p>

          {/* chips: now inline, not in a sidebar card */}
          <div className="mt-6 flex flex-wrap gap-2">
            {clause.chips.map((chip) => (
              <span
                key={chip}
                className="
                  px-3 py-1 rounded-full
                  text-[10px] font-mono uppercase tracking-widest
                  border border-ink/15 text-ink/55
                  bg-white/35
                "
              >
                {chip}
              </span>
            ))}
          </div>

          {/* back to top */}
          <div className="mt-7">
            <a
              href="#top"
              onClick={(e) => {
                // fallback for browsers that don't like #top when not present
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink/45 hover:text-ink/70 transition-colors"
            >
              <span className="inline-block translate-y-[1px]">↑</span> Back to top
            </a>
          </div>
        </div>
      </motion.div>
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/* EntityRow                                                                   */
/* -------------------------------------------------------------------------- */

function EntityRow({
  label,
  name,
  meta,
}: {
  label: string;
  name: string;
  meta: string[];
}) {
  return (
    <div className="space-y-1">
      <div className="font-mono text-[10px] uppercase tracking-widest text-ink/55">
        {label}
      </div>
      <div className="font-display text-xl text-ink">{name}</div>
      {meta.map((m) => (
        <div key={m} className="font-mono text-xs uppercase tracking-widest text-ink/45">
          {m}
        </div>
      ))}
    </div>
  );
}
