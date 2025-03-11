// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SelectProps as FlowbiteSelectProps } from "flowbite-react";
import type { SelectSize } from "./selectSizes";

/**
 * Option type for the Select component.
 */
export interface SelectOption {
	/**
	 * The value of the option.
	 */
	value?: string;
	/**
	 * The label to display for the option.
	 */
	label?: string;
}

/**
 * Select props.
 */
export interface SelectProps extends Omit<FlowbiteSelectProps, "color" | "label"> {
	/**
	 * The size of the select component.
	 */
	sizing?: SelectSize;
	/**
	 * The options to display in the select component.
	 */
	options: SelectOption[];
}
