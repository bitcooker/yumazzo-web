/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bai-jamjuree': ["Bai Jamjuree", ...defaultTheme.fontFamily.sans],
        'helvetica-neue': ["Helvetica Neue", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'yumazzo-neutral': {
          '100': '#0D1119',
          '90': '#131823',
          '80': '#171F2F',
          '70': '#1D2A43',
          '60': '#7185AA',
          '50': '#8C92AB',
          '40': '#A6ACC4',
          '30': '#C1C7DE',
          '20': '#D9DDEA',
          '10': '#F0F2F6',
        },
      }
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
}
