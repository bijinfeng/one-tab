import { useSettingStore } from "@/store/setting";
import "@icon-park/react/styles/index.css";
import { TooltipProvider } from "@pingtou/shadcn-ui";
import "@pingtou/shadcn-ui/dist/esm/index.css";
import { Apps } from "./components/Apps";
import { LoginDialog } from "./components/Login";
import { Minimalist } from "./components/Minimalist";
import { Search } from "./components/Search";
import { Setting } from "./components/Setting";
import { SideDock } from "./components/SideDock";
import { Wallpaper } from "./components/Wallpaper";
import { Widgets } from "./components/Widgets";
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
          {minimalistMode && <Widgets />}
          {!minimalistMode && (
            <>
              <SideDock />
              <Apps />
            </>
          )}
          <Search />
          <Setting />
          <Minimalist />
        </div>
        {/* dialog */}
        <LoginDialog />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
