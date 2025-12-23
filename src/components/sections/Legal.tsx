"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Shield, Scale, Unlock, FileText } from "lucide-react";

/**
 * ECODIA LEGAL (PUBLIC RECORD)
 * Strategy: Systemic Audit. No Marketing.
 * Materiality: Warm Paper (#F9F8F5) | Charcoal Ink (#2D2B28)
 */

type Clause = {
  id: string;
  section: "PRIVACY" | "TERMS" | "OPEN";
  title: string;
  desc: string;
  trace: string;
  icon: React.ReactNode;
};

const LEGAL_CLAUSES: Clause[] = [
  {
    id: "01",
    section: "PRIVACY",
    title: "Data Minimisation",
    desc: "We collect the absolute minimum. System requirements guide data retention. Where possible, identifiers remain local to the participant node.",
    trace: "#7FD069", // Mint
    icon: <Shield size={16} />
  },
  {
    id: "02",
    section: "TERMS",
    title: "Good Faith Protocol",
    desc: "Ecodia is a shared architecture. Exploitation of the grid results in silent, consistent exclusion to protect systemic integrity.",
    trace: "#396041", // Forest
    icon: <Scale size={16} />
  },
  {
    id: "03",
    section: "OPEN",
    title: "Extension Rights",
    desc: "Patterns, code, and logic published here are meant for extension. You are authorized to learn from, fork, and maintain these residues.",
    trace: "#F4D35E", // Gold
    icon: <Unlock size={16} />
  },
];

export default function LegalSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Calibration drift
  const rulerY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]"
    >
      {/* 1. EXIT PROTOCOL */}
      <div className="fixed right-12 top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-3 border border-[#2D2B28] px-4 py-2 transition-all hover:bg-[#2D2B28] hover:text-[#F9F8F5]"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Exit</span>
        </button>
      </div>

      {/* 2. TOPOGRAPHIC GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute left-[12%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute top-[18%] left-0 w-full h-px bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-32">
        
        {/* HEADER: VISUAL MASS */}
        <header className="mb-48 space-y-12 border-b-4 border-[#2D2B28] pb-16">
          <div className="flex items-center gap-4">
            <FileText size={14} className="opacity-40" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
              Registry // Public_Record_v1.0
            </span>
          </div>

          <h1 className="text-6xl font-black leading-[0.8] tracking-tighter sm:text-8xl lg:text-9xl">
            LEGAL <br />
            <span className="italic font-light opacity-30 text-[#396041]">RESIDUE.</span>
          </h1>

          <p className="max-w-2xl text-2xl font-medium leading-tight tracking-tight opacity-70">
            Reader-first documentation of privacy, terms, and open-source licensing. 
            Built for clarity over posturing.
          </p>
        </header>

        {/* 3. CLAUSES: STRATA LIST */}
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
          
          {/* MAIN COLUMN */}
          <div className="lg:col-span-8 space-y-32">
            {LEGAL_CLAUSES.map((c) => (
              <motion.section
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative space-y-8"
              >
                <div className="flex items-center gap-6">
                  <div 
                    className="flex h-10 w-10 items-center justify-center border border-[#2D2B28] opacity-40 group-hover:opacity-100 transition-opacity"
                    style={{ color: c.trace }}
                  >
                    {c.icon}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
                    Section_{c.id} // {c.section}
                  </div>
                </div>

                <h2 className="text-4xl font-black tracking-tighter uppercase sm:text-5xl">
                  {c.title}
                </h2>
                
                <p className="text-xl leading-snug opacity-70 max-w-2xl">
                  {c.desc}
                </p>

                {/* ATOMIC CROP MARK */}
                <div 
                  className="h-1 w-12 transition-all group-hover:w-24" 
                  style={{ backgroundColor: c.trace }} 
                />
              </motion.section>
            ))}
          </div>

          {/* ASIDE: SYSTEM ENTITIES */}
          <aside className="lg:col-span-4 lg:pl-12">
            <div className="sticky top-32 space-y-16 border-l border-[#2D2B28]/10 pl-12">
              
              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Summary</h3>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest opacity-60">
                  <li className="flex items-center gap-3"><div className="h-1 w-1 bg-[#7FD069]" /> Privacy: Maximum.</li>
                  <li className="flex items-center gap-3"><div className="h-1 w-1 bg-[#396041]" /> Terms: Good Faith.</li>
                  <li className="flex items-center gap-3"><div className="h-1 w-1 bg-[#F4D35E]" /> Open: Extensible.</li>
                </ul>
              </div>

              <div className="space-y-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Entities</h3>
                <EntityBlock 
                  label="Operations"
                  name="Ecodia Pty Ltd"
                  meta={["Home: Australia", "Ref: Op_Co"]}
                />
                <EntityBlock 
                  label="Research"
                  name="Ecodia Labs Pty Ltd"
                  meta={["IP Holding", "Ref: R&D"]}
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Direct Signal</h3>
                <a 
                  href="mailto:legal@ecodia.earth"
                  className="inline-block border-2 border-[#2D2B28] px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-[#2D2B28] hover:text-[#F9F8F5] transition-colors"
                >
                  legal@ecodia.earth
                </a>
              </div>

            </div>
          </aside>
        </div>

        {/* FOOTER: CROP MARKS */}
        <footer className="mt-64 flex flex-col items-center justify-between border-t border-[#2D2B28]/10 pt-12 md:flex-row">
           <div className="text-[8px] uppercase tracking-[0.5em] opacity-30">// Public Record // Non-Marketing //</div>
           <div className="flex gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 w-[1px] bg-[#2D2B28]/20" />
              ))}
           </div>
           <div className="text-[8px] uppercase tracking-[0.5em] opacity-30">Archive_State: 2025</div>
        </footer>
      </div>
    </main>
  );
}

function EntityBlock({ label, name, meta }: { label: string, name: string, meta: string[] }) {
  return (
    <div className="space-y-2">
      <div className="text-[9px] font-black uppercase tracking-widest opacity-30">{label}</div>
      <div className="text-lg font-black uppercase tracking-tighter">{name}</div>
      {meta.map(m => (
        <div key={m} className="text-[9px] uppercase tracking-widest opacity-50">{m}</div>
      ))}
    </div>
  );
}