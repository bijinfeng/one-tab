import { cn } from '@onetab/ui'
import { useKeyPress } from 'ahooks'
import { isNil } from 'lodash-es'
import { type FC, useState } from 'react'

interface SuggetionListProps {
  list: string[]
  onSuggestClick: (item: string) => void
  onSuggestChoose: (text: string) => void
}

export const SuggetionList: FC<SuggetionListProps> = ({ list, onSuggestClick, onSuggestChoose }) => {
  const [activeIndex, setActiveIndex] = useState<number>()

  useKeyPress(['uparrow', 'downarrow'], (_event, key) => {
    const isDown = key === 'downarrow'
    const maxLength = list.length - 1

    let nextIndex = 0

    if (isNil(activeIndex)) {
      nextIndex = isDown ? 0 : maxLength
    }
    else if (isDown) {
      nextIndex = activeIndex === maxLength ? 0 : activeIndex + 1
    }
    else {
      nextIndex = activeIndex === 0 ? maxLength : activeIndex - 1
    }

    setActiveIndex(nextIndex)
    onSuggestChoose(list[nextIndex])
  })

  return (
    <div className="wrapper">
      <ul className="list overflow-auto py-[4px]">
        {list.map((item, index) => (
          <li
            key={index}
            className={cn(
              'bg-color-m2 bg-opacity-0 li mx-[8px] my-[4px] flex h-[36px] cursor-pointer items-center rounded-[8px] px-[8px] transition-colors hover:bg-opacity-[0.06]',
              { 'bg-opacity-[0.06]': activeIndex === index },
            )}
            onClick={() => onSuggestClick(item)}
          >
            <i className="iconfont icon-magnifier_icon mr-[16px] text-[20px] text-color-t3" />
            <div className="max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap text-color-t2">{item}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
