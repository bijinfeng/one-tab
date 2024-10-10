import { Tabs } from "@onetab/ui";
import type { FC } from "react";
import { DynamicWallpaper } from "./DynamicWallpaper";
import { GradientWallpaper } from "./GradientWallpaper";
import { SelectedWallpaper } from "./SelectedWallpaper";

export const WallpaperSetting: FC = () => {
	return (
		<Tabs
			defaultValue="default"
			className="overflow-hide h-full flex flex-col"
			headerClassName="mt-4 mb-2 mx-[40px] w-auto grid grid-cols-3 bg-color-white text-color-t2"
			tabBarClassName="data-[state=active]:bg-color-m2 data-[state=active]:text-color-white"
			containerClassName="flex-1 overflow-hidden"
			items={[
				{
					key: "default",
					label: "精选图片",
					children: <SelectedWallpaper />,
					className: "h-full overflow-hidden m-0",
				},
				{
					key: "custom",
					label: "动态壁纸",
					children: <DynamicWallpaper />,
					className: "h-full overflow-hidden m-0",
				},
				{
					key: "additional",
					label: "渐变背景",
					children: <GradientWallpaper />,
					className: "h-full overflow-hidden m-0",
				},
			]}
		/>
	);
};
