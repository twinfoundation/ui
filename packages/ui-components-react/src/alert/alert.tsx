// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Alert as FlowbiteAlert } from "flowbite-react";
import React, { type ReactNode } from "react";
import { HiEye } from "react-icons/hi";
import { AlertPropTypes, type AlertProps } from "./alertProps";

const colorClasses = {
	primary: "border-current bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800",
	error: "border-current bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
	warning: "alert-warn --rounded-2xl border-current",
	success: "border-current bg-system-success-tints-100 text-system-success-tints-700 dark:bg-system-success-tints-200 dark:text-system-success-tints-800",
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
				additionalContent={this.additionalContent(
					this._props.content,
					this._props.action ?? undefined
				)}
				icon={typeof rest.icon === "function" ? rest.icon : undefined}
				onDismiss={this.handleDismiss}
				rounded
				className={`${colorClasses[this._props.color ?? "primary"]} ${this._props.className ?? ""}`}
				color="primary"
				withBorderAccent={this._props.borderAccent ?? false}
			>
				{this._props.content && <span className="block font-bold">{children}</span>}
				{!this._props.content && <span>{children}</span>}
			</FlowbiteAlert>
		);
	}

	/**
	 * Render additional content for the alert.
	 * @param content The content to display.
	 * @param action The action to perform.
	 * @returns The additional content to render.
	 */
	public additionalContent(content: ReactNode, action?: string): ReactNode {
		if (!content && !action) {
			return undefined;
		}
		return (
			<>
				<div className="mb-2 mt-2 text-sm">{content}</div>
				{action && (
					<div className="flex">
						<button type="button" className="mr-2 rounded-lg bg-current font-medium">
							<a
								href={action}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center p-2 text-sm text-white"
							>
								<HiEye className="-ml-0.5 mr-2 h-4 w-4" />
								View more
							</a>
						</button>
					</div>
				)}
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
