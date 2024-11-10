import { Input } from "@/components/Input";
import { type SideBarItem, Sidebar } from "@/components/Sidebar";
import { WindowControl } from "@/components/WindowControl";
import { events } from "@/events";
import { Dialog } from "@onetab/ui";
import { useMount } from "ahooks";
import { useRequest } from "ahooks";
import { memo, useState } from "react";
import type { FC } from "react";

import { getAppGroup } from "@/api";
import { AppList } from "./AppList";

const DEFAULT_ITEMS: SideBarItem[] = [
	{
		key: "",
		title: "全部",
	},
];

export const AddAppModal: FC = memo(() => {
	const [open, setOpen] = useState(false);
	const [tabKey, setTabKey] = useState("");
	const [keyword, setKeyword] = useState("");

	const { data = [] } = useRequest(() =>
		getAppGroup().then((res) =>
			res.data.map<SideBarItem>((it) => ({
				key: it.id,
				title: it.name,
			})),
		),
	);

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
			className="w-[1024px] max-w-[calc(100vw-40px)] h-[640px] max-h-[calc(100vh-40px)] bg-color-m1 bg-opacity-70 backdrop-blur-[40px] rounded-[12px] p-0 overflow-hidden"
		>
			<div className="flex flex-col h-full overflow-hidden">
				<div className="header flex h-[64px] items-center justify-between border-b-[1px] border-color-black border-opacity-5 px-[20px] dark:border-opacity-40 mb:!h-auto mb:flex-col-reverse mb:items-end mb:!p-[20px]">
					<WindowControl onClose={() => handleClose()} />

					<div className="flex gap-2">
						<Input className="w-60" value={keyword} onChange={setKeyword} />
						<div className="bg-color-white text-color-t1 leading-6 text-sm cursor-pointer rounded-[6px] px-[12px] py-[4px] transition-colors hover:bg-color-white dark:bg-opacity-[0.2]">
							自定义添加
						</div>
					</div>
				</div>

				<div className="flex-1 flex overflow-hidden">
					<Sidebar
						items={[...DEFAULT_ITEMS, ...data]}
						activeKey={tabKey}
						onItemClick={setTabKey}
						className="w-60 overflow-y-auto"
					/>

					<AppList keyword={keyword} tag={tabKey} />
				</div>
			</div>
		</Dialog>
	);
});
