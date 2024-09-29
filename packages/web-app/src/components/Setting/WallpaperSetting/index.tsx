import { Tabs } from "@onetab/ui";
import type { FC } from "react";
import { SelectedWallpaper } from "./SelectedWallpaper";

export const WallpaperSetting: FC = () => {
	return (
		<Tabs
			defaultValue="default"
			className="pt-4 px-[40px]"
			headerClassName="grid grid-cols-3 bg-color-white text-color-t2"
			tabBarClassName="data-[state=active]:bg-color-m2 data-[state=active]:text-color-white"
			items={[
				{ key: "default", label: "精选图片", children: <SelectedWallpaper /> },
				{ key: "custom", label: "动态壁纸" },
				{ key: "additional", label: "渐变背景" },
			]}
		/>
	);
};
