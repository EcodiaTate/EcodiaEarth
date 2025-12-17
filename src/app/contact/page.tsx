import { Suspense } from "react";
import ContactSection from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen w-full bg-white" />}>
      <ContactSection />
    </Suspense>
  );
}
