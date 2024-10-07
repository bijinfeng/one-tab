import { serverUrl } from "@/constants";

export function isValidURL(url: string) {
	const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
	return regex.test(url);
}

export const geAssetUrl = (url: string) => {
	if (isValidURL(url)) return url;
	return serverUrl + url;
};
