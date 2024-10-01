// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { expect, test } from "@playwright/test";

test("home page has expected h3", async ({ page }) => {
	await page.goto("/");
	await expect(page.locator("h3")).toBeVisible();
});
