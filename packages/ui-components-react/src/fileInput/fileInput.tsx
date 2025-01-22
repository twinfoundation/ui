// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { FileInput as FlowbiteFileInput } from "flowbite-react";
import React, { type ReactNode } from "react";
import { FileInputPropTypes, type FileInputProps } from "./fileInputProps";

/**
 * FileInput component.
 */
export class FileInput extends React.Component<FileInputProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = FileInputPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: FileInputProps;

	/**
	 * Create a new instance of FileInput.
	 * @param props The props of the component.
	 */
	constructor(props: FileInputProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { ...rest } = this._props;
		return <FlowbiteFileInput {...rest} />;
	}
}
