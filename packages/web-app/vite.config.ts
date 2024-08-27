import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    base: isDev ? "/" : "one-tab",
    plugins: [react(), svgr()],
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  };
});
