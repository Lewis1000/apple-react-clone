module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    colors: {
      blue: "#06c",
      black: "#000",
      gray: "#8a8a8a",
      white: "#fff"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px"
          },
          "@screen md": {
            maxWidth: "768px"
          },
          "@screen lg": {
            maxWidth: "1024px"
          },
          "@screen xl": {
            maxWidth: "1024px"
          },
          "@screen 2xl": {
            maxWidth: "1024px"
          }
        }
      })
    }
  ],
}
