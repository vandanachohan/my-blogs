// tailwind.config.js
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // Dynamic background from CSS variable
        foreground: "var(--foreground)",  // Dynamic foreground from CSS variable
        red: {
          600: "#e11d48",  // Custom Red Color
        },
        black: {
          DEFAULT: "#000000",  // Custom Black Color
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
