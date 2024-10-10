import { Tabs } from "@onetab/ui";
import type { FC } from "react";
import { GradientWallpaper } from "./GradientWallpaper";
import { SelectedWallpaper } from "./SelectedWallpaper";

export const WallpaperSetting: FC = () => {
	return (
		<Tabs
			defaultValue="default"
			className="pt-4 px-[40px] overflow-auto max-h-full"
			headerClassName="grid grid-cols-3 bg-color-white text-color-t2 sticky top-0 z-10"
			tabBarClassName="data-[state=active]:bg-color-m2 data-[state=active]:text-color-white"
			items={[
				{ key: "default", label: "精选图片", children: <SelectedWallpaper /> },
				{ key: "custom", label: "动态壁纸" },
				{
					key: "additional",
					label: "渐变背景",
					children: <GradientWallpaper />,
				},
			]}
		/>
	);
};
