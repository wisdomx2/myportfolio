const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['KBO-Dia-Gothic_medium', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tailwind-fontawesome')
  ],
});