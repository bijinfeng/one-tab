import { Input } from "@/components/Input";
import { type SideBarItem, Sidebar } from "@/components/Sidebar";
import { WindowControl } from "@/components/WindowControl";
import { events } from "@/events";
import { Dialog } from "@onetab/ui";
import { useMount } from "ahooks";
import { useState } from "react";
import type { FC } from "react";
import { AppCard } from "./AppCard";

const items: SideBarItem[] = [
	{
		key: "all",
		title: "最受欢迎",
	},
	{
		key: "shop",
		title: "购物",
		icon: "gouwu",
	},
];

export const AddAppModal: FC = () => {
	const [open, setOpen] = useState(false);
	const [tabKey, setTabKey] = useState("all");

	useMount(() => {
		events.on("addApp", () => setOpen(true));
	});

	const handleClose = () => setOpen(false);

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
			mask={false}
			closable={false}
			className="w-[1024px] max-w-[calc(100vw-40px)] overflow-hidden h-[640px] max-h-[calc(100vh-40px)] bg-color-m1 bg-opacity-70 backdrop-blur-[40px] rounded-[12px] p-0"
		>
			<div className="flex flex-col">
				<div className="header flex h-[64px] items-center justify-between border-b-[1px] border-color-black border-opacity-5 px-[20px] dark:border-opacity-40 mb:!h-auto mb:flex-col-reverse mb:items-end mb:!p-[20px]">
					<WindowControl onClose={() => handleClose()} />

					<div className="flex gap-2">
						<Input className="w-60" />
						<div className="bg-color-white text-color-t1 leading-6 text-sm cursor-pointer rounded-[6px] px-[12px] py-[4px] transition-colors hover:bg-color-white dark:bg-opacity-[0.2]">
							自定义添加
						</div>
					</div>
				</div>

				<div className="flex-1 flex">
					<Sidebar
						items={items}
						activeKey={tabKey}
						onItemClick={setTabKey}
						className="w-60"
					/>

					<div className="flex-1 grid grid-cols-4 gap-4 px-[16px] pt-[32px] pb-[40px]">
						<AppCard />
					</div>
				</div>
			</div>
		</Dialog>
	);
};
