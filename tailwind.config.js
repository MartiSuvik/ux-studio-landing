/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        "primary-foreground": "#FFFFFF",
        "background-light": "#FFFFFF",
        "background-dark": "#111827",
        "surface-light": "#F9FAFB",
        "surface-dark": "#1F2937",
        destructive: "#ef4444",
        "destructive-foreground": "#f8fafc",
        secondary: "#f1f5f9",
        "secondary-foreground": "#0f172a",
        accent: "#f1f5f9",
        "accent-foreground": "#0f172a",
        input: "#e2e8f0",
        ring: "#3B82F6",
        // Shadcn compatibility
        background: "#FFFFFF",
        foreground: "#111827",
        card: "#FFFFFF",
        "card-foreground": "#111827",
        popover: "#FFFFFF",
        "popover-foreground": "#111827",
        muted: "#F3F4F6",
        "muted-foreground": "#6B7280",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        "autoplay-progress": "autoplay-progress 1s linear infinite",
      },
      keyframes: {
        "autoplay-progress": {
          "0%": { transform: "translate3d(-100%, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
}
