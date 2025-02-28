// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ReactNode } from "react";
import type { IconComponent } from "../types/iconTypes";

/**
 * Props for a single list group item
 */
export interface ListGroupItem {
	/**
	 * The title text of the list item
	 */
	title: string;
	/**
	 * Optional icon component to display
	 */
	icon?: IconComponent;
	/**
	 * Whether the item is active
	 */
	active?: boolean;
	/**
	 * Whether the item is disabled
	 */
	disabled?: boolean;
	/**
	 * Optional href for the item
	 */
	href?: string;
}

/**
 * Props for the ListGroup component
 */
export interface ListGroupProps {
	/**
	 * Array of list items to display
	 */
	items: ListGroupItem[];
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Children elements
	 */
	children?: ReactNode;
}
