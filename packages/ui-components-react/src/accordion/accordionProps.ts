// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { AccordionProps as FlowbiteAccordionProps } from "flowbite-react";
import type { ReactNode } from "react";

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
