import { Suspense } from "react";
import Modal from "@/components/layout/Modal";
import ContactSection from "@/components/sections/Contact";

export default function ContactModalPage() {
  return (
    <Modal>
      <Suspense fallback={<div className="min-h-[60vh] w-full bg-white" />}>
        <ContactSection />
      </Suspense>
    </Modal>
  );
}
