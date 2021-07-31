module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#263238',
        primary_light: '#4f5b62',
        primary_dark: '#000a12',
        secondary: '#4db6ac',
        secondary_light: '#82e9de',
        secondary_dark: '#00867d',
        accent: '#ffb300',
        accent_light: '#ffe54c',
        accent_dark: '#c68400',
      },
      fontFamily: {
        catamaran: ['Catamaran', 'sans-serif'],
        staatliches: ['Staatliches', 'sans-serif'],
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-out',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover'],
    },
  },
  plugins: [],
};
