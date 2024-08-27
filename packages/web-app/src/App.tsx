import "@icon-park/react/styles/index.css";
import "@pingtou/shadcn-ui/dist/esm/index.css";
import { Minimalist } from "./components/Minimalist";
import { Search } from "./components/Search";
import { Setting } from "./components/Setting";
import { SideDock } from "./components/SideDock";
import { Wallpaper } from "./components/Wallpaper";
import { Widgets } from "./components/Widgets";
import "./style/iconfont/style.css";
import "./style/index.css";

function App() {
  return (
    <>
      <Wallpaper />
      <Widgets />
      <Search />
      <SideDock />
      <Setting />
      <Minimalist />
    </>
  );
}

export default App;
