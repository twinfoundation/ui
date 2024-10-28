// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Is } from "@twin.org/core";

/**
 * Helper methods for clipboard.
 */
export class Clipboard {
	/**
	 * Copy the text to the clipboard.
	 * @param text The text to copy.
	 * @returns True if the text was copied.
	 */
	public static async copy(text: string | undefined): Promise<boolean> {
		if (Is.string(text)) {
			try {
				await navigator.clipboard.writeText(text);
			} catch {
				// Not much we can do if copying to clipboard failed
			}
		}
		return false;
	}
}
