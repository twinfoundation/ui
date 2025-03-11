// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { FooterProps as FlowbiteFooterProps } from "flowbite-react";
import type { ReactNode } from "react";
import type { IconComponent } from "../types/iconTypes";

/**
 * Footer props.
 */
export interface FooterProps extends Omit<FlowbiteFooterProps, "children"> {
	/**
	 * The body content of the footer
	 */
	body: ReactNode;
}

/**
 * Footer brand props.
 */
export interface FooterBrandProps {
	/**
	 * The alt text for the brand image
	 */
	alt?: string;
	/**
	 * The URL to navigate to when the brand is clicked
	 */
	href?: string;
	/**
	 * The name of the brand
	 */
	name?: string;
	/**
	 * The source URL for the brand image
	 */
	src?: string;
}

/**
 * Footer copyright props.
 */
export interface FooterCopyrightProps {
	/**
	 * The name of the copyright holder
	 */
	by: string;
	/**
	 * The URL to navigate to when the copyright is clicked
	 */
	href?: string;
	/**
	 * The year of the copyright
	 */
	year: number;
}

/**
 * Footer icon props.
 */
export interface FooterIconProps {
	/**
	 * The URL to navigate to when the icon is clicked
	 */
	href?: string;
	/**
	 * The icon component to display
	 */
	icon: IconComponent;
	/**
	 * Additional class names for the icon
	 */
	className?: string;
	/**
	 * Additional props for the icon
	 */
	ariaLabel?: string;
}

/**
 * Footer link props.
 */
export interface FooterLinkProps {
	/**
	 * The URL to navigate to when the link is clicked
	 */
	href?: string;
	/**
	 * The content of the link
	 */
	children: ReactNode;
}

/**
 * Footer link group props.
 */
export interface FooterLinkGroupProps {
	/**
	 * Whether the links should be displayed in a column
	 */
	col?: boolean;
	/**
	 * The content of the link group
	 */
	children: ReactNode;
}

/**
 * Footer title props.
 */
export interface FooterTitleProps {
	/**
	 * The title text
	 */
	title: string;
}
