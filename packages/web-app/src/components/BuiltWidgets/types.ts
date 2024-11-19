export interface WidgetAtomInterface<T = unknown> {
	id: string;
	name: string;
	size: OneTab.WidgetSize[];
	renderPreview: (data: T) => JSX.Element;
	renderEditor: (data: T) => JSX.Element;
}

export interface WidgetAtomData {
	name: string;
	time: number;
	dateType: string;
}
