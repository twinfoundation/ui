// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TextInputProps as FlowbiteTextInputProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { TextInputColors } from "./textInputColors";
import { TextInputSizes } from "./textInputSizes";

export const TextInputPropTypes = {
	color: PropTypes.oneOf(Object.values(TextInputColors)),
	sizing: PropTypes.oneOf(Object.values(TextInputSizes)),
	id: PropTypes.string,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	readOnly: PropTypes.bool,
	name: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
	helperText: PropTypes.node,
	icon: PropTypes.func,
	rightIcon: PropTypes.func,
	addon: PropTypes.string
};

/**
 * TextInput props.
 */
export type TextInputProps = PropsWithChildren<
	InferProps<typeof TextInputPropTypes> & Omit<FlowbiteTextInputProps, "label">
>;
