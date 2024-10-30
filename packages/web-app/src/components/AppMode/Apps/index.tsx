import { useAppStore } from "@/store/app";
import { forwardRef, useCallback, useMemo } from "react";

import { Sortable } from "./Sortable";

export const Apps = forwardRef<HTMLDivElement>((_, ref) => {
	const { currentCategory, categoryGroup, updateCategoryGroup } = useAppStore();

	const categoryItems = useMemo(() => {
		return categoryGroup.find((item) => item.id === currentCategory)!;
	}, [currentCategory, categoryGroup]);

	const handleChange = useCallback(
		(items: OneTab.App[]) => {
			const newCategoryGroup = categoryGroup.map((item) => {
				if (item.id === currentCategory) {
					return {
						...item,
						apps: items,
					};
				}
				return item;
			});
			updateCategoryGroup(newCategoryGroup);
		},
		[currentCategory, categoryGroup, updateCategoryGroup],
	);

	return (
		<div ref={ref} className="pt-[25vh] mx-auto w-[85%]">
			<Sortable value={categoryItems.apps} onChange={handleChange} />
		</div>
	);
});
