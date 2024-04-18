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
        'introTime': "18.29px",
        'inputHeading': "23.44px",
        'signup': '14.63px'
      },
      colors: {
        'introContent': "#787878",
        'introPurple': "#9FB2FF",
        'input-text': "#7F7F7F",
        'signup':"#829DFF"
      },
      width: {
        'intro-img': "352px",
        'input': "343px",
        'icon': "18px"
      },
      height: {
        'intro-img': "234.61px",
        'input': "50px",
        'icon': "18px"
      },
      backgroundImage: {
        'gradient-btn': 'linear-gradient(270deg, #7B91FF 0%, #95BEFF 100%);'
      },
      backgroundColor: {
        'input-gray': "#F1F1F1"
      },
      borderRadius: {
        'input': '12px 12px 12px 12px;'
      },
    },
  },
  plugins: [],
}