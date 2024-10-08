import { geAssetUrl } from "@/utils";
import { cn } from "@onetab/ui";
import type { FC } from "react";

interface WallpaperProps extends React.HTMLAttributes<HTMLDivElement> {
	data: OneTab.ImageInfo;
	title?: string;
	size?: OneTab.ImageSize;
}

export const Wallpaper: FC<WallpaperProps> = ({
	data,
	title,
	size,
	...rest
}) => {
	const imageUrl = (size ? data?.formats?.[size]?.url : data.url) ?? data.url;

	return (
		<div
			{...rest}
			className={cn(
				"group relative aspect-video overflow-hidden rounded-[6px]",
				rest.className,
			)}
		>
			<img
				src={geAssetUrl(imageUrl)}
				alt={data.name}
				className="scale-100 transition-[transform] duration-300 group-hover:scale-[1.2] w-full h-full cursor-pointer"
			/>
			{title && (
				<div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-color-black bg-opacity-20">
					<span className="font-ali-75 text-[20px] text-color-white">
						{title}
					</span>
				</div>
			)}
		</div>
	);
};
