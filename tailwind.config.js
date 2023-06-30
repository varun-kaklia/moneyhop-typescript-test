/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#6440FB',
        secondary:'#1A064F',
        textColor:'#4F547B'
      }
    },
  },
  plugins: [],
}