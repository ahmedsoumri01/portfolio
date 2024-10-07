const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Add this line to enable dark mode via a class
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"    , "./node_modules/flowbite/**/*.js",    flowbite.content(),],
  theme: {
    extend: {},
  },
  plugins: [],
};
