import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));

export const PACKAGE_ROOT = dirname;

export const CLIENT_ENTRY = path.join(PACKAGE_ROOT, "runtime", "main");

export const CLIENT_TEMPLATE = path.join(PACKAGE_ROOT, "runtime", "index.html");
