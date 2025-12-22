"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";

/**
 * ECODIA CONTACT INTERFACE (THE HANDSHAKE)
 * Materiality: Warm Paper (#F9F8F5) | Charcoal Ink (#2D2B28)
 * Strategy: No Invitation Energy. Briefing Documentation.
 */

type Intent = "partner" | "invest" | "build" | "deploy" | "press" | "other";

export default function ContactSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    note: "",
    intent: "partner" as Intent,
  });

  useEffect(() => {
    const q = searchParams.get("intent");
    const allowed: Intent[] = ["partner", "invest", "build", "deploy", "press", "other"];
    if (q && (allowed as string[]).includes(q)) {
      setFormData((p) => ({ ...p, intent: q as Intent }));
    }
  }, [searchParams]);

  const charge = useMemo(() => {
    let c = 0;
    if (formData.name.trim().length >= 2) c += 34;
    if (/^\S+@\S+\.\S+$/.test(formData.email.trim())) c += 33;
    if (formData.note.trim().length >= 10) c += 33;
    return c;
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (charge < 100) return;
    setIsSending(true);
    // Simulate systemic integration
    window.setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]">
      
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

      {/* 2. CALIBRATION GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute left-[15%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute top-[25%] left-0 w-full h-px bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-8 py-32 min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="briefing"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-16"
            >
              {/* HEADER: MASSIVE ANCHOR */}
              <header className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-2.5 w-2.5 bg-[#396041]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
                    Handshake_Protocol // Briefing
                  </span>
                </div>
                <h1 className="text-6xl font-black leading-[0.8] tracking-tighter sm:text-7xl">
                  SUBMIT <br />
                  <span className="italic font-light opacity-30 text-[#396041]">RESIDUE.</span>
                </h1>
                <p className="max-w-sm text-sm opacity-60 uppercase tracking-wide leading-relaxed">
                  State your intent. Outline your contribution. The system will respond once the signal is processed.
                </p>
              </header>

              {/* FORM ARCHITECTURE */}
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 gap-12 border-l-2 border-[#2D2B28]/10 pl-8">
                  
                  {/* Field: Intent */}
                  <div className="space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40">01_Intent</label>
                    <select
                      value={formData.intent}
                      onChange={(e) => setFormData({ ...formData, intent: e.target.value as Intent })}
                      className="w-full bg-transparent border-b-2 border-[#2D2B28] py-4 text-xl font-bold uppercase tracking-tighter outline-none appearance-none cursor-pointer hover:border-[#7FD069] transition-colors"
                    >
                      <option value="partner">Node_Partner</option>
                      <option value="invest">System_Backer</option>
                      <option value="build">Labor_Builder</option>
                      <option value="deploy">Site_Deployment</option>
                      <option value="press">Signal_Observer</option>
                      <option value="other">General_Drift</option>
                    </select>
                  </div>

                  {/* Field: Name */}
                  <div className="space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40">02_Identifier</label>
                    <input
                      type="text"
                      placeholder="Name / Entity"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-[#2D2B28] py-4 text-xl font-bold tracking-tighter outline-none placeholder:opacity-20 hover:border-[#7FD069] transition-colors"
                    />
                  </div>

                  {/* Field: Email */}
                  <div className="space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40">03_Coordinate</label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-[#2D2B28] py-4 text-xl font-bold tracking-tighter outline-none placeholder:opacity-20 hover:border-[#7FD069] transition-colors"
                    />
                  </div>

                  {/* Field: Note */}
                  <div className="space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40">04_Briefing</label>
                    <textarea
                      rows={4}
                      placeholder="State capacity, location, or request."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-[#2D2B28] py-4 text-xl font-bold tracking-tighter outline-none placeholder:opacity-20 hover:border-[#7FD069] transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* HANDSHAKE EXECUTION */}
                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={charge < 100 || isSending}
                    className="group relative w-full border-4 border-[#2D2B28] bg-[#2D2B28] py-8 text-[#F9F8F5] transition-all disabled:opacity-20 disabled:grayscale disabled:cursor-not-allowed hover:bg-transparent hover:text-[#2D2B28]"
                  >
                    <div className="flex items-center justify-between px-12">
                      <span className="text-xs font-black uppercase tracking-[0.5em]">
                        {isSending ? "Processing_Signal..." : "Initiate_Handshake"}
                      </span>
                      {isSending ? <Loader2 className="animate-spin" size={20} /> : <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />}
                    </div>
                  </button>
                  <div className="mt-6 flex justify-between items-center opacity-30 text-[9px] uppercase tracking-widest">
                    <span>Handshake_Status: {charge}% Ready</span>
                    <span>Direct_Protocol_Enabled</span>
                  </div>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border-4 border-[#2D2B28] p-16 text-center space-y-8"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center border-2 border-[#396041] rounded-full">
                <Check size={40} className="text-[#396041]" />
              </div>
              <div className="space-y-4">
                <h2 className="text-5xl font-black tracking-tighter">SIGNAL_LOCKED.</h2>
                <p className="text-lg opacity-70">
                  Your Briefing has been recorded. Ecodia will drift a response to your coordinate shortly.
                </p>
              </div>
              <div className="pt-8 border-t border-[#2D2B28]/10 flex justify-center gap-4">
                 <div className="h-2 w-2 rounded-full bg-[#7FD069]" />
                 <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Node_Awaiting_Calibration</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FOOTER: CROP MARKS */}
      <footer className="fixed bottom-12 left-12 right-12 flex justify-between items-end pointer-events-none opacity-20">
         <div className="text-[8px] uppercase tracking-[0.5em]">26.6500° S // 2025</div>
         <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-6 w-px bg-[#2D2B28]" />
            ))}
         </div>
      </footer>
    </main>
  );
}