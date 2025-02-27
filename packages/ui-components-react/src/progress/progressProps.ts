// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ProgressProps as FlowbiteProgressProps } from "flowbite-react";
import type { ProgressColors } from "./progressColors";
import type { ProgressPositions } from "./progressPositions";
import type { ProgressSizes } from "./progressSizes";

/**
 * Progress props.
 */
export interface ProgressProps extends Omit<FlowbiteProgressProps, "label"> {
	/**
	 * Progress size.
	 */
	size?: ProgressSizes;

	/**
	 * Progress label position.
	 */
	progressLabelPosition?: ProgressPositions;
	/**
	 * Text label position.
	 */
	textLabelPosition?: ProgressPositions;
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
	 * Progress color.
	 */
	color?: ProgressColors;
	/**
	 * Progress value.
	 */
	progress: number;
}
