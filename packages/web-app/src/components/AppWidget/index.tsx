import { useModal } from "@ebay/nice-modal-react";
import { Skeleton } from "@onetab/ui";
import type { FC } from "react";

import { builtWidgets } from "../BuiltWidgets";
import { SettingModal } from "./Setting";

interface IWidgetProps {
	data: OneTab.WidgetInfo;
}

function getWidgetHeight(data: OneTab.WidgetInfo): string {
	if (data.widgetSize === "large") {
		return "calc(var(--icon-size) * 2 + 60px";
	}

	if (data.widgetSize === "medium") {
		return "calc(var(--icon-size) * 2 + 60px";
	}

	return "var(--icon-size)";
}

function getWidgetInfo(data: OneTab.WidgetInfo) {
	return builtWidgets.find((item) => item.id === data.widgetName);
}

export const AppWidget: FC<IWidgetProps> = ({ data }) => {
	const modal = useModal(SettingModal);
	const widgetInfo = getWidgetInfo(data);

	const renderPreview = () => {
		if (!widgetInfo) {
			return <Skeleton className="w-full h-full bg-color-m1 bg-opacity-60" />;
		}

		return widgetInfo.renderPreview(data);
	};

	return (
		<div
			className="icon-widget h-full w-full overflow-hidden bg-cover"
			style={{ height: getWidgetHeight(data) }}
			onClick={() => modal.show()}
		>
			{renderPreview()}
		</div>
	);
};
