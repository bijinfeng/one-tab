import React from 'react'
import type { FC } from 'react'
import {
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenu as ContextMenuPrimitive,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from './context-menu'

type ContextMenuProps = React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive>
type ContentProps = Omit<React.ComponentPropsWithoutRef<typeof ContextMenuContent>, 'content'>

interface MenuItemType {
  danger?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  key: string
  label: string
  title?: string
  visible?: boolean
  onClick?: () => void
}

interface SubMenuType {
  children: ItemType[]
  disabled?: boolean
  icon?: React.ReactNode
  key: string
  label: string
  popupClassName?: string
  visible?: boolean
  onTitleClick?: (params: { key: string, domEvent: React.SyntheticEvent<HTMLDivElement, Event> }) => void
}

interface MenuItemGroupType {
  type: 'group'
  label: React.ReactNode
  children: MenuItemType[]
  visible?: boolean
}

interface MenuDividerType {
  type: 'divider'
  dashed?: boolean
  visible?: boolean
}

type ItemType = MenuItemType | SubMenuType | MenuItemGroupType | MenuDividerType

function isGroupType(item: ItemType): item is MenuItemGroupType {
  return 'type' in item && item.type === 'group'
}

function isDividerType(item: ItemType): item is MenuDividerType {
  return 'type' in item && item.type === 'divider'
}

function isSubMenuType(item: ItemType): item is SubMenuType {
  return 'children' in item
}

export interface ContextProps extends ContextMenuProps, ContentProps {
  menuItems: ItemType[]
  onItemClick?: (params: { key: string, item: MenuItemType }) => void
}

export const ContextMenu: FC<ContextProps> = (props) => {
  const { modal, onOpenChange, children, menuItems, onItemClick, ...rest } = props

  const handleClick = (item: MenuItemType) => {
    onItemClick?.({ key: item.key, item })
    item.onClick?.()
  }

  const renderItems = (items: ItemType[]) => {
    const filteredItems = items.filter(item => item.visible !== false)

    const renderMenuItem = (item: ItemType) => {
      if (isGroupType(item)) {
        return (
          <ContextMenuGroup>
            <ContextMenuLabel>{item.label}</ContextMenuLabel>
            {renderItems(item.children)}
          </ContextMenuGroup>
        )
      }
      else if (isDividerType(item)) {
        return <ContextMenuSeparator />
      }
      else if (isSubMenuType(item)) {
        return (
          <ContextMenuSub>
            <ContextMenuSubTrigger
              disabled={item.disabled}
              onSelect={event => item.onTitleClick?.({ domEvent: event, key: item.key })}
            >
              {item.label}
            </ContextMenuSubTrigger>
            <ContextMenuPortal>
              <ContextMenuSubContent>
                {renderItems(item.children)}
              </ContextMenuSubContent>
            </ContextMenuPortal>
          </ContextMenuSub>
        )
      }
      else {
        return (
          <ContextMenuItem
            onSelect={() => handleClick(item)}
            disabled={item.disabled}
            title={item.title}
          >
            {item.label}
          </ContextMenuItem>
        )
      }
    }

    return filteredItems.map((item, index) => (
      <React.Fragment key={index}>{renderMenuItem(item)}</React.Fragment>
    ))
  }

  return (
    <ContextMenuPrimitive onOpenChange={onOpenChange} modal={modal}>
      <ContextMenuTrigger asChild>
        {children}
      </ContextMenuTrigger>

      <ContextMenuContent {...rest}>
        {renderItems(menuItems)}
      </ContextMenuContent>
    </ContextMenuPrimitive>
  )
}
