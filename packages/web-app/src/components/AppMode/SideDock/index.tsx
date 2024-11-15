
import { Dropdown, type DropdownProps, cn } from "@onetab/ui";
import { useHover } from "ahooks";
import { useRef, useState } from "react";

import oneTabIcon from "@/assets/onetab.png";
import { IconButton } from "@/components/IconButton";
import { useAppStore } from "@/store/app";
import { useSettingStore } from "@/store/setting";
import { Icon } from "@/components/Icon"

import { AddCategory } from "./AddCategory";
import { CategoryItem } from "./CategoryItem";

export function SideDock() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { currentCategory, categoryGroup, updateCategory } = useAppStore();
	const { leftBarDisplaySide, leftBarDisplayStatus, showCategoryTitle, updateSetting } = useSettingStore();
	const [isOpen, setIsOpen] = useState(false);
	const isContainerHover = useHover(containerRef);

	const isLeft = leftBarDisplaySide === "left";
	const isRight = leftBarDisplaySide === "right";

	if (leftBarDisplayStatus === "hide") return null;

	const items: DropdownProps["menuItems"] = [
		{
			key: "auto-hide",
			label: "自动隐藏",
			visible: leftBarDisplayStatus !== "auto-hide",
			onClick: () => updateSetting({ leftBarDisplayStatus: "auto-hide" }),
		},
		{
			key: "show",
			label: "一直显示",
			visible: leftBarDisplayStatus !== "show",
			onClick: () => updateSetting({ leftBarDisplayStatus: "show" }),
		},
		{
			key: "hide",
			label: "一直隐藏",
			visible: true,
			onClick: () => updateSetting({ leftBarDisplayStatus: "hide" }),
		},
		{
			key: "hide-title",
			label: "隐藏标题",
			visible: showCategoryTitle,
			onClick: () => updateSetting({ showCategoryTitle: false }),
		},
		{
			key: "show-title",
			label: "显示标题",
			visible: !showCategoryTitle,
			onClick: () => updateSetting({ showCategoryTitle: true }),
		},
		{
			key: "right",
			label: "右侧",
			visible: isLeft,
			onClick: () => updateSetting({ leftBarDisplaySide: "right" }),
		},
		{
			key: "left",
			label: "左侧",
			visible: isRight,
			onClick: () => updateSetting({ leftBarDisplaySide: "left" }),
		},
	];

	return (
		<div
			className={cn("group h-sidebar absolute top-1/2 -translate-y-1/2", {
				"pl-3": isLeft,
				"right-0 pr-3": isRight,
			})}
			onContextMenu={(e) => e.stopPropagation()}
		>
			<div
				ref={containerRef}
				className={cn(
					"h-full relative home-sidedock icon-drop group glass-sidbar flex w-[52px] flex-col items-center rounded-[16px] bg-color-black bg-opacity-40 py-[8px]",
					{
						"-translate-x-[64px]": leftBarDisplayStatus === "auto-hide" && isLeft,
						"translate-x-[64px]": leftBarDisplayStatus === "auto-hide" && isRight,
						"transition-all duration-300 delay-100 group-hover:translate-x-0": leftBarDisplayStatus === "auto-hide",
						"translate-x-0": isOpen,
					},
				)}
			>
				<div className="shrink-0 cursor-pointer overflow-hidden rounded-[10px] bg-[rgba(255,255,255,0.4)] shadow-avatar">
					<img className="h-[36px] w-[36px]" src={oneTabIcon} alt="icon" />
				</div>

				<div className="mt-[19px] h-[2px] w-[22px] shrink-0 rounded-[1px] bg-[rgba(0,0,0,0.15)]" />

				<div className="group relative w-full flex-grow py-4 space-y-2">
					{categoryGroup.map((item) => (
						<CategoryItem
							key={item.id}
							data={item}
							showTitle={showCategoryTitle || isContainerHover}
							activated={item.id === currentCategory}
							onClick={() => updateCategory(item.id)}
						/>
					))}
				</div>

				<div className="mb-[16px] h-[2px] w-[22px] shrink-0 rounded-[1px] bg-[rgba(0,0,0,0.15)]" />

				<AddCategory />

				<Dropdown
					open={isOpen}
					onOpenChange={setIsOpen}
					className="w-24"
					side="right"
					align="start"
					sideOffset={20}
					collisionPadding={10}
					menuItems={items}
				>
					<IconButton
						size="small"
						ghost
						className={cn("absolute -bottom-[28px] opacity-0 group-hover:opacity-100", { "opacity-100": isOpen })}
					>
						<Icon size={20} name="single_hover_icon" className="text-color-white text-opacity-40" />
					</IconButton>
				</Dropdown>
			</div>
		</div>
	);
}
