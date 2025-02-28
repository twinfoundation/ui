// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { RadioProps as FlowbiteRadioProps } from "flowbite-react";
import type { ReactNode } from "react";

/**
 * Radio props.
 */
export interface RadioProps extends Omit<FlowbiteRadioProps, "color" | "label"> {
	/**
	 * Radio id.
	 */
	id?: string;
	/**
	 * Disabled state.
	 */
	disabled?: boolean;
	/**
	 * Required state.
	 */
	required?: boolean;
	/**
	 * Default checked state.
	 */
	defaultChecked?: boolean;
	/**
	 * Radio name.
	 */
	name?: string;
	/**
	 * Radio label.
	 */
	label: string;
	/**
	 * Radio value.
	 */
	value: string;
	/**
	 * Checked state.
	 */
	checked?: boolean;
	/**
	 * Radio onChange event.
	 */
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	/**
	 * Radio children.
	 */
	children?: ReactNode;
}
