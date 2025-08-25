/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'raj-orange': '#f97316',
        'raj-teal': '#14b8a6',
      },
      fontFamily: {
        teko: ['Teko', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
    plugins: [],
}
