// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Drawer as FlowbiteDrawer, Button as FlowbiteButton } from "flowbite-react";
import { Bars } from "flowbite-react-icons/outline";
import { useState, memo, type JSX } from "react";
import type { DrawerProps } from "./drawerProps";

/**
 * Drawer component.
 */
export const Drawer = memo(({ title, items, ...rest }: DrawerProps): JSX.Element => {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = (): void => {
		setIsOpen(false);
	};

	return (
		<>
			<div className="block text-center">
				<FlowbiteButton
					className="text-invert bg-surface-button hover:enabled:bg-surface-button-hover dark:bg-surface-button dark:hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed m-auto border-2 border-transparent focus:ring"
					onClick={() => setIsOpen(true)}
				>
					Show drawer
				</FlowbiteButton>
			</div>
			<FlowbiteDrawer
				{...rest}
				open={isOpen}
				onClose={handleClose}
				onClick={() => setIsOpen(!isOpen)}
			>
				<FlowbiteDrawer.Header title={title} closeIcon={Bars} />
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
});

Drawer.displayName = "Drawer";
