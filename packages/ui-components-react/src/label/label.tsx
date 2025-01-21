// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Label as FlowbiteLabel } from "flowbite-react";
import React, { type ReactNode } from "react";
import { LabelPropTypes, type LabelProps } from "./labelProps";

/**
 * Label component.
 */
export class Label extends React.Component<LabelProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = LabelPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: LabelProps;

	/**
	 * Create a new instance of Label.
	 * @param props The props of the component.
	 */
	constructor(props: LabelProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { ...rest } = this._props;
		return <FlowbiteLabel {...rest} />;
	}
}
