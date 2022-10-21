/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', "./node_modules/flowbite/**/*.js"],
  // theme позволяет менять базовые компоненты TW
  theme: {},
  plugins: [
    require('flowbite/plugin')
],
}
