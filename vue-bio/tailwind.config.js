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
        'custom-dark-purple': '#7c5c6b',
        'custom-bg-green': '#9da984'
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/images/home-background-plant.jpg')",
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}

