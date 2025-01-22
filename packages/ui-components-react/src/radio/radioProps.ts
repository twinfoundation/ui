// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { RadioProps as FlowbiteRadioProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const RadioPropTypes = {
	id: PropTypes.string,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	defaultChecked: PropTypes.bool,
	name: PropTypes.string,
	value: PropTypes.string
};

/**
 * Radio props.
 */
export type RadioProps = PropsWithChildren<
	InferProps<typeof RadioPropTypes> & Omit<FlowbiteRadioProps, "color" | "label">
>;
