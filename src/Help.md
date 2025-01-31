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
        Inter: ["Inter", "sans-serif"],
        Helvetica: ["Helvetica", "sans-serif", "cursive"],
        greatvibes: ["Great Vibes", "cursive"],        
      },
      colors: {
        brand: {
          DEFAULT: "#FF9F0D", // Yellow Primary brand color
          light: "#FFC85A", // Yellow Lighter shade
          dark: "#CC7E09", // Yellow Darker shade
          contrast: "#ffffff", // White Contrast color for text/icons
        },
        secondary: {
          DEFAULT: "#0057A1", // Main secondary color
          light: "#1A7DCE", // Lighter shade of secondary
          dark: "#003C70", // Darker shade of secondary
          contrast: "#ffffff", // White Contrast color for text/icons
        },
        base: {
          DEFAULT: "#0D0D0D", // Base color
          light: "#f0f0f0", // Lighter shade of base
          dark: "#000000", // Darker shade of base
          contrast: "#ffffff", // White Contrast color for text/icons
        },
        statecolors: {
          Info: "#2F80ED", // Main secondary color
          Success: "#27AE60", // Lighter shade of secondary
          Warning: "#E2B93B", // Darker shade of secondary
          Error: "#EB5757", // Contrast color for text/icons
        },
        accent: {
          DEFAULT: "#A10DF0", // Accent color for highlights
          light: "#C883F4", // Lighter shade of accent
          dark: "#7807B8", // Darker shade of accent
        },
        neutral: {
          light: "#F4F4F4", // Backgrounds
          dark: "#212121", // Dark mode or text
        },
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
