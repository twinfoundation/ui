// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Progress as FlowbiteProgress, type CustomFlowbiteTheme } from "flowbite-react";
import React, { type ReactNode } from "react";
import { ProgressPropTypes, type ProgressProps } from "./progressProps";

const customTheme: CustomFlowbiteTheme["progress"] = {
	bar: "flex items-center justify-center space-x-2 rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100",
	color: {
		orange: "bg-brand-primary dark:bg-brand-primary",
		primary: "bg-surface-brand-secondary-1 dark:bg-surface-brand-secondary-1",
		green: "bg-success dark:bg-success",
		yellow: "bg-warning dark:bg-warning",
		pink: "bg-error dark:bg-error",
		purple: "bg-purple-600 dark:bg-purple-600",
		indigo: "bg-indigo-600 dark:bg-indigo-600",
		dark: "bg-primary dark:bg-primary",
		blue: "bg-information dark:bg-information"
	}
};

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
		return <FlowbiteProgress theme={customTheme} {...rest} />;
	}
}
