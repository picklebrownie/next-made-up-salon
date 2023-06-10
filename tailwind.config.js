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
        'pattern': 'url(/bg-pattern.svg)',
      }
    },
  },
  plugins: [],
  safelist:[
    "from-yellow-200",
    "to-yellow-400",
    "to-yellow-500",
    "text-yellow-950",
    "text-yellow-900",
    "from-emerald-200",
    "to-emerald-400",
    "to-emerald-500",
    "text-emerald-950",
    "text-emerald-900",
  ]
}
