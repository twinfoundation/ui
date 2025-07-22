// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { BadgeProps as FlowbiteBadgeProps } from "flowbite-react";
import type { ReactNode } from "react";
import type { BadgeColor } from "./badgeColors";
import type { BadgeSize } from "./badgeSizes";

/**
 * Badge props interface.
 */
export interface BadgeProps extends Omit<FlowbiteBadgeProps, "color" | "label"> {
	/**
	 * The color variant of the badge
	 */
	color?: BadgeColor;

	/**
	 * The size variant of the badge
	 */
	size?: BadgeSize;

	/**
	 * Whether the badge can be dismissed
	 */
	dismiss?: boolean;

	/**
	 * Whether to show only the icon
	 */
	onlyIcon?: boolean;

	/**
	 * The content of the badge
	 */
	children?: ReactNode;
}
