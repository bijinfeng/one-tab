import type { CliOptions } from './cli-api'

type NestedOption<T, V = Extract<T, Record<string, any>>> = V extends
  | never
  | RegExp
  | unknown[]
  ? never
  : V

export type CLIOption<Value> = {
  description: string | null
  alias?: string
  shorthand?: string
  default?: unknown
  transform?: (value: unknown) => unknown
  array?: boolean
  normalize?: boolean
} & (NestedOption<Value> extends never // require subcommands for nested options
  ? object
  : { subcommands: CLIOptions<NestedOption<Value>> | null }) &
  // require argument for non-boolean options
  (NonNullable<Value> extends boolean ? object : { argument: string })

export type CLIOptions<Config extends object> = {
  [Key in keyof Config as NonNullable<Config[Key]> extends Function
  ? never
  : Key]-?: CLIOption<Config[Key]> | null;
}

type OneTabCLIOptions = CLIOptions<CliOptions>

export const cliOptionsConfig: OneTabCLIOptions = {
  dev: {
    description: 'Run in development mode',
    alias: 'd',
  },
};
