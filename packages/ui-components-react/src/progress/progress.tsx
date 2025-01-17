// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Progress as FlowbiteProgress } from "flowbite-react";
import React, { type ReactNode } from "react";
import { ProgressPropTypes, type ProgressProps } from "./progressProps";

/**
 * Progress component.
 */
export class Progress extends React.Component<ProgressProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = ProgressPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: ProgressProps;

	/**
	 * Create a new instance of Progress.
	 * @param props The props of the component.
	 */
	constructor(props: ProgressProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { ...rest } = this._props;
		return <FlowbiteProgress {...rest} />;
	}
}
