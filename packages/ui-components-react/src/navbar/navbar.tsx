// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import {
	Navbar as FlowbiteNavbar,
	Dropdown as FlowbiteDropdown,
	Avatar as FlowbiteAvatar
} from "flowbite-react";
import React, { type ReactNode } from "react";
import { NavbarPropTypes, type NavbarProps } from "./navbarProps";

/**
 * Navbar component.
 */
export class Navbar extends React.Component<NavbarProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = NavbarPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: NavbarProps;

	/**
	 * Create a new instance of Navbar.
	 * @param props The props of the component.
	 */
	constructor(props: NavbarProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		return (
			<FlowbiteNavbar fluid rounded>
				<FlowbiteNavbar.Brand href="https://flowbite-react.com">
					<img
						src="https://flowbite-react.com/favicon.svg"
						className="mr-3 h-6 sm:h-9"
						alt="Flowbite React Logo"
					/>
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						Flowbite React
					</span>
				</FlowbiteNavbar.Brand>
				<div className="flex md:order-2">
					<FlowbiteDropdown
						arrowIcon={false}
						inline
						label={
							<FlowbiteAvatar
								alt="User settings"
								img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								rounded
							/>
						}
					>
						<FlowbiteDropdown.Header>
							<span className="block text-sm">Bonnie Green</span>
							<span className="block truncate text-sm font-medium">name@flowbite.com</span>
						</FlowbiteDropdown.Header>
						<FlowbiteDropdown.Item>Dashboard</FlowbiteDropdown.Item>
						<FlowbiteDropdown.Item>Settings</FlowbiteDropdown.Item>
						<FlowbiteDropdown.Item>Earnings</FlowbiteDropdown.Item>
						<FlowbiteDropdown.Divider />
						<FlowbiteDropdown.Item>Sign out</FlowbiteDropdown.Item>
					</FlowbiteDropdown>
					<FlowbiteNavbar.Toggle />
				</div>
				<FlowbiteNavbar.Collapse>
					<FlowbiteNavbar.Link href="#" active>
						Home
					</FlowbiteNavbar.Link>
					<FlowbiteNavbar.Link href="#">About</FlowbiteNavbar.Link>
					<FlowbiteNavbar.Link href="#">Services</FlowbiteNavbar.Link>
					<FlowbiteNavbar.Link href="#">Pricing</FlowbiteNavbar.Link>
					<FlowbiteNavbar.Link href="#">Contact</FlowbiteNavbar.Link>
				</FlowbiteNavbar.Collapse>
			</FlowbiteNavbar>
		);
	}
}
