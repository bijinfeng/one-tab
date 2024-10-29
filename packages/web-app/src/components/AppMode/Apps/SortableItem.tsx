import { AppWidget } from "@/components/AppWidget";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Skeleton } from "@onetab/ui";
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

function getWidgetHeight(item: OneTab.WidgetInfo): string {
	if (item.widgetSize === "large") {
		return "calc(var(--icon-size) * 2 + 60px";
	}

	if (item.widgetSize === "medium") {
		return "calc(var(--icon-size) * 2 + 60px";
	}

	return "var(--icon-size)";
}

function renderWidget(item: OneTab.WidgetInfo) {
	return (
		<div className="icon-widget" style={{ height: getWidgetHeight(item) }}>
			<Skeleton className="w-full h-full bg-color-m1 bg-opacity-60" />
		</div>
	);
}

function renderSite(item: OneTab.SiteInfo) {
	return (
		<div className="icon-home">
			{/* <Skeleton className="w-full h-full bg-color-m1 bg-opacity-60" /> */}
			<AppWidget data={item} />
		</div>
	);
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
				{item.type === "site" ? renderSite(item) : renderWidget(item)}
			</div>
			<div className="text-[14px] text-center pt-[8px] relative left-[-15px] h-[30px] w-[calc(100%+30px)]">
				<div className="mx-auto min-w-[10px] max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap name text-color-white">
					{item.name}
				</div>
			</div>
		</div>
	);
};
