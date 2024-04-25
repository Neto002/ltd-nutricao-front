/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/**.js",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'background-green': '#6CC72C',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
