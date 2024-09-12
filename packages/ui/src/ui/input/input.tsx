import { cn } from '@/utils'
import { useControllableValue } from 'ahooks'
import { cva, type VariantProps } from 'class-variance-authority'
import { CircleX } from 'lucide-react'

import * as React from 'react'

const inputVariants = cva(
  'flex items-center rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50 focus-within:outline-none focus-within:ring-1 focus-within:ring-ring',
  {
    variants: {
      size: {
        default: 'h-9',
        small: 'h-6',
        large: 'h-10',
        middle: 'h-8',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'onChange' | 'size'>, VariantProps<typeof inputVariants> {
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  allowClear?: boolean
  onClear?: () => void
  onChange?: (text?: string) => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const [value = '', setValue] = useControllableValue<string>(props, { defaultValue: '' })
    const { className, type, prefix, suffix, allowClear, onClear, size, ...rest } = props

    const handleClear = () => {
      setValue('')
      onClear?.()
    }

    return (
      <div className={cn(inputVariants({ size, className }))}>
        {prefix && <span className="flex mr-1">{prefix}</span>}

        <input
          {...rest}
          type={type}
          className="flex-1 h-full text-sm border-0 outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground"
          ref={ref}
          value={value}
          onChange={e => setValue(e.target.value)}
        />

        {suffix && <span className="flex ml-1">{suffix}</span>}

        {value && allowClear && <CircleX fill="currentColor" className="cursor-pointer" color="white" size={18} onClick={handleClear} />}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
