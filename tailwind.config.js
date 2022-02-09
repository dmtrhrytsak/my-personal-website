module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        expend: {
          '0%': { gap: '24px' },
          '100%': { gap: '48px' },
        },
        close: {
          '0%': { gap: '48px' },
          '100%': { gap: '24px' },
        },
      },
      animation: {
        expend: 'expend 2s ease-in-out forwards',
        close: 'close 2s ease-in-out forwards',
        'ping-finite': 'ping 2s linear 3 both',
      },
    },
    fontFamily: {
      sans: 'Libre Franklin, sans-serif',
    },
  },
  plugins: [],
};
