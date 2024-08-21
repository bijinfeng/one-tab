/** @type {import('tailwindcss').Config} */
export default {
  presets: [require("@pingtou/shadcn-ui/tailwind.config")],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@pingtou/shadcn-ui/dist/esm/**/*.js",
  ],
  theme: {
    extend: {
      transitionProperty: {
        wallpaper: "background-image",
      },
      transitionDuration: {
        wallpaper: "300ms",
      },
    },
  },
  plugins: [],
}
