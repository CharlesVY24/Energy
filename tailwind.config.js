/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF2FA',
          100: '#D5DEF0',
          200: '#A9B9DE',
          300: '#7890C6',
          400: '#4A67A9',
          500: '#2E4B8C',
          600: '#1E3A78',
          700: '#152B5E',
          800: '#0E1F47',
          900: '#0A1738',
          950: '#060E24',
        },
        amber: {
          400: '#FFC233',
          500: '#F5A800',
          600: '#D68F00',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Inter', 'system-ui', '-apple-system', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
