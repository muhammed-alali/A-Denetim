import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "280px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        SiteColor: "#1e73be",
        Desc: "#5f5f5f",
        Title: "#1b1d21",
      },
      filters: {
        filter:
          "brightness(100%)_contrast(100%)_saturate(0%)_blur(0px)_hue-rotate(0deg)",
      },
      boxShadow: {
        shadow1:
          " rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;",
      },
    },
  },
  plugins: [],
};
export default config;
