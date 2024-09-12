import type { FC } from 'react'
import { PopoverContent, Popover as PopoverPrimitive, PopoverTrigger } from './popover'

interface PopoverProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive> {
  content?: React.ReactNode
  className?: string
}

export const Popover: FC<PopoverProps> = ({ children, content, className }) => {
  return (
    <PopoverPrimitive>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className={className}>
        {content}
      </PopoverContent>
    </PopoverPrimitive>
  )
}
