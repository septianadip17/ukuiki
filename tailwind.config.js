// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          DEFAULT: "#745EA5",
          light: "#9686BB",
          dark: "#57467B",
        },
      },
    },
  },
  plugins: [],
};
