// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Footer as FlowbiteFooter } from "flowbite-react";
import { Home, MailBox, Music, File } from "flowbite-react-icons/outline";
import React, { type ReactNode } from "react";
import { FooterPropTypes, type FooterProps } from "./footerProps";

/**
 * Footer component.
 */
export class Footer extends React.Component<FooterProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = FooterPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: FooterProps;

	/**
	 * Create a new instance of Footer.
	 * @param props The props of the component.
	 */
	constructor(props: FooterProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		return (
			<FlowbiteFooter container>
				<div className="w-full">
					<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
					<div>
						<FlowbiteFooter.Brand
						href="https://flowbite.com"
						src="https://flowbite.com/docs/images/logo.svg"
						alt="Flowbite Logo"
						name="Flowbite"
						/>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
						<div>
						<FlowbiteFooter.Title title="about" />
						<FlowbiteFooter.LinkGroup col>
							<FlowbiteFooter.Link href="#">Flowbite</FlowbiteFooter.Link>
							<FlowbiteFooter.Link href="#">Tailwind CSS</FlowbiteFooter.Link>
						</FlowbiteFooter.LinkGroup>
						</div>
						<div>
						<FlowbiteFooter.Title title="Follow us" />
						<FlowbiteFooter.LinkGroup col>
							<FlowbiteFooter.Link href="#">Github</FlowbiteFooter.Link>
							<FlowbiteFooter.Link href="#">Discord</FlowbiteFooter.Link>
						</FlowbiteFooter.LinkGroup>
						</div>
						<div>
						<FlowbiteFooter.Title title="Legal" />
						<FlowbiteFooter.LinkGroup col>
							<FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
							<FlowbiteFooter.Link href="#">Terms &amp; Conditions</FlowbiteFooter.Link>
						</FlowbiteFooter.LinkGroup>
						</div>
					</div>
					</div>
					<FlowbiteFooter.Divider />
					<div className="w-full sm:flex sm:items-center sm:justify-between">
					<FlowbiteFooter.Copyright href="#" by="Flowbite™" year={2025} />
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<FlowbiteFooter.Icon href="#" icon={Home} />
						<FlowbiteFooter.Icon href="#" icon={MailBox} />
						<FlowbiteFooter.Icon href="#" icon={Music} />
						<FlowbiteFooter.Icon href="#" icon={File} />
					</div>
					</div>
				</div>
			</FlowbiteFooter>
		);
	}
}
