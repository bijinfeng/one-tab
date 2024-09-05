import type { RsbuildConfig } from "@rsbuild/core";

export type Awaitable<T> = T | PromiseLike<T>;
export type Nullable<T> = T | null | undefined;
export type Arrayable<T> = T | Array<T>;
export type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never;

export type MutableArray<T extends readonly any[]> = {
  -readonly [k in keyof T]: T[k];
};

export interface Constructable {
  new (...args: any[]): any;
}

export interface InlineConfig {
  /**
   * Your project's root directory containing the `package.json` used to fill out the
   * `manifest.json`.
   *
   * @default process.cwd()
   */
  root?: string;

  plugins?: PluginOption[];
  /**
   * Config effecting dev mode only.
   */
  dev?: {
    server?: {
      /**
       * Port to run the dev server on. Defaults to the first open port from 3000 to 3010.
       */
      port?: number;
      /**
       * Hostname to run the dev server on.
       *
       * @default "localhost"
       */
      hostname?: string;
    };
    /**
     * Controls whether a custom keyboard shortcut command, `Alt+R`, is added during dev mode to
     * quickly reload the extension.
     *
     * If false, the shortcut is not added during development.
     *
     * If set to a custom string, you can override the key combo used. See
     * [Chrome's command docs](https://developer.chrome.com/docs/extensions/reference/api/commands)
     * for available options.
     *
     * @default "Alt+R"
     */
    reloadCommand?: string | false;
    /**
     * Add additional paths to the `.wxt/tsconfig.json`. Use this instead of overwriting the `paths`
     * in the root `tsconfig.json` if you want to add new paths.
     *
     * The key is the import alias and the value is either a relative path to the root directory or an absolute path.
     *
     * @example
     * {
     *   "testing": "src/utils/testing.ts"
     * }
     */
    alias?: Record<string, string>;
    /**
     * Set to `true` to show debug logs. Overriden by the command line `--debug` option.
     *
     * @default false
     */
    debug?: boolean;
    /**
     * Explicitly set a mode to run in. This will override the default mode for each command, and can
     * be overridden by the command line `--mode` option.
     */
    mode?: string;
  };
}

export interface UserConfig extends InlineConfig {}

export interface Plugin {
  name?: string;
  /**
   * Key for users to pass options into your module from their `wxt.config.ts` file.
   */
  configKey?: string;
  rsbuildConfig?: () => RsbuildConfig | Promise<RsbuildConfig>;
}

type Thenable<T> = T | Promise<T>;
type FalsyPlugin = false | null | undefined;
export type PluginOption = Thenable<Plugin | FalsyPlugin>;
