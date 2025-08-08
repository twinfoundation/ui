// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ToastProps as FlowbiteToastProps } from "flowbite-react";
import type { ReactNode } from "react";

/**
 * Props for the Toast component.
 */
export interface ToastProps extends Omit<FlowbiteToastProps, "color" | "label" | "duration"> {
	/**
	 * The content to be displayed within the toast.
	 */
	children?: ReactNode;

	/**
	 * Additional CSS class names
	 */
	className?: string;

	/**
	 * Duration in milliseconds before auto-dismissing the toast. If not provided, toast will not auto-dismiss
	 */
	duration?: number;

	/**
	 * Callback function when toast is dismissed either manually or automatically
	 */
	onDismiss?: () => void;

	/**
	 * ARIA role for the toast. Defaults to "alert"
	 */
	role?: "alert" | "status";

	/**
	 * Label for the close button. Defaults to "Close notification"
	 */
	closeLabel?: string;
}
