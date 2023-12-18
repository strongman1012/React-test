/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,jsx}"],
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
      }
    },
  },
  plugins: [],
}

