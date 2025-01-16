// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Progress positions.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
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
