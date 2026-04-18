import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        bg: "#030712",
        surface: "#0a0f1e",
        card: "#0d1426",
        border: "#1a2540",
        cyan: {
          DEFAULT: "#00d4ff",
          dim: "#00d4ff22",
          glow: "#00d4ff44",
        },
        violet: {
          DEFAULT: "#7c3aed",
          dim: "#7c3aed22",
        },
        neon: "#39ff14",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 3s linear infinite",
        "glitch": "glitch 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        glitch: {
          "0%, 100%": { textShadow: "2px 0 #00d4ff, -2px 0 #7c3aed" },
          "25%": { textShadow: "-2px 0 #00d4ff, 2px 0 #7c3aed" },
          "50%": { textShadow: "2px 2px #00d4ff, -2px -2px #7c3aed" },
          "75%": { textShadow: "-2px 2px #00d4ff, 2px -2px #7c3aed" },
        },
      },
      boxShadow: {
        "cyan-glow": "0 0 20px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.1)",
        "violet-glow": "0 0 20px rgba(124,58,237,0.3), 0 0 60px rgba(124,58,237,0.1)",
        "card-hover": "0 20px 60px rgba(0,212,255,0.15), inset 0 1px 0 rgba(0,212,255,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
