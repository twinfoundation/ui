// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { AlertProps as FlowbiteAlertProps } from "flowbite-react";
import type { PropsWithChildren } from "react";
import type { AlertColors } from "./alertColors";

/**
 * Alert colors.
 */
export type AlertColor = Lowercase<keyof typeof AlertColors>;

/**
 * Props for the Alert component.
 * Extends Flowbite's Alert props with custom color options.
 */
export interface AlertProps extends PropsWithChildren<Omit<FlowbiteAlertProps, "color" | "label">> {
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
