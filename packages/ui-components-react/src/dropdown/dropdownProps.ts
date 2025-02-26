// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DropdownProps as FlowbiteDropdownProps } from "flowbite-react";
import type { ReactNode } from "react";
import type { DropdownPositions } from "./dropdownPositions";
import type { DropdownSizes } from "./dropdownSizes";
import type { IconComponent } from "../types/iconTypes";

/**
 * Interface defining the structure of each item in the dropdown menu.
 */
export interface DropdownItem {
	/**
	 * The text to display for the dropdown item.
	 */
	label?: string;

	/**
	 * Additional CSS classes to apply to the item.
	 */
	className?: string;

	/**
	 * Callback function to execute when the item is clicked.
	 */
	onClick?: () => void;

	/**
	 * Icon component to display alongside the label.
	 */
	icon?: IconComponent;

	/**
	 * Whether this item should render as a divider.
	 */
	divider?: boolean;

	/**
	 * Whether this item should render as a checkbox.
	 */
	checkbox?: boolean;

	/**
	 * The checked state of the checkbox (only applicable if checkbox is true).
	 */
	checked?: boolean;

	/**
	 * Whether this item is disabled.
	 */
	disabled?: boolean;
}

/**
 * Props for the Dropdown component.
 */
export interface DropdownProps extends Omit<FlowbiteDropdownProps, "color" | "label"> {
	/**
	 * The position of the dropdown.
	 */
	placement?: DropdownPositions;

	/**
	 * The size of the dropdown button.
	 */
	size?: DropdownSizes;

	/**
	 * The title text for the dropdown button.
	 */
	title?: string;

	/**
	 * Optional header content for the dropdown.
	 */
	header?: ReactNode;

	/**
	 * Whether the dropdown should be displayed inline.
	 */
	inline?: boolean;

	/**
	 * Array of items to display in the dropdown menu.
	 */
	items?: DropdownItem[];
}
