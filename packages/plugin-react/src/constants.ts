import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));

export const PACKAGE_ROOT = path.join(dirname, "..");

export const CLIENT_ENTRY = path.join(PACKAGE_ROOT, "runtime", "main");

export const DEFAULT_FAVICON = path.join(PACKAGE_ROOT, "runtime", "onetab.ico");

export const DEFAULT_TITLE = "Onetab 标签页";
