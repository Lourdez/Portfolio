/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0a0e17",
        "bg-secondary": "#111827",
        "bg-card": "#1a2234",
        accent: "#00d4aa",
        "accent-dim": "#00d4aa33",
        "accent-glow": "#00d4aa22",
        "text-primary": "#e2e8f0",
        "text-secondary": "#94a3b8",
        "text-muted": "#64748b",
        border: "#1e293b",
        "border-accent": "#00d4aa44",
      },
      fontFamily: {
        mono: ["SF Mono", "Fira Code", "Cascadia Code", "Consolas", "monospace"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
}
