import type { InlineConfig } from "vite";
import { createServer } from "vite";

export const createViteServer = async (inlineConfig: InlineConfig) => {
  const server = await createServer({
    logLevel: "error",
    ...inlineConfig,
  });

  return server;
};
