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
          blue: "#0A74DC",
          grey1: "#434854",
          grey2: "#737373",
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
      screens: {
        xs: "200px",
      },
    },
  },
  plugins: [],
};
