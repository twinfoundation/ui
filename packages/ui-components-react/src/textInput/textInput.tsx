// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { TextInput as FlowbiteTextInput } from "flowbite-react";
import React, { type ReactNode } from "react";
import { TextInputPropTypes, type TextInputProps } from "./textInputProps";

/**
 * TextInput component.
 */
export class TextInput extends React.Component<TextInputProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = TextInputPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: TextInputProps;

	/**
	 * Create a new instance of TextInput.
	 * @param props The props of the component.
	 */
	constructor(props: TextInputProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { type, ...rest } = this._props;

		return <FlowbiteTextInput type={type ?? "text"} {...rest} />;
	}
}
