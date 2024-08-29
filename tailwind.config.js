/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logo: "#f1d089",
        menuBackground: "#420101",
      },
      fontFamily: {
        courgette: ["Courgette", "Arial", "sans-serif"],
        rubik: ["Rubik", "Arial", "sans-serif"],
        quicksand: ["Quicksand", "Arial", "sans-serif"],
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "860px",
        // => @media (min-width: 960px) { ... }

        lg: "1240px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
