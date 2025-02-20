// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TableProps as FlowbiteTableProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren, ReactNode } from "react";

export const TablePropTypes = {
	striped: PropTypes.bool,
	hoverable: PropTypes.bool,
	header: PropTypes.arrayOf(
		PropTypes.shape({
			content: PropTypes.node.isRequired,
			className: PropTypes.string
		})
	),
	body: PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.shape({
				content: PropTypes.node.isRequired,
				className: PropTypes.string
			})
		)
	)
};

/**
 * Table props.
 */
export interface TableProps extends FlowbiteTableProps {
	/**
	 * Configuration for table header cells
	 */
	header?: {
		/**
		 * The content to display in the header cell
		 */
		content: ReactNode;
		/**
		 * Optional CSS class for styling the header cell
		 */
		className?: string;
	}[];
	/**
	 * Configuration for table body cells
	 */
	body?: {
		/**
		 * The content to display in the table cell
		 */
		content: ReactNode;
		/**
		 * Optional CSS class for styling the cell
		 */
		className?: string;
	}[][];
}

/**
 *
 */
export type TablePropsType = PropsWithChildren<
	InferProps<typeof TablePropTypes> & Omit<TableProps, "container" | "striped" | "hoverable">
>;
