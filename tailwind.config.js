module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'ping-finite': 'ping 2s linear 3 both',
      },
    },
    fontFamily: {
      sans: 'Libre Franklin, sans-serif',
    },
  },
  plugins: [],
};
