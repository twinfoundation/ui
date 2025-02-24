// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Navbar as FlowbiteNavbar } from "flowbite-react";
import type { JSX, NamedExoticComponent } from "react";
import { memo } from "react";
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
const NavbarBase = ({
	children,
	fluid = false,
	rounded = false,
	...props
}: NavbarProps): JSX.Element => (
	<FlowbiteNavbar fluid={fluid} rounded={rounded} {...props}>
		{children}
	</FlowbiteNavbar>
);

NavbarBase.displayName = "Navbar";

const MemoizedNavbar: NamedExoticComponent<NavbarProps> = memo(NavbarBase);

/**
 * Navbar component with subcomponents for building navigation interfaces.
 */
export const Navbar = Object.assign(MemoizedNavbar, {
	/**
	 * Brand component for displaying logo and brand name
	 * @see {@link FlowbiteNavbar.Brand}
	 */
	Brand: FlowbiteNavbar.Brand,
	/**
	 * Collapse component for responsive navigation menu
	 * @see {@link FlowbiteNavbar.Collapse}
	 */
	Collapse: FlowbiteNavbar.Collapse,
	/**
	 * Link component for navigation items
	 * @see {@link FlowbiteNavbar.Link}
	 */
	Link: FlowbiteNavbar.Link,
	/**
	 * Toggle component for mobile menu
	 * @see {@link FlowbiteNavbar.Toggle}
	 */
	Toggle: FlowbiteNavbar.Toggle
});
