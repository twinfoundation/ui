// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { BreadcrumbComponentProps as FlowbiteBreadcrumbProps } from "flowbite-react";
import PropTypes, { type InferProps } from "prop-types";
import type { PropsWithChildren } from "react";

export const BreadcrumbPropTypes = {
	className: PropTypes.string,
	content: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			href: PropTypes.string,
			icon: PropTypes.func
		})
	)
};

/**
 * Breadcrumb props.
 */
export type BreadcrumbProps = PropsWithChildren<
	InferProps<typeof BreadcrumbPropTypes> & Omit<FlowbiteBreadcrumbProps, "color" | "label">
>;
