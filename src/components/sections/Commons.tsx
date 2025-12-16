/**
 * Ecodia Earth — Field Entry
 *
 * A doorway into the work.
 */

const DOORS = [
  {
    label: "Walk with us",
    sub: "Talk through alignment and direction.",
    href: "/contact?intent=walk",
  },
  {
    label: "Build",
    sub: "Product, design, engineering, operations.",
    href: "/contact?intent=build",
  },
  {
    label: "Deploy",
    sub: "Schools, councils, communities, institutions.",
    href: "/contact?intent=deploy",
  },
  {
    label: "Observe",
    sub: "Follow the work as it unfolds.",
    href: "/contact?intent=observe",
  },
];

export default function CommonsPage() {
  return (
    <main className="relative w-full overflow-hidden bg-white text-ink">
      {/* ───────────────────────────────────────────────────────────── */}
      {/* TOP RAIL */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[10px] w-[10px] rounded-full bg-forest" />
              <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-ink/60">
                Ecodia Earth
              </p>
            </div>

            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink/45">
              Status: active
            </p>
          </div>
        </div>
        <div className="h-px w-full bg-ink/10" />
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* HERO */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative px-6 pt-20 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 sm:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <p className="font-mono text-[11px] tracking-[0.32em] uppercase text-ink/50 mb-6">
                Entry
              </p>

              <h1 className="font-display text-[12vw] sm:text-[6.8vw] leading-[0.9] tracking-tight">
                Work with us.
              </h1>

              <h2 className="mt-8 font-display text-[6.8vw] sm:text-[3.8vw] leading-[1] tracking-tight text-forest">
                The world we build next.
              </h2>

              <p className="mt-10 max-w-2xl text-xl text-ink/70">
                Ecodia turns real-world impact into sidequests —
                small actions that improve places, support local businesses,
                and accumulate into visible progress.
              </p>

              <p className="mt-8 max-w-2xl text-lg text-ink/70">
                This page exists for people who want to participate in building
                that world — practically, directly, and over time.
              </p>
            </div>

            {/* Right column: system card */}
            <div className="border border-ink/15 bg-white">
              <div className="px-5 py-5">
                <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-ink/50">
                  How this works
                </p>
              </div>
              <div className="h-px w-full bg-ink/10" />
              <div className="px-5 py-6 space-y-4 text-sm text-ink/70">
                <p>You choose a way in.</p>
                <p>You state what you want to contribute.</p>
                <p>We respond with the relevant next step.</p>
                <p className="pt-2 text-ink">
                  Clear and direct.
                </p>
              </div>
              <div className="h-px w-full bg-ink/10" />
              <div className="px-5 py-5">
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink/45">
                  One message is enough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* ORIENTATION */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 flex items-center gap-4">
            <p className="font-mono text-[11px] tracking-[0.32em] uppercase text-ink/50">
              Orientation
            </p>
            <div className="h-px flex-1 bg-ink/10" />
          </div>

          <div className="space-y-9 text-lg text-ink/75">
            <p>
              Most people already care.
              What’s missing is structure.
            </p>

            <p>
              The easiest option is often the least useful.
              The better option usually takes more effort to find or sustain.
            </p>

            <p>
              Ecodia is designed to change that:
              clear actions, low setup cost, and shared visibility of progress.
            </p>

            <p className="text-ink">
              Doing good becomes part of how things work.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* SUPPORT */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#F7FAF8] px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] tracking-[0.32em] uppercase text-ink/50 mb-6">
                Participation
              </p>
              <h2 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.02]">
                Bring something real.
              </h2>
            </div>

            <div className="space-y-8 text-lg text-ink/75">
              <p>
                The work moves forward through practical contribution:
                building the product, deploying it in real places,
                and supporting the conditions it needs to operate well.
              </p>

              <p>
                That includes skills, partnerships, sites, capital,
                or operational capacity.
              </p>

              <p className="text-ink">
                Choose the role that matches how you work.
              </p>
            </div>
          </div>

          <div className="mt-16 border border-ink/15 bg-white">
            <div className="grid sm:grid-cols-4">
              {[
                ["Clear", "Plain language."],
                ["Practical", "Work that ships."],
                ["Measured", "Progress you can see."],
                ["Shared", "Benefits that compound."],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="border-b sm:border-b-0 sm:border-r border-ink/10 p-6"
                >
                  <p className="font-mono text-[12px] tracking-[0.24em] uppercase text-ink/60">
                    {a}
                  </p>
                  <p className="mt-3 text-base text-ink/70">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* DOORS */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-ink text-white px-6 py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-4">
            <p className="font-mono text-[11px] tracking-[0.32em] uppercase text-white/60">
              Choose a role
            </p>
            <div className="h-px flex-1 bg-white/15" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
            Decide how you want to participate.
          </h2>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {DOORS.map((d) => (
              <a
                key={d.label}
                href={d.href}
                className="group border border-white/15 bg-white/5 hover:bg-white/10 transition p-7"
              >
                <div className="flex items-center justify-between gap-6">
                  <p className="font-display text-2xl tracking-tight">
                    {d.label}
                  </p>
                  <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-white/55">
                    enter
                  </p>
                </div>
                <p className="mt-3 text-base text-white/70">{d.sub}</p>
                <div className="mt-6 h-px w-full bg-white/10 group-hover:bg-white/20 transition" />
              </a>
            ))}
          </div>

          <p className="mt-12 text-white/60 text-base max-w-3xl">
            Say what you want to contribute and why.
            We’ll respond directly.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* FINAL */}
      {/* ───────────────────────────────────────────────────────────── */}
      <footer className="px-6 py-24 text-center bg-white">
        <p className="font-mono text-[11px] tracking-[0.32em] uppercase text-ink/45 mb-6">
          End
        </p>

        <p className="font-display text-2xl sm:text-3xl tracking-tight text-ink/80">
          The world we build next
        </p>

        <p className="mt-6 text-base text-ink/60 max-w-2xl mx-auto">
          You’re welcome here.
        </p>
      </footer>
    </main>
  );
}
