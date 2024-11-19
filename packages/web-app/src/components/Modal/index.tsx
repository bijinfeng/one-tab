import { Dialog } from "@onetab/ui";
import type { FC } from "react";
import { WindowControl } from "../WindowControl";

interface ModalProps {
	visible: boolean;
	onShow?: () => void;
	onHide?: () => void;
	children?: React.ReactNode;
	header?: React.ReactNode;
}

export const Modal: FC<ModalProps> = (props) => {
	const { visible, onShow, onHide, header, children } = props;

	const handleOpenChange = (open: boolean) => {
		open ? onShow?.() : onHide?.();
	};

	const handleClose = () => onHide?.();

	return (
		<Dialog
			open={visible}
			onOpenChange={handleOpenChange}
			mask={false}
			closable={false}
			className="w-[1024px] max-w-[calc(100vw-40px)] h-[640px] max-h-[calc(100vh-40px)] bg-color-m1 bg-opacity-70 backdrop-blur-[40px] rounded-[12px] p-0 overflow-hidden"
		>
			<div className="flex flex-col h-full overflow-hidden">
				<div className="header flex h-[64px] items-center justify-between border-b-[1px] border-color-black border-opacity-5 px-[20px] dark:border-opacity-40 mb:!h-auto mb:flex-col-reverse mb:items-end mb:!p-[20px]">
					<WindowControl onClose={() => handleClose()} />

					{header}
				</div>

				<div className="flex-1 flex overflow-hidden">{children}</div>
			</div>
		</Dialog>
	);
};
