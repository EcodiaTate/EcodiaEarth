import { Suspense } from "react";
import Modal from "@/components/layout/Modal";
import EcoSection from "@/components/sections/Eco";

export default function EcoModalPage() {
  return (
    <Modal>
      <Suspense fallback={<div className="min-h-[60vh] w-full bg-white" />}>
        <EcoSection />
      </Suspense>
    </Modal>
  );
}
