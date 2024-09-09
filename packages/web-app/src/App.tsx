import { useSettingStore } from "@/store/setting";
import "@icon-park/react/styles/index.css";
import { TooltipProvider } from "@pingtou/shadcn-ui";
import "@pingtou/shadcn-ui/dist/esm/index.css";
import { AppMode } from "./components/AppMode";
import { Minimalist } from "./components/Minimalist";
import { MinimalistMode } from "./components/MinimalistMode";
import { Modals } from "./components/Modals";
import { Search } from "./components/Search";
import { Setting } from "./components/Setting";
import { Wallpaper } from "./components/Wallpaper";
import "./style/iconfont/style.css";
import "./style/index.css";
import { ThemeProvider } from "./theme";

function App() {
  const { minimalistMode } = useSettingStore();

  return (
    <ThemeProvider>
      <TooltipProvider>
        <div className="icon-home-medium fixed left-0 right-0 top-0 bottom-0 select-none overflow-hidden text-[14px]">
          <Wallpaper />
          {minimalistMode ? <MinimalistMode /> : <AppMode />}
          <Search />
          <Setting />
          <Minimalist />
        </div>
        <Modals />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
