import { jsonpAdapter } from "@pingtou/axios-jsonp";
import axios, { type CancelTokenSource } from "axios";
import { isEmpty } from "lodash-es";

import api from "./http";

type ResponseCommon<T> = {
	data: T;
	meta: OneTab.ResponseMeta;
};

let cancelSource: CancelTokenSource;

export async function getSearchSuggestion(keyword: string) {
	if (!keyword) return [];

	cancelSource?.cancel();

	const CancelToken = axios.CancelToken;
	cancelSource = CancelToken.source();

	const res = await axios.get<{ s: string[] }>(`https://suggestion.baidu.com/su?wd=${keyword}`, {
		headers: { xxx: 1 },
		cancelToken: cancelSource.token,
		adapter: jsonpAdapter,
		callbackParamName: "cb",
	});

	return res.data.s;
}

export const getHitokoto = async () => {
	const res = await axios.get<OneTab.Celebrity>("https://v1.hitokoto.cn/?c=d&c=e&c=h&c=i&c=k");

	return res.data;
};

// 获取壁纸分类
export const getWallpaperGroup = async () => {
	const res = await api.get<ResponseCommon<OneTab.WallpaperGroup[]>>("wallpaper-tags", {
		params: {
			populate: "cover",
		},
	});

	return res.data.data;
};

// 获取壁纸列表
export const getWallpaperList = async (params: { tag: string }) => {
	const res = await api.get<ResponseCommon<OneTab.Wallpaper[]>>("wallpapers", {
		params: {
			"filters[tag][tag][$eq]": params.tag,
			populate: "photo",
		},
	});

	return res.data;
};

// 获取 APP 分类
export const getAppGroup = async () => {
	const res = await api.get<ResponseCommon<{ id: string; name: string; tag: string }[]>>("app-tags");

	return res.data;
};

// 获取 APP 列表
export const getAppList = async <T>(params: { tag?: string; keyword?: string; page: number; pageSize: number }) => {
	const tagParam = params.tag ? { app_tags: { $eq: params.tag } } : null;
	const keywordParam = params.keyword ? { name: { $contains: params.keyword } } : null;

	const filters = Object.assign({}, tagParam, keywordParam);

	const res = await api.get<ResponseCommon<T[]>>("app-icons", {
		params: {
			populate: "logo",
			filters: isEmpty(filters) ? null : filters,
			pagination: {
				page: params.page,
				pageSize: params.pageSize,
			},
		},
	});

	return res.data;
};
