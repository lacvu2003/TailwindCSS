/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'./components/**/*.{html,js}',
  './pages/**/*.{html,js}',
  './public/index.html'],
  theme: {
    extend: {
      height:{
        custom: "620px",
      }
    },
  },
  plugins: [],
}

