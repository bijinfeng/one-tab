import { first } from "lodash-es";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { DEFAULT_CATEGORY } from "@/constants/category";
import { idbStorage } from "@/utils/persist";

export interface AppStoreState {
	currentCategory: string;
	categoryGroup: OneTab.AppCategory[];

	getCurrentCategoryGroup: () => OneTab.AppCategory;
	updateCategory: (id: string) => void;
}

export const useAppStore = create<AppStoreState>()(
	persist(
		(set, get) => ({
			currentCategory: first(DEFAULT_CATEGORY)!.id,
			categoryGroup: DEFAULT_CATEGORY,

			getCurrentCategoryGroup: () => get().categoryGroup.find((item) => item.id === get().currentCategory)!,
			updateCategory: (id) => {
				set({ currentCategory: id });
			},
		}),
		{
			name: "onetab-app", // unique name
			storage: createJSONStorage(() => idbStorage),
		},
	),
);
