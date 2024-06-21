/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue': '#0C0D2F',
      'primary':'#1766EF',
      'secondary':'#17A6E5',
      'white': '#eef',
      'whiteWhite':'#fff',
      'textWhite':'#C4C4C4',
      'pink': '#ff49db',
      'pink2':'#E49F9F',
      'pink3':'#FCDEDE',
      'orange': '#ff7849',
      'red':'#f22',
      'black':'#235',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    radialGradientColors: {
      'blue-blue2': ['#17A6E5', '#3539AE'],
      // Add more gradients as needed
    }
  },
  plugins: [],
}

