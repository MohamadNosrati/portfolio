import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "1194px",
        md: "1194px",
        lg: "1194px",
        xl: "1194px",
        "2xl": "1194px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",

        foreground: "var(--foreground)",

        card: "var(--card)",

        border: "var(--border)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
      },
    },
  },
};

export default config;
