// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { CheckboxProps as FlowbiteCheckboxProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const CheckboxPropTypes = {
	id: PropTypes.string,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	checked: PropTypes.bool,
	name: PropTypes.string,
	value: PropTypes.string
};

/**
 * Checkbox props.
 */
export type CheckboxProps = PropsWithChildren<
	InferProps<typeof CheckboxPropTypes> & Omit<FlowbiteCheckboxProps, "color" | "label">
>;
