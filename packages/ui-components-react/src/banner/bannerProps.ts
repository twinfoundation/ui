// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { BannerComponentProps as FlowbiteBannerProps } from "flowbite-react";
import type { ReactNode } from "react";

/**
 * Banner props.
 */
export interface BannerProps extends Omit<FlowbiteBannerProps, "color" | "label"> {
	/**
	 * The content to display inside the banner
	 */
	children?: ReactNode;

	/**
	 * Indicates if the banner should be displayed at the bottom of the screen.
	 */
	bottom?: boolean;
}
