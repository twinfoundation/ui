// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Pagination as FlowbitePagination, type CustomFlowbiteTheme } from "flowbite-react";
import React, { type ReactNode } from "react";
import { PaginationPropTypes, type PaginationProps } from "./paginationProps";

const customTheme: CustomFlowbiteTheme["pagination"] = {
	pages: {
		showIcon: "inline-flex",
		selector: {
			base: "w-12 py-2 leading-tight border border-gray-300 dark:border-300 bg-white dark:bg-surface-main-dark text-secondary dark:text-secondary-dark enabled:hover:bg-neutral-50 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
			active:
				"!border !border-gray-300 !dark:border-300 bg-brand-secondary-tints-50 dark:bg-brand-secondary-tints-50 text-brand-secondary dark:text-brand-secondary hover:bg-brand-secondary-tints-50 hover:text-brand-secondary font-medium enabled:dark:border-300 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white"
		},
		next: {
			base: "px-3 py-2 leading-tight rounded-r-lg border border-gray-300 dark:border-300 bg-white dark:bg-surface-main-dark text-secondary dark:text-secondary-dark enabled:hover:bg-neutral-50 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
			icon: "h-5 w-5"
		},
		previous: {
			base: "px-3 py-2 leading-tight ml-0 rounded-l-lg border border-gray-300 dark:border-300 bg-white dark:bg-surface-main-dark text-secondary dark:text-secondary-dark enabled:hover:bg-neutral-50 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white disabled:dark:border-300",
			icon: "h-5 w-5"
		}
	}
};

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
		return <FlowbitePagination theme={customTheme} {...rest} />;
	}
}
