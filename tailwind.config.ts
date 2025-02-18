import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        titleShadow: "0 35px 35px rgba(0, 0, 0, 20)",
      },
      colors: {
        entrustBlue: "#004F81",
        ctaborderColor: "rgba(0, 79, 129, 0.38)",
        entrustSubtleWhite: "#f5f5f5",
        entrustBannerFadeBlue: "#0056b30f",
        cardBordergrey: "rgba(141, 141, 141, 0.31)",
      },
      backgroundImage: {
        homeBanner: "url(/images/homeHeroBanner.webp)",
        shipperlineragencyBanner: "url(/images/shipperlineragencybanner.webp)",
      },
    },
  },
  plugins: [],
} satisfies Config;
