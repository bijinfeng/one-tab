export const serverUrl = import.meta.env.PUBLIC_SERVER_URL;

export enum CLASSIFIED_COLORS {
	BLACK = 0,
	WHITE = 1,
	GRAY = 2,
	RED = 3,
	ORANGE = 4,
	YELLOW = 5,
	GREEN = 6,
	CYAN = 7,
	BLUE = 8,
	MAGENTA = 9,
}

export const shortlists: { name: CLASSIFIED_COLORS; color: string }[] = [
	{ name: CLASSIFIED_COLORS.RED, color: "#cb2d3e" },
	{ name: CLASSIFIED_COLORS.ORANGE, color: "#d76b26" },
	{ name: CLASSIFIED_COLORS.YELLOW, color: "#ffd200" },
	{ name: CLASSIFIED_COLORS.GREEN, color: "#159957" },
	{ name: CLASSIFIED_COLORS.CYAN, color: "#1cb5e0" },
	{ name: CLASSIFIED_COLORS.BLUE, color: "#155799" },
	{ name: CLASSIFIED_COLORS.MAGENTA, color: "#ef32d9" },
	{ name: CLASSIFIED_COLORS.WHITE, color: "#eaeaea" },
	{ name: CLASSIFIED_COLORS.GRAY, color: "#c0c0cb" },
	{ name: CLASSIFIED_COLORS.BLACK, color: "#333333" },
];
