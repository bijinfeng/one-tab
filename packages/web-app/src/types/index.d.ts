declare namespace OneTab {
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
}
