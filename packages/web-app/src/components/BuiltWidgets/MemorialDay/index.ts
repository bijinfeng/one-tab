import type { WidgetAtomInterface } from "../types";
import { renderEditor } from "./Editor";
import { renderPreview } from "./Preview";

export const MemorialDayWidget: WidgetAtomInterface = {
	id: "widget-memorial-day",
	name: "纪恋日",
	size: ["small"],
	renderPreview,
	renderEditor,
};
