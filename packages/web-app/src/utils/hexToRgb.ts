function removeHash(hex: string) {
	const arr = hex.split("");
	arr.shift();
	return arr.join("");
}

function expand(hex: string) {
	return hex
		.split("")
		.reduce((accum, value) => accum.concat([value, value]), [] as string[])
		.join("");
}

export function hexToRgb(_hex: string): [number, number, number] {
	let hex = _hex;

	if (hex.charAt && hex.charAt(0) === "#") {
		hex = removeHash(hex);
	}

	if (hex.length === 3) {
		hex = expand(hex);
	}

	const bigint = Number.parseInt(hex, 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;

	return [r, g, b];
}
