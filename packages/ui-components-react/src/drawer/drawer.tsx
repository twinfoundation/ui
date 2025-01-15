// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Drawer as FlowbiteDrawer, Button as FlowbiteButton } from "flowbite-react";
import { Bars } from "flowbite-react-icons/outline";
import React, { useState } from "react";
import { DrawerPropTypes, type DrawerProps } from "./drawerProps";

/**
 * Drawer component.
 */
export const Drawer: React.FC<DrawerProps> = (props: DrawerProps) => {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = (): void => {
		setIsOpen(false);
	};

	const { title, items, ...rest } = props;

	return (
		<div className="block align-center">
			<div className="block text-center">
				<FlowbiteButton className="m-auto focus:ring text-invert border-2 border-transparent bg-surface-button hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed" onClick={() => setIsOpen(true)}>
					Show drawer
				</FlowbiteButton>
			</div>
			<FlowbiteDrawer
				{...rest}
				open={isOpen}
				onClose={handleClose}
				onClick={() => setIsOpen(!isOpen)}
			>
				<FlowbiteDrawer.Header title={title} closeIcon={Bars}/>
				{items && items?.length > 0 ? (
					items.map(item => (
						<FlowbiteDrawer.Items
							dangerouslySetInnerHTML={{ __html: item ?? "" }}
						></FlowbiteDrawer.Items>
					))
				) : (
					<></>
				)}
			</FlowbiteDrawer>
		</div>
	);
};

Drawer.propTypes = DrawerPropTypes;
