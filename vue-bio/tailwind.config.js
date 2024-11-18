/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
           './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-grey': '#2c3e50',
        'custom-purple': '#be808b',
        'custom-green': '#225043',
        'custom-light-green': '#527231',
        'custom-dark-purple': '#7c5c6b'
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/images/home-background-plant.jpg')",
      },
    },
  },
  plugins: [],
}

