/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
          'puti':'#ffffff',
          'maitim':'#2b2b2b',
          'lasalle':'#006341',
          'semento':'hsl(240,1.51%,50.98%)',
          'lberde':'#d4e9e2',
          'vlberde':'#F1F8F5',
          'diputi':'#f2f0eb',
          'fputi':'#f9f9f9',
      },
      backgroundImage:{
        'star':"url('../img/rewards/star.png')",
        'sbbg':"url('../img/rewards/sb-bg.png')"
      }
    },
  },
  plugins: [],
}

