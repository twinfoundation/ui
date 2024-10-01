// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { ErrorHelper } from "@twin.org/core";
import { initLocales } from "@twin.org/ui-components-svelte";

/**
 * Perform a load and initialize the application.
 * @param params The load params.
 * @param params.url The URL.
 */
export async function load(params: { url: URL }): Promise<void> {
	try {
		await initLocales(
			params.url,
			[
				{
					label: "English",
					code: "en"
				}
			],
			true
		);
	} catch (err) {
		// Nothing else is initialized yet so we need to console log manually
		// eslint-disable-next-line no-console
		console.error("Error during initialization", ErrorHelper.formatErrors(err).join("\n"));
	}
}
