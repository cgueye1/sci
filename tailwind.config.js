/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      width: {
        'card': '211px' 
        
      },
      height: {
        'card': '200px'
      },
      borderRadius: {
        'card': '20px'
      },
      colors: {
        'sci-dark': '#222222',
        'sci-text': '#333333',
        'sci-text-light': '#505050',
        'sci-bg': '#f8f9fa'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    }
  },
  animation: {
    'slide-left': 'slideLeft 15s linear infinite',
    'fade-in': 'fadeIn 0.5s ease-in-out',
  },
  keyframes: {
    slideLeft: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-100%)' },
    },
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    }
  },
  plugins: []
}
