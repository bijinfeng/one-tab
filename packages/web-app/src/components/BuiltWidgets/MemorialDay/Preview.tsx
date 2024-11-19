import bgImage from "@/assets/background05_small.jpg";
import type { WidgetAtomData } from "../types";

export const renderPreview = (data: OneTab.WidgetInfo<WidgetAtomData>) => {
	const { widgetData } = data;

	return (
		<section
			className="mark-home-small relative h-full bg-cover bg-center bg-no-repeat transition-[background,color]"
			style={{ color: "rgb(248, 248, 248)", backgroundImage: `url("${bgImage}")` }}
		>
			<div className="mask absolute inset-0 transition-colors" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
			<div className="content relative flex h-full flex-col items-center justify-between leading-none py-[15px]">
				<h1 className="opacity-80">{widgetData.name}</h1>
				<div className="text-center">
					<span className="mr-[4px] font-ali-75 text-[20px]">345</span>
					<span className="text-[12px] opacity-60">天</span>
				</div>
			</div>
		</section>
	);
};
