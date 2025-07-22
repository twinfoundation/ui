// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ComponentProps } from "react";

/**
 * Props for the Avatar component.
 */
export interface AvatarProps extends Omit<ComponentProps<"div">, "color"> {
	/**
	 * The URL of the image to display
	 */
	img?: string;

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
	size?: "xs" | "sm" | "md" | "lg" | "xl";

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
	statusPosition?: "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right";

	/**
	 * Whether the avatar is part of a stacked group
	 */
	stacked?: boolean;

	/**
	 * Additional CSS classes to apply
	 */
	className?: string;
} 