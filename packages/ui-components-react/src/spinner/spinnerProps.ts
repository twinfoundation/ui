// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SpinnerProps as FlowbiteSpinnerProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import { SpinnerSizes } from "./spinnerSizes";

const colorsTypes = ["primary", "success", "warning", "error", "information"] as const;

/**
 * Type for the badge colors
 */
export type SpinnerColor = (typeof colorsTypes)[number];

export const SpinnerPropTypes = {
	/**
	 * The size of the spinner.
	 */
	size: PropTypes.oneOf(Object.values(SpinnerSizes)),

	/**
	 * The color of the spinner. Can be 'primary', 'success', 'warning', 'error', or 'information'.
	 */
	color: PropTypes.oneOf(colorsTypes)
};

/**
 * Spinner props.
 */
export type SpinnerProps = InferProps<typeof SpinnerPropTypes> &
	Omit<FlowbiteSpinnerProps, "label">;
