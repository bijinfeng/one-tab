import type { FC } from "react";
import { Icon } from "@/components/Icon"

interface WindowControlProps {
	onClose?: () => void;
}

export const WindowControl: FC<WindowControlProps> = (props) => {
	const { onClose } = props;

	return (
		<div className="flex items-center">
			<div className="group flex h-[16px] w-[16px] items-center justify-center rounded-[50%] bg-[#FF7330] mb:hidden" onClick={onClose}>
				<Icon size={12} name="close_window_icon" className="text-color-white opacity-100 cursor-pointer" />
			</div>
		</div>
	);
};
