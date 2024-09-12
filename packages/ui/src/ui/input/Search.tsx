import { SearchIcon } from 'lucide-react'
import type { FC } from 'react'
import { Input } from './input'

type SearchProps = Omit<React.ComponentPropsWithoutRef<typeof Input>, 'prefix'>

export const Search: FC<SearchProps> = (props) => {
  return <Input {...props} prefix={<SearchIcon size={18} />} />
}
