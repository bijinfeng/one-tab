import { AppWidget } from "@/components/AppWidget";
import { useSettingStore } from "@/store/setting";
import { Tooltip, cn } from "@onetab/ui";
import { useHover } from "ahooks";
import { type FC, useRef } from "react";

const apps: OneTab.SiteInfo[] = [
	{
		type: "site",
		bgColor: "rgba(0, 0, 0, 0)",
		bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/534995dd434a6e0e39a4521a5fe04f8e.png",
		bgType: "image",
		id: "icon-1hi525e3r56g7xsnqksaen1sv1i",
		name: "掘金",
		origin: "online",
		target: "https://juejin.cn/",
	},
	{
		type: "site",
		bgColor: "rgba(67, 133, 241, 1)",
		bgType: "color",
		bgText: "群晖",
		id: "icon-1hi525e3r56g7xsnqksaen1sv1i",
		name: "群晖",
		origin: "online",
		target: "https://juejin.cn/",
	},
];

export const BottomDock: FC = () => {
	const { bottomBarDisplayStatus } = useSettingStore();
	const containerRef = useRef<HTMLDivElement>(null);
	const isContainerHover = useHover(containerRef);

	if (bottomBarDisplayStatus === "hide") return null;

	return (
		<div ref={containerRef} className="group absolute left-1/2 -translate-x-1/2 bottom-0 pb-2">
			<div
				style={{ height: 86, borderRadius: 24 }}
				className={cn(
					"dock dock-drop icon-drop glass-dock min-w-[314px] max-w-[922px] overflow-hidden border-color-white border-opacity-20 bg-color-m1 bg-opacity-40 dark:border-opacity-[0.16] dark:bg-opacity-30 pad:max-w-[618px] mb:hidden",
					{
						"translate-y-[calc(100%+8px)] ": bottomBarDisplayStatus === "auto-hide" && !isContainerHover,
						"transition-all duration-300 delay-100 group-hover:translate-x-0": bottomBarDisplayStatus === "auto-hide",
					},
				)}
			>
				<div className="flex h-full items-center gap-4 px-3">
					{apps.map((item) => (
						<Tooltip
							key={item.id}
							side="top"
							overlayClassName={cn("text-color-t2 px-2 bg-white py-0 !leading-6 text-xs font-medium rounded")}
							title={<span className="max-w-20 overflow-hidden text-ellipsis whitespace-nowrap">{item.name}</span>}
						>
							<div className="h-full inline-flex items-center">
								<AppWidget data={item} className="!w-[60px] !h-[60px]" />
							</div>
						</Tooltip>
					))}
				</div>
			</div>
		</div>
	);
};
