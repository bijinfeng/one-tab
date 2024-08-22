import { defineConfig } from 'father';
import path from 'node:path';

export default defineConfig({
  esm: {
    output: "esm",
  },
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  platform: 'browser',
});
