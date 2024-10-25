// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ReactNode } from "react";

/**
 * The main application.
 * @returns The element to render.
 */
function App(): ReactNode {
	return (
		<div className="flex flex-col p-5">
			Use the following commands to run the storybook: npm run storybook
		</div>
	);
}

export default App;
