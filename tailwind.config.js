/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#F7F9FC',
          white: '#FFFFFF',
          dark: '#050B18',
        },
        brand: {
          blue: '#2563FF',
          cyan: '#00CFFF',
          violet: '#6C4DFF',
        },
        ink: {
          DEFAULT: '#071225',
          muted: '#64748B',
        },
        border: {
          light: '#E5EAF2',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(7, 18, 37, 0.04), 0 8px 24px rgba(7, 18, 37, 0.06)',
        'card-hover': '0 1px 2px rgba(7, 18, 37, 0.05), 0 16px 40px rgba(37, 99, 255, 0.12)',
        glow: '0 0 0 6px rgba(37, 99, 255, 0.08), 0 12px 32px rgba(37, 99, 255, 0.18)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out both',
        'bubble-in': 'bubbleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bubbleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(8px)' },
          '60%': { transform: 'scale(1.04) translateY(-2px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
