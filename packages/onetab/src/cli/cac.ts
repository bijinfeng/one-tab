import cac from "cac";
import { version } from "../../package.json";
import { createServer } from "../core/create-server";
import type { CliOptions } from "./cli-config";

/**
 * host may be a number (like 0), should convert to string
 */
const convertHost = (v: any) => {
  if (typeof v === "number") {
    return String(v);
  }
  return v;
};

export function createCLI() {
  const cli = cac("onetab");

  cli.version(version);

  cli
    .option("-c, --config <file>", `[string] use specified config file`)
    .option("-l, --logLevel <level>", `[string] info | warn | error | silent`)
    .option("-d, --debug [feat]", `[string | boolean] show debug logs`)
    .option("-m, --mode <mode>", `[string] set env mode`);

  cli.help();

  // dev
  cli
    .command("[root]", "start dev server") // default command
    .alias("serve") // the command is called 'serve' in Vite's API
    .alias("dev") // alias to align with the script name
    .option("--host [host]", `[string] specify hostname`, { type: [convertHost] })
    .option("--port <port>", `[number] specify port`)
    .option("--open [path]", `[boolean | string] open browser on startup`)
    .option("--cors", `[boolean] enable CORS`)
    .option("--strictPort", `[boolean] exit if specified port is already in use`)
    .action(async (root: string, options: CliOptions) => {
      // console.log(11, root, options);
      createServer()
    });

  return cli;
}
