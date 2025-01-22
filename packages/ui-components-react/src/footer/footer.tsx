// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Footer as FlowbiteFooter } from "flowbite-react";
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
		const { body } = this._props;
		return <FlowbiteFooter container>{body}</FlowbiteFooter>;
	}
}
