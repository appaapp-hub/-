/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        spice: {
          50: '#fff8f0',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        chili: {
          DEFAULT: '#dc2626',
          light: '#f87171',
          dark: '#b91c1c',
          glow: '#ef4444',
        },
        kyoto: {
          red: '#b91c1c',
          gold: '#d97706',
          brown: '#431407',
        },
      },
      backgroundImage: {
        'spicy-gradient': 'linear-gradient(135deg, #fef2f2 0%, #ffedd5 50%, #fff7ed 100%)',
        'hero-fire': 'linear-gradient(180deg, #fef2f2 0%, #ffedd5 40%, #fed7aa 100%)',
        'btn-hot': 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)',
      },
      boxShadow: {
        'chili': '0 4px 14px 0 rgba(220, 38, 38, 0.35)',
        'chili-lg': '0 10px 40px -10px rgba(220, 38, 38, 0.4)',
      },
    },
  },
  plugins: [],
}
