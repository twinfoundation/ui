// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Alert as FlowbiteAlert } from "flowbite-react";
import { Eye } from "flowbite-react-icons/outline";
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
		const { children, additionalContent, dismissable, ...rest } = this._props;
		return (
			<FlowbiteAlert
				{...rest}
				additionalContent={additionalContent && this.additionalContent()}
				onDismiss={dismissable ? this.handleDismiss : undefined}
				className={`${colorClasses[this._props.color ?? "info"]} ${this._props.className ?? ""}`}
				color="info"
			>
				<span>{children}</span>
			</FlowbiteAlert>
		);
	}

	/**
	 * Render additional content for the alert.
	 * @returns The additional content to render.
	 */
	private additionalContent(): ReactNode {
		return (
			<>
				<div className="mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800">
					More info about this info alert goes here. This example text is going to run a bit longer
					so that you can see how spacing within an alert works with this kind of content.
				</div>
				<div className="flex">
					<button
						type="button"
						className="mr-2 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900"
					>
						<Eye className="-ml-0.5 mr-2 h-4 w-4" />
						View more
					</button>
					<button
						type="button"
						className="rounded-lg border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 dark:border-cyan-800 dark:text-cyan-800 dark:hover:text-white"
					>
						Dismiss
					</button>
				</div>
			</>
		);
	}

	/**
	 * Handle the dismiss action.
	 */
	// eslint-disable-next-line no-restricted-syntax
	private readonly handleDismiss = (): void => {
		// Custom dismiss logic here
	};
}
