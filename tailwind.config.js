/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 5px 29px 6px rgba(0, 0, 0, 0.5)', 
      },
    },
  },
  plugins: [],
}

