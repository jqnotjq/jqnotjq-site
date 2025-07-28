module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        teal: { DEFAULT: '#14b8a6' },
        green: { DEFAULT: '#22c55e' },
        blue: { DEFAULT: '#3b82f6' },
        gray: { DEFAULT: '#6b7280' },
        black: '#000000',
      }
    },
  },
  plugins: [],
};
