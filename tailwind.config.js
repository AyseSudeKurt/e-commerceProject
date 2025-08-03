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
        'cover2': "url('/images/cover2.jpg')",
        'cover3': "url('/images/cover3.jpg')",
        'cover4': "url('/images/cover4.jpg')",
        'b1': "url('/images/b1.jpg')",
        'b2': "url('/images/b2.jpg')",
        'b3': "url('/images/b3.jpg')",
        'b4': "url('/images/b4.jpg')",
        'b5': "url('/images/b5.jpg')",
        'b6': "url('/images/b6.jpg')",
        'b7': "url('/images/b7.jpg')",
        'b8': "url('/images/b8.jpg')",
        'cr2': "url('/images/cr2.jpg')",
        'last1': "url('/images/last1.png')",
        'c1': "url('/images/c1.jpg')",
        'c2': "url('/images/c2.jpg')",
        'c3': "url('/images/c3.jpg')",
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
