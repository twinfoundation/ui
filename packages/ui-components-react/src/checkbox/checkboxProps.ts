// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { CheckboxProps as FlowbiteCheckboxProps } from "flowbite-react";
import type { PropsWithChildren } from "react";

/**
 * Checkbox props.
 */
export type CheckboxProps = PropsWithChildren<
	{
		/**
		 * The ID of the checkbox.
		 */
		id?: string;
		/**
		 * Whether the checkbox is disabled.
		 */
		disabled?: boolean;
		/**
		 * Whether the checkbox is required.
		 */
		required?: boolean;
		/**
		 * Whether the checkbox is checked.
		 */
		checked?: boolean;
		/**
		 * The name attribute of the checkbox.
		 */
		name?: string;
		/**
		 * The value attribute of the checkbox.
		 */
		value?: string;
	} & Omit<FlowbiteCheckboxProps, "color" | "label">
>;
