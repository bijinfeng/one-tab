import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "@rsbuild/core";
import { pluginImageCompress } from "@rsbuild/plugin-image-compress";
import { pluginReact } from "@rsbuild/plugin-react";

const svgSymbolFilePath = path.join(__dirname, "./src/assets/icons/iconfont-symbol.svg");
const svgSymbolData = fs.readFileSync(svgSymbolFilePath, "utf8");

export default defineConfig(({ env }) => {
	const isDev = env === "development";

	return {
		plugins: [pluginReact(), pluginImageCompress()],
		html: {
			template: "./index.html",
			templateParameters: {
				svgSymbol: svgSymbolData,
			},
		},
		source: {
			entry: {
				index: "./src/main.tsx",
			},
		},
		output: {
			assetPrefix: isDev ? "/" : "/one-tab/",
		},
	};
});
