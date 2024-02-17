const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['_site/**/*.html'],
  safelist: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'persian-blue': '#1c3dc2',
        blumine: '#1f4980'
      }
    },
  },
  plugins: [],
}
