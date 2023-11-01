import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-hidroponik": "url('/img/Hero.jpg')",
      },
      colors: {
        Brown2: "#5D2410",
        Green: "#61876E",
        Yellow: "#FFCF7B",
        Cream: "#EDE1D1",
        BB: "#3A240D",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
