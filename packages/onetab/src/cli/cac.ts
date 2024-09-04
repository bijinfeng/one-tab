import cac, { type CAC, type Command } from 'cac'
import { normalize } from 'pathe'
import { version } from '../../package.json'
import { toArray } from '../utils/base'
import type { CliOptions } from './cli-api'
import type { CLIOption, CLIOptions as CLIOptionsConfig } from './cli-config'
import { cliOptionsConfig } from './cli-config'

function addCommand(cli: CAC | Command, name: string, option: CLIOption<any>) {
  const commandName = option.alias || name
  let command = option.shorthand ? `-${option.shorthand}, --${commandName}` : `--${commandName}`
  if ('argument' in option) {
    command += ` ${option.argument}`
  }

  function transform(value: unknown) {
    if (!option.array && Array.isArray(value)) {
      const received = value.map(s => typeof s === 'string' ? `"${s}"` : s).join(', ')
      throw new Error(
        `Expected a single value for option "${command}", received [${received}]`,
      )
    }
    if (option.transform) {
      return option.transform(value)
    }
    if (option.array) {
      return toArray(value)
    }
    if (option.normalize) {
      return normalize(String(value))
    }
    return value
  }

  const hasSubcommands = 'subcommands' in option && option.subcommands

  if (option.description) {
    let description = option.description.replace(/\[.*\]\((.*)\)/, '$1').replace(/`/g, '')

    if (hasSubcommands) {
      description += `. Use '--help --${commandName}' for more info.`
    }

    cli.option(command, description, {
      // type: transform,
    })
  }

  if (hasSubcommands) {
    for (const commandName in option.subcommands) {
      const subcommand = option.subcommands[commandName]
      if (subcommand) {
        addCommand(cli, `${name}.${commandName}`, subcommand)
      }
    }
  }
}

interface CLIOptions {
  allowUnknownOptions?: boolean
}

function addCliOptions(cli: CAC | Command, options: CLIOptionsConfig<any>) {
  for (const [optionName, option] of Object.entries(options)) {
    if (option) {
      addCommand(cli, optionName, option)
    }
  }
}

export function createCLI(options: CLIOptions = {}) { 
  const cli = cac('one-tab')

  cli.version(version)

  addCliOptions(cli, cliOptionsConfig)

  cli.help((info) => { 
    const helpSection = info.find(current => current.title?.startsWith('For more info, run any command'))

    if (helpSection) {
      helpSection.body += '\n  $ one-tab --help --expand-help'
    }

    const options = info.find(current => current.title === 'Options')

    if (typeof options !== 'object') {
      return info
    }

    const helpIndex = process.argv.findIndex(arg => arg === '--help')
    const subcommands = process.argv.slice(helpIndex + 1)

    const defaultOutput = options.body
      .split('\n')
      .filter(line => /^\s+--\S+\./.test(line) === false)
      .join('\n')

    // Filter out options with dot-notation if --help is not called with a subcommand (default behavior)
    if (subcommands.length === 0) {
      options.body = defaultOutput
      return info
    }

    if (subcommands.length === 1 && (subcommands[0] === '--expand-help' || subcommands[0] === '--expandHelp')) {
      return info
    }

    const subcommandMarker = '$SUB_COMMAND_MARKER$'

    const banner = info.find(current => /^vitest\/\d+\.\d+\.\d+$/.test(current.body))
    function addBannerWarning(warning: string) {
      if (typeof banner?.body === 'string') {
        if (banner?.body.includes(warning)) {
          return
        }

        banner.body = `${banner.body}\n WARN: ${warning}`
      }
    }

    // If other subcommand combinations are used, only show options for the subcommand
    for (let i = 0; i < subcommands.length; i++) {
      const subcommand = subcommands[i]

      // --help --expand-help can't be called with multiple subcommands and is handled above
      if (subcommand === '--expand-help' || subcommand === '--expandHelp') {
        addBannerWarning('--expand-help subcommand ignored because, when used with --help, it must be the only subcommand')
        continue
      }

      // Mark the help section for the subcommands
      if (subcommand.startsWith('--')) {
        options.body = options.body
          .split('\n')
          .map(line => (line.trim().startsWith(subcommand)) ? `${subcommandMarker}${line}` : line)
          .join('\n')
      }
    }

    // Filter based on the marked options to preserve the original sort order
    options.body = options.body
      .split('\n')
      .map(line => line.startsWith(subcommandMarker) ? line.split(subcommandMarker)[1] : '')
      .filter(line => line.length !== 0)
      .join('\n')

    if (!options.body) {
      addBannerWarning('no options were found for your subcommands so we printed the whole output')
      options.body = defaultOutput
    }

    return info
  });

  cli
    .command('dev [...filters]', undefined, options)
    .action(run)

  return cli
}

export function parseCLI(argv: string | string[], config: CLIOptions = {}): {
  filter: string[]
  options: CliOptions
} {
  const arrayArgs = typeof argv === 'string' ? argv.split(' ') : argv
  if (arrayArgs[0] !== 'vitest') {
    throw new Error(`Expected "vitest" as the first argument, received "${arrayArgs[0]}"`)
  }
  arrayArgs[0] = '/index.js'
  arrayArgs.unshift('node')
  let { args, options } = createCLI(config).parse(arrayArgs, {
    run: false,
  })
  if (arrayArgs[2] === 'watch' || arrayArgs[2] === 'dev') {
    options.watch = true
  }
  if (arrayArgs[2] === 'run') {
    options.run = true
  }
  if (arrayArgs[2] === 'related') {
    options.related = args
    options.passWithNoTests ??= true
    args = []
  }
  return {
    filter: args as string[],
    options,
  }
}

async function run(cliFilters: string[], options: CliOptions): Promise<void> {
  console.log('run', cliFilters, options)
  // options.run = true
  // await start('test', cliFilters, options)
}
