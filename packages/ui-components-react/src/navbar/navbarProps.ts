// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Navbar as FlowbiteNavbar } from "flowbite-react";
import type { ComponentProps, ReactNode } from "react";

/**
 * Props for the Navbar component.
 */
export interface NavbarProps extends ComponentProps<typeof FlowbiteNavbar> {
    /**
     * The content to be rendered within the navbar.
     */
    children?: ReactNode;

    /**
     * Make the navbar full width.
     */
    fluid?: boolean;

    /**
     * Apply rounded corners to the navbar.
     */
    rounded?: boolean;
}
