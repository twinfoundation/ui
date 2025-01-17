// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Toast as FlowbiteToast } from "flowbite-react";
import { Fire } from "flowbite-react-icons/outline";
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
		return (
			<FlowbiteToast>
				<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
					<Fire className="h-5 w-5" />
				</div>
				<div className="ml-3 text-sm font-normal">Set yourself free.</div>
				<FlowbiteToast.Toggle />
			</FlowbiteToast>
		);
	}
}
