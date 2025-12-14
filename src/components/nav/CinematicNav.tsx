// src/components/nav/CinematicNav.tsx
"use client";

import { SmoothLink } from "@/components/nav/SmoothLink";

type NavItemProps = {
  href: string;
  label: string;
  title: string;
  color: "mint" | "amber" | "indigo";
};

export function CinematicNav({ items }: { items: NavItemProps[] }) {
  return (
    <nav className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-6 max-w-7xl mx-auto">
      {items.map((item, i) => (
        <NavCard key={item.title} {...item} index={i} />
      ))}
    </nav>
  );
}

function NavCard({ href, label, title, color, index }: NavItemProps & { index: number }) {
  
  // Light Mode Accents: Deep, rich colors for text/borders
  const theme = {
    mint: "group-hover:border-ink/30 group-hover:text-ink",
    amber:   "group-hover:border-gold/30 group-hover:text-gold",
    indigo:  "group-hover:border-indigo-600/30 group-hover:text-indigo-700",
  }[color];

  const bgHover = {
    mint: "group-hover:bg-mint",
    amber:   "group-hover:bg-gold",
    indigo:  "group-hover:bg-indigo-200",
  }[color];

  return (
    <SmoothLink
      href={href}
      className={`
        group relative w-full h-96 rounded-2xl overflow-hidden
        bg-white border border-border
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]
        ${theme}
      `}
    >
      {/* 1. BACKGROUND TINT (Subtle color wash on hover) */}
      <div className={`absolute inset-0 transition-colors duration-500 ${bgHover}`} />

      {/* 2. PAPER TEXTURE (Gives it that 'Field Guide' feel) */}
      <div className="absolute inset-0 opacity-[0.6] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-multiply" />

      {/* 3. CONTENT CONTAINER */}
      <div className="relative h-full flex flex-col justify-between p-10 z-10">
         
         {/* Top Row: Label & Number */}
         <div className="flex justify-between items-center border-b border-border pb-6 group-hover:border-border/0 transition-colors">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted group-hover:text-muted transition-colors">
               {label}
            </span>
            <span className="font-serif italic text-muted text-lg group-hover:text-muted transition-colors">
               0{index + 1}
            </span>
         </div>

         {/* Bottom Row: Title & Action */}
         <div>
            <h3 className="font-display text-4xl text-ink mb-6 leading-[0.95] group-hover:scale-[1.02] origin-left transition-transform duration-500">
               {title}
            </h3>
            
            <div className="flex items-center gap-3">
               <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-muted group-hover:text-muted group-hover:bg-white transition-all duration-300 shadow-sm">
                  →
               </span>
               <span className="font-mono text-[10px] uppercase tracking-widest text-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">
                  Open
               </span>
            </div>
         </div>

      </div>
    </SmoothLink>
  );
}