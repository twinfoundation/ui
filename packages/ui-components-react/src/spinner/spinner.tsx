// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Spinner as FlowbiteSpinner } from "flowbite-react";
import React, { type ReactNode } from "react";
import { SpinnerPropTypes, type SpinnerProps } from "./spinnerProps";

const theme = {
	color: {
		primary: "fill-surface-brand-secondary-1",
		success: "fill-success",
		warning: "fill-warning",
		error: "fill-error",
		information: "fill-information"
	}
};

/**
 * Spinner component.
 */
export class Spinner extends React.Component<SpinnerProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = SpinnerPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: SpinnerProps;

	/**
	 * Create a new instance of Spinner.
	 * @param props The props of the component.
	 */
	constructor(props: SpinnerProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { color = "primary", ...rest } = this._props;
		return <FlowbiteSpinner {...rest} theme={theme} color={color} aria-label="Loading spinner" />;
	}
}
