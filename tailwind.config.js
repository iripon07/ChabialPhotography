/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        chabialTheme: {
          primary: "#2A0944",
          secondary: "#3FA796",
          accent: "#FEC260",
          neutral: "#A10035",
          "base-100": "#ffffff",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}
