// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import { Drawer as FlowbiteDrawer } from "flowbite-react";
import type { DrawerProps } from "./drawerProps";

/**
 * Drawer component.
 *
 * A sliding panel that appears from the edge of the screen.
 * Can be triggered by a button or controlled programmatically.
 */
export const Drawer = React.memo(
	({
		title,
		items,
		buttonText = "Open Drawer",
		buttonColor = "primary",
		showButton = true,
		defaultOpen = false,
		buttonProps = {},
		buttonIcon,
		onOpenChange,
		position = "right",
		onClose: _onClose, // Destructure to avoid duplicate
		...rest
	}: DrawerProps): React.JSX.Element => {
		const [isOpen, setIsOpen] = React.useState(defaultOpen);

		const handleOpenChange = React.useCallback(
			(open: boolean): void => {
				setIsOpen(open);
				onOpenChange?.(open);
			},
			[onOpenChange]
		);

		const handleOpen = React.useCallback((): void => {
			handleOpenChange(true);
		}, [handleOpenChange]);

		const handleClose = React.useCallback((): void => {
			handleOpenChange(false);
		}, [handleOpenChange]);

		// Sync with controlled state if provided externally
		React.useEffect(() => {
			if (rest.open !== undefined && rest.open !== isOpen) {
				setIsOpen(rest.open);
			}
		}, [rest.open, isOpen]);

		return (
			<>
				{showButton && (
					<div className="block text-center">
						<button
							className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${
								buttonColor === "primary"
									? "text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									: buttonColor === "secondary"
									? "text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									: buttonColor === "success"
									? "text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
									: buttonColor === "danger"
									? "text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
									: buttonColor === "warning"
									? "text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
									: buttonColor === "info"
									? "text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
									: "text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
							}`}
							onClick={handleOpen}
							{...buttonProps}
						>
							{buttonIcon && React.createElement(buttonIcon, { className: "mr-2" })}
							{buttonText}
						</button>
					</div>
				)}

				<FlowbiteDrawer
					open={isOpen}
					onClose={handleClose}
					position={position}
					{...rest}
				>
					{title && <div className="text-xl font-semibold mb-4">{title}</div>}
					{items && items.length > 0 && (
						<div className="space-y-2">
							{items.map((item, index) => (
								<div key={`drawer-item-${index}`}>{item}</div>
							))}
						</div>
					)}
				</FlowbiteDrawer>
			</>
		);
	}
);

Drawer.displayName = "Drawer";
