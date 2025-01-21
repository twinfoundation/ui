// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ToggleSwitchProps as FlowbiteToggleSwitchProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { ToggleSwitchColors } from "./toggleSwitchColors";
import { ToggleSwitchSizes } from "./toggleSwitchSizes";

export const ToggleSwitchPropTypes = {
	sizing: PropTypes.oneOf(Object.values(ToggleSwitchSizes)),
	color: PropTypes.oneOf(Object.values(ToggleSwitchColors)),
	id: PropTypes.string,
	disabled: PropTypes.bool,
	checked: PropTypes.bool.isRequired,
	name: PropTypes.string,
	value: PropTypes.string,
	label: PropTypes.string
};

/**
 * ToggleSwitch props.
 */
export type ToggleSwitchProps = PropsWithChildren<
	InferProps<typeof ToggleSwitchPropTypes> & Omit<FlowbiteToggleSwitchProps, "onChange">
>;
