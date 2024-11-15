import { cn } from "@onetab/ui";
import { useControllableValue } from "ahooks";
import type { FC, ReactNode } from "react";
import { Icon } from "@/components/Icon";

interface InputProps {
	value?: string;
	onChange?: (text: string) => void;
	className?: string;
	addonAfter?: ReactNode;
}

export const Input: FC<InputProps> = (props) => {
	const [keyword, setKeyWord] = useControllableValue<string>(props);

	return (
		<div
			className={cn(
				"search-wrapper relative inline-flex h-[32px] w-[148px] items-center rounded-[8px] bg-color-m2/[.06] p-[9px]",
				props.className
			)}
		>
			<Icon size={20} name="magnifier_icon" className="text-color-t2" />
			<input
				type="text"
				className="w-0 flex-1 bg-[transparent] pl-2 pr-8 text-[14px] leading-[20px] text-color-t1 placeholder-color-t3 outline-none"
				placeholder="搜索"
				maxLength={20}
				value={keyword}
				onChange={(e) => setKeyWord(e.target.value)}
			/>
			{keyword && (
				<Icon
					size={16}
					name="clear_merge_icon"
					className="absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer text-color-t1"
					onClick={() => setKeyWord("")}
				/>
			)}
			{props.addonAfter}
		</div>
	);
};
