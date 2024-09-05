import { pluginReact } from '@rsbuild/plugin-react';
import type { Plugin } from "onetab";

export default function reactPlugin(): Plugin {
  return {
    name: "@onetab/module-react",
    configKey: "react",
    rsbuildConfig: () => ({
      plugins: [pluginReact()],
    })
  };
}
