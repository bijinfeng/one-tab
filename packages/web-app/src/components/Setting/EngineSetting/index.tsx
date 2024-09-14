import { Tabs } from '@onetab/ui'
import type { TabItemType } from '@onetab/ui'
import type { FC } from 'react'
import { CustomEngines } from './CustomEngines'
import { DefaultEngines } from './DefaultEngines'

const items: TabItemType[] = [
  { key: 'default', label: '默认', children: <DefaultEngines /> },
  { key: 'custom', label: '自定义', children: <CustomEngines /> },
  { key: 'additional', label: '附加' },
]

export const EngineSetting: FC = () => {
  return (
    <Tabs
      defaultValue="default"
      className="pt-[40px]"
      headerClassName="mx-[70px] w-auto grid grid-cols-3 bg-color-m2 bg-opacity-20 text-white"
      tabContentClassName="mt-5"
      items={items}
    />
  )
}
