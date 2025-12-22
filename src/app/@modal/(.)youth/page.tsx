import { Suspense } from "react";
import Modal from "@/components/layout/Modal";
import EcoLocalYouthSection from "@/components/sections/EcoLocalYouth";

export default function YouthModalPage() {
  return (
    <Modal>
      <Suspense fallback={<div className="min-h-[60vh] w-full bg-white" />}>
        <EcoLocalYouthSection />
      </Suspense>
    </Modal>
  );
}
