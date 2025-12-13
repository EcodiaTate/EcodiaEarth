export default function ContactSection() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-4xl sm:text-5xl tracking-tight">Get in contact</h1>
      <p className="mt-6 text-lg max-w-prose">Partners, creators, local businesses, investors — say hello.</p>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="font-display text-2xl">Email</h2>
          <p className="mt-3">
            <a className="underline" href="mailto:hello@ecodia.earth">hello@ecodia.earth</a>
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl">Social</h2>
          <p className="mt-3">Links coming soon.</p>
        </div>
      </section>
    </main>
  );
}
