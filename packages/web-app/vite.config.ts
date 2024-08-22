import { resolve } from "node:path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development"

  return {
    base: isDev ? "/" : "one-tab",
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  }
})
