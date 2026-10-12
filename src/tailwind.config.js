 /** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#16c637",
        darkBg: "#070d18",
        darkCard: "#111a2a",
      },
    },
  },

  plugins: [],
};