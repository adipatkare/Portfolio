/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./dist/**/*.{html,js}",
    "./dist/pages/*.html",
    "./dist/js/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

