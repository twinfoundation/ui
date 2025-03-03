// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { AccordionProps as FlowbiteAccordionProps } from "flowbite-react";
import type { ReactNode } from "react";
import type { IconComponent } from "../types/iconTypes";

/**
 * Interface for accordion item structure
 */
export interface AccordionItem {
	/**
	 * The title content of the accordion item
	 */
	title?: ReactNode;
	/**
	 * The main content of the accordion item
	 */
	content?: ReactNode;
	/**
	 * Optional icon to display before the title
	 */
	icon?: IconComponent;
}

/**
 * Accordion component props interface
 */
export interface AccordionProps extends Omit<FlowbiteAccordionProps, "color" | "label"> {
	/**
	 * Whether multiple panels can be open at once
	 */
	alwaysOpen?: boolean;
	/**
	 * Remove the default background color and border
	 */
	flush?: boolean;
	/**
	 * Whether all panels should be collapsed initially
	 */
	collapseAll?: boolean;
	/**
	 * Array of accordion items to display
	 */
	items?: AccordionItem[];
}
