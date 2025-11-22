/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#E63946', // Red for light mode, cyan for dark mode (handled via dark: classes)
        'primary-dark': '#22d3ee', // Cyan for dark mode
        secondary: '#a855f7',
        dark: '#0f172a',
        'light-bg': '#FFFFFF',
        'light-text': '#000000',
        'light-border': '#E5E5E5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
