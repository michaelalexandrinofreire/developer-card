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
        syn: ['Syncopate', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        orange1: '#FCB775',
        red1: '#FA817C',
        yellow1: '#FBE77D',
        blue1: "#62B8FD",
        purple1: '#B2AAE9',
        purglebg: '#BEC1D5',
        pink1: '#E7AAE9',
        green1: '#B2E9AA',
        transparent: 'rgba(0, 0, 0, 0.0)',
      },
    },
  },
  plugins: [],
}