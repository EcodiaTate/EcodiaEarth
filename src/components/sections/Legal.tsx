"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Shield, Scale, Unlock, FileText } from "lucide-react";

const ECODIA_BEZIER = [0.19, 1, 0.22, 1] as const;

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
    desc: "We collect the minimum. Identifiers stay local to the participant. Retention follows function, not appetite.",
    trace: "#7FD069",
    icon: <Shield size={20} strokeWidth={1.5} />,
  },
  {
    id: "02",
    section: "TERMS",
    title: "Good Faith Protocol",
    desc: "Ecodia is shared architecture. Exploitation triggers quiet, consistent removal to protect the whole.",
    trace: "#396041",
    icon: <Scale size={20} strokeWidth={1.5} />,
  },
  {
    id: "03",
    section: "OPEN",
    title: "Extension Rights",
    desc: "Patterns, code, and logic are published to extend. You may learn from, fork, amend, and maintain these residues.",
    trace: "#F4D35E",
    icon: <Unlock size={20} strokeWidth={1.5} />,
  },
];

export default function LegalSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]"
    >
      {/* Exit */}
      <div className="fixed right-[8%] top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-4 border-b border-[#2D2B28] pb-1 transition-all"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform duration-700" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back</span>
        </button>
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute top-[12%] left-0 w-full h-px bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 pl-[8%] pr-[15%] py-32">
        {/* Header */}
        <header className="mb-64 space-y-16 border-b-8 border-[#2D2B28] pb-24">
          <div className="flex items-center gap-4">
            <FileText size={18} className="opacity-40" />
            <span className="text-[11px] font-black uppercase tracking-[0.6em] opacity-40">
              Registry // Public_Record_v1.0
            </span>
          </div>

          <h1 className="text-[8rem] font-black leading-[0.75] tracking-tighter sm:text-[10rem] lg:text-[13rem]">
            LEGAL <br />
            <span className="italic font-light opacity-10 text-[#396041]">RESIDUE.</span>
          </h1>

          <p className="max-w-3xl text-3xl font-medium leading-tight tracking-tighter opacity-80 border-l border-[#2D2B28] pl-12">
            Reader-first terms for privacy, use, and open publication. Clarity over posture.
          </p>
        </header>

        {/* Clauses */}
        <div className="grid grid-cols-1 gap-48 lg:grid-cols-12">
          {/* Main */}
          <div className="lg:col-span-8 space-y-64">
            {LEGAL_CLAUSES.map((c) => (
              <motion.section
                key={c.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: ECODIA_BEZIER }}
                viewport={{ once: true }}
                className="group relative space-y-12"
              >
                <div className="flex items-center gap-8">
                  <div
                    className="flex h-12 w-12 items-center justify-center border border-[#2D2B28] opacity-20 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ color: c.trace }}
                  >
                    {c.icon}
                  </div>
                  <div className="text-[11px] font-black uppercase tracking-[0.5em] opacity-30 group-hover:opacity-100 duration-700">
                    Section_{c.id} // {c.section}
                  </div>
                </div>

                <h2 className="text-7xl font-black tracking-tighter uppercase sm:text-8xl leading-none">
                  {c.title}
                </h2>

                <p className="text-2xl font-medium leading-tight opacity-70 max-w-2xl border-l border-[#2D2B28]/20 pl-12">
                  {c.desc}
                </p>

                <div className="h-2 w-16 transition-all duration-700 group-hover:w-48" style={{ backgroundColor: c.trace }} />
              </motion.section>
            ))}
          </div>

          {/* Aside */}
          <aside className="lg:col-span-4 lg:pl-24">
            <div className="sticky top-48 space-y-24 border-l border-[#2D2B28]/10 pl-16">
              <div className="space-y-10">
                <h3 className="text-[11px] font-black uppercase tracking-[0.6em] opacity-30 italic">Registry_Summary</h3>
                <ul className="space-y-6 text-xs font-black uppercase tracking-[0.4em] opacity-60">
                  <li className="flex items-center gap-4 group hover:text-[#7FD069] transition-colors">
                    <div className="h-2 w-2 bg-[#7FD069]" /> Privacy: Maximum.
                  </li>
                  <li className="flex items-center gap-4 group hover:text-[#396041] transition-colors">
                    <div className="h-2 w-2 bg-[#396041]" /> Terms: Good_Faith.
                  </li>
                  <li className="flex items-center gap-4 group hover:text-[#F4D35E] transition-colors">
                    <div className="h-2 w-2 bg-[#F4D35E]" /> Open: Extensible.
                  </li>
                </ul>
              </div>

              <div className="space-y-12">
                <h3 className="text-[11px] font-black uppercase tracking-[0.6em] opacity-30 italic">System_Entities</h3>
                <EntityBlock label="Operations" name="Ecodia Pty Ltd" meta={["Home: Australia", "Ref: Op_Co"]} />
                <EntityBlock label="Research" name="Ecodia Labs Pty Ltd" meta={["IP Holding", "Ref: R&D"]} />
              </div>

              <div className="space-y-8 pt-12">
                <h3 className="text-[11px] font-black uppercase tracking-[0.6em] opacity-30">Direct_Signal</h3>
                <a
                  href="mailto:legal@ecodia.earth"
                  className="group relative inline-block border-2 border-[#2D2B28] px-8 py-6 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#2D2B28] hover:text-[#F9F8F5] transition-all duration-700"
                >
                  legal@ecodia.earth
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-96 flex flex-col md:flex-row items-end justify-between border-t border-[#2D2B28]/10 pt-16 opacity-30">
          <div className="text-[9px] uppercase tracking-[0.8em] font-black italic">Public_Registry_Record_v1.0</div>
          <div className="flex gap-1 my-12 md:my-0">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-8 w-px bg-[#2D2B28]" />
            ))}
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.8em]">Archive_State_2025</div>
        </footer>
      </div>
    </main>
  );
}

function EntityBlock({ label, name, meta }: { label: string; name: string; meta: string[] }) {
  return (
    <div className="space-y-3 group">
      <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-20 group-hover:opacity-100 transition-opacity duration-700">
        {label}
      </div>
      <div className="text-2xl font-black uppercase tracking-tighter leading-none">{name}</div>
      {meta.map((m) => (
        <div key={m} className="text-[10px] font-medium uppercase tracking-[0.3em] opacity-40">
          {m}
        </div>
      ))}
    </div>
  );
}
