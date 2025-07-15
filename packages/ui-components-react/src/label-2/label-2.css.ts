// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { style } from "@vanilla-extract/css";
import { colors } from "../tokens/colors.css";

export const label = style({
	fontWeight: 500,
	fontSize: "0.875rem",
	color: colors.gray900,
	"@media": {
		"(prefers-color-scheme: dark)": {
			color: colors.white
		}
	}
});

export const visuallyHidden = style({
	border: 0,
	clip: "rect(0 0 0 0)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: 0,
	position: "absolute",
	width: "1px",
	whiteSpace: "nowrap"
});
