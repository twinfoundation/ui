// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Breadcrumb as FlowbiteBreadcrumb } from "flowbite-react";
import React, { type ReactNode } from "react";
import { BreadcrumbPropTypes, type BreadcrumbProps } from "./breadcrumbProps";

/**
 * Breadcrumb component.
 */
export class Breadcrumb extends React.Component<BreadcrumbProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = BreadcrumbPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: BreadcrumbProps;

	/**
	 * Create a new instance of Breadcrumb.
	 * @param props The props of the component.
	 */
	constructor(props: BreadcrumbProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { content, className } = this._props;

		return (
			<FlowbiteBreadcrumb aria-label="Default breadcrumb example" className={className ?? ""}>
				{content && content?.length > 0 ? (
					content.map(item => (
						<FlowbiteBreadcrumb.Item href={item?.href ?? "#"} icon={item?.icon ?? undefined}>
							{item?.label}
						</FlowbiteBreadcrumb.Item>
					))
				) : (
					<></>
				)}
			</FlowbiteBreadcrumb>
		);
	}
}
