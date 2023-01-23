/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        footer: 'Montserrat',
      },
    },
    keyframes: {
      load: {
        '100%': {
          transform: 'translateX(300%)',
        },
      },
    },
    animation: {
      loading: 'load 3s ease-in-out infinite',
    },
  },
  plugins: [],
};
