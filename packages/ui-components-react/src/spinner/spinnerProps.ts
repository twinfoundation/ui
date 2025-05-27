// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SpinnerProps as FlowbiteSpinnerProps } from "flowbite-react";
import type { SpinnerSize } from "./spinnerSizes";

/**
 * Type definition for the allowed spinner color values.
 * @private
 */
type _ColorsType = ["primary", "success", "warning", "error", "information"];

/**
 * Type for the spinner colors
 */
export type SpinnerColor = _ColorsType[number];

/**
 * Spinner props.
 */
export type SpinnerProps = {
	/**
	 * The size of the spinner.
	 */
	size?: SpinnerSize;
	/**
	 * The color of the spinner. Can be 'primary', 'success', 'warning', 'error', or 'information'.
	 */
	color?: SpinnerColor;
} & Omit<FlowbiteSpinnerProps, "label">;
