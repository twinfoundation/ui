// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Drawer as FlowbiteDrawer } from "flowbite-react";
import { useCallback, useEffect, useState, memo, type JSX } from "react";
import type { DrawerProps } from "./drawerProps";
import { Button } from "../button/button";
import { List } from "../icons/list";

/**
 * Drawer component.
 *
 * A sliding panel that appears from the edge of the screen.
 * Can be triggered by a button or controlled programmatically.
 */
export const Drawer = memo(
	({
		title,
		items,
		buttonText = "Show drawer",
		buttonColor = "primary",
		showButton = true,
		defaultOpen = false,
		buttonProps,
		buttonIcon,
		onOpenChange,
		...rest
	}: DrawerProps): JSX.Element => {
		const [isOpen, setIsOpen] = useState(defaultOpen);

		const handleOpenChange = useCallback(
			(open: boolean): void => {
				setIsOpen(open);
				onOpenChange?.(open);
			},
			[onOpenChange]
		);

		const handleOpen = useCallback((): void => {
			handleOpenChange(true);
		}, [handleOpenChange]);

		const handleClose = useCallback((): void => {
			handleOpenChange(false);
		}, [handleOpenChange]);

		// Sync with controlled state if provided externally
		useEffect(() => {
			if (rest.open !== undefined && rest.open !== isOpen) {
				setIsOpen(rest.open);
			}
		}, [rest.open, isOpen]);

		return (
			<>
				{showButton && (
					<div className="block text-center">
						<Button
							color={buttonColor}
							buttonText={buttonText}
							onClick={handleOpen}
							leftIcon={buttonIcon}
							{...buttonProps}
						/>
					</div>
				)}
				<FlowbiteDrawer
					{...rest}
					open={isOpen}
					onClose={handleClose}
					aria-labelledby="drawer-title"
				>
					{/* @ts-expect-error - Temporary type error suppression */}
					<FlowbiteDrawer.Header title={title} closeIcon={List} id="drawer-title" />
					{items && items?.length > 0 ? (
						items.map((item, index) => (
							<FlowbiteDrawer.Items key={`drawer-item-${index}`}>{item}</FlowbiteDrawer.Items>
						))
					) : (
						<></>
					)}
				</FlowbiteDrawer>
			</>
		);
	}
);

Drawer.displayName = "Drawer";
