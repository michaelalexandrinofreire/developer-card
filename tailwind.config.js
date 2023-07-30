/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      syne: ['Syne', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    colors:{
      orange: '#FA817C',
      red: '#FA817C',
      yellow: '#FBE77D',
      blue: "#62B8FD",
      purple: '#B2AAE9',
      purglebg: '#BEC1D5',
      pink: '#E7AAE9',
      green: '#B2E9AA',
    },
    extend: {},
  },
  plugins: [],
}