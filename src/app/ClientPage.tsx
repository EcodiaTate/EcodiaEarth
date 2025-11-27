"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-black/30 px-6 py-10 text-center shadow-[0_28px_80px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/6 px-4 py-1 text-[11px] font-medium text-white/70 ring-1 ring-white/15">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" />
          Ecodia Earth
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          This is the big map.
          <span className="block text-emerald-300">
            Right now we&apos;re testing one corner.
          </span>
        </h1>

        <div className="mt-8 flex justify-center">
          <Link
            href="https://ecodia.au"
            className="inline-flex items-center rounded-full border border-white/35 px-6 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:border-white hover:bg-white/5 active:bg-white/10"
          >
            Go to Ecodia AU
          </Link>
        </div>
      </div>
    </main>
  );
}
