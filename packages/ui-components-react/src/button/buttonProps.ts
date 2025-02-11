// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ButtonProps as FlowbiteButtonProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { ButtonColors } from "./buttonColors";
import { ButtonSizes } from "./buttonSizes";

export const ButtonPropTypes = {
	color: PropTypes.oneOf(Object.values(ButtonColors)),
	size: PropTypes.oneOf(Object.values(ButtonSizes)),
	outline: PropTypes.bool,
	iconOnly: PropTypes.bool,
	showButtonText: PropTypes.bool,
	buttonText: PropTypes.string,
	showLeftIcon: PropTypes.bool,
	leftIcon: PropTypes.elementType,
	rightIcon: PropTypes.elementType,
	showRightIcon: PropTypes.bool,
	icon: PropTypes.elementType,
	disabled: PropTypes.bool,
	className: PropTypes.string
};

/**
 * Button props.
 */
export type ButtonProps = PropsWithChildren<
	InferProps<typeof ButtonPropTypes> & Omit<FlowbiteButtonProps, "color" | "label">
>;
