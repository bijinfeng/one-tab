import { loadConfig } from 'c12';
import { InlineConfig, UserConfig } from '../types';

export async function resolveConfig(inlineConfig: InlineConfig = {}): Promise<UserConfig> {
  const { config: loadedConfig, ...metadata } = await loadConfig<UserConfig>({
    // configFile: inlineConfig.configFile,
    name: 'onetab',
    cwd: inlineConfig.root ?? process.cwd(),
    rcFile: false,
    jitiOptions: {
      esmResolve: true,
    },
  });

  return loadedConfig;
}
