// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Radio as FlowbiteRadio } from "flowbite-react";
import React, { type ReactNode } from "react";
import { RadioPropTypes, type RadioProps } from "./radioProps";

/**
 * Radio component.
 */
export class Radio extends React.Component<RadioProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = RadioPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: RadioProps;

	/**
	 * Create a new instance of Radio.
	 * @param props The props of the component.
	 */
	constructor(props: RadioProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { ...rest } = this._props;
		return <FlowbiteRadio {...rest} />;
	}
}
