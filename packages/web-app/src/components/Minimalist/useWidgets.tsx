import { useSettingStore } from "@/store/setting";
import { cn } from "@onetab/ui";

export function useWidgets() {
	const {
		showClock,
		showCalendar,
		show24HR,
		showChineseCalendar,
		showCalebrity,
		bottomBarDisplayStatus,
		updateSetting,
	} = useSettingStore();

	const widgets = [
		{
			key: "clock",
			title: "显示时钟",
			show: showClock,
			disabled: false,
			onToggle: () => updateSetting({ showClock: !showClock }),
		},
		{
			key: "calendar",
			title: "显示日历",
			show: showCalendar,
			disabled: false,
			onToggle: () => updateSetting({ showCalendar: !showCalendar }),
		},
		{
			key: "24Hr",
			title: "24小时制",
			show: show24HR,
			disabled: !showClock,
			onToggle: () => updateSetting({ show24HR: !show24HR }),
		},
		{
			key: "chineseCalendar",
			title: "显示农历",
			show: showChineseCalendar,
			disabled: !showCalendar,
			onToggle: () =>
				updateSetting({ showChineseCalendar: !showChineseCalendar }),
		},
		{
			key: "calebrity",
			title: "显示每日一言",
			show: showCalebrity,
			disabled: false,
			onToggle: () => updateSetting({ showCalebrity: !showCalebrity }),
		},
		{
			key: "dock",
			title: "显示常访栏",
			show: bottomBarDisplayStatus === "show",
			disabled: false,
			onToggle: () =>
				updateSetting({
					bottomBarDisplayStatus:
						bottomBarDisplayStatus === "show" ? "hide" : "show",
				}),
		},
	];

	const renderWidgets = () => {
		return (
			<div className="grid grid-cols-2 gap-3">
				{widgets.map((widget) => (
					<div
						key={widget.key}
						className={cn(
							"flex h-[48px] cursor-pointer items-center justify-center rounded-[12px] border-color-white border-opacity-10 bg-color-white bg-opacity-20 font-ali-55 text-[14px] leading-[20px] text-[#1C1C1E] text-opacity-40 transition-colors",
							{
								"hover:border-opacity-60 hover:bg-opacity-30": !widget.disabled,
								"bg-opacity-40 !text-opacity-100":
									widget.show && !widget.disabled,
							},
						)}
						onClick={() => !widget.disabled && widget.onToggle()}
					>
						{widget.title}
					</div>
				))}
			</div>
		);
	};

	return renderWidgets;
}
