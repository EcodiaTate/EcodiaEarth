// src/components/layout/Footer.tsx
"use client";

import { SmoothLink } from "@/components/nav/SmoothLink";
import { motion } from "framer-motion";

export function Footer() {
  return (
    // 1. THE HILL BODY: Green (#396041)
    <footer className="relative w-full pt-32 pb-12 overflow-hidden bg-[#396041] text-white">
      
      {/* 2. THE SKY MASK (Curve) 
          CHANGED: fill="#ffffff" to match the HomeValues section above.
      */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
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

      {/* 3. ATMOSPHERE (Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#396041] to-[#1a2e20] z-0" />

      {/* 4. SOLAR TURBINE DECORATION */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] pointer-events-none opacity-10 z-0 eco-transparent">
        <motion.svg 
           viewBox="0 0 500 500" 
           className="w-full h-full text-[#7fd069]"
           animate={{ rotate: 360 }}
           transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        >
           <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="1" />
           <circle cx="250" cy="250" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 20" />
           {[...Array(8)].map((_, i) => (
             <g key={i} transform={`rotate(${i * 45} 250 250)`}>
                <line x1="250" y1="250" x2="250" y2="40" stroke="currentColor" strokeWidth="1" />
                <circle cx="250" cy="40" r="5" fill="currentColor" />
             </g>
           ))}
        </motion.svg>
      </div>

      {/* 5. CONTENT LAYER */}
      <div className="relative z-10 px-6 max-w-[100rem] mx-auto flex flex-col justify-between min-h-[60vh]">
         
         {/* TOP ROW: Navigation */}
         <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full">
            
            {/* Tech Spec Left */}
            <div className="font-mono text-[10px] text-[#7fd069]/80 tracking-widest space-y-2 border-l border-[#7fd069]/20 pl-4">
               <p>Lat: 26.6528 S</p>
               <p>Lng: 153.0896 E</p>
               <p className="pt-4 text-white">x(t=0)= <span className="text-[#7fd069] font-bold">Sunshine Coast</span></p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-12 md:gap-24">
               
               {/* COL 1: EXPLORE */}
               <div className="flex flex-col gap-4">
                  <h4 className="font-serif italic text-xl text-[#7fd069]">Explore</h4>
                  {/* Explicit text color added to nav container */}
                  <nav className="flex flex-col gap-2 font-sans text-sm font-medium text-white/70">
                     <TextLink href="/vision">Vision</TextLink>
                     <TextLink href="/values">Values</TextLink>
                     <TextLink href="/technology">Technology</TextLink>
                     <TextLink href="/ecosystem">Ecosystem</TextLink>
                  </nav>
               </div>
               
               {/* COL 2: CONNECT */}
               <div className="flex flex-col gap-4">
                  <h4 className="font-serif italic text-xl text-[#7fd069]">Connect</h4>
                  <nav className="flex flex-col gap-2 font-sans text-sm font-medium text-white/70">
                     <a href="https://instagram.com/ecodia.earth" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#7fd069] transition-colors">
                        Instagram
                     </a>
                     <a href="https://linkedin.com/company/ecodia" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#7fd069] transition-colors">
                        LinkedIn
                     </a>
                     <TextLink href="/contact">Uplink</TextLink>
                  </nav>
               </div>
               
               {/* COL 3: COMPANY */}
               <div className="flex flex-col gap-4">
                  <h4 className="font-serif italic text-xl text-[#7fd069]">Company</h4>
                  <nav className="flex flex-col gap-2 font-sans text-sm font-medium text-white/70">
                     <TextLink href="/legal">Legal & Privacy</TextLink>
                     <TextLink href="/labs">Ecodia Labs</TextLink>
                     <TextLink href="/press">Press Kit</TextLink>
                  </nav>
               </div>

            </div>
         </div>

         {/* MIDDLE: QUOTE */}
         <div className="my-24 md:my-32 text-center max-w-4xl mx-auto">
             <p className="font-sans text-2xl md:text-4xl font-light leading-tight text-white">
               "A system built,<br /> 
               <span className="font-serif italic text-[#7fd069]">to be lived as a world."</span>
             </p>
         </div>

         {/* BOTTOM: LOGO & INPUT */}
         <div className="w-full border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-end">
            
            {/* Input */}
            <div className="flex items-center gap-4 mb-4 md:mb-2">
                <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                <input 
                  type="text" 
                  placeholder="Join the network..." 
                  className="bg-transparent border-none outline-none font-mono text-xs uppercase tracking-widest text-white placeholder:text-white/30 w-48 focus:w-64 transition-all duration-500"
                />
                <button className="text-white hover:text-[#7fd069] transition-colors">
                   →
                </button>
            </div>

            {/* Big Logo */}
            <h1 className="eco-blend-fix font-display font-bold text-[18vw] leading-[0.7] tracking-tighter text-white/10 select-none pointer-events-none translate-y-[10%]">
               ECODIA
            </h1>
         </div>

      </div>

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

// ----------------------------------------------------------------------
// Micro-Components
// ----------------------------------------------------------------------

function TextLink({ href, children }: { href: string, children: React.ReactNode }) {
   return (
      <SmoothLink href={href} className="group relative w-max overflow-hidden">
         {/* Explicit colors to override inherited styles */}
         <span className="block text-white/70 transition-transform duration-500 group-hover:-translate-y-[150%]">
            {children}
         </span>
         <span className="absolute top-0 left-0 block translate-y-[150%] text-[#7fd069] transition-transform duration-500 group-hover:translate-y-0">
            {children}
         </span>
      </SmoothLink>
   );
}