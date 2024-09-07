import {
  closestCorners,
  DndContext,
  DragOverEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { FC, useCallback, useMemo, useState } from "react";
import { SortableItem } from "./SortableItem";

interface ISortableProps {
  items: OneTab.App[];
}

export const Sortable: FC<ISortableProps> = (props) => {
  const [items, setItems] = useState(props.items);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const idItems = useMemo(() => items.map((item) => item.id), [items]);

  const handleDragOver = useCallback((event: DragOverEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }, []);

  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners} onDragOver={handleDragOver}>
      <div className="grid grid-flow-row-dense grid-cols-[repeat(auto-fill,var(--icon-width-full))]">
        <SortableContext items={idItems}>
          {items.map((item) => (
            <SortableItem key={item.id} item={item} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};
