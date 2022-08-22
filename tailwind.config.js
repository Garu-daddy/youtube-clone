/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xl: { max: "1270px" },
      sm: { max: "982px" },
      md: { max: "800px" },
      lg: { max: "630px" },
      min: { min: "1271px" },
    },
  },
  plugins: [],
};
