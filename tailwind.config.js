/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logo: "#f1d089",
      },
      fontFamily: {
        courgette: ["Courgette", "Arial", "sans-serif"],
        rubik: ["Rubik", "Arial", "sans-serif"],
        quicksand: ["Quicksand", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
