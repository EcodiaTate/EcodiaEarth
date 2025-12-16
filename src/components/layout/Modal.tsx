"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  cubicBezier,
} from "framer-motion";
import { useRouter } from "next/navigation";

type ModalProps = {
  children: React.ReactNode;
  labelledById?: string;
};

export default function Modal({ children, labelledById }: ModalProps) {
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const easeOut = cubicBezier(0.16, 1, 0.3, 1);
  const easeIn = cubicBezier(0.4, 0, 1, 1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  useEffect(() => {
    // Lock body scroll while modal is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  const backdropInitial = { opacity: 0 };
  const backdropAnimate = {
    opacity: 1,
    transition: { duration: reduce ? 0 : 0.18, ease: easeOut },
  };
  const backdropExit = {
    opacity: 0,
    transition: { duration: reduce ? 0 : 0.16, ease: easeIn },
  };

  const panelInitial = { opacity: 0, y: 12, scale: 0.992 };
  const panelAnimate = {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: reduce ? 0 : 0.22, ease: easeOut },
  };
  const panelExit = {
    opacity: 0,
    y: 8,
    scale: 0.996,
    transition: { duration: reduce ? 0 : 0.16, ease: easeIn },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="modal-root"
        className="fixed inset-0 z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        {/* Backdrop */}
        <motion.button
          type="button"
          aria-hidden="true"
          className="modal-backdrop absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => router.back()}
          initial={backdropInitial}
          animate={backdropAnimate}
          exit={backdropExit}
        />

        {/* Panel */}
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledById}
          tabIndex={-1}
          className="modal-panel absolute inset-0 outline-none overflow-y-auto overflow-x-hidden bg-white"
          initial={panelInitial}
          animate={panelAnimate}
          exit={panelExit}
          style={{ willChange: "transform, opacity" }}
          onMouseDown={(e: React.MouseEvent<HTMLDivElement>) =>
            e.stopPropagation()
          }
          onPointerDown={(e: React.PointerEvent<HTMLDivElement>) =>
            e.stopPropagation()
          }
        >
          {children}
        </motion.div>

        {/* Hide scrollbar (keep scrolling) */}
        <style jsx global>{`
          .modal-panel {
            -ms-overflow-style: none; /* IE/old Edge */
            scrollbar-width: none; /* Firefox */
          }
          .modal-panel::-webkit-scrollbar {
            width: 0px;
            height: 0px;
          }
          .modal-panel::-webkit-scrollbar-thumb {
            background: transparent;
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
}
