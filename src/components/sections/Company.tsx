export default function CompanySection() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="font-display text-4xl sm:text-5xl tracking-tight">Ecodia Pty Ltd</h1>
      <p className="mt-6 text-lg max-w-prose">
        The platform and community. We operate the app, build partnerships, and nurture the culture.
      </p>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="font-display text-2xl">Values</h2>
          <p className="mt-3 max-w-prose">Joyful action. Local first. Creator economy for good. Radical clarity.</p>
        </div>
        <div>
          <h2 className="font-display text-2xl">Governance</h2>
          <p className="mt-3 max-w-prose">Practical, transparent, and aligned with impact.</p>
        </div>
      </section>
    </main>
  );
}
