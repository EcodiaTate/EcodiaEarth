import { Suspense } from "react";
import Modal from "@/components/layout/Modal";
import EcoLocalSection from "@/components/sections/EcoLocal";

export default function EcoLocalModalPage() {
  return (
    <Modal>
      <Suspense fallback={<div className="min-h-[60vh] w-full bg-white" />}>
        <EcoLocalSection />
      </Suspense>
    </Modal>
  );
}
