"use client";

import * as React from "react";
import { SmoothLink } from "@/components/nav/SmoothLink";
import { motion, useScroll, useTransform } from "framer-motion";

export function Footer() {
  const ref = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const yDrift = useTransform(scrollYProgress, [0, 1], ["40px", "0px"]);

  return (
    <footer
      ref={ref}
      className="relative w-full py-24 bg-[#F9F8F5] text-[#2D2B28] overflow-hidden border-t border-[#2D2B28]/10"
    >
      {/* grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute left-[8%] h-full w-[1px] bg-[#2D2B28]" />
        <div className="absolute right-[8%] h-full w-[1px] bg-[#2D2B28]" />
        <div className="absolute top-1/2 w-full h-[1px] bg-[#2D2B28]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div style={{ y: yDrift }} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT */}
          <div className="lg:col-span-4 space-y-12">
            <div className="flex flex-col gap-1 font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">
              <span>Appendix v2025</span>
              <div className="h-[1px] w-24 bg-[#2D2B28]" />
            </div>

            {/* keep this line exactly */}
            <h3 className="font-black text-4xl tracking-tighter uppercase leading-none">
              A system built,<br />
              <span className="text-[#396041]">to be lived as a world.</span>
            </h3>

            <div className="font-mono text-[10px] uppercase tracking-widest space-y-2 opacity-50">
              <p>Lat 26.6528° S</p>
              <p>Lon 153.0896° E</p>
              <p className="text-[#396041]">Status: Online</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <FooterGroup title="Explore">
              <TextLink href="/vision">Vision</TextLink>
              <TextLink href="/values">Values</TextLink>
              <TextLink href="/technology">Technology</TextLink>
              <TextLink href="/ecosystem">Ecosystem</TextLink>
            </FooterGroup>

            <FooterGroup title="Uplink">
              <a
                href="https://instagram.com/ecodia.au"
                target="_blank"
                rel="noopener"
                className="hover:text-[#7FD069] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                className="hover:text-[#7FD069] transition-colors"
              >
                LinkedIn
              </a>
              <TextLink href="/contact">Contact</TextLink>
            </FooterGroup>

            <FooterGroup title="Archive">
              <TextLink href="/legal">Legal</TextLink>
              <TextLink href="/labs">Labs</TextLink>
              <TextLink href="/press">Press</TextLink>
            </FooterGroup>
          </div>
        </motion.div>

        {/* watermark */}
        <div className="mt-32 relative">
          <h2 className="font-black text-[18vw] leading-none tracking-tighter opacity-[0.03] select-none pointer-events-none">
            ECODIA
          </h2>

          {/* signature */}
          <div className="absolute bottom-4 right-0 flex items-center gap-6">
            <div className="text-right font-mono text-[9px] uppercase tracking-[0.5em] opacity-30">
              Verified // 2025
            </div>
            <img src="/icons/leaf-black.svg" className="w-6 h-6 opacity-40" alt="" />
          </div>
        </div>

        {/* ticks */}
        <div className="mt-12 pt-8 border-t border-[#2D2B28]/10 flex justify-between items-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-[1px] h-3 bg-[#2D2B28] opacity-20" />
            ))}
          </div>
          <div className="font-mono text-[8px] uppercase tracking-[0.5em] opacity-20">
            End
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-30">{title}</h4>
      <nav className="flex flex-col gap-3 font-black text-sm uppercase tracking-tighter">
        {children}
      </nav>
    </div>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <SmoothLink href={href} className="group relative w-max overflow-hidden">
      <span className="block transition-transform duration-500 group-hover:-translate-y-[120%]">
        {children}
      </span>
      <span className="absolute top-0 left-0 block translate-y-[120%] text-[#7FD069] transition-transform duration-500 group-hover:translate-y-0">
        {children}
      </span>
    </SmoothLink>
  );
}
