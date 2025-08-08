/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.{js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}