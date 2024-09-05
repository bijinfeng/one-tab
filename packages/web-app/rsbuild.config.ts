import { defineConfig } from "@rsbuild/core";
import { pluginImageCompress } from "@rsbuild/plugin-image-compress";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig(() => {
  return {
    plugins: [pluginReact(), pluginImageCompress()],
    html: {
      template: "./index.html",
    },
    source: {
      entry: {
        index: "./src/main.tsx",
      },
    },
    output: {
      assetPrefix: "/<REPO_NAME>/",
    },
  };
});
