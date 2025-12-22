import { Suspense } from "react";
import Modal from "@/components/layout/Modal";
import EcoLocalBusinessSection from "@/components/sections/EcoLocalBusiness";

export default function EcoLocalBusinessModalPage() {
  return (
    <Modal>
      <Suspense fallback={<div className="min-h-[60vh] w-full bg-white" />}>
        <EcoLocalBusinessSection />
      </Suspense>
    </Modal>
  );
}
