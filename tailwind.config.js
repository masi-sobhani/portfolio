/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Vazirmatn', 'sans-serif'],
        'farsi': ['Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 