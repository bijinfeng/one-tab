/** @type {import('tailwindcss').Config} */
export default {
  presets: [require("@one-tab/web-app/tailwind.config")],
  content: [
    "assets/**",
    "entrypoints/**",
    "components/**",
    "./node_modules/@one-tab/web-app/esm/**/*.js",
    "./node_modules/@pingtou/shadcn-ui/dist/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
