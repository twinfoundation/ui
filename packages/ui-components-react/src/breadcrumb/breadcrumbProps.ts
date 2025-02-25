// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { BreadcrumbComponentProps as FlowbiteBreadcrumbProps } from "flowbite-react";
import type { PropsWithChildren, FC, SVGProps } from "react";

/**
 * Breadcrumb item props.
 */
export interface BreadcrumbItem {
	/**
	 * Breadcrumb item label.
	 */
	label: string;
	/**
	 * Breadcrumb item href.
	 */
	href?: string;
	/**
	 * Breadcrumb item icon.
	 */
	icon?: FC<SVGProps<SVGSVGElement>>;
}

/**
 * Breadcrumb props.
 */
export interface BreadcrumbProps
	extends PropsWithChildren<Omit<FlowbiteBreadcrumbProps, "color" | "label">> {
	/**
	 * Breadcrumb item aria label.
	 */
	ariaLabel?: string;
	/**
	 * Breadcrumb component class name.
	 */
	className?: string;
	/**
	 * Breadcrumb items.
	 */
	items?: BreadcrumbItem[];
}
