import type { ReactNode } from "react";

export type PickerValue = string | number | null;

export type PickerColumnItem = {
	label: ReactNode;
	value: string | number;
	key?: string | number;
};

export interface WheelProps {
	index: number;
	column: PickerColumnItem[];
	value: PickerValue;
	onSelect: (value: PickerValue, index: number) => void;
	renderLabel: (item: PickerColumnItem) => ReactNode;
	mouseWheel: boolean;
}
