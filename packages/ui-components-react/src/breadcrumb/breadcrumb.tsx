// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Breadcrumb as FlowbiteBreadcrumb } from "flowbite-react";
import { memo, type JSX } from "react";
import type { BreadcrumbProps } from "./breadcrumbProps";

/**
 * Breadcrumb component.
 */
export const Breadcrumb = memo(({ ariaLabel, items, className }: BreadcrumbProps): JSX.Element => (
	<FlowbiteBreadcrumb aria-label={ariaLabel ?? "Breadcrumb"} className={className ?? ""}>
		{items && items.length > 0 ? (
			items.map((item, index) => (
				<FlowbiteBreadcrumb.Item
					key={`breadcrumb-item-${index}`}
					href={item?.href}
					icon={item?.icon}
				>
					{item?.label}
				</FlowbiteBreadcrumb.Item>
			))
		) : (
			<></>
		)}
	</FlowbiteBreadcrumb>
));

Breadcrumb.displayName = "Breadcrumb";
