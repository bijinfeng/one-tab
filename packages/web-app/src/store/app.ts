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
	addImageSiteApp: (app: OneTab.ImageSiteInfo) => void;
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
			addImageSiteApp: (app) => {
				set(({ categoryGroup, currentCategory }) => ({
					categoryGroup: categoryGroup.map((it) => {
						if (it.id === currentCategory) {
							return { ...it, apps: [...it.apps, app] };
						}

						return it;
					}),
				}));
			},
		}),
		{
			name: "onetab-app", // unique name
			storage: createJSONStorage(() => idbStorage),
		},
	),
);
