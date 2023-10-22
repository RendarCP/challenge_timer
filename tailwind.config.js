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
    screens: {
      'xs': '320px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '1024px',
      // => @media (min-width: 1024px) { ... }
      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
