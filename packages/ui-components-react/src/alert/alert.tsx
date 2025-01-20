// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Alert as FlowbiteAlert } from "flowbite-react";
import React, { type ReactNode } from "react";
import { AlertPropTypes, type AlertProps } from "./alertProps";

const colorClasses = {
	info: "border-current bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800",
	error: "border-current bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
	warning: "border-current bg-system-warning-tints-50 dark:bg-system-warning-tints-50 text-warning",
	success:
		"border-current bg-system-success-tints-100 text-system-success-tints-700 dark:bg-system-success-tints-200 dark:text-system-success-tints-800",
	gray: "border-current bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
};

/**
 * Alert component.
 */
export class Alert extends React.Component<AlertProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = AlertPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: AlertProps;

	/**
	 * Create a new instance of Alert.
	 * @param props The props of the component.
	 */
	constructor(props: AlertProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { children, ...rest } = this._props;
		return (
			<FlowbiteAlert
				{...rest}
				className={`${colorClasses[this._props.color ?? "info"]} ${this._props.className ?? ""}`}
				color={this._props.color ?? "info"}
				theme={{ closeButton: { color: colorClasses } }}
			>
				<span>{children}</span>
			</FlowbiteAlert>
		);
	}
}
