/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
           './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-grey': '#2c3e50'
      }
    },
  },
  plugins: [],
}

