/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        grass: { DEFAULT: "#1FA84F", deep: "#0D7A36", night: "#073018", mist: "#EFFBF2" },
        aqua: "#22D3EE",
      },
      fontFamily: { sans: ['"Baloo 2"', "cursive"], script: ["Caveat", "cursive"] },
    },
  },
  plugins: [],
};
