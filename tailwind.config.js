
/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background:'#ffffff',
      },
      keyframes: {
        superman: {
          "0%": {
            borderColor: "blue",
            // transform: "translate(0, 0px)",
            boxShadow: "0px 0px 10px 5px blue",
          },
          "25%": {
            borderColor: "rgb(239, 244, 11)",
            boxShadow: "0px 0px 10px 5px rgb(239, 244, 11)",
          },
          "50%": {
            borderColor: "rgb(12, 12, 199)",
            // transform: "translate(0, 10px)",
            boxShadow: "0px 0px 10px 5px rgb(12, 12, 199)",
          },
          "75%": {
            borderColor: "rgb(130, 217, 160)",
            boxShadow: "0px 0px 10px 5px rgb(130, 217, 160)",
          },
          "100%": {
            borderColor: "rgb(50, 55, 205)",
            // transform: "translate(0, -0px)",
            boxShadow: "0px 0px 10px 5px rgb(50, 55, 205)",
          },
        },
      },
      animation: {
        superman: "superman 3s infinite",
      },
    },
  },
  plugins: [
    daisyui,
  ],
}