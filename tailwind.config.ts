import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/styles/**/*.{ts,tsx,css}", // if you have any
  ],
  theme: { 
    extend: {
      colors: {
        mint: "var(--mint)",
        gold: "var(--gold)",
        forest: "var(--forest)",
        darkForest: "var(--dark-forest)", // Use camelCase or kebab-case here
        ink: "var(--ink)",
        bg: "var(--bg)",
        muted: "var(--muted)",
        border: "var(--border)",
        gem: "var(--gem)", // Keeping gem just in case

    }
    }
   },
  plugins: [],
} satisfies Config;
