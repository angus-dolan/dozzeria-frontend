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
      red: {
        '50': '#FBE5EA',
        '100': '#F6BECB',
        '200': '#F095A9',
        '300': '#EA6D88',
        '400': '#E35470',
        '500': '#DD425A',
        '600': '#CD3D57',
        '700': '#B73853',
        '800': '#A3324F',
        '900': '#7D2A47',
      },
      green: {
        '50': '#E8F5E9',
        '100': '#C8E6C9',
        '200': '#A5D6A7',
        '300': '#81C784',
        '400': '#66BB6A',
        '500': '#4CAF50',
        '600': '#43A047',
        '700': '#388E3C',
        '800': '#2E7D32',
        '900': '#1B5E20',
      },
      light: {
        'high-emphasis': 'rgba(255,255,255, 1)', // white @ 100%
        'medium-emphasis': 'rgba(255,255,255, 0.7)', // white @ 70%
        'low-emphasis': 'rgba(255,255,255, 0.42)', // white @ 42%
        'disabled': 'rgba(255,255,255, 0.32)', // white @ 32%
      },
      dark: {
        'high-emphasis': 'rgba(24,24,25,0.9)', // gray.900 @ 90%
        'medium-emphasis': 'rgba(24,24,25,0.7)', // gray.900 @ 70%
        'low-emphasis': 'rgba(24,24,25,0.42)', // gray.900 @ 42%
        'disabled': 'rgba(24,24,25,0.32)', // gray.900 @ 32%
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
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',  
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700')
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.500'),
            h1: {
              color: theme('colors.light.high-emphasis')
            },
            h2: {
              color: theme('colors.light.high-emphasis')
            },
            h3: {
              color: theme('colors.light.high-emphasis')
            },
            h4: {
              color: theme('colors.light.high-emphasis')
            },
            h5: {
              color: theme('colors.light.high-emphasis')
            },
          }
        }
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark']
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
