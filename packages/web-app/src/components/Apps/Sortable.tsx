import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { FC, useMemo } from "react";
import { SortableItem } from "./SortableItem";

interface ISortableProps {
  items: OneTab.App[];
}

export const Sortable: FC<ISortableProps> = (props) => {
  const { items } = props;

  const idItems = useMemo(() => items.map((item) => item.id), [items]);

  return (
    <DndContext>
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
