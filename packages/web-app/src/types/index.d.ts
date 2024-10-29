/// <reference types="@rsbuild/core/types" />

declare namespace OneTab {
	type Theme = "light" | "dark" | "system";
	type ThemeMode = "light" | "dark";
	type WidgetSize = "large" | "small" | "medium" | "mini";

	interface EngineInfo {
		id: string;
		name: string;
		bgType: string;
		bgImage: string;
		bgColor: string;
		target: string;
	}

	interface CommonAppInfo {
		id: string;
		name: string;
	}

	interface WidgetInfo extends CommonAppInfo {
		type: "widget";
		widgetSize: WidgetSize;
		widgetName: string;
	}

	interface CommonSiteInfo extends CommonAppInfo {
		type: "site";
		target: string;
		bgColor: string;
		bgType: "color" | "image";
		origin: "online";
	}

	interface ImageSiteInfo extends CommonSiteInfo {
		bgType: "image";
		bgImage: string;
	}

	interface ColorSiteInfo extends CommonSiteInfo {
		bgType: "color";
		bgText: string;
	}

	type SiteInfo = ImageSiteInfo | ColorSiteInfo;
	type App = WidgetInfo | SiteInfo;

	interface AppCategory {
		id: string;
		iconClass: string;
		name: string;
		apps: App[];
	}

	interface Celebrity {
		from: string;
		hitokoto: string;
		from_who: string;
	}
}
