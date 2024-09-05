import { pluginReact } from "@rsbuild/plugin-react";
import type { Plugin } from "onetab";
import { CLIENT_ENTRY, CLIENT_TEMPLATE } from "./constants";

export default function reactPlugin(): Plugin {
  return {
    name: "@onetab/module-react",
    configKey: "react",
    rsbuildConfig: () => ({
      plugins: [pluginReact()],
      html: {
        template: CLIENT_TEMPLATE,
      },
      source: {
        entry: {
          index: CLIENT_ENTRY,
        },
      },
    }),
  };
}
