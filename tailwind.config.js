/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4A7C59',
        secondary: '#FFD93D',
        accent: '#FF6B6B',
        cream: '#F5EFE6',
        mint: '#6EE7B7'
      },
      fontFamily: {
        'bungee': ['Bungee', 'cursive'],
        'vt': ['VT323', 'monospace'],
        'fredoka': ['Fredoka', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'shine': 'shine 3s infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
        'border-rotate': 'borderRotate 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0) scale(1)' },
          '25%': { transform: 'rotate(-5deg) scale(1.1)' },
          '75%': { transform: 'rotate(5deg) scale(0.9)' }
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.5',
            transform: 'scale(1)',
            filter: 'brightness(100%)'
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)',
            filter: 'brightness(120%)'
          }
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        shine: {
          '0%': { backgroundPosition: '-100% 50%' },
          '100%': { backgroundPosition: '200% 50%' }
        },
        textGlow: {
          from: {
            textShadow: `
              0 0 10px rgba(255, 217, 61, 0.5),
              0 0 20px rgba(255, 217, 61, 0.3),
              0 0 30px rgba(255, 217, 61, 0.2)
            `
          },
          to: {
            textShadow: `
              0 0 20px rgba(255, 217, 61, 0.6),
              0 0 30px rgba(255, 217, 61, 0.4),
              0 0 40px rgba(255, 217, 61, 0.2)
            `
          }
        },
        borderRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      backgroundImage: {
        'doge-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23FFD93D' fill-opacity='0.05'/%3E%3C/svg%3E\")"
      }
    }
  },
  plugins: [],
};