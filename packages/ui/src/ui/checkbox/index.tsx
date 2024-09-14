import { cn } from '@/utils'
import { useControllableValue } from 'ahooks'
import { forwardRef } from 'react'
import type { FC } from 'react'
import { Checkbox as CheckboxPrimitive } from './checkbox'

export interface CheckboxProps extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive>, 'checked' | 'onCheckedChange' | 'onChange'> {
  checked?: boolean
  indeterminate?: boolean
  onChange?: (checked: boolean) => void
}

const CheckboxRoot = forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
  const { className, children, checked, indeterminate, onChange, ...rest } = props

  const handleCheckedChange = (checked: boolean | 'indeterminate') => {
    onChange?.(checked === 'indeterminate' ? true : checked)
  }

  return (
    <label ref={ref} className={cn('inline-flex items-center gap-2 cursor-pointer text-sm font-medium leading-none', className)}>
      <CheckboxPrimitive
        checked={indeterminate ? 'indeterminate' : checked}
        onCheckedChange={handleCheckedChange}
        {...rest}
      />
      {children && (<span>{children}</span>)}
    </label>
  )
})

export interface CheckboxGroupProps {
  options: Array<{
    label: string
    value: string
    disabled?: boolean
  }>
  defaultValue?: (string | number)[]
  disabled?: boolean
  name?: string
  value?: (string | number)[]
  onChange?: (value: (string | number)[]) => void
}

const CheckboxGroup: FC<CheckboxGroupProps> = (props) => {
  const { options, disabled, name } = props
  const [value, setValue] = useControllableValue<(string | number)[]>(props)

  const handleCheckedChange = (checked: boolean, key: string) => {
    if (checked) {
      setValue([...value, key])
    }
    else {
      setValue(value.filter(v => v !== key))
    }
  }

  return (
    <div className="inline-flex flex-wrap gap-2">
      {options.map(item => (
        <CheckboxRoot
          key={item.value}
          disabled={disabled || item.disabled}
          checked={value?.includes(item.value)}
          onChange={checked => handleCheckedChange(checked, item.value)}
          name={name}
        >
          {item.label}
        </CheckboxRoot>
      ))}
    </div>
  )
}

export const Checkbox = Object.assign(CheckboxRoot, { Group: CheckboxGroup })
