// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { BreadcrumbComponentProps as FlowbiteBreadcrumbProps } from "flowbite-react";
import type { IconComponent } from "../types/iconTypes";

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
	icon?: IconComponent;
}

/**
 * Breadcrumb props.
 */
export interface BreadcrumbProps extends Omit<FlowbiteBreadcrumbProps, "color" | "label"> {
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
