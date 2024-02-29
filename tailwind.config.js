/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        gray: '#F5F5F5',
        blue: '#1F6AFB'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}