/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      transitionProperty: {
        "letter-spacing": "letter-spacing",
      },
      colors: {
        odioGreen: "#4b7b4b",
        odioHover: "#5eec0c",
        odioHoveronHover: "#F2A900",
        odioWhite: "#dcdad7",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        robotoMono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
