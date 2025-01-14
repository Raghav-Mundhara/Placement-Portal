/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Update paths to match your project structure
  theme: {
    extend: {},
  },
  plugins: [],
};