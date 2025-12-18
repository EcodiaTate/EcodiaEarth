// src/components/layout/Footer.tsx
"use client";

import * as React from "react";
import { SmoothLink } from "@/components/nav/SmoothLink";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    onChange();

    // Modern browsers
    if ("addEventListener" in mql) {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }

    // Legacy Safari / old WebKit
    const legacyMql = mql as MediaQueryList & {
      addListener: (listener: (e: MediaQueryListEvent) => void) => void;
      removeListener: (listener: (e: MediaQueryListEvent) => void) => void;
    };

    legacyMql.addListener(onChange);
    return () => legacyMql.removeListener(onChange);
  }, [query]);

  return matches;
}


export function Footer() {
  const ref = React.useRef<HTMLElement | null>(null);

  const prefersReduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isCoarse = useMediaQuery("(pointer: coarse)");

  // Treat coarse pointer as “mobile-ish”
  const mobileMode = isMobile || isCoarse;
  const motionEnabled = !prefersReduced;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth, but if reduced motion, just “freeze” at 0 so transforms don't move.
  const pSpring = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.7 });
  const p = motionEnabled ? pSpring : (0 as any);

  // Parallax strength scaling
  const SKY = mobileMode ? 10 : 18;
  const HAZE = mobileMode ? 0 : 26; // disable haze parallax on mobile
  const STARS = mobileMode ? 16 : 34;
  const CONTENT = mobileMode ? 4 : 8;
  const LOGO = mobileMode ? 10 : 12;

  const skyY = useTransform(p, [0, 1], ["0%", `${SKY}%`]);
  const hazeY = useTransform(p, [0, 1], ["0%", `${HAZE}%`]);
  const starsY = useTransform(p, [0, 1], ["0%", `${STARS}%`]);

  const turbineY = useTransform(p, [0, 1], ["0%", mobileMode ? "-6%" : "-10%"]);
  const turbineX = useTransform(p, [0, 1], ["0%", mobileMode ? "-2%" : "-4%"]);

  const contentY = useTransform(p, [0, 1], ["0%", `-${CONTENT}%`]);

  const quoteY = useTransform(p, [0, 1], ["14px", mobileMode ? "-10px" : "-18px"]);
  const quoteOpacity = useTransform(p, [0, 0.25, 0.6, 1], [0.6, 1, 1, 0.85]);

  const logoY = useTransform(p, [0, 1], ["18%", `${LOGO}%`]);
  const logoOpacity = useTransform(p, [0, 0.3, 1], [0.06, 0.12, 0.08]);

  const inputY = useTransform(p, [0.2, 0.65, 1], ["10px", "0px", "-6px"]);
  const inputOpacity = useTransform(p, [0.0, 0.25, 1], [0.0, 1.0, 1.0]);

  // Stars: fewer on mobile; none when reduced motion.
  const starCount = prefersReduced ? 0 : mobileMode ? 16 : 42;

  const stars = React.useMemo(() => {
    if (starCount === 0) return [];
    const seed = mobileMode ? 19 : 42;
    let t = seed;
    const rnd = () => {
      t = (t * 1664525 + 1013904223) >>> 0;
      return t / 4294967296;
    };

    return Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      x: `${Math.round(rnd() * 100)}%`,
      y: `${Math.round(rnd() * 100)}%`,
      s: Math.round(rnd() * 2) + 1,
      o: mobileMode ? 0.12 + rnd() * 0.22 : 0.15 + rnd() * 0.35,
      tw: mobileMode ? 5 + rnd() * 7 : 3 + rnd() * 6,
      d: rnd() * 2,
    }));
  }, [starCount, mobileMode]);

  return (
    <footer
      ref={ref}
      className="relative w-full pt-32 pb-12 overflow-hidden bg-[#396041] text-white"
    >
      {/* SKY MASK (Curve) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-[80px] md:h-[150px]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#ffffff"
            className="eco-fill-black"
          />
        </svg>
      </div>

      {/* ATMOSPHERE (Gradient base) */}
      <motion.div className="absolute inset-0 z-0" style={{ y: skyY }} aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[#396041] to-[#1a2e20]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(127,208,105,0.18),transparent_60%)]" />
      </motion.div>

      {/* HAZE LAYER (disabled on mobile & reduced motion) */}
      {!mobileMode && motionEnabled && (
        <motion.div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ y: hazeY }}
          aria-hidden
        >
          <motion.div
            className="absolute -inset-[20%] opacity-40"
            animate={{ x: ["-2%", "2%", "-2%"], y: ["0%", "1%", "0%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_20%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(45%_35%_at_70%_55%,rgba(127,208,105,0.10),transparent_62%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(35%_30%_at_45%_80%,rgba(0,0,0,0.10),transparent_65%)]" />
          </motion.div>
        </motion.div>
      )}

      {/* STARS / PARTICLES (reduced on mobile; off on reduced motion) */}
      {stars.length > 0 && (
        <motion.div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{ y: starsY }}
          aria-hidden
        >
          {stars.map((s) => (
            <motion.span
              key={s.id}
              className="absolute rounded-full bg-white"
              style={{
                left: s.x,
                top: s.y,
                width: s.s,
                height: s.s,
                opacity: s.o,
                filter: "blur(0.2px)",
              }}
              animate={{ opacity: [s.o * 0.6, s.o, s.o * 0.55] }}
              transition={{
                duration: s.tw,
                repeat: Infinity,
                ease: "easeInOut",
                delay: s.d,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* SOLAR TURBINE (rotation disabled on reduced motion) */}
      <motion.div
        className="absolute -bottom-[20%] -right-[10%] w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] pointer-events-none opacity-10 z-[3] eco-transparent"
        style={{ y: turbineY, x: turbineX }}
        aria-hidden
      >
        <motion.svg
          viewBox="0 0 500 500"
          className="w-full h-full text-[#7fd069]"
          animate={motionEnabled ? { rotate: 360 } : undefined}
          transition={
            motionEnabled ? { duration: 150, repeat: Infinity, ease: "linear" } : undefined
          }
        >
          <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle
            cx="250"
            cy="250"
            r="150"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="10 20"
          />
          {[...Array(8)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 45} 250 250)`}>
              <line x1="250" y1="250" x2="250" y2="40" stroke="currentColor" strokeWidth="1" />
              <circle cx="250" cy="40" r="5" fill="currentColor" />
            </g>
          ))}
        </motion.svg>
      </motion.div>

      {/* BIG PARALLAX WORDMARK (still visible even if reduced motion; just stops moving) */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-[4] pointer-events-none"
        style={{ y: logoY, opacity: logoOpacity }}
        aria-hidden
      >
        <div className="relative max-w-[100rem] mx-auto px-6">
          <h1 className="eco-blend-fix font-display font-bold text-[20vw] md:text-[18vw] leading-[0.7] tracking-tighter text-white select-none">
            ECODIA
          </h1>
        </div>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="relative z-30 px-6 max-w-[100rem] mx-auto flex flex-col justify-between min-h-[60vh]"
        style={{ y: contentY }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full">
          <motion.div
            className="font-mono text-[10px] text-[#7fd069]/80 tracking-widest space-y-2 border-l border-[#7fd069]/20 pl-4"
            initial={motionEnabled ? { opacity: 0, y: 12 } : false}
            whileInView={motionEnabled ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p>Lat: 26.6528 S</p>
            <p>Lng: 153.0896 E</p>
            <p className="pt-4 text-white">
              x(t=0)= <span className="text-[#7fd069] font-bold">Sunshine Coast</span>
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-12 md:gap-24">
            <motion.div
              className="flex flex-col gap-4"
              initial={motionEnabled ? { opacity: 0, y: 12 } : false}
              whileInView={motionEnabled ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            >
              <h4 className="font-serif italic text-xl text-[#7fd069]">Explore</h4>
              <nav className="flex flex-col gap-2 font-sans text-sm font-medium text-white/70">
                <TextLink href="/vision">Vision</TextLink>
                <TextLink href="/values">Values</TextLink>
                <TextLink href="/technology">Technology</TextLink>
                <TextLink href="/ecosystem">Ecosystem</TextLink>
              </nav>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4"
              initial={motionEnabled ? { opacity: 0, y: 12 } : false}
              whileInView={motionEnabled ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <h4 className="font-serif italic text-xl text-[#7fd069]">Connect</h4>
              <nav className="flex flex-col gap-2 font-sans text-sm font-medium text-white/70">
                <a
                  href="https://instagram.com/ecodia.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#7fd069] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com/company/ecodia-a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#7fd069] transition-colors"
                >
                  LinkedIn
                </a>
                <TextLink href="/contact">Uplink</TextLink>
              </nav>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4"
              initial={motionEnabled ? { opacity: 0, y: 12 } : false}
              whileInView={motionEnabled ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <h4 className="font-serif italic text-xl text-[#7fd069]">Company</h4>
              <nav className="flex flex-col gap-2 font-sans text-sm font-medium text-white/70">
                <TextLink href="/legal">Legal & Privacy</TextLink>
                <TextLink href="/labs">Ecodia Labs</TextLink>
                <TextLink href="/press">Press Kit</TextLink>
              </nav>
            </motion.div>
          </div>
        </div>

        <motion.div className="my-24 md:my-32 text-center max-w-4xl mx-auto" style={{ y: quoteY, opacity: quoteOpacity }}>
          <p className="font-sans text-2xl md:text-4xl font-light leading-tight text-white">
            "A system built,
            <br />
            <span className="font-serif italic text-[#7fd069]">to be lived as a world."</span>
          </p>
        </motion.div>

        <div className="w-full border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-end relative z-40">
          <motion.div className="flex items-center gap-4 mb-4 md:mb-2" style={{ y: inputY, opacity: inputOpacity }}>
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            <input
              type="text"
              placeholder="Join the network..."
              className="bg-transparent border-none outline-none font-mono text-xs uppercase tracking-widest text-white placeholder:text-white/30 w-48 focus:w-64 transition-all duration-500"
            />
            <button className="text-white hover:text-[#7fd069] transition-colors">→</button>
          </motion.div>

          <div className="font-mono text-[10px] tracking-widest text-white/50 pb-1">
            ECODIA / FIELD SYSTEMS
          </div>
        </div>
      </motion.div>

      {/* ECO MODE OVERRIDES */}
      <style jsx global>{`
        .eco-mode .eco-hidden { display: none !important; }
        .eco-mode .eco-transparent { background-color: transparent !important; }
        .eco-mode .eco-blend-fix { mix-blend-mode: normal !important; color: #262626 !important; }
        .eco-mode .eco-fill-black { fill: #000000 !important; }
        .eco-mode footer { background-color: #050505 !important; border-top: 1px solid #333; }
      `}</style>
    </footer>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <SmoothLink href={href} className="group relative w-max overflow-hidden">
      <span className="block text-white/70 transition-transform duration-500 group-hover:-translate-y-[150%]">
        {children}
      </span>
      <span className="absolute top-0 left-0 block translate-y-[150%] text-[#7fd069] transition-transform duration-500 group-hover:translate-y-0">
        {children}
      </span>
      <span className="absolute left-0 -bottom-[2px] h-px w-full bg-[#7fd069]/50 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-700" />
    </SmoothLink>
  );
}
