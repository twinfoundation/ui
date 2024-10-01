// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";

/**
 * Persist a writable Svelte store to local storage.
 * @param key The key to store the variable with.
 * @param initialValue The initial value for the persistent value.
 * @returns The writable value.
 */
export function persistent<T>(key: string, initialValue: T): Writable<T> {
	let value = initialValue;

	if (browser) {
		try {
			const json = localStorage.getItem(key);
			if (json) {
				value = JSON.parse(json);
			}
		} catch {}
	}

	const state = writable(value);

	if (browser) {
		state.subscribe(($value): void => {
			if ($value === undefined || $value === null) {
				localStorage.removeItem(key);
			} else {
				localStorage.setItem(key, JSON.stringify($value));
			}
		});
	}

	return state;
}
