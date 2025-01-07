// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { BreadcrumbComponentProps as FlowbiteBreadcrumbProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const BreadcrumbPropTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			href: PropTypes.string,
			label: PropTypes.string.isRequired,
			icon: PropTypes.func
		})
	),
	background: PropTypes.bool
};

/**
 * Breadcrumb props.
 */
export type BreadcrumbProps = PropsWithChildren<
	InferProps<typeof BreadcrumbPropTypes> & Omit<FlowbiteBreadcrumbProps, "color" | "label">
>;
