export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1E1E1E',
        brand: '#A47B5B',
        neutral: '#C7C7C7',
        'neutral-100': '#EFEFEF',
        'neutral-alpha': 'rgba(126, 126, 126, 0.40)',
        stone: '#BCBCBC',
        accent: '#005954'
      },
      fontFamily: {
        base: 'Montserrat, sans-serif',
      }
    },
  },
  plugins: [],
}