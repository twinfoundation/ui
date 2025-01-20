// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Toast as FlowbiteToast } from "flowbite-react";
import React, { type ReactNode } from "react";
import { ToastPropTypes, type ToastProps } from "./toastProps";

/**
 * Toast component.
 */
export class Toast extends React.Component<ToastProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = ToastPropTypes;

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { children, ...rest } = this.props;
		return (
			<FlowbiteToast {...rest}>
				{children}
				<FlowbiteToast.Toggle />
			</FlowbiteToast>
		);
	}
}
