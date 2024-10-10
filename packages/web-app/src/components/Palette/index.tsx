import { cn } from "@onetab/ui";
import type { FC } from "react";

export interface PaletteProps extends React.HTMLAttributes<HTMLDivElement> {
	direction: string;
	gradients: string[];
}

export const Palette: FC<PaletteProps> = (props) => {
	const { direction, gradients, className, style, ...rest } = props;

	return (
		<div
			className={cn("palette__gradient", className)}
			style={Object.assign(
				{
					background: `linear-gradient(${direction}, ${[...gradients]})`,
				},
				style,
			)}
			{...rest}
		/>
	);
};
