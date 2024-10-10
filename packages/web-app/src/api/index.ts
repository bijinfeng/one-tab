import { jsonpAdapter } from "@pingtou/axios-jsonp";
import axios, { type CancelTokenSource } from "axios";
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

	const res = await axios.get<{ s: string[] }>(
		`https://suggestion.baidu.com/su?wd=${keyword}`,
		{
			headers: { xxx: 1 },
			cancelToken: cancelSource.token,
			adapter: jsonpAdapter,
			callbackParamName: "cb",
		},
	);

	return res.data.s;
}

export const getHitokoto = async () => {
	const res = await axios.get<OneTab.Celebrity>(
		"https://v1.hitokoto.cn/?c=d&c=e&c=h&c=i&c=k",
	);

	return res.data;
};

// 获取壁纸分类
export const getWallpaperGroup = async () => {
	const res = await api.get<ResponseCommon<OneTab.WallpaperGroup[]>>(
		"wallpaper-tags",
		{
			params: {
				populate: "cover",
			},
		},
	);

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
