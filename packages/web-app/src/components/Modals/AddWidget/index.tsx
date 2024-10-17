import { Input } from "@/components/Input";
import { WindowControl } from "@/components/WindowControl";
import { events } from "@/events";
import { Dialog, Select } from "@onetab/ui";
import { useMount } from "ahooks";
import { useState } from "react";
import type { FC } from "react";

export const AddWidgetModal: FC = () => {
	const [open, setOpen] = useState(false);

	useMount(() => {
		events.on("addWidget", () => setOpen(true));
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
			<div className="header flex h-[64px] items-center justify-between border-b-[1px] border-color-black border-opacity-5 px-[20px] dark:border-opacity-40 mb:!h-auto mb:flex-col-reverse mb:items-end mb:!p-[20px]">
				<WindowControl onClose={() => handleClose()} />

				<div className="tags flex gap-[4px] pl-[36px] text-color-t2 mb:self-start mb:pt-[10px] mb:!pl-0">
					<div className="bg-color-white text-color-t1 cursor-pointer rounded-[6px] px-[12px] py-[4px] transition-colors hover:bg-color-white dark:bg-opacity-[0.2]">
						<span>全部</span>
					</div>
					<div className="cursor-pointer rounded-[6px] px-[12px] py-[4px] transition-colors hover:bg-color-white dark:bg-opacity-[0.2]">
						<span>最新</span>
					</div>
					<div className="cursor-pointer rounded-[6px] px-[12px] py-[4px] transition-colors hover:bg-color-white dark:bg-opacity-[0.2]">
						<span>AI系列</span>
					</div>
					<div className="cursor-pointer rounded-[6px] px-[12px] py-[4px] transition-colors hover:bg-color-white dark:bg-opacity-[0.2]">
						<span>效率工具</span>
					</div>
				</div>

				<i className="ml-[8px] mr-[20px] inline-block h-[20px] w-[1px] bg-color-m2/[.12]" />

				<span className="mode-switch inline-flex rounded-[8px] bg-color-m2/[.06] p-[4px]">
					<span className="cursor-pointer inline-flex rounded-[4px] p-[2px] bg-color-m1 text-color-t1 dark:bg-[#fff]/[.16]">
						<i className="iconfont icon-group text-[20px] leading-none" />
					</span>
					<span className="ml-[8px] cursor-pointer inline-flex rounded-[4px] p-[2px] text-color-t3 hover:bg-color-m2/[.06]">
						<i className="iconfont icon-bullet_list text-[20px] leading-none" />
					</span>
				</span>

				<Input className="ml-3" />

				<i className="flex-1" />

				<i className="ml-[8px] mr-[20px] inline-block h-[20px] w-[1px] bg-color-m2/[.12]" />
				<div className="category flex items-center text-color-t2">
					<span>添加到：</span>
					<Select className="w-[180px]" placeholder="Select a fruit" />
				</div>
			</div>

			<div className="content hi-scroll h-[calc(100%-64px)] border-t-[1px] border-color-white border-opacity-20 dark:border-opacity-[0.08]" />
			<div className="box icon-home-small grid grid-cols-[repeat(auto-fill,minmax(440px,1fr))] gap-[24px] py-[20px] pl-[20px] pr-[14px]"></div>
		</Dialog>
	);
};
