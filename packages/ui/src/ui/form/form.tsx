'use client'

import { cn } from '@/utils'
import { useMemoizedFn } from 'ahooks'
import { useEffect, useImperativeHandle, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import type { FieldValues } from 'react-hook-form'
import { FormContext } from './form-context'
import type { FormContextType } from './form-context'
import type { FormProps } from './type'

function DEFAULT_CHANGE() { }

function Form<V extends FieldValues>(props: FormProps<V>) {
  const {
    children,
    showValidateMessage = true,
    layout,
    colon,
    style,
    form,
    mode = 'onChange',
    onChange = DEFAULT_CHANGE,
    className,
    ...formProps
  } = props
  const memoizeChange = useMemoizedFn(onChange)
  const methods = useForm<V>({ mode, ...formProps })
  const { watch } = methods

  const formState = useMemo<FormContextType>(() => ({ showValidateMessage, layout, colon }), [showValidateMessage, layout, colon])

  useEffect(() => {
    const subscription = watch((value) => {
      memoizeChange(value as V)
    })
    return () => subscription.unsubscribe()
  }, [watch, memoizeChange])

  useImperativeHandle(form, () => methods)

  return (
    <FormProvider<V> {...methods}>
      <FormContext.Provider value={formState}>
        <div style={style} className={cn('space-y-6', className)}>
          {children}
        </div>
      </FormContext.Provider>
    </FormProvider>
  )
}

export default Form
