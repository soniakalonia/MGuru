/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ebf5fb',
          100: '#d4e6f1',
          200: '#aed6ea',
          300: '#85c1e2',
          400: '#5dade2',
          500: '#3498db',
          600: '#2980b9',
          700: '#2471a3',
          800: '#1a5276',
          900: '#154360',
        },
        slatey: {
          50: '#f8fafc',
          100: '#f0f2f5',
          200: '#e8ecf1',
          300: '#cbd5e1',
          400: '#bdc3c7',
          500: '#94a3b8',
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#2c3e50',
          950: '#1e293b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(26, 82, 118, 0.08)',
        card: '0 10px 40px -12px rgba(26, 82, 118, 0.15)',
        glow: '0 0 40px rgba(41, 128, 185, 0.3)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'slide-down': 'slide-down 0.2s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
