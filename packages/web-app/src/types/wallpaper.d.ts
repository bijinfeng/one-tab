declare namespace OneTab {
	interface WallpaperGroup {
		id: number;
		tag: string;
		title: string;
		cover: OneTab.ImageInfo;
	}

	interface Wallpaper {
		client: string;
		color?: string;
		id: number;
		photo: OneTab.ImageInfo;
	}
}
