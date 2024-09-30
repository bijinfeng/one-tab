import { getWallpaperGroup } from "@/api";
import { useRequest } from "ahooks";
import { createPortal } from "react-dom";

import { type FC, useContext, useState } from "react";
import { SettingContext } from "../context";
import { Wallpaper } from "./Wallpaper";
import { WallpaperList } from "./WapplaperList";

export const SelectedWallpaper: FC = () => {
	const { data } = useRequest(getWallpaperGroup);
	const [activeGroup, setActiveGroup] = useState<OneTab.WallpaperGroup>();
	const { portalRef } = useContext(SettingContext);

	if (!data || !portalRef.current) return;

	return (
		<>
			<div className="grid grid-cols-2 gap-3 pt-3">
				{data.data.map((item) => (
					<Wallpaper
						key={item.id}
						data={item.cover}
						title={item.title}
						onClick={() => setActiveGroup(item)}
					/>
				))}
			</div>

			{activeGroup &&
				createPortal(
					<WallpaperList
						group={activeGroup}
						onBack={() => setActiveGroup(undefined)}
					/>,
					portalRef.current,
				)}
		</>
	);
};
