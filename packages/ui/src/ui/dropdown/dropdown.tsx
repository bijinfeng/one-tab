import React from "react";
import type { FC } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "./dropdown-menu";

type DropdownMenuProps = React.ComponentPropsWithoutRef<typeof DropdownMenu>;
type ContentProps = Omit<
	React.ComponentPropsWithoutRef<typeof DropdownMenuContent>,
	"content"
>;

interface MenuItemType {
	danger?: boolean;
	disabled?: boolean;
	icon?: React.ReactNode;
	key: string;
	label: string;
	title?: string;
	visible?: boolean;
	onClick?: () => void;
	className?: string;
}

interface SubMenuType {
	children: ItemType[];
	disabled?: boolean;
	icon?: React.ReactNode;
	key: string;
	label: string;
	popupClassName?: string;
	visible?: boolean;
	onTitleClick?: (params: {
		key: string;
		domEvent: React.SyntheticEvent<HTMLDivElement, Event>;
	}) => void;
}

interface MenuItemGroupType {
	type: "group";
	label: React.ReactNode;
	children: MenuItemType[];
	visible?: boolean;
}

interface MenuDividerType {
	type: "divider";
	dashed?: boolean;
	visible?: boolean;
}

type ItemType =
	| MenuItemType
	| SubMenuType
	| MenuItemGroupType
	| MenuDividerType;

function isGroupType(item: ItemType): item is MenuItemGroupType {
	return "type" in item && item.type === "group";
}

function isDividerType(item: ItemType): item is MenuDividerType {
	return "type" in item && item.type === "divider";
}

function isSubMenuType(item: ItemType): item is SubMenuType {
	return "children" in item;
}

export interface DropdownProps extends DropdownMenuProps, ContentProps {
	menuItems: ItemType[];
	onItemClick?: (params: { key: string; item: MenuItemType }) => void;
}

export const Dropdown: FC<DropdownProps> = (props) => {
	const {
		open,
		defaultOpen,
		modal,
		onOpenChange,
		children,
		menuItems,
		onItemClick,
		...rest
	} = props;

	const handleClick = (item: MenuItemType) => {
		onItemClick?.({ key: item.key, item });
		item.onClick?.();
	};

	const renderItems = (items: ItemType[]) => {
		const filteredItems = items.filter((item) => item.visible !== false);

		const renderMenuItem = (item: ItemType) => {
			if (isGroupType(item)) {
				return (
					<DropdownMenuGroup>
						<DropdownMenuLabel>{item.label}</DropdownMenuLabel>
						{renderItems(item.children)}
					</DropdownMenuGroup>
				);
			}
			if (isDividerType(item)) {
				return <DropdownMenuSeparator />;
			}
			if (isSubMenuType(item)) {
				return (
					<DropdownMenuSub>
						<DropdownMenuSubTrigger
							disabled={item.disabled}
							onSelect={(event) =>
								item.onTitleClick?.({ domEvent: event, key: item.key })
							}
						>
							{item.label}
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								{renderItems(item.children)}
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				);
			}

			return (
				<DropdownMenuItem
					onSelect={() => handleClick(item)}
					disabled={item.disabled}
					title={item.title}
					className={item.className}
				>
					{item.label}
				</DropdownMenuItem>
			);
		};

		return filteredItems.map((item, index) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
			<React.Fragment key={index}>{renderMenuItem(item)}</React.Fragment>
		));
	};

	return (
		<DropdownMenu
			open={open}
			defaultOpen={defaultOpen}
			onOpenChange={onOpenChange}
			modal={modal}
		>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

			<DropdownMenuContent {...rest}>
				{renderItems(menuItems)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
