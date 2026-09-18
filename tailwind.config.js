/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6EC",
        pine: { DEFAULT: "#0C4A2A", deep: "#073018" },
        brandblue: "#1D6FE0",
        leaf: "#8CC63F",
        mint: "#DFF2E3",
        ocean: "#0B5CAD",
      },
      fontFamily: { sans: ["Outfit", "sans-serif"] },
    },
  },
  plugins: [],
};
