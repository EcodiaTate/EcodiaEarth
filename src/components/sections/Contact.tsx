"use client";

import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

const EASE = cubicBezier(0.19, 1, 0.22, 1);

type Intent = "partner" | "invest" | "build" | "deploy" | "press" | "other";

export default function ContactSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

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
    window.setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 1800);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#F9F8F5] font-mono text-[#2D2B28] selection:bg-[#7FD069]">
      {/* Exit */}
      <div className="fixed right-[8%] top-12 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-4 border-b-2 border-[#2D2B28] pb-1 transition-all"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform duration-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back</span>
        </button>
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2D2B28]" />
        <div className="absolute top-[12%] left-0 w-full h-px bg-[#2D2B28]" />
        <div className="absolute left-[20%] top-0 h-full w-[0.5px] bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 pl-[8%] pr-[15%] py-32 min-h-screen flex flex-col justify-start">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="briefing"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 1, ease: EASE }}
              className="space-y-24"
            >
              <header className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 bg-[#396041]" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
                  <span className="text-[10px] font-black uppercase tracking-[0.6em] opacity-40">
                    Contact
                  </span>
                </div>
                <h1 className="text-[9rem] font-black leading-[0.75] tracking-tighter sm:text-[12rem]">
                  SEND <br />
                  <span className="italic font-light opacity-10">A NOTE.</span>
                </h1>
                <p className="max-w-md text-sm opacity-60 uppercase tracking-[0.2em] leading-relaxed">
                  Tell us what you have in mind.
                </p>
              </header>

              <form onSubmit={handleSubmit} className="max-w-3xl space-y-20">
                <div className="grid grid-cols-1 gap-16">
                  {/* Fields */}
                  {[
                    { id: "01", label: "Intent", type: "select", key: "intent" },
                    { id: "02", label: "Name", type: "text", key: "name", placeholder: "Your name" },
                    { id: "03", label: "Email", type: "email", key: "email", placeholder: "name@email.com" },
                    { id: "04", label: "Note", type: "textarea", key: "note", placeholder: "A few lines are enough" },
                  ].map((field) => (
                    <div key={field.id} className="group space-y-4 border-l-4 border-transparent hover:border-[#2D2B28] pl-8 transition-all">
                      <label className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 group-hover:opacity-100 transition-opacity">
                        {field.id} {field.label}
                      </label>

                      {field.type === "select" ? (
                        <select
                          value={formData.intent}
                          onChange={(e) => setFormData({ ...formData, intent: e.target.value as Intent })}
                          className="w-full bg-transparent py-4 text-4xl font-black uppercase tracking-tighter outline-none appearance-none cursor-pointer border-b border-[#2D2B28]/10 focus:border-[#2D2B28]"
                        >
                          <option value="partner">Partner</option>
                          <option value="invest">Backer</option>
                          <option value="build">Builder</option>
                          <option value="deploy">Deploy</option>
                          <option value="press">Press</option>
                          <option value="other">Other</option>
                        </select>
                      ) : field.type === "textarea" ? (
                        <textarea
                          rows={2}
                          placeholder={field.placeholder}
                          value={formData.note}
                          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                          className="w-full bg-transparent py-4 text-4xl font-black tracking-tighter outline-none placeholder:opacity-20 border-b border-[#2D2B28]/10 focus:border-[#2D2B28] resize-none"
                        />
                      ) : (
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={(formData as any)[field.key]}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                          className="w-full bg-transparent py-4 text-4xl font-black tracking-tighter outline-none placeholder:opacity-20 border-b border-[#2D2B28]/10 focus:border-[#2D2B28]"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-12">
                  <button
                    type="submit"
                    disabled={charge < 100 || isSending}
                    className="group relative flex items-center justify-between w-full bg-[#2D2B28] p-12 text-[#F9F8F5] transition-all disabled:opacity-5 disabled:grayscale"
                  >
                    <span className="text-xs font-black uppercase tracking-[0.8em]">
                      {isSending ? "Sending…" : "Send"}
                    </span>
                    {isSending ? <Loader2 className="animate-spin" size={24} /> : <ArrowRight size={24} />}

                    {/* Progress */}
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-[#7FD069] transition-all duration-1000"
                      style={{ width: `${charge}%` }}
                    />
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: EASE }}
              className="max-w-4xl border-l-8 border-[#396041] p-24 space-y-12"
            >
              <h2 className="text-[8rem] font-black tracking-tighter leading-none">THANK YOU.</h2>
              <p className="text-2xl opacity-70 max-w-xl">
                We’ve got your note and will reply soon.
              </p>
              <div className="pt-12 flex items-center gap-6 border-t border-[#2D2B28]/10">
                <div className="h-4 w-4 bg-[#7FD069]" />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Message received</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Crop marks */}
      <footer className="fixed bottom-12 left-[8%] right-[8%] flex justify-between items-end pointer-events-none opacity-20">
        <div className="text-[8px] uppercase tracking-[0.8em]">Coordinates: 26.6500° S // 153.0667° E</div>
        <div className="flex gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-px w-8 bg-[#2D2B28]" />
          ))}
        </div>
      </footer>
    </main>
  );
}
