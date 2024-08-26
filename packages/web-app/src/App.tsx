import "@icon-park/react/styles/index.css"
import "@pingtou/shadcn-ui/dist/esm/index.css"
import { Search } from "./components/Search"
import { Wallpaper } from "./components/Wallpaper"
import { Setting } from "./components/Setting"
import { SideDock } from "./components/SideDock"
import { Minimalist } from "./components/Minimalist"
import "./style/index.css"

function App() {
  return (
    <>
      <Wallpaper />
      <Search />

      <SideDock />
      <Setting />
      <Minimalist />
    </>
  )
}

export default App
