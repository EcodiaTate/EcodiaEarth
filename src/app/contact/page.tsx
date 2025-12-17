import { Suspense } from "react";
import ContactSection from "@/components/sections/Contact";

export const metadata = { title: "Contact • Ecodia" };

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen w-full bg-white" />}>
      <ContactSection />
    </Suspense>
  );
}
