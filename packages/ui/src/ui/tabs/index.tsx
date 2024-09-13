import type { FC } from 'react'
import { TabsContent, TabsList, Tabs as TabsPrimitive, TabsTrigger } from './tabs'

interface TabItemType {
  disabled?: boolean
  key: string
  label: string
  children: React.ReactNode
}

export interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive> {
  items: TabItemType[]
  tabBarStyle?: React.CSSProperties
  tabContentStyle?: React.CSSProperties
  tabBarClassName?: string
  tabContentClassName?: string
}

export const Tabs: FC<TabsProps> = (props) => {
  const { items, tabBarStyle, tabContentStyle, tabBarClassName, tabContentClassName, ...rest } = props

  return (
    <TabsPrimitive {...rest}>
      <TabsList className="grid w-full grid-cols-2">
        {items.map(item => (
          <TabsTrigger
            key={item.key}
            value={item.key}
            disabled={item.disabled}
            style={tabBarStyle}
            className={tabBarClassName}
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {items.map(item => (
        <TabsContent value={item.key} key={item.key} className={tabContentClassName} style={tabContentStyle}>
          {item.children}
        </TabsContent>
      ))}
    </TabsPrimitive>
  )
}
