// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { PaginationProps as FlowbitePaginationProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";
import { PaginationLayouts } from "./paginationLayouts";

export const PaginationPropTypes = {
	layout: PropTypes.oneOf(Object.values(PaginationLayouts)),
	showIcons: PropTypes.bool,
	previousLabel: PropTypes.string,
	nextLabel: PropTypes.string
};

/**
 * Pagination props.
 */
 export type PaginationProps = PropsWithChildren<
	InferProps<typeof PaginationPropTypes> & Omit<FlowbitePaginationProps, "color" | "label">
 >;
