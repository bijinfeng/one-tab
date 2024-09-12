import { useBoolean } from 'ahooks'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import type { FC } from 'react'
import { Input } from './input'

type PasswordProps = Omit<React.ComponentPropsWithoutRef<typeof Input>, 'type' | 'suffix'>

export const Password: FC<PasswordProps> = (props) => {
  const [open, { toggle }] = useBoolean(false)

  const SuffixIcon = open ? EyeIcon : EyeOffIcon

  return <Input {...props} suffix={<SuffixIcon className="cursor-pointer" size={18} onClick={toggle} />} type={open ? 'text' : 'password'} />
}
