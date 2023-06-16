/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'tqred':'#C60038',
        'tqblue':'#1D2345'
      }
    },
  },
  plugins: [],
}