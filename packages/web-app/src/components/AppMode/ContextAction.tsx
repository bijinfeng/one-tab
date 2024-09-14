import { events } from '@/events'
import { Dropdown } from '@onetab/ui'

import type { FC, PropsWithChildren } from 'react'

export const ContextAction: FC<PropsWithChildren> = ({ children }) => {
  const handleAddWidget = () => {
    events.emit('addWidget')
  }

  const menuItems = [
    {
      key: 'add-icon',
      label: '添加图标',
    },
    {
      key: 'add-widget',
      label: '添加小组件',
      onClick: handleAddWidget,
    },
    {
      key: 'random-wallpaper',
      label: '随机壁纸',
    },
    {
      key: 'download-wallpaper',
      label: '下载壁纸',
    },
    {
      key: 'edit-homepage',
      label: '编辑主页',
    },
    {
      key: 'search-icon',
      label: '搜索图标',
      shortcut: 'Ctrl + F',
    },
  ]

  return (
    <Dropdown trigger="contextmenu" className="w-44" menuItems={menuItems}>
      {children}
    </Dropdown>
  )
}
