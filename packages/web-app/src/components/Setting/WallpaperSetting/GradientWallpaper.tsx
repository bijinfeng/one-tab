import gradients from "@/assets/gradients.json";
import { Palette } from "@/components/Palette";
import { type CLASSIFIED_COLORS, shortlists } from "@/constants";
import { colorDetector } from "@/utils";
import { cn, ScrollArea } from "@onetab/ui";
import { type FC, useCallback, useMemo, useState } from "react";
import { AutoSizer, Grid, type GridCellProps } from "react-virtualized";

const columnCount = 3;

export const GradientWallpaper: FC = () => {
	const [currentFilter, setCurrentFilter] = useState<CLASSIFIED_COLORS>();

	const classifiedColors = useMemo(
		() =>
			gradients.map((gradient) => {
				const tags = gradient.colors.map((color) => colorDetector(color));
				return { ...gradient, palletes: tags };
			}),
		[],
	);

	const filterPalettes = useCallback(
		(color: CLASSIFIED_COLORS) => {
			return classifiedColors.filter((gradient) =>
				gradient.palletes.includes(color),
			);
		},
		[classifiedColors],
	);

	const filteredGradients = useMemo(() => {
		if (currentFilter) {
			return filterPalettes(currentFilter);
		}
		return classifiedColors;
	}, [currentFilter, classifiedColors, filterPalettes]);

	const cellRenderer = ({
		columnIndex,
		key,
		rowIndex,
		style,
	}: GridCellProps) => {
		const index = rowIndex * columnCount + columnIndex;
		const data = filteredGradients[index];

		if (!data) return;

		return (
			<div key={key} style={style} className="p-[6px]">
				<Palette
					gradients={data.colors}
					direction="357deg"
					className="group h-[114px] cursor-pointer overflow-hidden rounded-[4px]"
				/>
			</div>
		);
	};

	return (
		<div className="py-2 box-border overflow-hidden h-full flex flex-col">
			<div className="flex items-center border-b border-color-m2 border-opacity-5 pb-[11px] mx-[40px]">
				<div
					className={cn(
						"flex h-[16px] w-[36px] cursor-pointer items-center justify-center rounded-[8px] border border-solid border-color-m2 bg-color-m2 font-ali-55 text-[12px] leading-none transition-colors border-opacity-10 bg-opacity-5 text-color-t3",
						{
							"border-opacity-100 bg-opacity-100 text-color-m1": !currentFilter,
						},
					)}
					onClick={() => setCurrentFilter(undefined)}
				>
					All
				</div>
				<div className="mx-[12px] h-[12px] w-[1px] bg-color-m2 bg-opacity-[0.08]" />
				{shortlists.map((it) => (
					<div
						key={it.name}
						className="expand-click mr-[16px] flex h-[16px] w-[16px] cursor-pointer items-center justify-center rounded-[8px]"
						style={{ backgroundColor: it.color }}
						onClick={() => setCurrentFilter(it.name)}
					>
						{currentFilter === it.name && (
							<div className="h-[8px] w-[8px] rounded-[8px] bg-color-white" />
						)}
					</div>
				))}
			</div>

			<ScrollArea className="py-[12px] flex-1">
				<AutoSizer>
					{({ height, width }) => (
						<Grid
							className="px-[34px]"
							width={width}
							height={height}
							columnCount={columnCount}
							columnWidth={(width - 40 * 2) / columnCount}
							rowHeight={126}
							rowCount={Math.ceil(filteredGradients.length / columnCount)}
							cellRenderer={cellRenderer}
						/>
					)}
				</AutoSizer>
			</ScrollArea>
		</div>
	);
};
