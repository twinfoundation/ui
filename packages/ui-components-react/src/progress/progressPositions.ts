// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Progress positions.
 */
export const ProgressPositions = {
	/**
	 * Inside.
	 */
	Inside: "inside",

	/**
	 * Outside.
	 */
	Outside: "outside"
} as const;

/**
 * Progress positions.
 */
export type ProgressPositions = (typeof ProgressPositions)[keyof typeof ProgressPositions];
