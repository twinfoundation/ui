// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { AlertProps as FlowbiteAlertProps } from "flowbite-react";
import type { ReactNode } from "react";
import type { AlertColors } from "./alertColors";

/**
 * Alert colors.
 */
export type AlertColor = Lowercase<keyof typeof AlertColors>;

/**
 * Props for the Alert component.
 * Extends Flowbite's Alert props with custom color options.
 */
export interface AlertProps extends Omit<FlowbiteAlertProps, "color" | "label"> {
	/**
	 * The content to display inside the alert
	 */
	children?: ReactNode;

	/**
	 * The color variant of the alert
	 * @default "info"
	 */
	color?: AlertColor;

	/**
	 * Additional CSS classes to apply
	 */
	className?: string;
}
