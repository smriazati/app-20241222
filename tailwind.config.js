module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['var(--font-primary)', 'sans-serif'],
      },
      colors: {
        cream: 'var(--color-cream)',
        purple: 'var(--color-secondary)',
        'link-hover': 'var(--link-hover-color)',
        'button-hover': 'var(--button-hover-color)',
      }
    },
  },
  plugins: [],
};