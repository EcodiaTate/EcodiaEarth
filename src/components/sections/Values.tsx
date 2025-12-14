// src/components/sections/ValuesSection.tsx
"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const PRINCIPLES = [
  {
    id: "01",
    title: "The Fortune of the Commons",
    text:
      "Shared spaces don’t have to degrade over time. That assumption only holds in worlds that reward extraction. Here, participation strengthens what’s shared. Caring for the commons isn’t self-sacrifice. It’s how value circulates.",
    gradient: "from-mint via-mint to-indigo-400",
  },
  {
    id: "02",
    title: "Design Over Discipline",
    text:
      "This world doesn’t rely on people trying harder or caring more. It’s shaped so positive action fits into everyday life. When the design works, discipline fades into the background.",
    gradient: "from-mint via-mint to-mint",
  },
  {
    id: "03",
    title: "Action Beats Optics",
    text:
      "Visibility isn’t the same as impact. Progress here accumulates quietly through what gets done, not what gets signalled. Participation matters. Performance is optional.",
    gradient: "from-gold via-orange-400 to-red-400",
  },
  {
    id: "04",
    title: "Small Is Not Trivial",
    text:
      "Not every meaningful action needs to be dramatic. Small, repeatable behaviours - when shared - shape places over time. This world stays playable because it’s approachable.",
    gradient: "from-mint via-mint to-mint",
  },
  {
    id: "05",
    title: "Mutual Benefit",
    text:
      "Systems built on sacrifice don’t last. Systems built on extraction don’t either. Here, personal benefit and shared good reinforce one another, so participation can continue without burnout.",
    gradient: "from-mint via-mint to-indigo-400",
  },
  {
    id: "06",
    title: "Local Is Foundational",
    text:
      "Change is easiest to recognise where people already live. Neighbourhoods, local places, and nearby economies ground participation in something tangible.",
    gradient: "from-gold via-orange-400 to-red-400",
  },
  {
    id: "07",
    title: "Play Is Serious",
    text:
      "Play isn’t a distraction from impact. It’s how people sustain effort, learn patterns, and return over time. This world is designed to be entered, explored, and revisited.",
    gradient: "from-mint via-mint to-mint",
  },
];

export default function ValuesSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen py-32 bg-white text-ink eco-section-wrapper"
    >
      {/* CLOSE BUTTON */}
      <motion.button
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        onClick={() => router.back()}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-50 group"
        aria-label="Close"
      >
        <div className="eco-ui-element relative flex items-center justify-center w-14 h-14 rounded-full bg-white/90 backdrop-blur-xl border border-black/10 shadow-lg group-hover:border-black transition-all duration-300 active:scale-95">
          <div className="relative w-5 h-5">
            <span className="absolute top-1/2 left-0 w-full h-[2px] bg-black group-hover:bg-black rotate-45 transition-colors duration-300 eco-accent-bg" />
            <span className="absolute top-1/2 left-0 w-full h-[2px] bg-black group-hover:bg-black -rotate-45 transition-colors duration-300 eco-accent-bg" />
          </div>
        </div>
      </motion.button>

      {/* BACKGROUND NOISE */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 mix-blend-multiply eco-hidden" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <header className="mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-ink/40 block mb-6 eco-accent-text">
            Document_Ref: FIELD_NOTES
          </span>

          <h1 className="font-display text-7xl md:text-[10vw] leading-[0.8] tracking-tighter text-ink mb-8 eco-text-bright">
            HOW THIS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#396041] to-black">
              WORLD WORKS.
            </span>
          </h1>

          <p className="max-w-xl text-lg text-ink/60 leading-relaxed">
            These aren’t rules or ideals. They’re recurring patterns you’ll notice as you spend time
            here.
          </p>
        </header>

        {/* ARTICLES LIST */}
        <div className="flex flex-col">
          {PRINCIPLES.map((p, i) => (
            <PrincipleRow key={p.id} data={p} index={i} />
          ))}
        </div>

        {/* SIGNATURE */}
        <div className="mt-24 pt-12 border-t-4 border-black flex justify-between items-end eco-ui-element">
          <div className="font-mono text-xs uppercase tracking-widest text-ink/40 eco-accent-text">
            Written as we build
            <br />
            And revised as we learn
          </div>
          <div className="font-display text-4xl text-ink eco-text-bright">Ecodia.</div>
        </div>
      </div>

      <style jsx global>{`
        .eco-mode .eco-section-wrapper {
          background-color: #000000 !important;
          color: #fff !important;
        }
        .eco-mode .eco-ui-element {
          border-color: #fff !important;
          background: transparent !important;
        }
        .eco-mode .eco-text-bright {
          color: #ffffff !important;
        }
        .eco-mode .eco-accent-text {
          color: #ccc !important;
        }
        .eco-mode .eco-accent-bg {
          background-color: #fff !important;
        }
        .eco-mode .eco-hidden {
          display: none !important;
        }
      `}</style>
    </section>
  );
}

function PrincipleRow({ data, index }: { data: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group border-b-2 border-black/10 eco-ui-element"
    >
      {/* Ambient Light Leak */}
      <div
        className={`
          absolute top-0 left-0 w-full h-[3px]
          bg-gradient-to-r ${data.gradient} opacity-50 eco-hidden
        `}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 md:py-16">
        {/* COLUMN 1: INDEX */}
        <div className="md:col-span-2 flex items-center">
          <span className="font-display text-7xl md:text-8xl leading-none text-black/5 eco-text-bright opacity-30 select-none">
            0{index + 1}
          </span>
        </div>

        {/* COLUMN 2: TITLE */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink eco-text-bright">
            {data.title}
          </h2>
        </div>

        {/* COLUMN 3: TEXT */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <p className="font-serif text-lg md:text-xl leading-relaxed text-ink/80 eco-text-bright opacity-80">
            {data.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
