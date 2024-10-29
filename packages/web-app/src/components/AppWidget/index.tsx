import type { FC } from "react";

export const AppWidget: FC<{ data: OneTab.SiteInfo }> = ({ data }) => {
	if (data.bgType === "image") {
		return (
			<section
				className="hi-icon flex items-center justify-center bg-cover icon-home cursor-pointer overflow-visible icon-drag"
				style={{ backgroundColor: data.bgColor, backgroundImage: `url(${data.bgImage})` }}
			/>
		);
	}

	return (
		<section
			className="hi-icon flex items-center justify-center bg-cover icon-home cursor-pointer overflow-visible icon-drag"
			style={{ backgroundColor: data.bgColor }}
		>
			<div className="leading-none text-color-white">
				<svg className="h-[100%] w-[100%]" preserveAspectRatio="xMinYMin meet" viewBox="0,0,60,60">
					<title>{data.bgText}</title>
					<foreignObject width="100%" height="100%">
						<div className="flex h-[60px] w-[60px] items-center justify-center">
							<p className="text-[24px] m-0 shrink-0 whitespace-nowrap text-center leading-[1.1] text-color-white">
								{data.bgText}
							</p>
						</div>
					</foreignObject>
				</svg>
			</div>
		</section>
	);
};
