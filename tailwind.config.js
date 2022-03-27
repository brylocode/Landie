module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    fontSize: {
      sm: ['12px', '18px'],
      md: ['14px', '24px'],
      base: ['16px', '26px'],
      xl: ['18px', '30px'],
      '2xl': ['26px', '38px'],
      '3xl': ['36px', '48px'],
      '4xl': ['50px', '66px'],
    },
    screens: {
      'tablet': '768px',
      'desktop': '1024px'
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'primary': '#37447E',
      'gray': {
        400: '#939EA4',
        600: '#5D6970',
        700: '#454E54'
      },
      'blue': {
        100: '#E7ECFF',
        300: '#929ECC',
        400: '#6F7CB2',
        500: '#505F98',
        600: '#37447E',
        700: '#222F65',
        800: '#111B47',
        900: '#091133'
      }
    },
    extend: {},
  },
  plugins: [],
}