// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Checkbox as FlowbiteCheckbox } from "flowbite-react";
import React, { type ReactNode } from "react";
import { CheckboxPropTypes, type CheckboxProps } from "./checkboxProps";

/**
 * Checkbox component.
 */
export class Checkbox extends React.Component<CheckboxProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = CheckboxPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: CheckboxProps;

	/**
	 * Create a new instance of Checkbox.
	 * @param props The props of the component.
	 */
	constructor(props: CheckboxProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { ...rest } = this._props;
		return <FlowbiteCheckbox {...rest} />;
	}
}
