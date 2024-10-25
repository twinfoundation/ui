// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.querySelector("#root");
if (root) {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>
	);
}
