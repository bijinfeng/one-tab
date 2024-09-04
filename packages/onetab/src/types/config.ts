export interface InlineConfig {
  /**
   * Name of the project. Will be used to display in the reporter.
   */
  name?: string

}

export interface UserConfig extends InlineConfig {
  /**
   * Path to the config file.
   *
   * Default resolving to `vitest.config.*`, `vite.config.*`
   *
   * Setting to `false` will disable config resolving.
   */
  config?: string | false | undefined

  /**
   * Do not run tests when Vitest starts.
   *
   * Vitest will only run tests if it's called programmatically or the test file changes.
   *
   * CLI file filters will be ignored.
   */
  standalone?: boolean

  /**
   * Use happy-dom
   */
  dom?: boolean

  /**
   * Run tests that cover a list of source files
   */
  related?: string[] | string

  /**
   * Overrides Vite mode
   * @default 'test'
   */
  mode?: string

  /**
   * Runs tests that are affected by the changes in the repository, or between specified branch or commit hash
   * Requires initialized git repository
   * @default false
   */
  changed?: boolean | string

  /**
   * Test suite shard to execute in a format of <index>/<count>.
   * Will divide tests into a `count` numbers, and run only the `indexed` part.
   * Cannot be used with enabled watch.
   * @example --shard=2/3
   */
  shard?: string

  /**
   * Name of the project or projects to run.
   */
  project?: string | string[]

  /**
   * Additional exclude patterns
   */
  cliExclude?: string[]

  /**
   * Override vite config's clearScreen from cli
   */
  clearScreen?: boolean

  /**
   * benchmark.compare option exposed at the top level for cli
   */
  compare?: string

  /**
   * benchmark.outputJson option exposed at the top level for cli
   */
  outputJson?: string

  /**
   * Directory of blob reports to merge
   * @default '.vitest-reports'
   */
  mergeReports?: string
}