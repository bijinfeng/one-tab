import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import type { FC } from "react";
import { DialogContent, DialogHeader, Dialog as DialogPrimitive, DialogTitle } from "./dialog";

export interface DialogProps
	extends React.ComponentPropsWithoutRef<typeof DialogPrimitive>,
		React.ComponentPropsWithoutRef<typeof DialogContent> {
	title?: string;
}

export const Dialog: FC<DialogProps> = (props) => {
	const { children, open, defaultOpen, onOpenChange, modal, title, ...rest } = props;

	return (
		<DialogPrimitive open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} modal={modal}>
			<DialogContent {...rest}>
				{title ? (
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
					</DialogHeader>
				) : (
					<VisuallyHidden asChild>
						<DialogTitle />
					</VisuallyHidden>
				)}
				{children}
			</DialogContent>
		</DialogPrimitive>
	);
};
