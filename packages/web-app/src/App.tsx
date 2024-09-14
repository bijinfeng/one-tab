import { useSettingStore } from '@/store/setting'
import { ConfigProvider } from '@onetab/ui'
import type { FC } from 'react'
import { AppMode } from './components/AppMode'
import { Minimalist } from './components/Minimalist'
import { MinimalistMode } from './components/MinimalistMode'
import { Modals } from './components/Modals'
import { Search } from './components/Search'
import { Setting } from './components/Setting'
import { Wallpaper } from './components/Wallpaper'
import { ThemeProvider } from './theme'
import '@onetab/ui/index.css'
import './style/iconfont/style.css'
import './style/index.css'

export const App: FC = () => {
  const { minimalistMode } = useSettingStore()

  return (
    <ConfigProvider>
      <ThemeProvider>
        <div className="icon-home-medium fixed left-0 right-0 top-0 bottom-0 select-none overflow-hidden text-[14px]">
          <Wallpaper />
          {minimalistMode ? <MinimalistMode /> : <AppMode />}
          <Search />
          <Setting />
          <Minimalist />
        </div>
        <Modals />
      </ThemeProvider>
    </ConfigProvider>
  )
}
