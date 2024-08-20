import path from "node:path"
import { defineConfig } from "father"

export default defineConfig({
  esm: {},
  cjs: {},
  umd: {},
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
  platform: "browser",
})
