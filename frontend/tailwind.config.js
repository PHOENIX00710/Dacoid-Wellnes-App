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
      fontSize: {
        'graph': "11.2px",
        'xxs': "10px"
      },
      lineHeight: {
        'intro': "19.5px",
        'introHeading': "24.38px",
        'introTime': "18.29px",
        'inputHeading': "23.44px",
        'signup': '14.63px',
        'graph': '13.65px',
        'alert': "15.32px"
      },
      colors: {
        'introContent': "#787878",
        'introPurple': "#9FB2FF",
        'input-text': "#7F7F7F",
        'signup': "#829DFF",
        'goals': "#809AFF"
      },
      width: {
        'intro-img': "352px",
        'input': "343px",
        'icon': "18px",
        'workout-card': "343px"
      },
      height: {
        'intro-img': "234.61px",
        'input': "50px",
        'icon': "18px",
        'workout-card': "75px"
      },
      backgroundImage: {
        'gradient-btn': 'linear-gradient(270deg, #7B91FF 0%, #95BEFF 100%)',
        'gradient-search': 'linear-gradient(90.95deg, #DEE5FF 0.79%, #809AFF 99.18%)',
        'gradient-alert': 'linear-gradient(90.07deg, rgba(129, 157, 255, 0.28) 5.94%, rgba(16, 16, 16, 0) 76.45%)',

      },
      backgroundColor: {
        'input-gray': "#F1F1F1",
        'whatWorkout': "#8CB1FF"
      },
      borderRadius: {
        'input': '12px 12px 12px 12px',
        'alert': '10px 10px 10px 10px',
        'goals': '4px 4px 4px 4px'
      },
      spacing: {
        '18': '68px'
      }
    },
  },
  plugins: [],
}