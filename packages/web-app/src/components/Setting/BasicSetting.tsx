import { Switch } from "@onetab/ui";

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
		hideAddIcon,
		hideIconName,
		scrollPageEnable,
		searchOpenMethod,
		searchSuggestionsShow,
		searchHistoryShow,
		fastSwitchSearchEngine,
		keepSearchInput,
		globalFont,
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

	const searchOpenMethodMenu: MenuIten[] = [
		{
			label: "当前标签页",
			key: "current-tab",
			onClick: () => updateSetting({ searchOpenMethod: "current-tab" }),
		},
		{
			label: "新标签页",
			key: "new-tab",
			onClick: () => updateSetting({ searchOpenMethod: "new-tab" }),
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
				<Block.Item
					label="隐藏添加图标"
					control={
						<Switch
							checked={hideAddIcon}
							onCheckedChange={(checked) =>
								updateSetting({ hideAddIcon: checked })
							}
						/>
					}
				/>
				<Block.Item
					label="隐藏图标名称"
					control={
						<Switch
							checked={hideIconName}
							onCheckedChange={(checked) =>
								updateSetting({ hideIconName: checked })
							}
						/>
					}
				/>
				<Block.Item
					label="滚动触发翻页"
					control={
						<Switch
							checked={scrollPageEnable}
							onCheckedChange={(checked) =>
								updateSetting({ scrollPageEnable: checked })
							}
						/>
					}
				/>
			</Block.Content>
			<Block.Separator />
			<Block.Title>搜索</Block.Title>
			<Block.Content>
				<Block.Item
					label="打开方式"
					control={
						<Select value={searchOpenMethod} menuItems={searchOpenMethodMenu} />
					}
				/>
				<Block.Item
					label="搜索建议"
					control={
						<Switch
							checked={searchSuggestionsShow}
							onCheckedChange={(checked) =>
								updateSetting({ searchSuggestionsShow: checked })
							}
						/>
					}
				/>
				<Block.Item
					label="搜索历史"
					control={
						<Switch
							checked={searchHistoryShow}
							onCheckedChange={(checked) =>
								updateSetting({ searchHistoryShow: checked })
							}
						/>
					}
				/>
				<Block.Item
					label="Tab键切换搜索引擎"
					control={
						<Switch
							checked={fastSwitchSearchEngine}
							onCheckedChange={(checked) =>
								updateSetting({ fastSwitchSearchEngine: checked })
							}
						/>
					}
				/>
				<Block.Item
					label="保留搜索框内容"
					control={
						<Switch
							checked={keepSearchInput}
							onCheckedChange={(checked) =>
								updateSetting({ keepSearchInput: checked })
							}
						/>
					}
				/>
			</Block.Content>
			<Block.Separator />
			<Block.Title>其他设置</Block.Title>
			<Block.Content>
				<Block.Item
					label="使用系统默认字体"
					control={
						<Switch
							checked={globalFont === "system-ui"}
							onCheckedChange={(checked) =>
								updateSetting({ globalFont: checked ? "system-ui" : "design" })
							}
						/>
					}
				/>
			</Block.Content>
		</Block>
	);
};
