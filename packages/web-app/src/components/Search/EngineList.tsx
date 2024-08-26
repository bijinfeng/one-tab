import type { DragEndEvent, DragStartEvent, DropAnimation, UniqueIdentifier } from "@dnd-kit/core"
import { DndContext, DragOverlay, MouseSensor, PointerSensor, defaultDropAnimationSideEffects, useSensor, useSensors } from "@dnd-kit/core"
import { SortableContext, arrayMove, horizontalListSortingStrategy } from "@dnd-kit/sortable"
import { Plus } from "@icon-park/react"
import { cn } from "@pingtou/shadcn-ui"

import { useState } from "react"
import { createPortal } from "react-dom"
import { EngineItem } from "./EngineItem"
import { useSearchStore } from "@/store/search"
import { events } from "@/events"

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.5",
      },
    },
  }),
}

export function EngineList() {
  const { defaultList, currentIdList, updateCurrentIdList } = useSearchStore()
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  )

  const currentEngineList = currentIdList.map(it => defaultList.find(item => item.id === it)!)

  const handleDragEnd = ({ over }: DragEndEvent) => {
    if (over && activeId) {
      const activeIndex = currentIdList.indexOf(activeId.toString())
      const overIndex = currentIdList.indexOf(over.id.toString())
      if (activeIndex !== overIndex)
        updateCurrentIdList(arrayMove(currentIdList, activeIndex, overIndex))
    }

    setActiveId(null)
  }

  const handleDragStart = (event: DragStartEvent) => {
    if (!event.active)
      return

    setActiveId(event.active.id)
  }

  const renderDragOverlay = () => {
    const OverlayContainer = (
      <DragOverlay adjustScale={false} dropAnimation={dropAnimationConfig}>
        {activeId && <EngineItem item={currentEngineList.find(it => it.id === activeId)!} />}
      </DragOverlay>
    )

    return createPortal(OverlayContainer, document.body)
  }

  const handleAdd = () => events.emit("openSetting", "engines")

  return (
    <ul className="wrapper px-[20px] pt-[20px] pb-[24px] text-[12px] relative grid grid-cols-[repeat(auto-fill,48px)] gap-[20px]">
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} sensors={sensors}>
        <SortableContext items={currentIdList} strategy={horizontalListSortingStrategy}>
          {currentEngineList.map(item => <EngineItem key={item.id} item={item} className={cn({ "opacity-50": item.id === activeId })} />)}
        </SortableContext>
        {renderDragOverlay()}
      </DndContext>

      <li className="flex flex-col items-center">
        <div onClick={handleAdd} className="icon flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-[12px] bg-color-white bg-opacity-80 transition-colors hover:bg-opacity-100 dark:bg-opacity-[0.06] dark:hover:bg-opacity-20">
          <Plus size={24} className="text-color-t3" />
        </div>
        <div className="mt-[4px] w-[60px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-color-t3">添加</div>
      </li>
    </ul>
  )
}
