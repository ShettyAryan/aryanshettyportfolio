/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F4F2EE',
        card: '#ECEAE4',
        ink: '#1C1B18',
        muted: '#787672',
        ghost: '#B0AEA8',
        gold: '#C8A97A',
        border: 'rgba(28,27,24,0.12)',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '22px',
        '4xl': '28px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'grain': 'grain 8s steps(10) infinite',
        'marquee': 'marquee 20s linear infinite',
        'cursor-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(2%, 2%)' },
          '30%': { transform: 'translate(-1%, 3%)' },
          '40%': { transform: 'translate(3%, -1%)' },
          '50%': { transform: 'translate(-2%, 2%)' },
          '60%': { transform: 'translate(1%, -3%)' },
          '70%': { transform: 'translate(-3%, 1%)' },
          '80%': { transform: 'translate(2%, -2%)' },
          '90%': { transform: 'translate(-1%, 3%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
