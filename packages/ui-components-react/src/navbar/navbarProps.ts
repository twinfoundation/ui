// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Navbar as FlowbiteNavbar } from "flowbite-react";
import type { ComponentProps, PropsWithChildren } from "react";

/**
 * Props for the Navbar component.
 */
export interface NavbarProps extends PropsWithChildren<ComponentProps<typeof FlowbiteNavbar>> {
	/**
	 * Make the navbar full width.
	 */
	fluid?: boolean;

	/**
	 * Apply rounded corners to the navbar.
	 */
	rounded?: boolean;
}
