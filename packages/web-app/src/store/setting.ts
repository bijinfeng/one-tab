import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { idbStorage } from "@/utils/persist";

export interface SettingStoreState {
	theme: OneTab.Theme;

	minimalistMode: boolean; // 是否开启精简模式
	minimalistSwitchBtnStatus: "show" | "auto-hide"; // 精简模式开关按钮状态: 显示/自动隐藏

	leftBarDisplayStatus: "show" | "auto-hide" | "hide"; // 左侧栏显示状态: 显示/自动隐藏/隐藏
	leftBarDisplaySide: "left" | "right"; // 左侧栏显示位置: 左侧/右侧
	bottomBarDisplayStatus: "show" | "auto-hide" | "hide"; // 底部栏显示状态: 显示/自动隐藏/隐藏
	showCategoryTitle: boolean; // 是否显示分类标题

	showClock: boolean; // 是否显示时钟
	showCalendar: boolean; // 是否显示日历
	show24HR: boolean; // 是否显示24小时制
	showChineseCalendar: boolean; // 是否显示农历
	showCalebrity: boolean; // 是否显示每日一言

	iconOpenMethod: "current-tab" | "new-tab"; // 图标打开方式: 当前标签页/新标签页
	iconSize: "icon-auto" | "icon-l" | "icon-m" | "icon-s"; // 图标大小: 自动/大/中/小
	hideAddIcon: boolean; // 是否隐藏添加图标
	hideIconName: boolean; // 是否隐藏图标名称
	scrollPageEnable: boolean; // 是否开启滚动页面

	searchOpenMethod: "current-tab" | "new-tab"; // 搜索打开方式: 当前标签页/新标签页
	searchSuggestionsShow: boolean; // 是否显示搜索建议
	searchHistoryShow: boolean; // 是否显示搜索历史
	fastSwitchSearchEngine: boolean; // 是否开启快速切换搜索引擎
	keepSearchInput: boolean; // 是否保留搜索输入框内容

	globalFont: string; // 全局字体

	updateSetting: (setting: Partial<SettingStoreState>) => void;
}

export const useSettingStore = create<SettingStoreState>()(
	persist(
		(set) => ({
			theme: "system",

			minimalistMode: false,
			minimalistSwitchBtnStatus: "show",

			leftBarDisplayStatus: "show",
			leftBarDisplaySide: "left",
			bottomBarDisplayStatus: "hide",
			showCategoryTitle: false,

			showClock: true,
			showCalendar: true,
			show24HR: true,
			showChineseCalendar: true,
			showCalebrity: true,

			iconOpenMethod: "new-tab",
			iconSize: "icon-auto",
			hideAddIcon: false,
			hideIconName: false,
			scrollPageEnable: true,

			searchOpenMethod: "new-tab",
			searchSuggestionsShow: true,
			searchHistoryShow: false,
			fastSwitchSearchEngine: true,
			keepSearchInput: true,

			globalFont: "design",

			updateSetting: (setting) => set(setting),
		}),
		{
			name: "onetab-setting", // unique name
			storage: createJSONStorage(() => idbStorage),
		},
	),
);
