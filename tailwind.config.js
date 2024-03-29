/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      PermanentMarker: ["Permanent Marker", "cursive"],
      RacingSans: ["Racing Sans One", "cursive"],
      AlumniSans: ["Alumni Sans", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
