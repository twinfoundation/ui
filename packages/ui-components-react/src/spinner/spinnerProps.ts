// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SpinnerProps as FlowbiteSpinnerProps } from "flowbite-react";
import type { SpinnerSizes } from "./spinnerSizes";

const colorsTypes = ["primary", "success", "warning", "error", "information"] as const;

/**
 * Type for the badge colors
 */
export type SpinnerColor = (typeof colorsTypes)[number];

/**
 * Spinner props.
 */
export type SpinnerProps = {
	/**
	 * The size of the spinner.
	 */
	size?: SpinnerSizes;
	/**
	 * The color of the spinner. Can be 'primary', 'success', 'warning', 'error', or 'information'.
	 */
	color?: SpinnerColor;
} & Omit<FlowbiteSpinnerProps, "label">;
