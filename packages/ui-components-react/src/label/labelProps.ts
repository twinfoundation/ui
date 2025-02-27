// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { LabelProps as FlowbiteLabelProps } from "flowbite-react";
import type { PropsWithChildren } from "react";

/**
 * Label props.
 */
export interface LabelProps extends PropsWithChildren<Omit<FlowbiteLabelProps, "color" | "label">> {
	/**
	 * The HTML `for` attribute.
	 */
	htmlFor?: string;
	/**
	 * The class name.
	 */
	className?: string;
	/**
	 * The value of the label.
	 */
	value: string;
}
