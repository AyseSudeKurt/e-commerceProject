/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'navbar-light': "url('/images/navbar-light.png')",
        'navbar-dark': "url('/images/navbar-dark.png')",
        'carousel': "url('/images/carousel.jpg')",
        'cover1': "url('/images/cover1.jpg')",

      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#252B42',
        'w1': '#DEDEDE',
        'main-blue': '#23A6F0',
      },
    },
  },
  plugins: [],
}
