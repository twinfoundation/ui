// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ButtonProps as FlowbiteButtonProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { ButtonColors } from "./buttonColors";
import { ButtonSizes } from "./buttonSizes";

export const ButtonPropTypes = {
	color: PropTypes.oneOf(Object.values(ButtonColors)),
	size: PropTypes.oneOf(Object.values(ButtonSizes))
};

/**
 * Button props.
 */
export type ButtonProps = PropsWithChildren<
	InferProps<typeof ButtonPropTypes> & Omit<FlowbiteButtonProps, "color" | "label">
>;
