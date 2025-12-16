// src/components/sections/ContactSection.tsx (Ecodia: Quiet Signal)
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

// Ecodia palette (only)
const INK = "#0F1712";
const FOREST = "#396041";
const MINT = "#7FD069";
const GOLD = "#F4D35E";
const WHITE = "#FFFFFF";

type Intent = "partner" | "invest" | "build" | "deploy" | "press" | "other";

export default function ContactSection() {

  const searchParams = useSearchParams();

useEffect(() => {
  const q = searchParams.get("intent");
  const allowed: Intent[] = ["partner", "invest", "build", "deploy", "press", "other"];
  if (q && (allowed as string[]).includes(q)) {
    setFormData((p) => ({ ...p, intent: q as Intent }));
  }
}, [searchParams]);

  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    note: "",
    intent: "partner" as Intent,
  });

  // Completion meter (simple, calm)
  const charge = useMemo(() => {
    let c = 0;
    if (formData.name.trim().length >= 2) c += 34;
    if (/^\S+@\S+\.\S+$/.test(formData.email.trim())) c += 33;
    if (formData.note.trim().length >= 10) c += 33;
    return c;
  }, [formData]);

  useEffect(() => {
    // no-op: keeping this hook slot if you want analytics later
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (charge < 100) return;

    // Simulate API call
    window.setTimeout(() => setIsSubmitted(true), 600);
  };

  return (
    <main
      className="relative w-full min-h-screen overflow-hidden selection:bg-[#7FD069]/30 selection:text-[#0F1712]"
      style={{ backgroundColor: WHITE, color: INK }}
    >
      {/* Background (quiet, low-cost, Ecodia palette) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full opacity-[0.10]"
          style={{ backgroundColor: MINT }}
        />
        <div
          className="absolute -bottom-32 -right-24 h-[640px] w-[640px] rounded-full opacity-[0.10]"
          style={{ backgroundColor: GOLD }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,18,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,18,0.12) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Close */}
      <motion.button
        onClick={() => router.back()}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed z-50 top-4 right-4 sm:top-6 sm:right-6 active:scale-[0.99] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          // ring colors (inline so we don't introduce non-Ecodia classes)
          // Tailwind ring uses box-shadow; focus-visible:ring works, and offset works.
          // Border/background remain Ecodia-only.
        }}
        aria-label="Close"
      >
        <div
          className="flex items-center gap-3 px-4 py-2 rounded-full border shadow-[0_10px_30px_rgba(15,23,18,0.10)] hover:shadow-[0_14px_38px_rgba(15,23,18,0.12)] transition-shadow"
          style={{
            backgroundColor: WHITE,
            borderColor: "rgba(15,23,18,0.15)",
          }}
        >
          <span className="text-xl leading-none" style={{ color: "rgba(15,23,18,0.65)" }}>
            ×
          </span>
          <span
            className="font-mono text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "rgba(15,23,18,0.70)" }}
          >
            Close
          </span>
        </div>
      </motion.button>

      {/* Main */}
      <div className="relative z-10 max-w-xl mx-auto px-4 py-24 min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              className="p-6 md:p-10 rounded-2xl border shadow-[0_18px_55px_rgba(15,23,18,0.10)]"
              style={{
                backgroundColor: WHITE,
                borderColor: "rgba(15,23,18,0.12)",
              }}
            >
              {/* Header */}
              <div className="mb-10 md:mb-12 text-left">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.24em] border"
                  style={{
                    color: "rgba(15,23,18,0.65)",
                    borderColor: "rgba(15,23,18,0.12)",
                    backgroundColor: "rgba(127,208,105,0.10)",
                  }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: FOREST }} />
                  Contact
                </span>

                <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.0] tracking-tight">
                  Send a message.
                </h1>

                <p
                  className="mt-4 text-lg leading-relaxed max-w-md"
                  style={{ color: "rgba(15,23,18,0.65)" }}
                >
                  Keep it brief. We’ll follow up with the next step.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Intent (quiet select) */}
                <div className="group relative">
                  <label
                    className="block font-mono text-[10px] uppercase tracking-[0.22em] mb-2"
                    style={{ color: "rgba(15,23,18,0.60)" }}
                  >
                    Intent
                  </label>
                  <div
                    className="border rounded-xl px-4 py-3"
                    style={{ borderColor: "rgba(15,23,18,0.14)", backgroundColor: WHITE }}
                  >
                    <select
                      value={formData.intent}
                      onChange={(e) =>
                        setFormData({ ...formData, intent: e.target.value as Intent })
                      }
                      className="w-full bg-transparent outline-none font-display text-lg"
                      style={{ color: INK }}
                      aria-label="Intent"
                    >
                      <option value="partner">Partner</option>
                      <option value="invest">Invest / Sponsor</option>
                      <option value="build">Build</option>
                      <option value="deploy">Deploy</option>
                      <option value="press">Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Name */}
                <div className="group relative">
                  <label
                    className="block font-mono text-[10px] uppercase tracking-[0.22em] mb-2"
                    style={{ color: "rgba(15,23,18,0.60)" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl p-4 text-lg outline-none border transition-colors"
                    style={{
                      backgroundColor: WHITE,
                      borderColor: "rgba(15,23,18,0.14)",
                    }}
                  />
                </div>

                {/* Email */}
                <div className="group relative">
                  <label
                    className="block font-mono text-[10px] uppercase tracking-[0.22em] mb-2"
                    style={{ color: "rgba(15,23,18,0.60)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl p-4 text-lg outline-none border transition-colors"
                    style={{
                      backgroundColor: WHITE,
                      borderColor: "rgba(15,23,18,0.14)",
                    }}
                  />
                </div>

                {/* Message */}
                <div className="group relative">
                  <label
                    className="block font-mono text-[10px] uppercase tracking-[0.22em] mb-2"
                    style={{ color: "rgba(15,23,18,0.60)" }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="A few lines is plenty."
                    rows={5}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full rounded-xl p-4 text-lg outline-none border transition-colors resize-none"
                    style={{
                      backgroundColor: WHITE,
                      borderColor: "rgba(15,23,18,0.14)",
                    }}
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={charge < 100}
                    className="relative w-full h-14 rounded-full overflow-hidden border transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      borderColor: "rgba(15,23,18,0.16)",
                      backgroundColor: WHITE,
                    }}
                  >
                    {/* subtle fill */}
                    <div
                      className="absolute inset-0 origin-left transition-transform duration-500 ease-out"
                      style={{
                        transform: `scaleX(${charge / 100})`,
                        backgroundColor: charge >= 100 ? GOLD : MINT,
                        opacity: 0.18,
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-between px-6">
                      <span
                        className="font-mono text-[11px] uppercase tracking-[0.22em]"
                        style={{ color: INK }}
                      >
                        {charge < 100 ? `Complete ${charge}%` : "Send message"}
                      </span>
                      <span style={{ color: FOREST }} aria-hidden>
                        →
                      </span>
                    </div>
                  </button>

                  <p
                    className="mt-3 text-center text-[11px] font-mono uppercase tracking-[0.22em]"
                    style={{ color: "rgba(15,23,18,0.45)" }}
                  >
                    Short is good. Clear is better.
                  </p>
                </div>
              </form>
            </motion.div>
          ) : (
            <SuccessMessage />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function SuccessMessage() {
  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center py-14 px-8 border rounded-2xl shadow-[0_18px_55px_rgba(15,23,18,0.10)]"
      style={{ backgroundColor: WHITE, borderColor: "rgba(15,23,18,0.12)", color: INK }}
    >
      <div
        className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 border"
        style={{ backgroundColor: "rgba(127,208,105,0.18)", borderColor: "rgba(15,23,18,0.12)" }}
      >
        <span className="text-4xl" style={{ color: FOREST }} aria-hidden>
          ✓
        </span>
      </div>

      <h2 className="font-display text-4xl mb-3">Received.</h2>

      <p className="text-lg max-w-sm mx-auto" style={{ color: "rgba(15,23,18,0.65)" }}>
        We’ll reply with the next step.
      </p>

      <div
        className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border font-mono text-[10px] uppercase tracking-[0.22em]"
        style={{ borderColor: "rgba(15,23,18,0.12)", color: "rgba(15,23,18,0.55)" }}
      >
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: GOLD }} />
        Logged
      </div>
    </motion.div>
  );
}
