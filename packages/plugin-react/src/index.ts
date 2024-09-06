import { pluginReact } from "@rsbuild/plugin-react";
import type { Plugin } from "onetab";
import { CLIENT_ENTRY, DEFAULT_FAVICON, DEFAULT_TITLE } from "./constants";

export default function reactPlugin(): Plugin {
  return {
    name: "@onetab/module-react",
    configKey: "react",
    rsbuildConfig: () => ({
      plugins: [pluginReact()],
      html: {
        mountId: "root",
        title: DEFAULT_TITLE,
        favicon: DEFAULT_FAVICON,
      },
      source: {
        entry: {
          index: CLIENT_ENTRY,
        },
      },
    }),
  };
}
