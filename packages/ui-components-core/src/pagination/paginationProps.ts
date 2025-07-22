// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { PaginationProps as FlowbitePaginationProps } from "flowbite-react";
import type { PropsWithChildren } from "react";
import type { PaginationLayout } from "./paginationLayouts";

/**
 * Pagination props.
 */
export type PaginationProps = PropsWithChildren<
	Omit<FlowbitePaginationProps, "color" | "label"> & {
		/**
		 * The layout of the pagination.
		 */
		layout?: PaginationLayout;
		/**
		 * Whether to show icons.
		 */
		showIcons?: boolean;
		/*
		 * The label to show for the previous page.
		 */
		previousLabel?: string;
		/*
		 * The label to show for the next page.
		 */
		nextLabel?: string;
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
	}
>;
