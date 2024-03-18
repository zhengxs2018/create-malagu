import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  failOnWarn: false,
  rollup: {
    inlineDependencies: true,
    esbuild: {
      target: 'node16',
      minify: true,
    },
  },
  alias: {
    // we can always use non-transpiled code since we support node 18+
    prompts: 'prompts/lib/index.js',
  }
})
