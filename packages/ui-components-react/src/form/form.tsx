// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React, { type ReactNode } from "react";
import { FormPropTypes, type FormProps } from "./formProps";

/**
 * Form component.
 */
export class Form extends React.Component<FormProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = FormPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: FormProps;

	/**
	 * Create a new instance of Form.
	 * @param props The props of the component.
	 */
	constructor(props: FormProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { className, content } = this._props;
		return <form className={className ?? ""}>{content}</form>;
	}
}
