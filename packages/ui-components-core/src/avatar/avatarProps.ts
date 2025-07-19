// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { AvatarProps as FlowbiteAvatarProps } from "flowbite-react";
import type { ReactNode } from "react";
import type { TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT } from "../constants/positions";
import type { EXTRA_SMALL, SMALL, MEDIUM, LARGE, EXTRA_LARGE } from "../constants/sizes";

/**
 * Props for the Avatar component.
 * Extends Flowbite's Avatar props with custom options.
 */
export interface AvatarProps extends Omit<FlowbiteAvatarProps, "label"> {
	/**
	 * The content to display inside the avatar
	 */
	children?: ReactNode;

	/**
	 * The URL of the image to display
	 */
	img?: string;

	/**
	 * Additional CSS classes to apply
	 */
	className?: string;

	/**
	 * Alt text for the avatar image
	 */
	alt?: string;

	/**
	 * Whether to show a border around the avatar
	 */
	bordered?: boolean;

	/**
	 * The size of the avatar
	 */
	size?: typeof EXTRA_SMALL | typeof SMALL | typeof MEDIUM | typeof LARGE | typeof EXTRA_LARGE;

	/**
	 * Whether the avatar should be rounded
	 */
	rounded?: boolean;

	/**
	 * Status indicator for the avatar
	 */
	status?: "online" | "offline" | "away" | "busy";

	/**
	 * Position of the status indicator
	 */
	statusPosition?: typeof TOP_LEFT | typeof TOP_RIGHT | typeof BOTTOM_LEFT | typeof BOTTOM_RIGHT;

	/**
	 * Whether the avatar is part of a stacked group
	 */
	stacked?: boolean;
}
