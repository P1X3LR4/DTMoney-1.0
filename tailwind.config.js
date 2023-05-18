/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dtmoney-purple': {
          50: '#edeeff',
          100: '#dee0ff',
          200: '#c3c5ff',
          300: '#a09fff',
          400: '#8478ff',
          500: '#7358fc',
          600: '#673af1',
          700: '#5429cc',
          800: '#4927ac',
          900: '#3d2887',
          950: '#26174f',
        },
        'dtmoney-gray': {
          50: '#f7f7f7',
          100: '#f0f0f0',
          200: '#dbdbdb',
          300: '#bdbdbd',
          400: '#999999',
          500: '#7a7a7a',
          600: '#636363',
          700: '#525252',
          800: '#4a4a4a',
          900: '#3d3d3d',
          950: '#292929',
        },
        'dtmoney-green': {
          50: '#edfcf5',
          100: '#d2f9e5',
          200: '#aaf0d0',
          300: '#72e3b7',
          400: '#33cc95',
          500: '#16b380',
          600: '#0a9168',
          700: '#087456',
          800: '#095c45',
          900: '#084c3a',
          950: '#032b21',
        },
        'dtmoney-red': {
          50: '#fff1f1',
          100: '#ffe4e5',
          200: '#fecdd1',
          300: '#fea3a9',
          400: '#fc707d',
          500: '#f63d54',
          600: '#e62e4d',
          700: '#c01032',
          800: '#a01131',
          900: '#891231',
          950: '#4d0415',
        },
      },
    },
  },
  plugins: [],
};
