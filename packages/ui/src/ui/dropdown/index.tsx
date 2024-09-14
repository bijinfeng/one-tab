import type { FC } from 'react'
import { ContextMenu } from './context'
import { Dropdown as DropdownMenu } from './dropdown'

export type DropdownMenuProps = React.ComponentPropsWithoutRef<typeof DropdownMenu> & { trigger?: 'click' }
export type ContextMenuProps = React.ComponentPropsWithoutRef<typeof ContextMenu> & { trigger?: 'contextmenu' }
export type DropdownProps = DropdownMenuProps | ContextMenuProps

export const Dropdown: FC<DropdownProps> = ({ trigger = 'click', ...props }) => {
  if (trigger === 'click') {
    return <DropdownMenu {...props} />
  }

  if (trigger === 'contextmenu') {
    return <ContextMenu {...props} />
  }

  return null
}
