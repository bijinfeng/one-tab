import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { idbStorage } from "@/utils/persist";

export interface SettingStoreState {
  theme: "light" | "dark";
  minimalistMode: boolean; // 是否开启精简模式
  minimalistSwitchBtnStatus: "show" | "auto-hide"; // 精简模式开关按钮状态: 显示/自动隐藏

  leftBarDisplayStatus: "show" | "auto-hide" | "hide"; // 左侧栏显示状态: 显示/自动隐藏/隐藏
  leftBarDisplaySide: "left" | "right"; // 左侧栏显示位置: 左侧/右侧
  showCategoryTitle: boolean; // 是否显示分类标题

  showClock: boolean; // 是否显示时钟
  showCalendar: boolean; // 是否显示日历
  show24HR: boolean; // 是否显示24小时制
  showChineseCalendar: boolean; // 是否显示农历
  showCalebrity: boolean; // 是否显示每日一言
  showDock: boolean; // 是否显示常访栏

  updateSetting: (setting: Partial<SettingStoreState>) => void;
}

export const useSettingStore = create<SettingStoreState>()(
  persist(
    (set) => ({
      theme: "light",

      minimalistMode: false,
      minimalistSwitchBtnStatus: "show",

      leftBarDisplayStatus: "show",
      leftBarDisplaySide: "left",
      showCategoryTitle: false,

      showClock: true,
      showCalendar: true,
      show24HR: true,
      showChineseCalendar: true,
      showCalebrity: true,
      showDock: false,

      updateSetting: (setting) => set(setting),
    }),
    {
      name: "onetab-setting", // unique name
      storage: createJSONStorage(() => idbStorage),
    },
  ),
);
