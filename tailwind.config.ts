/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#99A9C2",
          100: "#F5F8FF",
          200: "#CCD4E5",
          225: "#B3BFCF",
          250: "#99A9C2",
          275: "#7F8FA3",
          285: "#677EB2",
          295: "#5F6679",
          300: "#324163",
          325: "#2B2C35",
          350: "#1F1F2A",
          400: "#1B2633",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
      screens: {
        xs: "320px",
        xs1: "420px",
        xs2: "560px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xl2: "1536px",
      },
    },
  },
  plugins: [],
};
