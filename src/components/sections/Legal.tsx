export default function LegalSection() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-4xl sm:text-5xl tracking-tight">Legal</h1>
      <section className="mt-8 space-y-10">
        <div>
          <h2 className="font-display text-2xl">Privacy</h2>
          <p className="mt-3 max-w-prose">We minimise data, respect consent, and design for user safety.</p>
        </div>
        <div>
          <h2 className="font-display text-2xl">Terms</h2>
          <p className="mt-3 max-w-prose">Simple, fair, and focused on protecting the commons.</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>ABN details for Ecodia Pty Ltd and Ecodia Labs Pty Ltd to be listed here.</p>
        </div>
      </section>
    </main>
  );
}
