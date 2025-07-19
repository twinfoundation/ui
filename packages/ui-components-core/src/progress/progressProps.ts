// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ProgressProps as FlowbiteProgressProps } from "flowbite-react";
import type { ProgressColor } from "./progressColors";
import type { ProgressPosition } from "./progressPositions";
import type { ProgressSize } from "./progressSizes";

/**
 * Progress props.
 */
export interface ProgressProps extends Omit<FlowbiteProgressProps, "label"> {
	/**
	 * Progress size.
	 */
	size?: ProgressSize;

	/**
	 * Progress label position.
	 */
	progressLabelPosition?: ProgressPosition;
	/**
	 * Text label position.
	 */
	textLabelPosition?: ProgressPosition;
	/**
	 * Show progress label.
	 */
	labelProgress?: boolean;
	/**
	 * Show text label.
	 */
	labelText?: boolean;
	/**
	 * Text label.
	 */
	textLabel?: string;
	/**
	 * Progress value.
	 */
	progress: number;
	/**
	 * Progress color.
	 */
	color?: ProgressColor;
}
