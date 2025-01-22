// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Textarea as FlowbiteTextarea } from "flowbite-react";
import React, { type ReactNode } from "react";
import { TextareaPropTypes, type TextareaProps } from "./textareaProps";

/**
 * Textarea component.
 */
export class Textarea extends React.Component<TextareaProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = TextareaPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: TextareaProps;

	/**
	 * Create a new instance of Textarea.
	 * @param props The props of the component.
	 */
	constructor(props: TextareaProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { ...rest } = this._props;
		return <FlowbiteTextarea {...rest} />;
	}
}
