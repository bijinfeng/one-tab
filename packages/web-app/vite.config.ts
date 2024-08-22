import react from "@vitejs/plugin-react-swc"
import { resolve } from "node:path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  }
})
