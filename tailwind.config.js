/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      animation: {
        showModal: "0.5s linear forwards",
      },
      keyframes: {
        showModal: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        moveButton: {
          '0%': {m: 7}
        }
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        brown: "#444",
        greenForElem: "#39b385",
        darkGreenForElem: "#9be15d",
        footerPrimary: "#37383d",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
