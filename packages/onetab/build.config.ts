import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      builder: "rollup",
      input: './src/cli/index',
      outDir: './dist/cli',
    },
    {
      builder: "rollup",
      input: './src/index',
      outDir: './dist',
    }
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
