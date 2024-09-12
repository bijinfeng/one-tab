'use client'

import { useFieldArray, useWatch } from 'react-hook-form'
import _Form from './form'
import Item from './form-item'
import List from './form-list'
import Subscribe from './form-subscribe'

const Form = Object.assign(_Form, {
  Item,
  Subscribe,
  List,
  useWatch,
  useFieldArray,
})

export { Form }
export default Form
export type { FormSubscribeProps } from './form-subscribe'
export type { FormInstance, FormItemProps, FormProps } from './type'
