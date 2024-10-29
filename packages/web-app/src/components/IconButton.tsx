import { cn } from "@onetab/ui";
import { type VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
import type { PropsWithChildren } from "react";

const iconButtonVariants = cva(
	"flex cursor-pointer items-center justify-center rounded-[8px] transition-all bg-opacity-0 opacity-70 hover:opacity-100",
	{
		variants: {
			size: {
				small: "h-[24px] w-[24px]",
				default: "h-[28px] w-[28px]",
				large: "h-[32px] w-[32px]",
				huge: "h-[36px] w-[36px]",
			},
			ghost: {
				true: "text-white hover:bg-color-black hover:bg-opacity-20",
				false: "text-black hover:bg-color-white hover:bg-opacity-80",
			},
			activated: {
				true: "",
				false: "",
			},
		},
		compoundVariants: [
			{
				ghost: true,
				activated: true,
				className: "bg-color-black bg-opacity-20",
			},
			{
				ghost: false,
				activated: true,
				className: "bg-color-white bg-opacity-80",
			},
		],
		defaultVariants: {
			size: "default",
			ghost: false,
			activated: false,
		},
	},
);

interface IconButtonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof iconButtonVariants> {}

export const IconButton = forwardRef<HTMLDivElement, PropsWithChildren<IconButtonProps>>((props, ref) => {
	const { children, className, size, ghost, activated, ...rest } = props;

	return (
		<div {...rest} ref={ref} className={cn(iconButtonVariants({ size, ghost, activated, className }))}>
			{children}
		</div>
	);
});
