// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ComponentProps } from "react";
import type { Pagination2Layout } from "./pagination-2";

/**
 * Pagination props.
 */
export interface Pagination2Props extends ComponentProps<"nav"> {
	/**
	 * The current page.
	 */
	currentPage: number;
	/**
	 * The total number of pages.
	 */
	totalPages: number;
	/**
	 * Callback function to handle page changes.
	 */
	onPageChange: (page: number) => void;
	/**
	 * The layout of the pagination.
	 */
	layout?: Pagination2Layout;
	/**
	 * Whether to show icons.
	 */
	showIcons?: boolean;
	/**
	 * The label to show for the previous page.
	 */
	previousLabel?: string;
	/**
	 * The label to show for the next page.
	 */
	nextLabel?: string;
}
