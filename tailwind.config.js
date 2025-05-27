/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          50: '#EBF2FE',
          100: '#DCEAFG',
          200: '#BAD6FB',
          300: '#98C1F9',
          400: '#76ADF7',
          500: '#3B82F6',
          600: '#0B61EE',
          700: '#084BBC',
          800: '#06368A',
          900: '#042158'
        }
      }
    },
  },
  plugins: [],
};