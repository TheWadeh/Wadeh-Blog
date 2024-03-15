/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",
        secondary: "#FFC107",
        accent: "#7F9CF5",
        dark: "#333333",
        light: "#F9FAFB",
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
