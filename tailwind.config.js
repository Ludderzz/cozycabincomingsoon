/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFCFB',
        forest: '#1B2B21',
        'forest-light': '#2C4535',
        'forest-muted': '#3D5E4A',
        slate: '#5C6B72',
        'slate-light': '#8A9BA3',
        gold: '#C9A84C',
        'gold-light': '#E2C97E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
