// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import {
	Navbar as FlowbiteNavbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle
} from "flowbite-react";
import { memo, type JSX } from "react";
import type { NavbarProps } from "./navbarProps";

/**
 * A responsive navigation bar component that adapts to different screen sizes.
 * Provides a flexible container for branding, navigation links, and other content.
 * @example
 * ```tsx
 * <Navbar fluid rounded>
 *   <Navbar.Brand href="https://example.com">
 *     <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
 *     <span className="self-center whitespace-nowrap text-xl font-semibold">Brand</span>
 *   </Navbar.Brand>
 *   <Navbar.Toggle />
 *   <Navbar.Collapse>
 *     <Navbar.Link href="#" active>Home</Navbar.Link>
 *     <Navbar.Link href="#">About</Navbar.Link>
 *     <Navbar.Link href="#">Services</Navbar.Link>
 *   </Navbar.Collapse>
 * </Navbar>
 * ```
 */
const NavbarComponent = memo(
	({ children, fluid = false, rounded = false, ...props }: NavbarProps): JSX.Element => (
		<FlowbiteNavbar fluid={fluid} rounded={rounded} {...props}>
			{children}
		</FlowbiteNavbar>
	)
);

NavbarComponent.displayName = "Navbar";

export const Navbar = Object.assign(NavbarComponent, {
	Brand: NavbarBrand,
	Collapse: NavbarCollapse,
	Link: NavbarLink,
	Toggle: NavbarToggle
});
