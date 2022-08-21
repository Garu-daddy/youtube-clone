/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: "982px" },
      md: { max: "800px" },
      lg: { max: "600px" },
    },
  },
  plugins: [],
};
