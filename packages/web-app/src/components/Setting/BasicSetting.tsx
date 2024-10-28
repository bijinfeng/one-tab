import { Block } from "@/components/SettingBlock";

import { useSettingStore } from "@/store/setting";
import { type MenuIten, Select } from "./components/Select";

export const BasicSetting = () => {
	const {
		leftBarDisplayStatus,
		leftBarDisplaySide,
		bottomBarDisplayStatus,
		iconOpenMethod,
		iconSize,
		updateSetting,
	} = useSettingStore();

	const leftBarDisplayStatusMenu: MenuIten[] = [
		{
			label: "自动隐藏",
			key: "auto-hide",
			onClick: () => updateSetting({ leftBarDisplayStatus: "auto-hide" }),
		},
		{
			label: "一直显示",
			key: "show",
			onClick: () => updateSetting({ leftBarDisplayStatus: "show" }),
		},
		{
			label: "一直隐藏",
			key: "hide",
			onClick: () => updateSetting({ leftBarDisplayStatus: "hide" }),
		},
	];

	const leftBarDisplaySideMenu: MenuIten[] = [
		{
			label: "左侧",
			key: "left",
			onClick: () => updateSetting({ leftBarDisplaySide: "left" }),
		},
		{
			label: "右侧",
			key: "right",
			onClick: () => updateSetting({ leftBarDisplaySide: "right" }),
		},
	];

	const bottomBarDisplayStatusMenu: MenuIten[] = [
		{
			label: "自动隐藏",
			key: "auto-hide",
			onClick: () => updateSetting({ bottomBarDisplayStatus: "auto-hide" }),
		},
		{
			label: "一直显示",
			key: "show",
			onClick: () => updateSetting({ bottomBarDisplayStatus: "show" }),
		},
		{
			label: "一直隐藏",
			key: "hide",
			onClick: () => updateSetting({ bottomBarDisplayStatus: "hide" }),
		},
	];

	const iconOpenMethodMenu: MenuIten[] = [
		{
			label: "当前标签页",
			key: "current-tab",
			onClick: () => updateSetting({ iconOpenMethod: "current-tab" }),
		},
		{
			label: "新标签页",
			key: "new-tab",
			onClick: () => updateSetting({ iconOpenMethod: "new-tab" }),
		},
	];

	const iconSizeMenu: MenuIten[] = [
		{
			label: "自动",
			key: "icon-auto",
			onClick: () => updateSetting({ iconSize: "icon-auto" }),
		},
		{
			label: "大",
			key: "icon-l",
			onClick: () => updateSetting({ iconSize: "icon-l" }),
		},
		{
			label: "中",
			key: "icon-m",
			onClick: () => updateSetting({ iconSize: "icon-m" }),
		},
		{
			label: "小",
			key: "icon-s",
			onClick: () => updateSetting({ iconSize: "icon-s" }),
		},
	];

	return (
		<Block>
			<Block.Title>控制栏</Block.Title>
			<Block.Content>
				<Block.Item
					label="侧边栏"
					control={
						<Select
							value={leftBarDisplayStatus}
							menuItems={leftBarDisplayStatusMenu}
						/>
					}
				/>
				<Block.Item
					label="侧边栏位置"
					control={
						<Select
							value={leftBarDisplaySide}
							menuItems={leftBarDisplaySideMenu}
						/>
					}
				/>
				<Block.Item
					label="底部栏"
					control={
						<Select
							value={bottomBarDisplayStatus}
							menuItems={bottomBarDisplayStatusMenu}
						/>
					}
				/>
			</Block.Content>
			<Block.Separator />
			<Block.Title>图标</Block.Title>
			<Block.Content>
				<Block.Item
					label="打开方式"
					control={
						<Select value={iconOpenMethod} menuItems={iconOpenMethodMenu} />
					}
				/>
				<Block.Item
					label="图标尺寸"
					control={<Select value={iconSize} menuItems={iconSizeMenu} />}
				/>
			</Block.Content>
			<Block.Separator />
			<Block.Title>搜索</Block.Title>
			<Block.Separator />
			<Block.Title>其他设置</Block.Title>
		</Block>
	);
};
