import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],  // ✅ Use lowercase key
        helvetica: ["var(--font-helvetica)", "sans-serif"],
        greatvibes: ["var(--font-great-vibes)", "cursive"],  
      },     
      colors: {
        brand: {
          DEFAULT: "#FF9F0D", // Yellow Primary brand color
          light: "#FFC85A", // Yellow Lighter shade
          dark: "#CC7E09", // Yellow Darker shade
          contrast: "#ffffff", // White Contrast color for text/icons
        },
        secondary: {
          DEFAULT: "#0057A1",
          light: "#1A7DCE",
          dark: "#003C70",
          contrast: "#ffffff",
        },
        base: {
          DEFAULT: "#0D0D0D",
          light: "#f0f0f0",
          dark: "#000000",
          contrast: "#ffffff",
        },
        statecolors: {
          info: "#2F80ED",
          success: "#27AE60",
          warning: "#E2B93B",
          error: "#EB5757",
        },
        accent: {
          DEFAULT: "#A10DF0",
          light: "#C883F4",
          dark: "#7807B8",
        },
        neutral: {
          light: "#F4F4F4",
          dark: "#212121",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
