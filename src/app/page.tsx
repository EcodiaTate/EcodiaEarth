"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-xs font-semibold text-white/70 ring-1 ring-white/10">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Ecodia Earth · Early signal
        </div>

        <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
          Local eco loops, stitched into
          <span className="block text-emerald-300">something planetary.</span>
        </h1>

        <p className="mt-4 text-sm text-white/70 sm:text-base">
          Ecodia Earth is the long-term map. Right now we&apos;re starting small:
          one country, real stores, real sidequests, real payouts.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="https://ecodia.au"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-[#0C1411] shadow-lg shadow-emerald-500/30 hover:brightness-105 active:brightness-95"
          >
            Jump into Ecodia AU
          </Link>
          <span className="text-xs text-white/50">
            Global map loading in the background.
          </span>
        </div>
      </div>
    </main>
  );
}
