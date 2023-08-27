/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{hmtl,js,vue}'],
  theme: {
    extend: {},
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1240px',
        '2xl': '1320px',
      },
    }
  },
  plugins: [],
}

