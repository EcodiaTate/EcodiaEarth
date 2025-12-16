// src/components/ui/useParallax.ts
"use client";

import { useEffect } from "react";

type ParallaxItem = {
  el: HTMLElement;
  speed: number;
  baseTransform: string; // whatever transform was already on the element
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export const useParallax = (selector: string = "[data-speed]") => {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
    if (els.length === 0) return;

    const items: ParallaxItem[] = els
      .map((el) => {
        const raw = el.getAttribute("data-speed");
        if (raw == null) return null;
        const speed = Number.parseFloat(raw);
        if (!Number.isFinite(speed) || speed === 0) return null;

        // cache any existing transform so we don't stomp it
        const baseTransform = el.style.transform || "";
        el.style.willChange = "transform";

        return { el, speed, baseTransform };
      })
      .filter(Boolean) as ParallaxItem[];

    if (items.length === 0) return;

    let raf = 0;

    const update = () => {
      raf = 0;

      const scrollY = window.scrollY || window.pageYOffset;
      const vh = window.innerHeight;

      // Max travel in px. Keeps things from overlapping wildly.
      // Increase slowly if you want more drama.
      const MAX_SHIFT = 120;

      for (const { el, speed, baseTransform } of items) {
        const rect = el.getBoundingClientRect();

        // element's absolute top in document coordinates
        const elTop = scrollY + rect.top;

        // progress: 0 when element is just below viewport, 1 when it leaves top
        // (soft window: starts affecting before entering view, ends after leaving)
        const start = elTop - vh; // one viewport before it appears
        const end = elTop + rect.height; // until it's fully passed
        const tRaw = (scrollY - start) / (end - start);
        const t = clamp(tRaw, 0, 1);

        // centered travel: -1..+1 around mid-point, then scale by speed
        const centered = (t - 0.5) * 2;

        // px shift, clamped to avoid overlap
        const y = clamp(centered * MAX_SHIFT * speed, -MAX_SHIFT, MAX_SHIFT);

        // Preserve any existing transform
        // Use translate3d for smoother GPU compositing
        const parallaxTransform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
        el.style.transform = baseTransform
          ? `${baseTransform} ${parallaxTransform}`
          : parallaxTransform;
      }
    };

    const onScrollOrResize = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    // initial
    update();

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);

      // cleanup: remove willChange and restore base transforms
      for (const { el, baseTransform } of items) {
        el.style.willChange = "";
        el.style.transform = baseTransform;
      }
    };
  }, [selector]);
};
