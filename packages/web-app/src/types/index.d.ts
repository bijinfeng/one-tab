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

  interface AppInfo {
    id: string;
    name: string;
    type: "site" | "widget";
  }

  interface AppCategory {
    id: string;
    iconClass: string;
    name: string;
    apps: AppInfo[];
  }

  interface Celebrity {
    from: string;
    hitokoto: string;
    from_who: string;
  }

  interface WidgetInfo {
    type: "widget";
    id: string;
    name: string;
    widgetSize: WidgetSize;
    widgetName: string;
  }

  interface SiteInfo {
    type: "site";
    id: string;
    name: string;
    target: string;
    bgColor: string;
    bgImage: string;
    bgType: string;
  }

  type App = WidgetInfo | SiteInfo;
}
