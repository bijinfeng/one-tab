import { getWallpaperGroup } from "@/api";
import { useRequest } from "ahooks";
import type { FC } from "react";

export const SelectedWallpaper: FC = () => {
	const { data } = useRequest(getWallpaperGroup);

	if (!data) return;

	return (
		<div className="grid grid-cols-2 gap-3 pt-3">
			{data.data.map((item) => (
				<div
					key={item.id}
					className="group relative aspect-video overflow-hidden rounded-[6px]"
				>
					<img
						src="https://static.wetab.link/hitab/wallpaper-cover/natrue.png"
						alt=""
						className="scale-100 transition-[transform] duration-300 group-hover:scale-[1.2]"
					/>
					<div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-color-black bg-opacity-20">
						<span className="font-ali-75 text-[20px] text-color-white">
							{item.title}
						</span>
					</div>
				</div>
			))}
		</div>
	);
};
