import { getWallpaperGroup } from "@/api";
import { useCacheStore } from "@/store/cache";
import { useRequest } from "ahooks";
import { createPortal } from "react-dom";

import { type FC, memo, useContext, useState } from "react";
import { SettingContext } from "../context";
import { Wallpaper } from "./Wallpaper";
import { WallpaperList } from "./WapplaperList";

export const SelectedWallpaper: FC = memo(() => {
	const { wallpaperGroup, updateCache } = useCacheStore();
	const { data = wallpaperGroup } = useRequest(() => getWallpaperGroup(), {
		onSuccess: (data) => updateCache({ wallpaperGroup: data }),
	});
	const [activeGroup, setActiveGroup] = useState<OneTab.WallpaperGroup>();
	const { portalRef } = useContext(SettingContext);

	if (!data || !portalRef.current) return;

	return (
		<div className="px-[40px] py-2 box-border overflow-y-auto h-full">
			<div className="grid grid-cols-2 gap-3">
				{data.map((item) => (
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
		</div>
	);
});
