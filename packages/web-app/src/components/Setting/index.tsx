import { IconButton } from "@/components/IconButton";
import { events } from "@/events";
import { Dialog, Icon, Separator } from "@onetab/ui";

import { Sidebar } from "@/components/Sidebar";
import { useMount } from "ahooks";
import React, { useMemo, useRef, useState } from "react";
import packageJson from "../../../package.json";
import { BasicSetting } from "./BasicSetting";
import { EngineSetting } from "./EngineSetting";
import { ThemeSetting } from "./ThemeSetting";
import { Backup } from "./UserInfo/Backup";
import { UserCard } from "./UserInfo/UserCard";
import { WallpaperSetting } from "./WallpaperSetting";
import { SettingContext } from "./context";

const sidbarMaps = [
	{
		key: "basic",
		title: "基本",
		content: BasicSetting,
	},
	{
		key: "wallpaper",
		title: "壁纸",
		content: WallpaperSetting,
	},
	{
		key: "themes",
		title: "主题",
		content: ThemeSetting,
	},
	{
		key: "engines",
		title: "搜索引擎",
		content: EngineSetting,
	},
	{
		key: "messages",
		title: "消息通知",
	},
	{
		key: "abouts",
		title: "关于我们",
	},
];

export function Setting() {
	const [open, setOpen] = useState(false);
	const [activeKey, setActiveKey] = useState("");
	const portalRef = useRef<HTMLDivElement>(null);

	useMount(() => {
		events.on("openSetting", (key = "") => {
			setActiveKey(key);
			setOpen(true);
		});
	});

	const currentContent = sidbarMaps.find(
		(item) => item.key === activeKey,
	)?.content;

	const settingContext = useMemo(() => ({ portalRef }), []);

	return (
		<SettingContext.Provider value={settingContext}>
			<IconButton
				onClick={() => setOpen(true)}
				size="huge"
				ghost
				className="home-setting-btn absolute left-[20px] bottom-[20px]"
			>
				<Icon.Setting width={28} height={28} />
			</IconButton>

			<Dialog
				closable={false}
				open={open}
				onOpenChange={setOpen}
				className="w-[720px] max-w-[720px] h-[572px] max-h-[calc(100vh-88px)] p-0 overflow-hidden gap-0"
			>
				<div ref={portalRef} className="relative flex h-full overflow-hidden">
					<div className="flex h-full w-[220px] flex-col border-r-[1px] border-color-m2 border-opacity-[0.08] bg-color-b2 bg-opacity-95 setting-bar pointer-events-auto relative z-0">
						<div className="py-[14px] px-[16px]">
							<UserCard
								onClick={() => setActiveKey("")}
								actived={activeKey === ""}
							/>
						</div>
						<Separator className="bg-color-m2 bg-opacity-[0.08]" />
						<Sidebar
							items={sidbarMaps}
							activeKey={activeKey}
							onItemClick={setActiveKey}
							className="relative max-h-[calc(100%-92px)] flex-1"
						/>
						<div className="absolute left-[28px] bottom-[24px] flex items-center">
							<p className="font-ali-55 text-[12px] leading-[17px] text-color-t3">
								{packageJson.version}
							</p>
						</div>
					</div>

					<div className="hi-changes relative overflow-hidden h-full changes-view flex-1 bg-color-b3 pointer-events-auto">
						{currentContent ? React.createElement(currentContent) : <Backup />}
					</div>
				</div>
			</Dialog>
		</SettingContext.Provider>
	);
}
