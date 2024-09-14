import { Dropdown } from '@onetab/ui'
import type { FC, PropsWithChildren } from 'react'

export const ContextAction: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Dropdown
      trigger="contextmenu"
      className="w-24"
      menuItems={[
        { key: '1', label: '随机壁纸' },
        { key: '2', label: '下载壁纸' },
        { key: '3', label: '编辑常访栏' },
      ]}
    >
      {children}
    </Dropdown>
  )
}
