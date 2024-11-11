import { getAppList } from "@/api";
import { useDebounceEffect, useInfiniteScroll } from "ahooks";
import { type FC, memo, useRef } from "react";
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
	const ref = useRef<HTMLDivElement>(null);

	const { data, reload } = useInfiniteScroll<AppFetchData>((d) => getLoadMoreList(props, d), {
		manual: true,
		target: ref,
		isNoMore: (d) => !!d?.meta.pagination && d.meta.pagination.page >= d.meta.pagination.pageCount,
	});

	useDebounceEffect(() => reload(), [props.tag, props.keyword], { leading: true });

	return (
		<div ref={ref} className="flex-1 grid grid-cols-4 gap-4 px-[16px] pt-[32px] pb-[40px] overflow-y-auto">
			{data?.list?.map((item) => (
				<AppCard key={item.id} data={item} />
			))}
		</div>
	);
});
