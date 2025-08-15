/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#0a0a0a',
          secondary: '#1a1a1a',
          tertiary: '#2a2a2a',
          accent: '#3a3a3a',
          border: '#404040',
          text: '#e5e5e5',
          muted: '#a0a0a0'
        },
        blue: {
          neon: '#00d4ff',
          dark: '#0066cc'
        },
        green: {
          neon: '#00ff88'
        }
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'recording': 'recording 1.5s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        recording: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }
        }
      }
    }
  },
  plugins: []
}