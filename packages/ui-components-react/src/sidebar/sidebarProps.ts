// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SidebarProps as FlowbiteSidebarProps } from "flowbite-react";
import PropTypes from "prop-types";
import type { FC, PropsWithChildren, SVGProps } from "react";

const colorsTypes = ["primary", "success", "warning", "error", "information"] as const;

/**
 * Type for the badge colors
 */
export type BadgeColor = (typeof colorsTypes)[number];

/**
 * Icon type for sidebar items that matches Flowbite's requirements
 */
export type SidebarIconType = FC<SVGProps<SVGSVGElement>>;

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
export type SidebarProps = PropsWithChildren<
	{
		logo?: {
			label: React.ReactNode;
			img: string;
			imgAlt?: string;
			href?: string;
		};
		items?: SidebarItem[];
		CTA?: React.ReactNode;
		ariaLabel?: string;
	} & Omit<FlowbiteSidebarProps, "label">
>;

const sidebarItemShape = {
	label: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	icon: PropTypes.elementType,
	active: PropTypes.bool,
	disabled: PropTypes.bool,
	badge: PropTypes.string,
	badgeColor: PropTypes.oneOf(colorsTypes)
};

const sidebarItemPropType = PropTypes.exact({
	...sidebarItemShape,
	items: PropTypes.arrayOf(PropTypes.exact(sidebarItemShape))
});

export const SidebarPropTypes = {
	logo: PropTypes.shape({
		label: PropTypes.node.isRequired,
		img: PropTypes.string.isRequired,
		imgAlt: PropTypes.string,
		href: PropTypes.string
	}),
	items: PropTypes.arrayOf(sidebarItemPropType),
	CTA: PropTypes.node,
	ariaLabel: PropTypes.string
};
