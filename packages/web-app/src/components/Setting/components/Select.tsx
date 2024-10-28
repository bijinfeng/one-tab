import { Dropdown, cn } from "@onetab/ui";
import { useBoolean } from "ahooks";
import type { FC } from "react";

export interface MenuIten {
	label: string;
	key: string;
	onClick: () => void;
}

interface ISelectProps {
	menuItems: MenuIten[];
	value?: string;
}

export const Select: FC<ISelectProps> = ({ value, menuItems }) => {
	const [open, openActions] = useBoolean(false);

	const selectedLabel = menuItems.find((item) => item.key === value)?.label;

	return (
		<Dropdown
			open={open}
			onOpenChange={openActions.toggle}
			className="w-auto min-w-0"
			side="bottom"
			align="end"
			menuItems={menuItems}
		>
			<div className="flex cursor-pointer items-center text-[14px] text-color-t2">
				<span className="flex-1">{selectedLabel}</span>
				<div
					className={cn(
						"ml-[12px] flex-shrink-0 transform-gpu transition-transform duration-150",
						{ "rotate-180": open },
					)}
				>
					<i className="iconfont icon-down_icon text-[12px]" />
				</div>
			</div>
		</Dropdown>
	);
};
