import { CLASSIFIED_COLORS, serverUrl } from "@/constants";
import { hexToRgb } from "./hexToRgb";

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

export const rgbToHsl = ($r: number, $g: number, $b: number) => {
	let d: number;
	const r = $r / 255;
	const g = $g / 255;
	const b = $b / 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	let s: number | string = 0;
	let l: number | string = (max + min) / 2;

	if (max === min) {
		h = s = 0;
	} else {
		d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
		}
		h /= 6;
	}
	h = h * 360;
	s = `${s * 100}%`;
	l = `${l * 100}%`;
	return [h, s, l];
};

export const hexToHsl = (hex: string) => {
	const hsl = rgbToHsl.apply(rgbToHsl, hexToRgb(hex));
	return [
		hsl[0] as number,
		Number.parseInt(hsl[1].toString(), 10),
		Number.parseInt(hsl[2].toString(), 10),
	];
};

export const colorDetector = (hexColor: string): CLASSIFIED_COLORS => {
	const [hue, sat, lgt] = hexToHsl(hexColor);

	if (lgt / 100 < 0.2) return CLASSIFIED_COLORS.BLACK;
	if (lgt / 100 > 0.85) return CLASSIFIED_COLORS.WHITE;

	if (sat / 100 < 0.2) return CLASSIFIED_COLORS.GRAY;

	if (hue < 30) return CLASSIFIED_COLORS.RED;
	if (hue < 60) return CLASSIFIED_COLORS.ORANGE;
	if (hue < 90) return CLASSIFIED_COLORS.YELLOW;
	if (hue < 150) return CLASSIFIED_COLORS.GREEN;
	if (hue < 210) return CLASSIFIED_COLORS.CYAN;
	if (hue < 270) return CLASSIFIED_COLORS.BLUE;
	if (hue < 330) return CLASSIFIED_COLORS.MAGENTA;

	return CLASSIFIED_COLORS.RED;
};
