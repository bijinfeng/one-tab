import { Search } from "@icon-park/react"
import type { FC } from "react"

interface SuggetionListProps {
  list: string[]
  onItemClick: (item: string) => void
}

export const SuggetionList: FC<SuggetionListProps> = ({ list, onItemClick }) => {
  return (
    <div className="wrapper">
      <ul className="list overflow-auto py-[4px]">
        {list.map((item, index) => (
          <li
            key={index}
            className="bg-color-m2 bg-opacity-0 li mx-[8px] my-[4px] flex h-[36px] cursor-pointer items-center rounded-[8px] px-[8px] transition-colors hover:bg-opacity-[0.06]"
            onClick={() => onItemClick(item)}
          >
            <Search size={18} className="mr-[16px] text-color-t3" />
            <div className="max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap text-color-t2">{item}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
