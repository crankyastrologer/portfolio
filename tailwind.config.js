/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B',
        },
        "primary-white": "#D4D4D4",
        "secondary-white": "#BCBCBC",
        "primary-gray": "#545353",
        "primary-gray-highlighted": "#777777",
        "secondary-gray": "#6A6767",
        "primary-black": "#111111",
        "secondary-black": "#131313",
        divider: "#2D2A2A",
        "primary-card-border": "#222222",
        "hover-card-border": "#303030",

      }
    }
  }
};

module.exports = config;