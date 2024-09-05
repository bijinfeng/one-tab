import type { ConfigEnv, UserConfig as ViteUserConfig } from "vite";

export { mergeConfig } from "vite";
export type { Plugin } from "vite";

export type { ConfigEnv, ViteUserConfig as UserConfig };
export type UserConfigFnObject = (env: ConfigEnv) => ViteUserConfig;
export type UserConfigFnPromise = (env: ConfigEnv) => Promise<ViteUserConfig>;
export type UserConfigFn = (env: ConfigEnv) => ViteUserConfig | Promise<ViteUserConfig>;
export type UserConfigExport =
  | ViteUserConfig
  | Promise<ViteUserConfig>
  | UserConfigFnObject
  | UserConfigFnPromise
  | UserConfigFn;

export function defineConfig(config: ViteUserConfig): ViteUserConfig;
export function defineConfig(config: Promise<ViteUserConfig>): Promise<ViteUserConfig>;
export function defineConfig(config: UserConfigFnObject): UserConfigFnObject;
export function defineConfig(config: UserConfigExport): UserConfigExport;
export function defineConfig(config: UserConfigExport): UserConfigExport {
  return config;
}
