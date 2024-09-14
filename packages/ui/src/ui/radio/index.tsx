import { cn } from '@/utils'
import { forwardRef } from 'react'
import { RadioGroup, RadioGroupItem } from './radio-group'

export interface RadioProps extends React.ComponentPropsWithoutRef<typeof RadioGroupItem> {
}

const RadioItem = forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <label ref={ref} className={cn('inline-flex items-center gap-2 cursor-pointer text-sm font-medium leading-none', className)}>
      <RadioGroupItem {...rest} />
      {children && (<span>{children}</span>)}
    </label>
  )
})

export const Radio = Object.assign(RadioItem, { Group: RadioGroup })
