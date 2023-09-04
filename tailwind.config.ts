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
          DEFAULT: "#CCD4cEc5",
          50: "#eff0f5",
          100: "#eff0f5",
          200: "#eff0f5",
          225: "#eff0f5",
          250: "#eff0f5",
          275: "#eff0f5",
          285: "#1d1f2f",
          295: "#1d1f2f",
          300: "#1d1f2f",
          325: "#1d1f2f",
          350: "#1d1f2f",
          400: "#1B2633",
          atitude: "#0F4081",
        },
        "secondary-beige": "#EDE6D3",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
        "about-bg": "url('/about-bg.png')",
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
