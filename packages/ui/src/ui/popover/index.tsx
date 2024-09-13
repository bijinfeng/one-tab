import type { FC } from 'react'
import { PopoverContent, Popover as PopoverPrimitive, PopoverTrigger } from './popover'

type ContentProps = Omit<React.ComponentPropsWithoutRef<typeof PopoverContent>, 'content'>

interface PopoverProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive>, ContentProps {
  content?: React.ReactNode
  className?: string
}

export const Popover: FC<PopoverProps> = (props) => {
  const { children, content, defaultOpen, open, onOpenChange, modal, ...rest } = props

  return (
    <PopoverPrimitive open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} modal={modal}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent {...rest}>
        {content}
      </PopoverContent>
    </PopoverPrimitive>
  )
}
