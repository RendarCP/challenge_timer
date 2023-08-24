/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff9d3f',
        hover: '#f38339',
        secondary: '#3ca5fb',
        error: '#ef4444',
      },
    },
  },
  plugins: [],
};
