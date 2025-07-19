// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { BreadcrumbProps as FlowbiteBreadcrumbProps } from "flowbite-react";
import type { ReactNode, FC, SVGProps } from "react";

/**
 * Breadcrumb props.
 */
export interface BreadcrumbProps extends Omit<FlowbiteBreadcrumbProps, "children"> {
	/**
	 * The aria-label for the breadcrumb.
	 */
	ariaLabel?: string;

	/**
	 * The items to display in the breadcrumb.
	 */
	items?: Array<{
		/**
		 * The label for the breadcrumb item.
		 */
		label?: ReactNode;

		/**
		 * The href for the breadcrumb item.
		 */
		href?: string;

		/**
		 * The icon for the breadcrumb item.
		 */
		icon?: FC<SVGProps<SVGSVGElement>>;
	}>;
}
