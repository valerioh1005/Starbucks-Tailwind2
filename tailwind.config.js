module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkGreen: '#1e3932',
        mintGreen: '#d4e9e2',
        boxShadow: '0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);',
        lightGray: 'rgba(0, 0, 0, .58)'
      }
    },
  },
  plugins: [],
}