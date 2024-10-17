import type { FC } from "react";

export const AppCard: FC = () => {
	return (
		<div className="group relative h-[132px] cursor-pointer overflow-hidden rounded-[20px] bg-color-white bg-opacity-60 transition-colors hover:bg-opacity-90 hover:shadow-icon-add dark:bg-opacity-10 hover:dark:bg-opacity-20">
			<div className="mx-auto flex h-full flex-col items-center justify-center">
				<div className="relative h-[60px] w-[60px] overflow-hidden rounded-[16px]">
					<div className="van-image w-full h-full">
						<img
							className="van-image__img"
							src="https://infinityicon.infinitynewtab.com/user-share-icon/346647fb95fbac4d303c93fa0a4936d3.png?imageMogr2/thumbnail/120x/format/webp/blur/1x0/quality/100|imageslim"
							alt="logo"
							style={{ objectFit: "cover", objectPosition: "center center" }}
						/>
					</div>
					<div className="hi-mask absolute left-0 top-0 h-full w-full bg-[#000] bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 hi-demand">
						<i className="iconfont icon-add_icon2 text-[24px] text-color-white" />
					</div>
				</div>
				<span className="w-full truncate px-[20px] pt-[12px] text-center text-[14px] text-color-t2">
					爱淘宝
				</span>
			</div>
			<button
				type="button"
				className="absolute top-[12px] right-[12px] hidden text-color-t3 hover:text-color-blue group-hover:block"
			>
				<i className="iconfont icon-url_icon align-top" />
			</button>
		</div>
	);
};
