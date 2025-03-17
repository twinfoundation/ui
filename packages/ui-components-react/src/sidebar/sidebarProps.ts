// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SidebarProps as FlowbiteSidebarProps } from "flowbite-react";
import type { ReactNode } from "react";
import type { PRIMARY, SUCCESS, WARNING, FAILURE, INFO } from "../constants/colors";
import type { IconComponent } from "../types/iconTypes";

/**
 * Type for the badge colors
 */
export type BadgeColor =
	| typeof PRIMARY
	| typeof SUCCESS
	| typeof WARNING
	| typeof FAILURE
	| typeof INFO;

/**
 * Icon type for sidebar items that matches Flowbite's requirements
 */
export type SidebarIconType = IconComponent;

/**
 * Type for sidebar items
 */
export interface SidebarItem {
	/**
	 * Label of the item
	 */
	label: string;
	/**
	 * Href of the item
	 */
	href: string;
	/**
	 * Icon of the item
	 */
	icon?: SidebarIconType;
	/**
	 * Active state of the item
	 */
	active?: boolean;
	/**
	 * Disabled state of the item
	 */
	disabled?: boolean;
	/**
	 * Badge text of the item
	 */
	badge?: string;
	/**
	 * Badge color of the item
	 */
	badgeColor?: BadgeColor;
	/**
	 * Children of the item
	 */
	items?: SidebarItem[];
}

/**
 * Sidebar props.
 */
export interface SidebarProps extends Omit<FlowbiteSidebarProps, "label"> {
	/**
	 * Logo configuration
	 */
	logo?: {
		label: ReactNode;
		img: string;
		imgAlt?: string;
		href?: string;
	};
	/**
	 * Sidebar items
	 */
	items?: SidebarItem[];
	/**
	 * Call to action component
	 */
	CTA?: ReactNode;
	/**
	 * Aria label for accessibility
	 */
	ariaLabel?: string;
	/**
	 * Children elements
	 */
	children?: ReactNode;
	/**
	 * Footer content of the item
	 */
	footerContent?: ReactNode;
	/**
	 * Footer items of the item
	 */
	footerItems?: SidebarItem[];
	/**
	 * Header content of the item
	 */
	header?: ReactNode;
}
