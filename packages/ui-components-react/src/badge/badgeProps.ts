// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { BadgeProps as FlowbiteBadgeProps } from "flowbite-react";
import type { BadgeColors } from "./badgeColors";
import type { BadgeSizes } from "./badgeSizes";

/**
 * Badge props interface.
 */
export interface BadgeProps extends Omit<FlowbiteBadgeProps, "color" | "label"> {
	/**
	 * The color variant of the badge
	 */
	color?: BadgeColors;
	/**
	 * The size variant of the badge
	 */
	size?: BadgeSizes;
	/**
	 * Whether the badge can be dismissed
	 */
	dismiss?: boolean;
	/**
	 * Whether to show only the icon
	 */
	onlyIcon?: boolean;
	/**
	 * Children elements
	 */
	children?: React.ReactNode;
}
