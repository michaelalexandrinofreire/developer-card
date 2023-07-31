/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        syne: ['Syne', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        orange: '#FCB775',
        red: '#FA817C',
        yellow: '#FBE77D',
        blue1: "#62B8FD",
        purple: '#B2AAE9',
        purglebg: '#BEC1D5',
        pink: '#E7AAE9',
        green: '#B2E9AA',
        transparent: 'rgba(0, 0, 0, 0.0)',
      },
    },
  },
  plugins: [],
}