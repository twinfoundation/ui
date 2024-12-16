// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { HiInformationCircle, HiCheckCircle } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";

/**
 * Alert icons.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AlertIcons = {
	/**
	 * Information.
	 */
	Information: HiInformationCircle,

	/**
	 * Check.
	 */
	Check: HiCheckCircle,

	/**
	 * Error.
	 */
	Error: IoIosCloseCircle
} as const;

/**
 * Alert icons.
 */
export type AlertIcons = (typeof AlertIcons)[keyof typeof AlertIcons];
