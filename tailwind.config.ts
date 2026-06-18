import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ["var(--font-headline)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        yellow: "#FFE500",
        purple: "#7B2FFF",
        green: "#00FF85",
        black: "#0A0A0A",
        offwhite: "#F5F5F0",
      },
      boxShadow: {
        brutal: "4px 4px 0px #0A0A0A",
        "brutal-lg": "6px 6px 0px #0A0A0A",
        "brutal-sm": "2px 2px 0px #0A0A0A",
      },
    },
  },
  plugins: [],
};

export default config;
