/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'media',
  theme: {
    screens: {
      'sm': {'max': '450px'},
      'normal': {'max' : '800px'},
      'rest': {'min': '1000px'},
      'add': {'max': '1320px'}
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      logo: ['Pacifico']
    },
    extend: {},
  },
  plugins: [],
};
