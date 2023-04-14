/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gainsboro: { "100": "#e6e6e6", "200": "#d9d9d9" },
        gray: { "100": "#121315", "200": "rgba(0, 0, 0, 0.25)" },
        whitesmoke: "#f5f4f0",
        lightslategray: "#8a90a0",
        white: "#fff",
      },
      fontFamily: {
        cambay: "Cambay",
        "atkinson-hyperlegible": "'Atkinson Hyperlegible'",
      },
    },
    fontSize: {
      "77xl": "96px",
      "4xl": "23px",
      "9xl": "28px",
      "6xl": "25px",
      "13xl": "32px",
    },
  },
  corePlugins: { preflight: false },
};
