"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Download,
  Copy,
  Check,
  FileText,
  Camera,
  Type,
  Phone,
  Mail,
  CheckSquare,
  Square,
  Link as LinkIcon,
} from "lucide-react";

/**
 * ECODIA PRESS REGISTRY
 * Strategy: Public assets and approved copy, minimal friction for media.
 * Accessibility: Keyboard-focusable controls, labels, roles, visible focus rings.
 */

const ECODIA_BEZIER = [0.19, 1, 0.22, 1] as const;

// ─────────────────────────────────────────────────────────────
// Brand assets (update hrefs to match your files in /public/img/*)
// ─────────────────────────────────────────────────────────────
type AssetFile = { label: string; href: string; download?: boolean };
type Asset = {
  id: string;
  type: string;
  title: string;
  format: string;
  size?: string;
  icon: React.ReactNode;
  files: AssetFile[]; // multiple files per asset for easy, granular grabs
};

const ASSETS: Asset[] = [
  {
    id: "LOG_01",
    type: "LOGO",
    title: "Leaf - Primary Mark",
    format: "SVG / PNG",
    size: "≈ 12KB",
    icon: <img src="/icons/leaf-black.svg" alt="" className="w-8 h-8 opacity-80" />,
    files: [
      { label: "SVG", href: "/img/brand/ecodia-leaf.svg", download: true },
      { label: "PNG", href: "/img/brand/ecodia-leaf.png", download: true },
    ],
  },
  {
    id: "LOG_02",
    type: "WORDMARK",
    title: "Ecodia - Wordmark",
    format: "SVG / PNG",
    size: "≈ 18KB",
    icon: <span className="font-black text-xl tracking-tighter uppercase">Ecodia</span>,
    files: [
      { label: "SVG", href: "/img/brand/ecodia-wordmark.svg", download: true },
      { label: "PNG", href: "/img/brand/ecodia-wordmark.png", download: true },
    ],
  },
  {
    id: "LOG_03",
    type: "LOCKUP",
    title: "Leaf + Wordmark - Horizontal",
    format: "SVG / PNG",
    size: "≈ 22KB",
    icon: <span className="font-black text-sm tracking-tighter uppercase">Lockup</span>,
    files: [
      { label: "SVG", href: "/img/brand/ecodia-lockup-horizontal.svg", download: true },
      { label: "PNG", href: "/img/brand/ecodia-lockup-horizontal.png", download: true },
    ],
  },
  {
    id: "LOG_04",
    type: "LOCKUP",
    title: "Leaf + Wordmark - Vertical",
    format: "SVG / PNG",
    size: "≈ 22KB",
    icon: <span className="font-black text-sm tracking-tighter uppercase">Lockup</span>,
    files: [
      { label: "SVG", href: "/img/brand/ecodia-lockup-vertical.svg", download: true },
      { label: "PNG", href: "/img/brand/ecodia-lockup-vertical.png", download: true },
    ],
  },
  {
    id: "FNT_01",
    type: "TYPEFACE",
    title: "System Mono (Fallback Pack)",
    format: "WOFF2",
    size: "≈ 45KB",
    icon: <Type size={20} strokeWidth={1.5} />,
    files: [{ label: "WOFF2", href: "/img/brand/system-mono.woff2", download: true }],
  },
  {
    id: "CLR_01",
    type: "PALETTE",
    title: "Brand Colors",
    format: "ASE / JSON",
    size: "≈ 6KB",
    icon: <span className="font-black text-xs tracking-widest">RGB/HEX</span>,
    files: [
      { label: "ASE", href: "/img/brand/ecodia-palette.ase", download: true },
      { label: "JSON", href: "/img/brand/ecodia-palette.json", download: true },
    ],
  },
  {
    id: "IMG_01",
    type: "PHOTOGRAPHY",
    title: "Press Photography Selects",
    format: "ZIP (JPG)",
    size: "≈ 142MB",
    icon: <Camera size={20} strokeWidth={1.5} />,
    files: [{ label: "ZIP", href: "/img/press/ecodia-press-photos.zip", download: true }],
  },
];

// ─────────────────────────────────────────────────────────────
// Copy (calm + concrete)
// ─────────────────────────────────────────────────────────────
const COPY = {
  oneLiner: "Ecodia turns real-world actions into sidequests you can see and share.",
  short:
    "Ecodia makes small, useful actions easy to start and easy to repeat. People complete sidequests, earn local rewards, and leave a visible trace in their place.",
  long:
    "Ecodia is a practical way to take part in local life.\n\nWe organise everyday actions as sidequests - small, specific tasks that improve shared spaces. The system keeps things lightweight: clear steps, simple proof, and local rewards that circulate close to where the action happens.\n\nIt’s not about attention. It’s about building habits that last and making the results visible.",
  usage:
    "Say “sidequests” for the unit of action.\nKeep tone: clear, unhurried, specific.\nAvoid moralising, urgency language, and mission-speak.\nPrefer examples and concrete nouns over slogans.",
};

// ─────────────────────────────────────────────────────────────
// Contacts (edit numbers/emails before deploy)
// ─────────────────────────────────────────────────────────────
const CONTACTS = [
  { name: "Tate", role: "Founder", phone: "+61 4XX XXX XXX", email: "press@ecodia.au" },
  { name: "Media Desk", role: "Press Enquiries", phone: "+61 7XX XXX XXX", email: "media@ecodia.au" },
];

export default function PressSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  // Selection tray for multi-download (accessible, no ZIP required)
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const selectedAssets = ASSETS.filter((a) => selected[a.id]);

  const toggleSelect = (id: string) =>
    setSelected((s) => ({ ...s, [id]: !s[id] }));

  const downloadMany = (files: AssetFile[]) => {
    files.forEach((f) => {
      const a = document.createElement("a");
      a.href = f.href;
      if (f.download) a.setAttribute("download", "");
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
  };

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]"
    >
      {/* Exit */}
      <div className="fixed right-[8%] top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-4 border-b border-[#2D2B28] pb-1 transition-all focus:outline-none focus:ring-2 focus:ring-[#7FD069]"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform duration-700" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back</span>
        </button>
      </div>

      {/* Grid rails */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute top-[12%] left-0 w-full h-px bg-[#2D2B28]" />
        <div className="absolute right-[15%] top-0 h-full w-px bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 pl-[8%] pr-[15%] py-32">
        {/* Header */}
        <header className="mb-64 space-y-16 border-b-8 border-[#2D2B28] pb-24">
          <div className="flex items-center gap-4">
            <FileText size={18} className="opacity-40" />
            <span className="text-[11px] font-black uppercase tracking-[0.6em] opacity-40">
              Media registry // Public assets
            </span>
          </div>

          {/* Extra visual gap between PRESS and KIT */}
          <h1 className="text-[9rem] font-black leading-[0.75] tracking-tighter sm:text-[11rem] lg:text-[14rem]">
            <span>PRESS</span>
            <span className="block mt-8 text-[#396041] opacity-20">KIT</span>
          </h1>

          <p className="max-w-3xl text-3xl font-medium leading-tight tracking-tighter opacity-80 border-l border-[#2D2B28] pl-12">
            Everything here is cleared for media use. Grab files individually, select a few, or take the full kit.
          </p>

          {/* Actions: Download Selected + Download All (optional) */}
          <div className="flex flex-wrap gap-8 pt-6">
            <button
              type="button"
              onClick={() => downloadMany(selectedAssets.flatMap((a) => a.files))}
              disabled={selectedAssets.length === 0}
              className="inline-flex items-center gap-4 bg-[#2D2B28] text-[#F9F8F5] px-8 py-5 text-[11px] font-black uppercase tracking-[0.5em] transition-colors hover:bg-[#396041] disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#7FD069]"
              aria-disabled={selectedAssets.length === 0}
            >
              Download Selected <Download size={18} />
            </button>

            {/* Keep "Download All" as an option if you provide a ZIP */}
            <a
              href="/img/press/ecodia-press-kit.zip"
              className="inline-flex items-center gap-4 border border-[#2D2B28] px-8 py-5 text-[11px] font-black uppercase tracking-[0.5em] hover:bg-[#2D2B28] hover:text-[#F9F8F5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7FD069]"
            >
              Download All <Download size={18} />
            </a>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-48 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-7 space-y-32">
            <SectionLabel>Section 01 // Copy</SectionLabel>
            <CopyBlock title="One line" text={COPY.oneLiner} />
            <CopyBlock title="Short" text={COPY.short} />
            <CopyBlock title="Long" text={COPY.long} isMultiline />
            <CopyBlock title="Usage" text={COPY.usage} isMultiline isSubtle />
          </div>

          {/* Assets */}
          <aside className="lg:col-span-5">
            <div className="sticky top-48 space-y-16 lg:pl-24 border-l border-[#2D2B28]/10">
              <SectionLabel>Section 02 // Assets</SectionLabel>

              {/* Asset list (accessible) */}
              <div role="list" aria-label="Press assets" className="space-y-2 border border-[#2D2B28]">
                {ASSETS.map((asset, i) => (
                  <AssetRow
                    key={asset.id}
                    data={asset}
                    index={i}
                    checked={!!selected[asset.id]}
                    onToggle={() => toggleSelect(asset.id)}
                    onCopyLinks={() => copyToClipboard(asset.files.map((f) => location.origin + f.href).join("\n"))}
                  />
                ))}
              </div>

              {/* Palette */}
              <div className="pt-16 space-y-8">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] opacity-30">
                  Palette
                </h3>
                <div className="grid grid-cols-6 gap-4">
                  <Swatch color="#396041" label="Forest" />
                  <Swatch color="#F4D35E" label="Gold" />
                  <Swatch color="#7FD069" label="Mint" />
                  <Swatch color="#2D4A33" label="Deep Moss" />
                  <Swatch color="#F9F8F5" label="Paper" border />
                  <Swatch color="#2D2B28" label="Ink" />
                </div>
              </div>

              {/* Contacts */}
              <div className="pt-16 space-y-6">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] opacity-30">
                  Contacts
                </h3>
                <div className="space-y-4">
                  {CONTACTS.map((c, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="text-sm font-black tracking-tight">{c.name}</div>
                      <div className="text-[10px] uppercase tracking-[0.25em] opacity-50">{c.role}</div>
                      <div className="mt-2 flex flex-wrap items-center gap-6 text-sm">
                        <a
                          href={`tel:${c.phone.replace(/\s/g, "")}`}
                          className="inline-flex items-center gap-2 border-b border-[#2D2B28]/40 pb-0.5 hover:border-[#2D2B28] focus:outline-none focus:ring-2 focus:ring-[#7FD069]"
                        >
                          <Phone size={14} /> {c.phone}
                        </a>
                        <a
                          href={`mailto:${c.email}`}
                          className="inline-flex items-center gap-2 border-b border-[#2D2B28]/40 pb-0.5 hover:border-[#2D2B28] focus:outline-none focus:ring-2 focus:ring-[#7FD069]"
                        >
                          <Mail size={14} /> {c.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Request brief */}
              <div className="pt-16">
                <a
                  href="mailto:press@ecodia.au"
                  className="flex items-center justify-between w-full bg-[#2D2B28] p-10 text-[11px] font-black uppercase tracking-[0.5em] text-[#F9F8F5] transition-all hover:bg-[#396041] focus:outline-none focus:ring-2 focus:ring-[#7FD069]"
                >
                  Request brief <Download size={20} />
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-96 flex flex-col md:flex-row items-end justify-between border-t border-[#2D2B28]/10 pt-16 opacity-30">
          <div className="text-[10px] font-black uppercase tracking-[0.8em] italic">
            Ecodia press // 2026
          </div>
          <div className="flex gap-1 my-12 md:my-0" aria-hidden>
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-px w-6 bg-[#2D2B28]" />
            ))}
          </div>
          <div className="text-[10px] uppercase tracking-[0.8em]">Sunshine Coast // AU</div>
        </footer>
      </div>
    </main>
  );
}

// ─────────────────────────────────────────────────────────────
// Bits
// ─────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-black uppercase tracking-[0.6em] opacity-30 italic mb-12">
      {children}
    </div>
  );
}

function CopyBlock({ title, text, isMultiline = false, isSubtle = false }: any) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`group relative transition-all duration-700 ${isSubtle ? "opacity-40" : ""}`}>
      <div className="mb-6 flex items-baseline gap-6">
        <span className="text-[11px] font-black uppercase tracking-[0.4em] opacity-20 group-hover:opacity-100 transition-opacity">
          [{title}]
        </span>
        <button
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-40 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#7FD069]"
          aria-label={`Copy ${title}`}
        >
          {copied ? <Check size={14} className="text-[#7FD069]" /> : <Copy size={14} />}
        </button>
      </div>

      <p
        className={`tracking-tighter transition-colors ${
          copied ? "text-[#7FD069]" : ""
        } ${isMultiline ? "text-2xl font-medium leading-tight whitespace-pre-line" : "text-4xl font-medium leading-[1.1]"}`}
      >
        {isMultiline ? text : `"${text}"`}
      </p>
    </div>
  );
}

function AssetRow({
  data,
  index,
  checked,
  onToggle,
  onCopyLinks,
}: {
  data: Asset;
  index: number;
  checked: boolean;
  onToggle: () => void;
  onCopyLinks: () => void;
}) {
  return (
    <motion.div
      role="listitem"
      aria-label={`${data.title} (${data.type})`}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: ECODIA_BEZIER, delay: index * 0.08 }}
      className="group flex flex-col gap-6 p-8 border-b border-[#2D2B28] last:border-b-0 transition-colors duration-700 hover:bg-[#2D2B28] hover:text-[#F9F8F5] focus-within:ring-2 focus-within:ring-[#7FD069]"
    >
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-4 cursor-pointer select-none">
          <button
            type="button"
            onClick={onToggle}
            aria-pressed={checked}
            aria-label={checked ? "Deselect asset" : "Select asset"}
            className="inline-flex items-center justify-center h-8 w-8 border border-current focus:outline-none focus:ring-2 focus:ring-[#7FD069]"
          >
            {checked ? <CheckSquare size={18} /> : <Square size={18} />}
          </button>
          <div className="flex items-center gap-6">
            <div className="h-12 w-12 flex items-center justify-center border border-current opacity-30 group-hover:opacity-100">
              {data.icon}
            </div>
            <div>
              <div className="text-base md:text-lg font-black tracking-tight uppercase leading-none mb-1">
                {data.title}
              </div>
              <div className="text-[10px] opacity-60 group-hover:opacity-80 uppercase tracking-[0.2em] font-black">
                {data.type} // {data.format} {data.size ? `// ${data.size}` : ""}
              </div>
            </div>
          </div>
        </label>

        {/* Quick actions: copy links */}
        <button
          type="button"
          onClick={onCopyLinks}
          className="opacity-0 group-hover:opacity-100 transition-all duration-700 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#7FD069]"
          aria-label="Copy direct links"
          title="Copy direct links"
        >
          <LinkIcon size={20} />
        </button>
      </div>

      {/* File variants */}
      <div className="flex flex-wrap gap-6 pl-[4.5rem]">
        {data.files.map((f) => (
          <a
            key={f.href}
            href={f.href}
            {...(f.download ? { download: "" } : {})}
            className="inline-flex items-center gap-3 border border-current px-4 py-2 text-[11px] font-black uppercase tracking-[0.3em] hover:translate-y-[-1px] transition-transform focus:outline-none focus:ring-2 focus:ring-[#7FD069]"
            aria-label={`Download ${data.title} - ${f.label}`}
          >
            {f.label} <Download size={16} />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

function Swatch({ color, label, border = false }: { color: string; label?: string; border?: boolean }) {
  return (
    <div className="space-y-3">
      <div
        className={`aspect-square w-full rounded-full transition-all duration-700 hover:scale-110 ${
          border ? "border border-[#2D2B28]/20" : ""
        }`}
        style={{ backgroundColor: color }}
        title={label ?? color}
      />
      <div className="text-[8px] font-black text-center opacity-40">
        {label ? `${label} - ${color}` : color}
      </div>
    </div>
  );
}
