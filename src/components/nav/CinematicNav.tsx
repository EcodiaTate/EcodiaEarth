// src/components/nav/CinematicNav.tsx
"use client";

import { SmoothLink } from "@/components/nav/SmoothLink";

type NavItemProps = {
  href: string;
  label: string; // The small "technical" text (e.g. "01 — FUTURE")
  title: string; // The main text (e.g. "The Roadmap")
  color: "emerald" | "amber" | "indigo";
};

export function CinematicNav({ items }: { items: NavItemProps[] }) {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
      {items.map((item) => (
        <NavBeacon key={item.title} {...item} />
      ))}
    </nav>
  );
}

function NavBeacon({ href, label, title, color }: NavItemProps) {
  // Map our "souls" to Tailwind classes
  const colors = {
    emerald: "hover:text-emerald-700 hover:border-emerald-300/50 decoration-emerald-300",
    amber: "hover:text-amber-700 hover:border-amber-300/50 decoration-amber-300",
    indigo: "hover:text-indigo-700 hover:border-indigo-300/50 decoration-indigo-300",
  };

  const monoColors = {
    emerald: "text-emerald-600/60",
    amber: "text-amber-600/60",
    indigo: "text-indigo-600/60",
  };

  return (
    <SmoothLink
      href={href}
      className={`
        group relative flex flex-col items-start p-4 
        w-full md:w-64 rounded-xl
        border border-transparent hover:border-stone-200/60 hover:bg-white/40
        transition-all duration-500 ease-out
        ${colors[color]}
      `}
    >
      {/* 1. The "Technical" Label (Monospace) */}
      <span className={`text-[10px] font-mono tracking-widest uppercase mb-2 transition-colors ${monoColors[color]}`}>
        {label}
      </span>

      {/* 2. The Main Title (Display Serif) */}
      <span className="font-display text-2xl text-slate-800 group-hover:text-inherit transition-colors">
        {title}
      </span>

      {/* 3. The "Cinema" Arrow 
          It slides in from the left when you interact.
      */}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-xl">
        →
      </span>
    </SmoothLink>
  );
}