import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--color-background)",
          dark: "var(--color-background-dark)",
        },
        foreground: "var(--color-foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
      },
      fontFamily: {
        heading: [
          "var(--font-roboto-flex)",
          {
            fontVariationSettings: '"wght" 800, "wdth" 150',
          },
        ],
        regular: [
          "var(--font-roboto-flex)",
          {
            fontVariationSettings: '"wght" 400, "wdth" 75',
          },
        ],
        bold: [
          "var(--font-roboto-flex)",
          {
            fontVariationSettings: '"wght" 800',
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
