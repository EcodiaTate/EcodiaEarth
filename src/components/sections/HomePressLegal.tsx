// src/components/sections/HomeLegalPress.tsx (Absolute Transparency Statement)
"use client";

import Link from "next/link";

const DOCUMENTATION = [
    { title: "Public Manifest", desc: "The foundational declaration of intent and scope.", link: "/manifest" },
    { title: "Data Model", desc: "Documentation on data collection, privacy, and sovereignty.", link: "/data-model" },
    { title: "Governance Stack", desc: "The current model for decision-making and system evolution.", link: "/governance" },
    { title: "Press Desk", desc: "Factual resources and contact for journalists.", link: "/press" },
];

export function HomePressLegal() {
    const DEEP_JADE = '#1a5246'; // Base color (Behind the glass)
    const BRIGHT_GOLD = '#f4d35e'; // Highlight / Statement
    const PURE_WHITE = '#ffffff'; // Glass/Reflective element

    return (
        // Section is now deep jade, but acts as the background for the glass panel
        <section className="relative w-full py-24 md:py-40 px-4 md:px-8 text-white overflow-hidden" style={{ backgroundColor: DEEP_JADE }}>
            
            {/* Structural Background Blur/Light Source - Remains for glow effect */}
            <div className="absolute top-0 left-1/2 w-full h-1/2 bg-white/10 opacity-50 blur-3xl rounded-full transform -translate-x-1/2" />
            
            <div className="mx-auto max-w-7xl relative z-10">

                {/* --- BOLD STATEMENT HEADER (Hollow/Transparent Text) --- */}
                <header className="mb-12 md:mb-20 max-w-4xl border-b-2 border-white/30 pb-4">
                    <p className="font-mono text-lg uppercase tracking-[0.4em] text-white/90 mb-4">
                        SYSTEM ARCHIVE / OPEN ACCESS
                    </p>
                    
                    {/* The BOLD, Transparent Statement */}
                    <h2 className="font-display text-5xl sm:text-7xl tracking-tighter leading-[1.05]">
                        <span className="text-transparent" style={{ 
                            WebkitTextStroke: `2px ${BRIGHT_GOLD}`, // Gold Outline
                            textShadow: `0 0 5px rgba(255, 255, 255, 0.4)` // Subtle white inner glow
                        }}>
                           OPENNESS
                        </span>
                        <span className="block" style={{ color: PURE_WHITE }}>
                            IS THE MECHANISM.
                        </span>
                    </h2>
                </header>

                {/* --- REFRACTION PANEL (The main visual element) --- */}
                {/* Single, massive glass panel containing all links */}
                <div 
                    className="w-full p-6 md:p-12 shadow-2xl border-4 border-white/50 backdrop-blur-xl" 
                    style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.08)', // Very light, translucent glass
                        borderRadius: '20px', 
                        boxShadow: `0 0 20px rgba(255, 255, 255, 0.1), 0 0 80px ${BRIGHT_GOLD}20` // Refined gold glow
                    }}
                >
                    {/* Panel Title */}
                    <p className="font-mono text-sm uppercase tracking-widest text-white/70 mb-8 border-b border-white/30 pb-2">
                        // All structural documentation is visible through this layer.
                    </p>

                    {/* Documentation Grid within the Panel */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {DOCUMENTATION.map((doc, index) => (
                            <Link 
                                key={index} 
                                href={doc.link}
                                // Links are just outlines on the glass panel
                                className="block relative p-4 border-b border-white/40 pb-6 transition-colors duration-300
                                           md:border-b-0 md:border-r md:pr-6 md:pb-4 md:h-full"
                                style={{ 
                                    borderRightColor: index % 2 === 0 ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
                                    borderBottomColor: index >= DOCUMENTATION.length - 2 ? 'transparent' : 'rgba(255, 255, 255, 0.4)'
                                }}
                            >
                                {/* Gold Module Kicker */}
                                <span className="font-mono text-xs uppercase tracking-widest block mb-2"
                                    style={{ color: BRIGHT_GOLD }}
                                >
                                    AUDIT_MODULE_0{index + 1}
                                </span>
                                
                                <h3 className="font-display text-2xl md:text-3xl tracking-tight text-white">
                                    {doc.title}
                                </h3>
                                <p className="mt-2 text-base text-white/70">
                                    {doc.desc}
                                </p>
                                
                                {/* Access Indicator */}
                                <span className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-white/60">
                                    VIEW FILE
                                    <span className="text-xl inline-block font-extrabold" style={{ color: BRIGHT_GOLD }}>
                                        →
                                    </span>
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Footer Lock/CTA */}
                    <div className="mt-12 pt-6 border-t border-white/30 text-center">
                        <Link href="/press" 
                              className="font-mono text-sm uppercase tracking-[0.3em] text-white/90 underline underline-offset-4 decoration-white/50"
                        >
                            <span className="text-sm tracking-widest">// ACCESS PRESS DESK DIRECTLY</span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}