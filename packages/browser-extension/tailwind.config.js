/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('@onetab/web-app/tailwind.config')],
  content: [
    'assets/**',
    'entrypoints/**',
    'components/**',
    './node_modules/@onetab/web-app/esm/**/*.js',
    './node_modules/@onetab/ui/dist/esm/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
