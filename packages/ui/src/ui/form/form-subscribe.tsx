'use client'

import React from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import type { DeepPartialSkipArrayKey } from 'react-hook-form'

type ChildrenType = (changedValues: DeepPartialSkipArrayKey<any>) => React.ReactNode

export interface FormSubscribeProps {
  to: any
  children: ChildrenType
}

function FormSubscribe(props: FormSubscribeProps): JSX.Element {
  const { control } = useFormContext()
  const watch = useWatch({ control, name: props.to })

  return <>{props.children(watch)}</>
}

export default FormSubscribe
