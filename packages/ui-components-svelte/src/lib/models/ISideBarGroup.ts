// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ISideBarItem } from "./ISideBarItem";

/**
 * The sidebar group.
 */
export interface ISideBarGroup {
	/**
	 * The items in the group.
	 */
	items: ISideBarItem[];
}
