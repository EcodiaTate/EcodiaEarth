// src/components/sections/ContactSection.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charge, setCharge] = useState(0);

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", note: "" });

  // Calculate completion based on field completion
  useEffect(() => {
    let newCharge = 0;
    if (formData.name.trim().length > 2) newCharge += 33;
    if (formData.email.includes("@")) newCharge += 33;
    if (formData.note.trim().length > 5) newCharge += 34;
    setCharge(newCharge);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (charge < 100) return;
    // Simulate API call
    setTimeout(() => setIsSubmitted(true), 800);
  };

  return (
    <main className="relative w-full min-h-screen bg-white text-ink overflow-hidden selection:bg-gold selection:text-ink">
      {/* 1. BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Paper Grain */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

        {/* Warm light (top right) */}
        <div className="absolute top-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-gold/10 rounded-full blur-[100px] mix-blend-multiply" />

        {/* Topography hint */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[50vh] opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,100 Q50,50 100,100" fill="#064e3b" />
          <path d="M0,100 Q50,70 100,100" fill="#396041" />
        </svg>
      </div>

      {/* BACK */}
<motion.button
  onClick={() => router.back()}
  initial={{ y: -30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.45 }}
  className="
    fixed z-50
    top-4 right-4 sm:top-6 sm:right-6
    active:scale-95 transition-transform
  "
  aria-label="Back"
>
  <div
    className="
      flex items-center gap-3
      bg-white/90 backdrop-blur
      border-2 border-ink/70
      px-4 py-2 rounded-xl
      shadow-[4px_4px_0px_rgba(15,23,18,0.30)]
      active:translate-y-[2px]
      active:translate-x-[2px]
      active:shadow-none
      transition-all
    "
  >
    <span className="text-xl leading-none text-ink/70">←</span>
    <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink/80">
      Back
    </span>
  </div>
</motion.button>

      {/* 3. MAIN CONTENT */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* HEADER */}
              <div className="mb-12 text-center">
                <span className="inline-block border border-gold/30 text-[#b45309] px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest mb-4 bg-[#fffbeb]">
                  Field_Note
                </span>

                <h1 className="font-display text-6xl md:text-8xl text-forest leading-[0.85] tracking-tight">
                  LEAVE A<br />
                  NOTE
                </h1>

                <p className="mt-6 font-serif text-lg text-ink/60">
                  A short message is enough. We read everything.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Input: NAME */}
                <div className="group relative">
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-forest mb-2 pl-4">
                    01 // Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white border-2 border-ink/10 rounded-2xl p-6 text-xl font-display text-forest placeholder:text-ink/40 focus:outline-none focus:border-gold focus:shadow-[0_0_20px_rgba(245,158,11,0.18)] transition-all"
                  />
                </div>

                {/* Input: EMAIL */}
                <div className="group relative">
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-forest mb-2 pl-4">
                    02 // Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white border-2 border-ink/10 rounded-2xl p-6 text-xl font-display text-forest placeholder:text-ink/40 focus:outline-none focus:border-gold focus:shadow-[0_0_20px_rgba(245,158,11,0.18)] transition-all"
                  />
                </div>

                {/* Input: MESSAGE */}
                <div className="group relative">
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-forest mb-2 pl-4">
                    03 // Message
                  </label>
                  <textarea
                    placeholder="What should we build next?"
                    rows={4}
                    value={formData.note}
                    onChange={(e) =>
                      setFormData({ ...formData, note: e.target.value })
                    }
                    className="w-full bg-white border-2 border-ink/10 rounded-2xl p-6 text-xl font-serif text-forest placeholder:text-ink/40 focus:outline-none focus:border-gold focus:shadow-[0_0_20px_rgba(245,158,11,0.18)] transition-all resize-none"
                  />
                </div>

                {/* SUBMIT */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={charge < 100}
                    className="relative w-full h-24 rounded-2xl overflow-hidden group disabled:cursor-not-allowed"
                  >
                    {/* Base */}
                    <div className="absolute inset-0 bg-ink transition-colors" />

                    {/* Fill (completion) */}
                    <div
                      className="absolute inset-0 bg-gold transition-all duration-500 ease-out origin-left"
                      style={{ transform: `scaleX(${charge / 100})` }}
                    />

                    {/* Label */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <span
                        className={`font-display text-2xl uppercase tracking-widest transition-colors ${
                          charge >= 100 ? "text-ink" : "text-white/55"
                        }`}
                      >
                        {charge < 100 ? `Almost there ${charge}%` : "SEND"}
                      </span>
                    </div>

                    {/* Quiet mark when ready */}
                    {charge >= 100 && (
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-ink text-3xl">
                        ↗
                      </div>
                    )}
                  </button>

                  <p className="mt-3 text-center text-xs text-ink/45 font-mono tracking-widest uppercase">
                    No newsletters. No noise.
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

// --- SUB-COMPONENT: Success State ---

function SuccessMessage() {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center py-14 bg-white rounded-3xl border-2 border-gold/50 shadow-[0_10px_40px_rgba(245,158,11,0.18)]"
    >
      <div className="w-24 h-24 mx-auto bg-[#fffbeb] rounded-full flex items-center justify-center mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.35, delay: 0.15 }}
          className="text-6xl"
          aria-hidden
        >
          🌱
        </motion.div>
      </div>

      <h2 className="font-display text-5xl text-forest mb-4">RECEIVED.</h2>

      <p className="font-serif text-xl text-ink/70 max-w-sm mx-auto mb-8">
        Thanks. We’ll come back to this.
      </p>

      <div className="inline-block px-4 py-2 border border-forest/10 rounded-full font-mono text-xs uppercase tracking-widest text-forest/60">
        REF: FIELD_NOTE
      </div>
    </motion.div>
  );
}
