import { pluginReact } from '@rsbuild/plugin-react'
import { defineConfig } from '@rslib/core'

export default defineConfig({
  lib: [
    {
      format: 'esm',
      output: {
        distPath: {
          root: './lib',
        },
      },
      autoExternal: true,
      dts: false,
    },
  ],
  plugins: [pluginReact()],
})
