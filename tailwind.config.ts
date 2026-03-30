import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Brand Colors ──────────────────────────────────────────────
      colors: {
        brand: {
          primary:   "#6366F1", // indigo
          light:     "#818CF8",
          dim:       "#312E81",
          accent:    "#F59E0B", // amber
          "accent-light": "#FCD34D",
        },
        surface: {
          bg:     "#08080C",
          base:   "#111118",
          card:   "#16161F",
          raised: "#1E1E2A",
          border: "#2A2A3E",
        },
        ink: {
          primary:   "#F1F1F5",
          secondary: "#A1A1BB",
          muted:     "#6B6B8A",
        },
        light: {
          bg:      "#F8F8FC",
          card:    "#FFFFFF",
          border:  "#E4E4F0",
          muted:   "#6B6B8A",
        },
      },

      // ── Typography ────────────────────────────────────────────────
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["72px", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-xl":  ["56px", { lineHeight: "1.15", letterSpacing: "-0.025em" }],
        "display-lg":  ["48px", { lineHeight: "1.2",  letterSpacing: "-0.02em" }],
        "display-md":  ["40px", { lineHeight: "1.2",  letterSpacing: "-0.015em" }],
        "display-sm":  ["32px", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-lg":  ["28px", { lineHeight: "1.35" }],
        "heading-md":  ["24px", { lineHeight: "1.4"  }],
        "heading-sm":  ["20px", { lineHeight: "1.45" }],
        "body-lg":     ["18px", { lineHeight: "1.7"  }],
        "body-md":     ["16px", { lineHeight: "1.7"  }],
        "body-sm":     ["14px", { lineHeight: "1.6"  }],
        "label":       ["13px", { lineHeight: "1.5", letterSpacing: "0.06em" }],
      },

      // ── Spacing & Sizing ──────────────────────────────────────────
      maxWidth: {
        content: "1200px",
        prose:   "720px",
      },

      // ── Border Radius ─────────────────────────────────────────────
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      // ── Gradients & Backgrounds ───────────────────────────────────
      backgroundImage: {
        "brand-gradient":  "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)",
        "hero-gradient":   "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(99,102,241,0.25) 0%, transparent 60%)",
        "card-gradient":   "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.04) 100%)",
        "cta-gradient":    "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #C026D3 100%)",
      },

      // ── Shadows ───────────────────────────────────────────────────
      boxShadow: {
        "glow-sm":  "0 0 20px rgba(99,102,241,0.15)",
        "glow-md":  "0 0 40px rgba(99,102,241,0.2)",
        "glow-lg":  "0 0 60px rgba(99,102,241,0.25)",
        "card":     "0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.5), 0 0 24px rgba(99,102,241,0.15)",
      },

      // ── Animations ────────────────────────────────────────────────
      keyframes: {
        "float-1": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%":      { transform: "translateY(-24px) scale(1.04)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%":      { transform: "translateY(16px) scale(0.97)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "float-1": "float-1 7s ease-in-out infinite",
        "float-2": "float-2 9s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        "shimmer": "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
