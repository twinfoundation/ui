// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Alert as FlowbiteAlert } from "flowbite-react";
import { forwardRef } from "react";
import type { AlertProps, AlertColor } from "./alertProps";

const colorClasses: { [K in AlertColor]: string } = {
	info: "border-current bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800",
	error: "border-current bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
	warning: "border-current bg-system-warning-tints-50 dark:bg-system-warning-tints-50 text-warning",
	success:
		"border-current bg-system-success-tints-100 text-system-success-tints-700 dark:bg-system-success-tints-200 dark:text-system-success-tints-800",
	gray: "border-current bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
} as const;

/**
 * Alert component for displaying important messages or notifications.
 * Extends Flowbite's Alert component with custom styling and theme support.
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
	({ children, color = "info", className, ...rest }, ref) => (
		<FlowbiteAlert
			ref={ref}
			{...rest}
			className={`${colorClasses[color]} ${className ?? ""}`}
			color={color}
			theme={{ closeButton: { color: colorClasses } }}
		>
			<span>{children}</span>
		</FlowbiteAlert>
	)
);
