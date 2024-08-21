const customColors = [
  "black",
  "white",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  "t1",
  "t2",
  "t3",
  "t4",
  "t5",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "m1",
  "m2",
  "todo-t1",
  "todo-t2",
  "note-t1",
  "note-t2",
  "calc-t1",
  "calc-t2",
  "calc-t3",
  "calc-t4",
  "calc-b1",
  "calc-b2",
  "calc-b3",
  "calc-l1",
  "calc-l2",
  "calc-l3",
  "calc-l4",
  "calc-l6",
  "calc-l7",
  "calc-l5",
  "calc-l8",
  "calc-l0",
  "calc-l9",
  "calc-yellow",
  "calendar-red",
  "calendar-b1",
  "calendar-b2",
  "worldcup-t1",
  "rate-t1",
  "rate-t2",
  "rate-t3",
  "rate-t4",
  "rate-b1",
  "rate-b2",
  "rate-b3",
  "rate-b4",
  "rate-b5",
  "rate-l1",
  "rate-l2",
  "game-b1",
  "game-b2",
  "game-b3",
  "game-b4",
  "game-b5",
  "game-t1",
  "game-t2",
  "movie-b1",
  "clock-b1",
  "wclock-b1",
  "wclock-t1",
  "wclock-t2",
  "wclock-t3",
  "bookmark-t1",
  "bookmark-b1",
  "bookmark-b2",
  "record-t1",
  "image-t1",
  "image-b1",
  "image-b2",
  "image-b4",
  "translate-green",
]

/** @type {import('tailwindcss').Config} */
export default {
  presets: [require("@pingtou/shadcn-ui/tailwind.config")],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@pingtou/shadcn-ui/dist/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: customColors.reduce((acc, color) => {
        acc[`color-${color}`] = `rgb(var(--color-${color}) / <alpha-value>)`
        return acc
      }, {}),
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
