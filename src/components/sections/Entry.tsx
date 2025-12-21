/**
 * Ecodia Earth - Field Entry (Bold / Statement / Out-there)
 *
 * Stakeholder doorway: partners, investors, collaborators, deployment sites.
 * High-contrast editorial layout. Minimal effects (no heavy blur/noise loops).
 */

import Link from "next/link";

const DOORS = [
  {
    label: "Partner",
    sub: "Strategy, alignment, deployment fit.",
    href: "/contact?intent=partner",
  },
  {
    label: "Build",
    sub: "Product, engineering, operations.",
    href: "/contact?intent=build",
  },
  {
    label: "Deploy",
    sub: "Live sites and local integration.",
    href: "/contact?intent=deploy",
  },
  {
    label: "Observe",
    sub: "Progress, signals, reporting.",
    href: "/contact?intent=other",
  },
];
export default function EntryPage() {
  return (
    <main className="relative w-full overflow-hidden bg-white text-ink">
      {/* ─────────────────────────────────────────────
          BACKDROP (lightweight, no filters)
      ───────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        {/* hard grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,18,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,18,0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* diagonal slash */}
        <div className="absolute -left-1/4 top-[10%] h-[520px] w-[160%] -rotate-6 bg-ink/[0.03]" />
        {/* corner stamp */}
        <div className="absolute right-[-120px] top-[-120px] h-[340px] w-[340px] rounded-full border border-ink/10" />
        <div className="absolute right-[-190px] top-[-190px] h-[520px] w-[520px] rounded-full border border-ink/10" />
      </div>

      {/* ─────────────────────────────────────────────
          TOP RAIL
      ───────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-[2px] border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#396041]" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.34em] uppercase text-ink/70">
              Ecodia Earth
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.26em] uppercase text-ink/45">
              Status: Active
            </span>
            <Link
              href="/"
              className="font-mono text-[10px] tracking-[0.26em] uppercase text-ink/60 hover:text-ink transition-colors"
            >
              Home →
            </Link>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────
          HERO: BIG STATEMENT
      ───────────────────────────────────────────── */}
      <section className="relative px-6 sm:px-8 pt-16 sm:pt-20 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] items-start">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[11px] tracking-[0.34em] uppercase text-ink/55">
                  ENTRY
                </span>
                <span className="h-px flex-1 bg-ink/10" />
                <span className="font-mono text-[11px] tracking-[0.34em] uppercase text-ink/35">
                  Field Brief
                </span>
              </div>

              <h1 className="font-display tracking-tighter leading-[0.86] text-ink">
                <span className="block text-[12vw] sm:text-[64px] lg:text-[86px]">
                  STEP INTO
                </span>
                <span className="block text-[12vw] sm:text-[64px] lg:text-[86px]">
                  THE WORK.
                </span>
              </h1>

              <div className="mt-8 inline-flex items-center gap-3 px-3 py-2 bg-ink text-white">
                <span className="font-mono text-[11px] tracking-[0.28em] uppercase">
                  The world we build next
                </span>
              </div>

              <p className="mt-10 max-w-3xl text-lg sm:text-xl leading-relaxed text-ink/75">
                Ecodia is a system for real-world sidequests—tangible actions that support local economies and add up to
                visible, shared progress.
              </p>

              <p className="mt-4 max-w-3xl text-base sm:text-lg text-ink/70">
                This page routes partners, backers, builders, and deployment sites to a clear next step.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="#doors"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-[#f4d35e] text-black border-2 border-black font-mono text-[12px] uppercase tracking-[0.22em] hover:translate-y-[-1px] transition-transform"
                >
                  Choose a role <span className="text-base">→</span>
                </Link>

                <Link
                  href="/company"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-white text-ink border-2 border-ink/20 font-mono text-[12px] uppercase tracking-[0.22em] hover:border-ink/40 transition-colors"
                >
                  Our architecture <span className="text-base">→</span>
                </Link>
              </div>
            </div>

            {/* RIGHT: PROCESS PANEL */}
            <div className="relative border-2 border-ink/15 bg-white">
              <div className="px-6 py-5 border-b border-ink/10 flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-ink/60">
                  Process
                </span>
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-ink/40">
                  Direct
                </span>
              </div>

              <div className="px-6 py-7 space-y-4 text-ink/80">
                <p className="text-base">
                  <span className="font-mono text-[11px] tracking-[0.24em] uppercase text-ink/45">01</span>{" "}
                  Choose your role.
                </p>
                <p className="text-base">
                  <span className="font-mono text-[11px] tracking-[0.24em] uppercase text-ink/45">02</span>{" "}
                  Outline what you bring.
                </p>
                <p className="text-base">
                  <span className="font-mono text-[11px] tracking-[0.24em] uppercase text-ink/45">03</span>{" "}
                  Receive the next step.
                </p>

                <div className="pt-4 mt-6 border-t border-ink/10">
                  <p className="text-ink font-medium">One message is enough.</p>
                  <p className="mt-2 text-sm text-ink/65">
                    State what you are, what you can provide, and the scale you’re aiming for.
                  </p>
                </div>
              </div>

              {/* corner marks */}
              <div className="absolute -top-2 -left-2 h-6 w-6 border-t-4 border-l-4 border-black" />
              <div className="absolute -bottom-2 -right-2 h-6 w-6 border-b-4 border-r-4 border-black" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          ORIENTATION: STRIP
      ───────────────────────────────────────────── */}
      <section className="relative bg-ink text-white px-6 sm:px-8 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[11px] tracking-[0.34em] uppercase text-white/70">
              Orientation
            </span>
            <span className="h-px flex-1 bg-white/15" />
          </div>

          <div className="grid gap-10 lg:grid-cols-3 items-start">
            <div className="lg:col-span-2">
              <p className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-tight">
                Care exists.
                <br />
                Mechanism is the missing layer.
              </p>

              <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed max-w-3xl">
                Most systems default to the path of least resistance. Better outcomes lose to friction.
                Ecodia reduces friction and makes progress visible: clear actions, light setup, shared signals.
              </p>
            </div>

            <div className="border border-white/15 bg-white/5">
              <div className="px-5 py-4 border-b border-white/10">
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/60">
                  Operating state
                </span>
              </div>
              <div className="px-5 py-6">
                <p className="text-white font-medium">Participation becomes the default state.</p>
                <p className="mt-2 text-sm text-white/70">
                  The system is designed for return, not performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CONTRIBUTION
      ───────────────────────────────────────────── */}
      <section className="relative bg-white px-6 sm:px-8 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <span className="font-mono text-[11px] tracking-[0.34em] uppercase text-ink/55">
                Contribution
              </span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tighter leading-[1.02]">
                The work runs on inputs.
              </h2>
            </div>

            <div className="space-y-5 text-ink/75 text-base sm:text-lg leading-relaxed">
              <p>
                Progress depends on practical effort: building the software, integrating it in live settings, and
                maintaining the operating conditions.
              </p>
              <p>Inputs include skills, partnerships, deployment sites, capacity, and capital.</p>
              <p className="text-ink font-medium">Choose the role that matches your contribution.</p>
            </div>
          </div>

          <div className="mt-12 border-2 border-ink/15">
            <div className="grid sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-ink/10">
              {[
                ["Clear", "Plain language. Direct signal."],
                ["Practical", "Work that ships. Field-ready outcomes."],
                ["Measured", "Progress that compounds. Visible over time."],
                ["Shared", "Mutual benefit. Collective outcome."],
              ].map(([a, b]) => (
                <div key={a} className="p-7">
                  <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink/70">
                    {a}
                  </p>
                  <p className="mt-3 text-base text-ink/85">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          DOORS (CTA)
      ───────────────────────────────────────────── */}
      <section id="doors" className="relative px-6 sm:px-8 py-24 sm:py-32 bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[11px] tracking-[0.34em] uppercase text-ink/55">
              Choose a role
            </span>
            <span className="h-px flex-1 bg-ink/10" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl tracking-tighter leading-[1.02] max-w-4xl">
            Choose how you enter.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DOORS.map((d) => (
              <Link
                key={d.label}
                href={d.href}
                className="group relative border-2 border-ink/15 bg-white p-8 transition-transform hover:translate-y-[-2px]"
              >
                {/* top label */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-display text-2xl tracking-tight text-ink">
                      {d.label}
                    </p>
                    <p className="mt-2 text-base text-ink/70 group-hover:text-ink transition-colors">
                      {d.sub}
                    </p>
                  </div>

                  <span className="font-mono text-[10px] tracking-[0.26em] uppercase text-ink/50 group-hover:text-ink transition-colors">
                    enter
                  </span>
                </div>

                <div className="mt-6 h-px w-full bg-ink/10" />

                {/* corner stamp */}
                <div className="absolute top-0 right-0 h-10 w-10 border-l-2 border-b-2 border-ink/10 group-hover:border-ink/25 transition-colors" />
                <div className="absolute bottom-0 left-0 h-10 w-10 border-r-2 border-t-2 border-ink/10 group-hover:border-ink/25 transition-colors" />
              </Link>
            ))}
          </div>

          <p className="mt-12 text-ink/70 text-base max-w-3xl">
            Send one message with your contribution. A focused next step will follow.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact?intent=partner"
              className="inline-flex items-center gap-3 px-6 py-4 bg-black text-white border-2 border-black font-mono text-[12px] uppercase tracking-[0.22em] hover:opacity-90 transition-opacity"
            >
              Propose a site <span className="text-base">→</span>
            </Link>
            <Link
              href="/contact?intent=invest"
              className="inline-flex items-center gap-3 px-6 py-4 bg-white text-ink border-2 border-ink/20 font-mono text-[12px] uppercase tracking-[0.22em] hover:border-ink/40 transition-colors"
            >
              Discuss backing <span className="text-base">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          END FRAME
      ───────────────────────────────────────────── */}
      <footer className="relative px-6 sm:px-8 py-16 sm:py-20 bg-white border-t border-ink/10">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-[10px] tracking-[0.34em] uppercase text-ink/45">
              End Frame
            </p>
            <p className="mt-4 font-display text-3xl sm:text-4xl tracking-tight text-ink">
              The world we build next.
            </p>
            <p className="mt-3 text-base text-ink/70 max-w-2xl">
              If you can move a real place forward, there’s a role for you here.
            </p>
          </div>

          <Link
            href="/contact?intent=walk"
            className="inline-flex items-center gap-3 px-6 py-4 bg-[#396041] text-white border-2 border-[#396041] font-mono text-[12px] uppercase tracking-[0.22em] hover:translate-y-[-1px] transition-transform"
          >
            Start the conversation <span className="text-base">→</span>
          </Link>
        </div>
      </footer>
    </main>
  );
}
