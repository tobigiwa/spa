/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      spacing: {
        'minus-menu': 'calc(100vh - 5rem)',
      },
    },
  },
  plugins: [],
}

