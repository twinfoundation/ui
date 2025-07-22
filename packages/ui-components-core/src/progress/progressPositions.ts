// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { INSIDE, OUTSIDE } from "../constants/positions";

/**
 * Progress positions.
 */
export const ProgressPositions = {
	/**
	 * Inside.
	 */
	Inside: INSIDE,

	/**
	 * Outside.
	 */
	Outside: OUTSIDE
} as const;

/**
 * Progress positions.
 */
export type ProgressPosition = (typeof ProgressPositions)[keyof typeof ProgressPositions];
