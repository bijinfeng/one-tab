import { cn } from "@/utils";
import { type FC, useMemo } from "react";
import {
	TabsContent,
	TabsList,
	Tabs as TabsPrimitive,
	TabsTrigger,
} from "./tabs";

export interface TabItemType {
	disabled?: boolean;
	key: string;
	label: string;
	children?: React.ReactNode;
	className?: string;
}

export interface TabsProps
	extends React.ComponentPropsWithoutRef<typeof TabsPrimitive> {
	items: TabItemType[];
	tabBarStyle?: React.CSSProperties;
	tabContentStyle?: React.CSSProperties;
	tabBarClassName?: string;
	tabContentClassName?: string;
	containerClassName?: string;
	headerClassName?: string;
	headerStyle?: React.CSSProperties;
}

export const Tabs: FC<TabsProps> = (props) => {
	const {
		items,
		tabBarStyle,
		tabContentStyle,
		tabBarClassName,
		tabContentClassName,
		containerClassName,
		headerClassName,
		headerStyle,
		...rest
	} = props;

	const contents = useMemo(() => items.filter((it) => it.children), [items]);

	return (
		<TabsPrimitive {...rest}>
			<TabsList
				className={cn("grid w-full grid-cols-2", headerClassName)}
				style={headerStyle}
			>
				{items.map((item) => (
					<TabsTrigger
						key={item.key}
						value={item.key}
						disabled={item.disabled}
						style={tabBarStyle}
						className={tabBarClassName}
					>
						{item.label}
					</TabsTrigger>
				))}
			</TabsList>

			<div className={containerClassName}>
				{contents.map((item) => (
					<TabsContent
						value={item.key}
						key={item.key}
						className={cn(tabContentClassName, item.className)}
						style={tabContentStyle}
					>
						{item.children}
					</TabsContent>
				))}
			</div>
		</TabsPrimitive>
	);
};
