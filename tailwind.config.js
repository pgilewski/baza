module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#152041',
        grayish: '#c4c4c4',
        navyLight: '#111a34',
        navyDark: '#0e142a',
        skyish: '#5F92C1',
        blue: '#2B5696',
        purple: '#4141B7',
        green: '#1AB557',
        white: '#ffffff',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
