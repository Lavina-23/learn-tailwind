/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('./public/img/bg1.jpeg')",
      },
      colors: {
        'primary' : '#F4CE14',
      },
      fontFamily: {
        'urban': ['Urbanist'],
      }
    },
  },
  plugins: [],
}

