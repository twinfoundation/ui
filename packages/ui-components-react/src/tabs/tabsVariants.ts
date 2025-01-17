// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Tabs variants.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TabsVariants = {
	/**
	 * Default.
	 */
	Default: "default",

	/**
	 * Underline.
	 */
	Underline: "underline",

	/**
	 * Pills.
	 */
	Pills: "pills",

	/**
	 * FullWidth.
	 */
	FullWidth: "fullWidth"
} as const;

/**
 * Tabs variants.
 */
export type TabsVariants = (typeof TabsVariants)[keyof typeof TabsVariants];
