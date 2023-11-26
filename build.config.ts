import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    {
      builder: 'mkdist',
      input: './src',
      outDir: './dist',
    },
  ],
  clean: true,
  declaration: true,
  rollup: {
    esbuild: {
      target: 'node16',
    },
    // emitCJS: true,
  },
})
