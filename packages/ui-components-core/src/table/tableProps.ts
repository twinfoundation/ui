// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TableProps as FlowbiteTableProps } from "flowbite-react";
import type { ReactNode } from "react";

/**
 * Cell configuration interface
 */
interface TableCell {
	/**
	 * The content to display in the cell
	 */
	content: ReactNode;
	/**
	 * Optional CSS class for styling the cell
	 */
	className?: string;
}

/**
 * Footer row configuration interface
 */
export interface TableFooterRow {
	/**
	 * Optional CSS class for styling the footer row
	 */
	className?: string;
	/**
	 * Footer row cells
	 */
	cells: TableCell[];
}

/**
 * Table props.
 */
export interface TableProps extends FlowbiteTableProps {
	/**
	 * Configuration for table header cells
	 */
	header?: TableCell[];
	/**
	 * Configuration for table body cells
	 */
	body?: TableCell[][];
	/**
	 * Configuration for table footer
	 */
	footer?: TableFooterRow[];
}
