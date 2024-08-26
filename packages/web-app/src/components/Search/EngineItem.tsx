import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Close } from "@icon-park/react"
import { cn } from "@pingtou/shadcn-ui"
import type { FC } from "react"
import { useSearchStore } from "@/store/search"

interface EngineItemProps {
  item: OneTab.EngineInfo
  className?: string
}

export const EngineItem: FC<EngineItemProps> = ({ item, className }) => {
  const { currentId, setCurrentId } = useSearchStore()

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: item.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <li ref={setNodeRef} style={style} className={cn("search-drop flex flex-col items-center", className)}>
      <div className="group cursor-pointer icon search-drag relative flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-color-white bg-opacity-80 transition-colors hover:bg-opacity-100 dark:bg-opacity-[0.06] dark:hover:bg-opacity-20">
        {currentId !== item.id && (
          <section className="hi-close cursor-pointer flex items-center justify-center rounded-[50%] bg-color-b4 shadow-close-btn transition-opacity absolute top-[-8px] left-[-8px] h-6 w-6 opacity-0 group-hover:opacity-100">
            <Close strokeWidth={8} size={10} className="icon-close_icon text-color-t4 transition-[transform,color] duration-300" />
          </section>
        )}

        <section
          {...listeners}
          {...attributes}
          className="hi-icon flex items-center justify-center overflow-hidden bg-cover h-[24px] w-[24px] rounded-[6px]"
          style={{ backgroundImage: `url(${item.bgImage})`, backgroundColor: item.bgColor }}
          onClick={() => setCurrentId(item.id)}
        />
      </div>
      <div className="text-[12px] mt-[4px] w-[60px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-color-t3">{item.name}</div>
    </li>
  )
}
