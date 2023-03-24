/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{html, js}",
  ],
  theme: {
    extend: {
      colors: {
        pry: {
          default: "#031434",
          darkblue: "#0B2253",
          indigo: "#303B54",
          blue: "#0A74DC",
          grey1: "#434854",
          grey2: "#737373",
          grey3: "#A4A7B7",
        },
      },
      backgroundColor: {
        default: "#031434",
        blue: "#0A74DC",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        grey: "#A4A7B7",
        blue: "#0A74DC",
      },
      boxShadow: {
        custom: "0px 2px 6px rgba(229, 229, 229, 0.3)",
        deep: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        xs: "200px",
      },
    },
  },
  plugins: [],
};
