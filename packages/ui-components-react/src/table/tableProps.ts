// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TableProps as FlowbiteTableProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const TablePropTypes = {
	striped: PropTypes.bool,
	hoverable: PropTypes.bool
};

/**
 * Table props.
 */
export type TableProps = PropsWithChildren<
	InferProps<typeof TablePropTypes> & Omit<FlowbiteTableProps, "color" | "label">
>;
