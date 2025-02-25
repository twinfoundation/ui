// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { BannerComponentProps as FlowbiteBannerProps } from "flowbite-react";
import type { PropsWithChildren } from "react";

/**
 * Banner props.
 */
export interface BannerProps
	extends PropsWithChildren<Omit<FlowbiteBannerProps, "color" | "label">> {
	/**
	 * Indicates if the banner should be displayed at the bottom of the screen.
	 */
	bottom?: boolean;
}
