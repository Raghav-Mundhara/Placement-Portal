// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   darkMode: 'class', // Enables class-based dark mode
//   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Update paths to match your project structure
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };



module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Update paths to match your project structure
  theme: {
    extend: {
      animation: {
        "scroll-reverse": "scroll-reverse 20s linear infinite",
      },
      keyframes: {
        "scroll-reverse": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [],
};