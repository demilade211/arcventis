// tailwind.config.js
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        phosphateSolid: ['var(--font-phosphate-solid)', 'sans-serif'],
        phosphateInline: ['var(--font-phosphate-inline)', 'sans-serif'],
      },
    },
  },
};
