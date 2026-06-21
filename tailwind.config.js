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
        'bg-primary': '#060d1a',
        'bg-secondary': '#0b1a33',
        'bg-card': '#0f2244',
        'accent-gold': '#f59e0b',
        'accent-cyan': '#06b6d4',
        'accent-purple': '#a855f7',
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        superman: {
          "0%": { borderColor: "#06b6d4", boxShadow: "0 0 20px 5px #06b6d444" },
          "33%": { borderColor: "#f59e0b", boxShadow: "0 0 20px 5px #f59e0b44" },
          "66%": { borderColor: "#a855f7", boxShadow: "0 0 20px 5px #a855f744" },
          "100%": { borderColor: "#06b6d4", boxShadow: "0 0 20px 5px #06b6d444" },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '100% center' },
        },
      },
      animation: {
        superman: "superman 3s ease-in-out infinite",
        'gradient-shift': 'gradient-shift 4s ease infinite',
      },
    },
  },
  plugins: [daisyui],
}
