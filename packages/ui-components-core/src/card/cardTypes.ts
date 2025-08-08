// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Card types.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const CardTypes = {
	/**
	 * Default.
	 */
	Default: "default",

	/**
	 * Profile.
	 */
	Profile: "profile",

	/**
	 * Form.
	 */
	Form: "form",

	/**
	 * E-Commerce.
	 */
	ECommerce: "e-commerce",

	/**
	 * Call To Action.
	 */
	CTA: "cta",

	/**
	 * List.
	 */
	List: "list",

	/**
	 * Pricing.
	 */
	Pricing: "pricing",

	/**
	 * Crypto.
	 */
	Crypto: "crypto"
} as const;

/**
 * Card types.
 */
export type CardTypes = (typeof CardTypes)[keyof typeof CardTypes];
