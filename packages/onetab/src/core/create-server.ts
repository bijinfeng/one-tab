import type { RsbuildConfig } from "@rsbuild/core";
import { createRsbuild, mergeRsbuildConfig } from "@rsbuild/core";
import { InlineConfig } from "../types";
import { resolveConfig } from "../utils/resolve-config";

export const createServer = async (inlineConfig?: InlineConfig) => {
  const config = await resolveConfig(inlineConfig);

  const plugins = await Promise.all((config.plugins ?? [])?.map((it) => Promise.resolve(it)));
  const filteredPlugins = plugins.filter((it) => !!it);
  const insetRsbuildConfigs = await Promise.all(filteredPlugins.map((it) => it.rsbuildConfig?.()));

  const rsbuildConfig: RsbuildConfig = mergeRsbuildConfig(...insetRsbuildConfigs.filter((it) => !!it));

  const rsbuild = await createRsbuild({ rsbuildConfig });

  console.log(config);

  await rsbuild.startDevServer();
};
