'use client'

import { Label } from '@/ui/label'
import { cn, isFunction, isNullish } from '@/utils'

import React, { useMemo } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import type { FormItemProps } from './type'

const FormItem: React.FC<FormItemProps> = (props) => {
  const {
    name,
    children,
    defaultValue,
    rules,
    shouldUnregister,
    required,
    label,
    style,
    className,
    labelSuffix,
    noStyle,
    description,
    subTitle,
    labelClassName,
  } = props

  // required 为 true，且 rules 为空时赋予 rules 默认值
  const lastRules = useMemo<FormItemProps['rules']>(() => {
    return !!required && isNullish(rules) ? { required: `请填写${label}` } : rules
  }, [required, rules, label])

  const { control } = useFormContext()
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    rules: lastRules,
    shouldUnregister,
  })

  const isRequired = !isNullish(required) ? required : rules && !!rules?.required

  const errorMessage = fieldState.error?.message

  const renderChildren = () => {
    if (isFunction(children))
      return children(field)
    if (!React.isValidElement(children))
      return children

    // 判断是不是原生组件
    const isNative = typeof children.type === 'string'
    const error = !!errorMessage
    const restProps = error ? { error: isNative ? error.toString() : error } : null

    return React.cloneElement(children, {
      ...restProps,
      ...children.props,
      ...field,
    })
  }

  if (noStyle)
    return <div>{renderChildren()}</div>

  return (
    <div className={cn('space-y-2', className)} style={style}>
      {label && (
        <Label className={cn('flex items-center', labelClassName)}>
          <span
            className={cn({
              'after:content-[\'*\'] after:ml-0.5 after:text-red-500': isRequired,
            })}
          >
            {label}
          </span>
          {labelSuffix && <span className="form-label-description">{labelSuffix}</span>}
        </Label>
      )}
      {subTitle && <p className="text-[0.8rem] text-muted-foreground">{subTitle}</p>}
      {renderChildren()}
      {description && <p className="text-[0.8rem] text-muted-foreground">{description}</p>}
      {errorMessage && <p className="text-[0.8rem] font-medium text-destructive">{errorMessage}</p>}
    </div>
  )
}

export default FormItem
