// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Banner as FlowbiteBanner } from "flowbite-react";
import React, { type ReactNode } from "react";
import { HiX } from "react-icons/hi";
import { BannerPropTypes, type BannerProps } from "./bannerProps";

/**
 * Banner component.
 */
export class Banner extends React.Component<BannerProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = BannerPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: BannerProps;

	/**
	 * Create a new instance of Banner.
	 * @param props The props of the component.
	 */
	constructor(props: BannerProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { children, bottom } = this._props;

		return (
			<FlowbiteBanner>
				<div
					className={`flex w-full justify-between border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 ${bottom ? "border-t" : "border-b"}`}
				>
					<div className="mx-auto flex items-center">
						<p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
							<span className="[&_p]:inline">
								New brand identity has been launched for the&nbsp;
								<a
									href="https://flowbite.com"
									className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
								>
									{children}
								</a>
							</span>
						</p>
					</div>
					<FlowbiteBanner.CollapseButton
						color="gray"
						className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
					>
						<HiX className="h-4 w-4" />
					</FlowbiteBanner.CollapseButton>
				</div>
			</FlowbiteBanner>
		);
	}
}
