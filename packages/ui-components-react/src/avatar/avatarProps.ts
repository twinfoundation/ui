// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { AvatarProps as FlowbiteAvatarProps } from "flowbite-react";
import type { PropsWithChildren } from "react";

/**
 * Props for the Avatar component.
 * Extends Flowbite's Avatar props with custom options.
 */
export interface AvatarProps extends PropsWithChildren<Omit<FlowbiteAvatarProps, "label">> {
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
	statusPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
	/**
	 * Whether the avatar is part of a stacked group
	 */
	stacked?: boolean;
}
