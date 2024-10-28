// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Component } from "svelte";

/**
 * The sidebar item.
 */
export interface ISideBarItem {
	/**
	 * The resource for the label.
	 */
	label: string;

	/**
	 * The route to navigate to on action.
	 */
	route: string;

	/**
	 * The icon for the item.
	 */
	icon: Component;
}
