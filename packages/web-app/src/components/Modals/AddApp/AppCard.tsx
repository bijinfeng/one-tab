import { nanoid } from "nanoid";
import { type FC, memo } from "react";
import { Icon } from "@/components/Icon"

export interface AppItemData {
	id: number;
	target: string;
	name: string;
	logo: OneTab.ImageInfo;
}

interface AppCardProps {
	data: AppItemData;
	onAdd: (app: OneTab.ImageSiteInfo) => void;
}

export const AppCard: FC<AppCardProps> = memo((props) => {
	const { data, onAdd } = props;

	const handleAdd = () => {
		onAdd({
			type: "site",
			id: nanoid(),
			name: data.name,
			target: data.target,
			bgColor: "rgba(0, 0, 0, 0)",
			bgType: "image",
			origin: "online",
			bgImage: data.logo.url,
		});
	};

	return (
		<div className="group relative h-[132px] cursor-pointer overflow-hidden rounded-[20px] bg-color-white bg-opacity-60 transition-colors hover:bg-opacity-90 hover:shadow-icon-add dark:bg-opacity-10 hover:dark:bg-opacity-20">
			<div className="mx-auto flex h-full flex-col items-center justify-center">
				<div className="relative h-[60px] w-[60px] overflow-hidden rounded-[16px]">
					<div className="van-image w-full h-full">
						<img
							className="van-image__img"
							src={data.logo.url}
							alt="logo"
							style={{ objectFit: "cover", objectPosition: "center center" }}
						/>
					</div>
					<div onClick={handleAdd} className="hi-mask absolute left-0 top-0 h-full w-full bg-[#000] bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 hi-demand">
						<Icon size={24} name="add_icon2" className="text-color-white" />
					</div>
				</div>
				<span className="w-full truncate px-[20px] pt-[12px] text-center text-[14px] text-color-t2">{data.name}</span>
			</div>
			<a
				type="button"
				className="absolute top-[12px] right-[12px] hidden text-color-t3 hover:text-color-blue group-hover:block"
				href={data.target}
				target="_blank"
				rel="noreferrer"
			>
				<Icon name="url_icon" className="align-top" />
			</a>
		</div>
	);
});
