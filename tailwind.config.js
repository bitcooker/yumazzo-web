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
        'yumazzo-container': {
          '50': '#f4f7f9',
          '100': '#dbe3ec',
          '200': '#b6c8d9',
          '300': '#8aa2be',
          '400': '#617da0',
          '500': '#476185',
          '600': '#374c6a',
          '700': '#2f3e56',
          '800': '#293446',
          '900': '#252e3c',
          '950': '#0d1119',
        },
        'yumazzo-red': {
          '50': '#fff0f4',
          '100': '#ffdde5',
          '200': '#ffc0cf',
          '300': '#ff94ae',
          '400': '#ff577f',
          '500': '#ff2358',
          '600': '#ff003d',
          '700': '#d70033',
          '800': '#b1032d',
          '900': '#920a2b',
          '950': '#500013',
        },
        'yumazzo-green': {
          '50': '#f4ffe4',
          '100': '#e4ffc5',
          '200': '#caff92',
          '300': '#a7ff53',
          '400': '#84fb20',
          '500': '#6cf600',
          '600': '#4ab500',
          '700': '#398902',
          '800': '#2f6c08',
          '900': '#2a5b0c',
          '950': '#123300',
        }
      }
    },
  },
  plugins: [],
}
