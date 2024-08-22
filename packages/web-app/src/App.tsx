import "@icon-park/react/styles/index.css"
import "@pingtou/shadcn-ui/dist/esm/index.css"
import { Search } from "./components/Search"
import { Wallpaper } from "./components/Wallpaper"
import "./style/index.css"

function App() {
  return (
    <>
      <Wallpaper />
      <Search />
    </>
  )
}

export default App
