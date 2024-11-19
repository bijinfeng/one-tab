import { AppSite } from "@/components/AppSite";
import { AppWidget } from "@/components/AppWidget";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { CSSProperties, FC, PropsWithChildren } from "react";

interface ISortableItemProps {
	item: OneTab.App;
}

function getGridSpan(item: OneTab.App): CSSProperties {
	if (item.type === "site") return {};

	if (item.widgetSize === "large") {
		return {
			gridColumnStart: "span 4",
			gridRowStart: "span 2",
		};
	}

	if (item.widgetSize === "medium") {
		return {
			gridColumnStart: "span 2",
			gridRowStart: "span 2",
		};
	}

	if (item.widgetSize === "small") {
		return {
			gridColumnStart: "span 2",
			gridRowStart: "span 1",
		};
	}

	return {};
}

export const SortableItem: FC<PropsWithChildren<ISortableItemProps>> = ({ item }) => {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });

	const style: CSSProperties = {
		transform: CSS.Transform.toString(transform),
		transition,
		...getGridSpan(item),
	};

	return (
		<div key={item.id} ref={setNodeRef} style={style} className="icon-box" onContextMenu={(e) => e.stopPropagation()}>
			<div {...listeners} {...attributes} className="cursor-pointer relative">
				{item.type === "site" ? <AppSite data={item} /> : <AppWidget data={item} />}
			</div>
			<div className="text-[14px] text-center pt-[8px] relative left-[-15px] h-[30px] w-[calc(100%+30px)]">
				<div className="mx-auto min-w-[10px] max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap name text-color-white">
					{item.name}
				</div>
			</div>
		</div>
	);
};
