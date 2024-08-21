import "@icon-park/react/styles/index.css"
import "@pingtou/shadcn-ui/dist/esm/index.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./style/index.less"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
