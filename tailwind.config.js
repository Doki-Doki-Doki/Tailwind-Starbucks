/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
          'puti':'#ffffff',
          'itim':'#000000',
          'maitim':'#2b2b2b',
          'lasalle':'#006241',
          'semento':'hsl(240,1.51%,50.98%)',
          'lberde':'#d4e9e2',
          'vlberde':'#F1F8F5',
          'diputi':'#f2f0eb',
          'fputi':'#f9f9f9',
          'penk': '#EB81A5',
          'tlasalle': '#1e3932',
          'periwinks': '#8f8bf4',
          'sbyellow': '#f1ff67'
      },
      backgroundImage:{
        'star':"url('../img/rewards/star.png')",
        'sbbg':"url('../img/rewards/sb-bg.png')"
      }
    },
  },
  plugins: [],
}

