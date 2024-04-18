/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      lineHeight: {
        'intro': "19.5px",
        'introHeading': "24.38px",
        'introTime': "18.29px"
      },
      colors: {
        'introContent': "#787878",
        'introPurple':"#9FB2FF"
      },
      width: {
        'intro-img': "352px"
      },
      height: {
        'intro-img': "234.61px"
      }
    },
  },
  plugins: [],
}