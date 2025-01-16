// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Pagination as FlowbitePagination } from "flowbite-react";
import React, { type ReactNode } from "react";
import { PaginationPropTypes, type PaginationProps } from "./paginationProps";

/**
 * Pagination component.
 */
export class Pagination extends React.Component<PaginationProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = PaginationPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: PaginationProps;

	/**
	 * Create a new instance of Pagination.
	 * @param props The props of the component.
	 */
	constructor(props: PaginationProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { ...rest } = this._props;
		return (
			<FlowbitePagination {...rest} currentPage={2} totalPages={100} onPageChange={() => {}} />
		);
	}
}
