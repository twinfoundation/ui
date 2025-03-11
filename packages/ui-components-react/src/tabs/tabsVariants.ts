// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { DEFAULT, UNDERLINE, PILLS, FULL_WIDTH } from "../constants/variants";

/**
 * Tabs variants.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TabsVariants = {
	/**
	 * Default.
	 */
	Default: DEFAULT,

	/**
	 * Underline.
	 */
	Underline: UNDERLINE,

	/**
	 * Pills.
	 */
	Pills: PILLS,

	/**
	 * Full width.
	 */
	FullWidth: FULL_WIDTH
} as const;

/**
 * Tabs variants.
 */
export type TabsVariant = (typeof TabsVariants)[keyof typeof TabsVariants];
