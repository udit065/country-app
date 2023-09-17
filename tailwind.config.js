/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      mobile: { max: "599px" },
      tablet: { 'min': '600px', 'max': "1023px" },
      laptop: { min: '1024px' },
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode
}
