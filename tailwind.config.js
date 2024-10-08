/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      transitionProperty: {
        "letter-spacing": "letter-spacing",
      },
      colors: {
        odioGreen: "#4b7b4b",
        odioHover: "#5eec0c",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"], // Remove quotes around the key
      },
    },
  },
  plugins: [],
};
