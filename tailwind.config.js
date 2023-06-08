/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        handrawn: ['Permanent Marker', 'cursive']
      },
      backgroundImage: {
        'pattern': 'url(https://res.cloudinary.com/dpybiqjss/image/upload/v1680821052/Hair%20Salon/Untitled_design_21_pqgygf.svg)',
        'hero-chair': 'url(https://res.cloudinary.com/dpybiqjss/image/upload/v1680812521/Hair%20Salon/Untitled_design_26_n4y9ul.png)',
      }
    },
  },
  plugins: [],
}
