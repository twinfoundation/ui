// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { PAGINATION, NAVIGATION, TABLE } from "../constants/layouts";

/**
 * Pagination layouts.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const PaginationLayouts = {
	/**
	 * Pagination.
	 */
	Pagination: PAGINATION,

	/**
	 * Navigation.
	 */
	Navigation: NAVIGATION,

	/**
	 * Table.
	 */
	Table: TABLE
} as const;

/**
 * Pagination layouts.
 */
export type PaginationLayout = (typeof PaginationLayouts)[keyof typeof PaginationLayouts];
