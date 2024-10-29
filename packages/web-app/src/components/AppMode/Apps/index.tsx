import { useAppStore } from "@/store/app";
import { forwardRef } from "react";

import { Sortable } from "./Sortable";

export const Apps = forwardRef<HTMLDivElement>((_, ref) => {
	const categoryGroup = useAppStore((state) => state.getCurrentCategoryGroup());

	return (
		<div ref={ref} className="pt-[25vh] mx-auto w-[85%]">
			<Sortable items={categoryGroup.apps} />
		</div>
	);
});
