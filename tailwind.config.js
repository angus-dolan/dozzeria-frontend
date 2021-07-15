const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      primary: {
        '50': '#FFE4EA',
        '100': '#FFBBCB',
        '200': '#FF8FA9',
        '300': '#FF5F87',
        '400': '#FF386C',
        '500': '#FE0352',
        '600': '#ED0051',
        '700': '#D8004E',
        '800': '#C4004D',
        '900': '#A20049',
      },
      gray: {
        '50': '#F8F8FA',
        '100': '#F0F1F2',
        '200': '#E6E7E9',
        '300': '#D6D6D8',
        '400': '#B1B2B4',
        '500': '#919294',
        '600': '#696A6B',
        '700': '#565758',
        '800': '#38383A',
        '900': '#181819',
      },
      ui: {
        light: {
          '50': '#FFFFFF',
          '100': '#F8F8FA', // gray.50
          '200': '#F0F1F2', // gray.100
          '300': '#E6E7E9', // gray.200
          '400': '#D6D6D8', // gray.300
          '500': '#919294', // gray.500
        },
        dark: {
          '50': '#1B1C21',
          '100': '#15161A',
          '200': '#232429',
          '300': '#2E313B',
          '400': '#43444B',
          '500': '#5A5B63',
        },
      },
      // test: {
      //     '50': '',
      //     '100': '',
      //     '200': '',
      //     '300': '',
      //     '400': '',
      //     '500': '',
      //     '600': '',
      //     '700': '',
      //     '800': '',
      //     '900': '',
      // },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
