import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { DEFAULT_CATEGORY } from "@/constants/category";
import { idbStorage } from "@/utils/persist";

export interface AppStoreState {
  categoryGroup: OneTab.AppCategory[];
}

export const useAppStore = create<AppStoreState>()(
  persist(
    () => ({
      categoryGroup: DEFAULT_CATEGORY,
    }),
    {
      name: "onetab-app", // unique name
      storage: createJSONStorage(() => idbStorage),
    },
  ),
);
