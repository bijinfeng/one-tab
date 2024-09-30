declare namespace OneTab {
	type ImageSize = "large" | "medium" | "small" | "thumbnail";

	interface BaseImageInfo {
		name: string;
		url: string;
		width: number;
		height: number;
		size: number;
	}

	interface ImageInfo extends BaseImageInfo {
		id: number;
		formats?: Partial<Record<ImageSize, BaseImageInfo>>;
	}
}
