/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff6b1a',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        gold: {
          50: '#fffef0',
          100: '#fffcd6',
          200: '#fff9ad',
          300: '#fff47a',
          400: '#ffe842',
          500: '#ffd700',
          600: '#e6be00',
          700: '#b89400',
          800: '#8f7004',
          900: '#735909',
        },
        festivePink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f472b6',
          400: '#ec4899',
          500: '#e11d48',
          600: '#d81b60',
          700: '#be123c',
          800: '#9f1239',
          900: '#880e4f',
        },
        festivePurple: {
          500: '#9c27b0',
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
        },
        festiveEmerald: {
          500: '#00897b',
          600: '#00796b',
          700: '#00695c',
          800: '#004d40',
          900: '#1b5e20',
        },
        festiveCream: {
          50: '#ffffff',
          100: '#fffdfa',
          200: '#fff9f0',
          300: '#fff5e6',
          400: '#ffeed4',
          500: '#ffe8c2',
        },
        marigold: {
          400: '#ffb300',
          500: '#ff9800',
          600: '#f57c00',
        }
      },
      fontFamily: {
        gujarati: ['"Noto Sans Gujarati"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        'flame-flicker': 'flame 1.5s ease-in-out infinite alternate',
        'flame-glow': 'flameGlow 2s ease-in-out infinite alternate',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'sway': 'sway 4s ease-in-out infinite',
      },
      keyframes: {
        flame: {
          '0%': { transform: 'scale(0.97, 1.02) rotate(-1deg)' },
          '50%': { transform: 'scale(1.03, 0.98) rotate(1.5deg)' },
          '100%': { transform: 'scale(1, 1.04) rotate(-0.5deg)' },
        },
        flameGlow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(255, 180, 0, 0.8)) drop-shadow(0 0 35px rgba(255, 80, 0, 0.5))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(255, 210, 50, 0.95)) drop-shadow(0 0 55px rgba(255, 60, 0, 0.7))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'festive-gold': '0 10px 35px -5px rgba(255, 179, 0, 0.4), 0 0 15px rgba(255, 215, 0, 0.3)',
        'festive-magenta': '0 10px 35px -5px rgba(216, 27, 96, 0.45), 0 0 20px rgba(233, 30, 99, 0.3)',
        'festive-glow': '0 0 50px rgba(255, 165, 0, 0.5), inset 0 0 25px rgba(255, 215, 0, 0.25)',
      }
    },
  },
  plugins: [],
};
