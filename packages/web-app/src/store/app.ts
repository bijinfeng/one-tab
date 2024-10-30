import { first } from "lodash-es";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { DEFAULT_CATEGORY } from "@/constants/category";
import { idbStorage } from "@/utils/persist";

export interface AppStoreState {
	currentCategory: string;
	categoryGroup: OneTab.AppCategory[];

	updateCategory: (id: string) => void;
	updateCategoryGroup: (categoryGroup: OneTab.AppCategory[]) => void;
}

export const useAppStore = create<AppStoreState>()(
	persist(
		(set) => ({
			currentCategory: first(DEFAULT_CATEGORY)!.id,
			categoryGroup: DEFAULT_CATEGORY,

			updateCategory: (id) => {
				set({ currentCategory: id });
			},
			updateCategoryGroup: (categoryGroup) => set({ categoryGroup }),
		}),
		{
			name: "onetab-app", // unique name
			storage: createJSONStorage(() => idbStorage),
		},
	),
);
