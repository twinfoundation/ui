// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Toast as FlowbiteToast } from "flowbite-react";
import React, { useEffect, useState } from "react";
import type { ToastProps } from "./toastProps";

/**
 * Toast component for displaying temporary notifications.
 * @param props The component props.
 * @param props.children The content to be displayed within the toast.
 * @param props.duration Optional duration in milliseconds before auto-dismissing the toast.
 * @param props.onDismiss Optional callback function when toast is dismissed.
 * @param props.role Optional ARIA role for the toast, defaults to "alert".
 * @returns The rendered Toast component.
 */
export const Toast: React.FC<ToastProps> = ({
	children,
	duration,
	onDismiss,
	role = "alert",
	...rest
}) => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		if (duration && show) {
			const timer = setTimeout(() => {
				setShow(false);
				onDismiss?.();
			}, duration);
			return () => clearTimeout(timer);
		}
	}, [duration, onDismiss, show]);

	const handleDismiss = (): void => {
		setShow(false);
		onDismiss?.();
	};

	if (!show) {
		return null;
	}

	return (
		<div>
			{show && (
				<FlowbiteToast {...rest} role={role} aria-live="polite">
					{children}
					<FlowbiteToast.Toggle onClick={handleDismiss} aria-label="Close notification" />
				</FlowbiteToast>
			)}
		</div>
	);
};
