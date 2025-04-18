/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        'brand-red': {
          DEFAULT: '#ff3f3f',
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ff9f9f',
          400: '#ff6f6f',
          500: '#ff3f3f',
          600: '#e51d1d',
          700: '#c11414',
          800: '#a01414',
          900: '#841818',
        },
      },
    },
  },
  plugins: [],
} 