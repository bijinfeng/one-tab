import type { RsbuildConfig } from "@rsbuild/core";
import { createRsbuild } from '@rsbuild/core';
import { InlineConfig } from '../types';
import { resolveConfig } from "../utils/resolve-config";

export const createServer = async (inlineConfig?: InlineConfig) => {
  const config = await resolveConfig(inlineConfig);

  const rsbuildConfig: RsbuildConfig = {};

  const rsbuild = await createRsbuild({ rsbuildConfig });

  console.log(config);

  await rsbuild.startDevServer();
}
