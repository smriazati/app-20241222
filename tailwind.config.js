/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',        // Include app directory
    './components/**/*.{js,ts,jsx,tsx}', // Include components directory (one level above app)
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['var(--font-primary)', 'sans-serif'],
      },
      colors: {
        cream: 'var(--color-cream)',
        purple: 'var(--color-purple)',
        dark: 'var(--color-dark)',
        light: 'var(--color-light)',
        'link-hover': 'var(--link-hover-color)',
        'button-hover': 'var(--button-hover-color)',
      }
    },
  },
  plugins: [],
}

