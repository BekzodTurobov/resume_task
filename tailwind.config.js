/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      mont: ['"Montserrat"', "sans-serif"],
    },
  },
  extend: {
    maxWidth: {
      "3xl": "700px",
    },
  },
  plugins: [],
};
