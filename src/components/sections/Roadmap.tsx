const milestones = [
  { when: "2023–24", what: "Prototype & Sidequests in the wild" },
  { when: "2025",    what: "VRR engine, Impact feed, Labs IP filings" },
  { when: "2026",    what: "Local partner network & education modes" },
];

export default function RoadmapSection() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="font-display text-4xl sm:text-5xl tracking-tight">Roadmap</h1>
      <p className="mt-6 text-lg max-w-prose">We build steadily, in the open.</p>

      <section className="mt-12">
        <div className="relative">
          <div className="h-px bg-border w-full" />
          <ul className="mt-8 grid gap-10 md:grid-cols-3">
            {milestones.map((m) => (
              <li key={m.when}>
                <p className="font-display text-xl">{m.when}</p>
                <p className="mt-2 max-w-prose">{m.what}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
