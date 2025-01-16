// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Pagination layouts.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const PaginationLayouts = {
	/**
	 * Pagination.
	 */
	Pagination: "pagination",

	/**
	 * Navigation.
	 */
	Navigation: "navigation",

	/**
	 * Table.
	 */
	Table: "table"
} as const;

/**
 * Pagination layouts.
 */
export type PaginationLayouts = (typeof PaginationLayouts)[keyof typeof PaginationLayouts];
