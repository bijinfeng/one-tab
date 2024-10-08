import { serverUrl } from "@/constants";

export function isValidURL(urlString: string) {
	try {
		new URL(urlString);
		return true;
	} catch (e) {
		return false;
	}
}

export const geAssetUrl = (url: string) => {
	if (isValidURL(url)) return url;
	return serverUrl + url;
};
