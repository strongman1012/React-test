/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,jsx}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Lexend', 'sans-serif']
      },
      spacing: {
        sm: '24px',
        md: '120px',
        lg: '120px'
      },
      colors: {
        primary: '#1D80D4'
      },
      width: {
        primary: '534px',
        secondary: '223px'
      }
    },
  },
  plugins: [],
}

