import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/styles/**/*.{ts,tsx,css}", // if you have any
  ],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
