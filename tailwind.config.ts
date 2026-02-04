import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Ensure this covers the biosphere folder
  ],
  theme: {
    extend: {
      colors: {
        // Map the Biome variables to Tailwind aliases
        "primary-bg": "var(--bg-primary)",
        "primary-text": "var(--text-primary)",
        "accent-color": "var(--accent-color)",
        // Keep your existing custom ones
        mint: "var(--mint)",
        gold: "var(--gold)",
        forest: "var(--forest)",
        ink: "var(--ink)",
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;