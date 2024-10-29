import { IconButton } from "@/components/IconButton";
import { Tooltip, cn } from "@onetab/ui";
import { useHover } from "ahooks";
import { useRef } from "react";
import type { FC } from "react";

interface ICategoryItemProps {
	data: OneTab.AppCategory;
	showTitle: boolean;
	activated?: boolean;
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const CategoryItem: FC<ICategoryItemProps> = ({ data, showTitle, activated, onClick }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const isHover = useHover(containerRef);

	return (
		<Tooltip
			open={showTitle}
			side="right"
			overlayClassName={cn("text-white pl-1 pr-2 bg-transparent py-0 !leading-6 text-xs font-medium rounded", {
				"bg-white text-color-t2 pl-2": isHover,
			})}
			title={<span className="max-w-20 overflow-hidden text-ellipsis whitespace-nowrap">{data.name}</span>}
		>
			<div ref={containerRef} className="group flex justify-center">
				<IconButton size="huge" ghost activated={activated} onClick={onClick}>
					<i className={`${data.iconClass} iconfont text-[28px] leading-none`} />
				</IconButton>
			</div>
		</Tooltip>
	);
};
