// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Navbar as FlowbiteNavbar } from "flowbite-react";
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
		const { brand, content, links, fluid, rounded } = this._props;
		return (
			<FlowbiteNavbar fluid={fluid ?? undefined} rounded={rounded ?? undefined}>
				<FlowbiteNavbar.Brand href={brand.href ?? "#"}>{brand.content}</FlowbiteNavbar.Brand>
				{content}
				<FlowbiteNavbar.Collapse>
					{links && links.length > 0 ? (
						links.map(link => {
							if (link) {
								return (
									<FlowbiteNavbar.Link href={link.href ?? "#"} active={link.active ?? false}>
										{link.label}
									</FlowbiteNavbar.Link>
								);
							}
							return null;
						})
					) : (
						<></>
					)}
				</FlowbiteNavbar.Collapse>
			</FlowbiteNavbar>
		);
	}
}
