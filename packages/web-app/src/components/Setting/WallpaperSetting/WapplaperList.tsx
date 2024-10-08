import { getWallpaperList } from "@/api";
import { Switch } from "@onetab/ui";
import { useRequest } from "ahooks";
import type { FC } from "react";
import { Wallpaper } from "./Wallpaper";

interface WallpaperListProps {
	onBack: () => void;
	group: OneTab.WallpaperGroup;
}

export const WallpaperList: FC<WallpaperListProps> = ({ group, onBack }) => {
	const { data } = useRequest(() => getWallpaperList({ tag: group.tag }));

	return (
		<div className="absolute w-full h-full top-0 bg-white z-20">
			<div className="flex h-[52px] items-center justify-between border-b border-solid border-color-m2 border-opacity-[0.08] px-[20px] mb:px-[20px]">
				<div
					className="flex w-[120px] cursor-pointer items-center text-color-t1"
					onClick={onBack}
				>
					<i className="iconfont icon-return_icon text-[18px]" />
					<span className="ml-[8px] font-ali-65 text-[14px]">返回分类</span>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<span className="font-ali-65 text-[20px] text-color-t1">
						{group.title}
					</span>
				</div>
				<div className="flex w-[120px] items-center justify-end">
					<span className="mr-[8px] font-ali-55 text-[14px] text-color-t2">
						随机
					</span>
					<Switch />
				</div>
			</div>
			<div className="grid grid-cols-3 gap-3 pt-3 px-[20px]">
				{data?.data.map((item) => (
					<Wallpaper key={item.id} data={item.photo} size="thumbnail" />
				))}
			</div>
		</div>
	);
};
