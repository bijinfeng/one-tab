import { useSettingStore } from "@/store/setting";
import {
	DndContext,
	type DragOverEvent,
	MouseSensor,
	TouchSensor,
	closestCorners,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { useControllableValue } from "ahooks";
import { type FC, useCallback, useMemo } from "react";

import { AddButton } from "./AddButton";
import { SortableItem } from "./SortableItem";

interface ISortableProps {
	value: OneTab.App[];
	onChange: (items: OneTab.App[]) => void;
}

export const Sortable: FC<ISortableProps> = (props) => {
	const { hideAddIcon } = useSettingStore();

	const [items, setItems] = useControllableValue<OneTab.App[]>(props);
	const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
	const idItems = useMemo(() => items.map((item) => item.id), [items]);

	const handleDragOver = useCallback(
		(event: DragOverEvent) => {
			const { active, over } = event;

			if (active.id !== over?.id) {
				setItems((items) => {
					const oldIndex = items.findIndex((i) => i.id === active.id);
					const newIndex = items.findIndex((i) => i.id === over?.id);

					return arrayMove(items, oldIndex, newIndex);
				});
			}
		},
		[setItems],
	);

	return (
		<DndContext sensors={sensors} collisionDetection={closestCorners} onDragOver={handleDragOver}>
			<div className="grid grid-flow-row-dense grid-cols-[repeat(auto-fill,var(--icon-width-full))]">
				<SortableContext items={idItems}>
					{items.map((item) => (
						<SortableItem key={item.id} item={item} />
					))}
				</SortableContext>

				{!hideAddIcon && (
					<div className="icon-box" onContextMenu={(e) => e.stopPropagation()}>
						<AddButton />
					</div>
				)}
			</div>
		</DndContext>
	);
};
