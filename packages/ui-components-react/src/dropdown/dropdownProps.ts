// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DropdownProps as FlowbiteDropdownProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { FC, PropsWithChildren, SVGProps } from "react";
import { DropdownPositions } from "./dropdownPositions";
import { DropdownSizes } from "./dropdownSizes";

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
	icon?: FC<SVGProps<SVGSVGElement>>;
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

export const DropdownPropTypes = {
	placement: PropTypes.oneOf(Object.values(DropdownPositions)),
	size: PropTypes.oneOf(Object.values(DropdownSizes)),
	title: PropTypes.string,
	header: PropTypes.node,
	inline: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			icon: PropTypes.func,
			className: PropTypes.string,
			onClick: PropTypes.func,
			divider: PropTypes.bool,
			checkbox: PropTypes.bool,
			checked: PropTypes.bool,
			disabled: PropTypes.bool
		})
	)
};

/**
 * Props for the Dropdown component.
 */
export type DropdownProps = PropsWithChildren<
	InferProps<typeof DropdownPropTypes> & Omit<FlowbiteDropdownProps, "color" | "label">
>;
