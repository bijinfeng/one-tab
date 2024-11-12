import { cn, ScrollArea } from "@onetab/ui";
import { isString } from "lodash-es";
import type { CSSProperties, FC, ReactNode } from "react";

export interface SideBarItem {
	key: string;
	title: string;
	icon?: ReactNode;
	[key: string]: unknown;
}

interface SidebarProps {
	items: SideBarItem[];
	activeKey: string;
	className?: string;
	style?: CSSProperties;
	onItemClick?: (key: string) => void;
}

export const Sidebar: FC<SidebarProps> = (props) => {
	const { activeKey, items, className, style, onItemClick } = props;

	const renderIcon = (item: SideBarItem) => {
		if (isString(item.icon)) {
			return (
				<i className={`iconfont icon-${item.icon} text-[20px] leading-none`} />
			);
		}

		return item.icon;
	};

	return (
		<ScrollArea>
			<div className={cn("px-[16px] pt-[32px] pb-[40px] space-y-1", className)} style={style}>
				{items.map((item) => (
					<button
						key={item.key}
						type="button"
						className={cn(
							"h-[36px] w-full rounded-[6px] py-[8px] pl-[12px] text-left text-[14px] text-color-t2 duration-150 hover:bg-color-white hover:bg-opacity-90 hover:text-color-t1 not-last:mb-[4px] hover:dark:bg-opacity-10",
							"flex items-center outline-none gap-2 leading-5",
							{
								"bg-color-white bg-opacity-90 text-color-t1  dark:bg-opacity-10":
									item.key === activeKey,
							},
						)}
						onClick={() => onItemClick?.(item.key)}
					>
						{item.icon && renderIcon(item)}
						<span>{item.title}</span>
					</button>
				))}
			</div>
		</ScrollArea>
	);
};
