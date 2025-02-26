// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DrawerProps as FlowbiteDrawerProps } from "flowbite-react";
import type { ReactNode } from "react";
import type { DrawerPositions } from "./drawerPositions";

/**
 * Drawer props.
 */
export interface DrawerProps extends Omit<FlowbiteDrawerProps, "color" | "label"> {
	/**
	 * The title of the drawer.
	 */
	title: string;

	/**
	 * Whether the body should scroll when the drawer is open.
	 */
	bodyScrolling?: boolean;

	/**
	 * Whether to show a backdrop when the drawer is open.
	 */
	backdrop?: boolean;

	/**
	 * Whether the drawer should be positioned at the edge of the screen.
	 */
	edge?: boolean;

	/**
	 * The position of the drawer.
	 */
	position?: DrawerPositions;

	/**
	 * The items to display in the drawer.
	 */
	items?: ReactNode[];
}
