// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ToggleSwitchProps as FlowbiteToggleSwitchProps } from "flowbite-react";
import type { ToggleSwitchColors } from "./toggleSwitchColors";
import type { ToggleSwitchSizes } from "./toggleSwitchSizes";

/**
 * ToggleSwitch props.
 */
export interface ToggleSwitchProps extends Omit<FlowbiteToggleSwitchProps, "onChange"> {
	/**
	 * The size of the toggle switch.
	 */
	sizing?: (typeof ToggleSwitchSizes)[keyof typeof ToggleSwitchSizes];

	/**
	 * The color of the toggle switch.
	 */
	color?: (typeof ToggleSwitchColors)[keyof typeof ToggleSwitchColors];

	/**
	 * The ID of the toggle switch.
	 */
	id?: string;

	/**
	 * Whether the toggle switch is disabled.
	 */
	disabled?: boolean;

	/**
	 * Whether the toggle switch is checked.
	 */
	checked: boolean;

	/**
	 * The name of the toggle switch.
	 */
	name?: string;

	/**
	 * The value of the toggle switch.
	 */
	value?: string;

	/**
	 * The label of the toggle switch.
	 */
	label?: string;

	/**
	 * The callback function when the toggle switch is changed.
	 */
	onChange?: () => void;
}
