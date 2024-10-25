import { Dropdown } from "@onetab/ui";
import { useBoolean } from "ahooks";

export const Select = () => {
	const [open, openActions] = useBoolean(false);

	return (
		<Dropdown
			open={open}
			onOpenChange={openActions.toggle}
			className="w-auto min-w-0 px-3"
			side="bottom"
			align="end"
			menuItems={[
				{ label: "自动隐藏", key: "left" },
				{ label: "一直显示", key: "right" },
				{ label: "一直隐藏", key: "right" },
			]}
		>
			<div className="flex cursor-pointer items-center text-[14px] text-color-t2">
				<span className="flex-1">一直显示</span>
				<div className="ml-[12px] flex-shrink-0 transform-gpu transition-transform duration-150">
					<i className="iconfont icon-down_icon text-[12px]" />
				</div>
			</div>
		</Dropdown>
	);
};
