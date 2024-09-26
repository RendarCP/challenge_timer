/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
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
      xs: '320px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '1024px',
      // => @media (min-width: 1024px) { ... }
      lg: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ff9d3f',
          secondary: '#3200ff',
          accent: '#00c179',
          neutral: '#001a0c',
          'base-100': '#242823',
          info: '#00e1ff',
          success: '#00b15a',
          warning: '#ffab00',
          error: '#ff4870',
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
