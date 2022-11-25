/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
    colors: {
      'pexels' : '#05A081',
      'black': '#000',
      'white': '#fff',
      'gray': {
        50: '#f9fafb',
        100: '#f3f4f6',
        300: '#d1d5db',
        400: '#9ca3af',
        800: '#1f2937',
      },
      'blue': {
        700: '#1d4ed8',
      },
		'indigo':{
			500: '#6366f1'
		},
		'pink':{
			500: '#ec4899'
		},
		'purple':{
			500: '#a855f7'
		}
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
