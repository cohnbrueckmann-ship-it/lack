import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1d1d1f",
        mute: "#6e6e73",
        mist: "#f5f5f7",
        line: "#d2d2d7",
        accent: { DEFAULT: "#0071e3", dark: "#0058b0" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "SF Pro Display", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: { tightest: "-0.035em" },
      borderRadius: { "4xl": "2rem" },
    },
  },
  plugins: [],
};
export default config;
