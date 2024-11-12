import { getAppList } from "@/api";
import { useAppStore } from "@/store/app";
import { useDebounceEffect, useInfiniteScroll } from "ahooks";
import { type FC, memo, useRef } from "react";
import { ScrollArea } from "@onetab/ui";

import { AppCard, type AppItemData } from "./AppCard";

interface AppListProps {
	tag?: string;
	keyword?: string;
}

interface AppFetchData {
	list: AppItemData[];
	meta: OneTab.ResponseMeta;
}

const getLoadMoreList = async (params: AppListProps, data?: AppFetchData): Promise<AppFetchData> => {
	const { page = 0, pageSize = 24 } = data?.meta.pagination || {};

	const res = await getAppList<AppItemData>({ ...params, page: page + 1, pageSize });

	return {
		list: res.data,
		meta: res.meta,
	};
};

export const AppList: FC<AppListProps> = memo((props) => {
	const { addImageSiteApp } = useAppStore();
	const ref = useRef<HTMLDivElement>(null);

	const { data, reload } = useInfiniteScroll<AppFetchData>((d) => getLoadMoreList(props, d), {
		manual: true,
		target: ref,
		isNoMore: (d) => !!d?.meta.pagination && d.meta.pagination.page >= d.meta.pagination.pageCount,
	});

	useDebounceEffect(() => reload(), [props.tag, props.keyword], { leading: true });

	return (
		<ScrollArea ref={ref} className="flex-1">
			<div className="grid grid-cols-4 gap-4 px-[16px] pt-[32px] pb-[40px]">
				{data?.list?.map((item) => (
					<AppCard key={item.id} data={item} onAdd={addImageSiteApp} />
				))}
			</div>
		</ScrollArea>
	);
});
