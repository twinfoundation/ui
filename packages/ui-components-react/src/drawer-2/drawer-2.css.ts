// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { style } from "@vanilla-extract/css";
import { colors } from "../tokens/colors.css";

export const backdrop = style({
	position: "fixed",
	inset: 0,
	background: "rgba(0,0,0,0.3)",
	zIndex: 1000
});

export const drawer = style({
	position: "fixed",
	background: colors.gray50,
	boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
	zIndex: 1001,
	transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
	display: "flex",
	flexDirection: "column",
	minWidth: "18rem",
	maxWidth: "90vw",
	minHeight: "10rem",
	maxHeight: "100vh",
	"@media": {
		"(prefers-color-scheme: dark)": {
			background: colors.gray800
		}
	}
});

export const left = style({ top: 0, left: 0, height: "100vh", transform: "translateX(0)" });
export const right = style({ top: 0, right: 0, height: "100vh", transform: "translateX(0)" });
export const top = style({
	top: 0,
	left: 0,
	width: "100vw",
	minHeight: "10rem",
	maxHeight: "50vh",
	transform: "translateY(0)"
});
export const bottom = style({
	bottom: 0,
	left: 0,
	width: "100vw",
	minHeight: "10rem",
	maxHeight: "50vh",
	transform: "translateY(0)"
});

export const header = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "1rem",
	borderBottom: `1px solid ${colors.gray200}`,
	"@media": {
		"(prefers-color-scheme: dark)": {
			borderBottom: `1px solid ${colors.gray700}`
		}
	}
});

export const title = style({
	fontWeight: 600,
	fontSize: "1.1rem",
	color: colors.gray900,
	"@media": { "(prefers-color-scheme: dark)": { color: colors.gray50 } }
});
export const close = style({
	background: "none",
	border: "none",
	fontSize: "1.5rem",
	cursor: "pointer",
	color: colors.gray500,
	marginLeft: "1rem",
	"@media": {
		"(prefers-color-scheme: dark)": {
			color: colors.gray400
		}
	}
});

export const body = style({
	padding: "1rem",
	flex: 1,
	overflowY: "auto",
	color: colors.gray700,
	"@media": { "(prefers-color-scheme: dark)": { color: colors.gray200 } }
});
export const item = style({ marginBottom: "1rem" });

export const buttonWrapper = style({ textAlign: "center", margin: "1rem 0" });
export const button = style({
	padding: "0.5rem 1.5rem",
	borderRadius: "0.375rem",
	border: "none",
	fontWeight: 600,
	fontSize: "1rem",
	cursor: "pointer",
	background: colors.blue600,
	color: colors.gray50,
	display: "inline-flex",
	alignItems: "center",
	gap: "0.5rem",
	"@media": {
		"(prefers-color-scheme: dark)": {
			background: colors.blue400,
			color: colors.gray900
		}
	}
});
export const buttonIcon = style({
	marginRight: "0.5rem",
	display: "inline-flex",
	alignItems: "center"
});
export const primary = style({
	background: colors.blue600,
	color: colors.gray50,
	"@media": {
		"(prefers-color-scheme: dark)": { background: colors.blue400, color: colors.gray900 }
	}
});
export const success = style({
	background: colors.green600,
	color: colors.gray50,
	"@media": {
		"(prefers-color-scheme: dark)": { background: colors.green400, color: colors.gray900 }
	}
});
export const warning = style({
	background: colors.yellow400,
	color: colors.gray900,
	"@media": {
		"(prefers-color-scheme: dark)": { background: colors.yellow300, color: colors.gray900 }
	}
});
export const error = style({
	background: colors.red600,
	color: colors.gray50,
	"@media": { "(prefers-color-scheme: dark)": { background: colors.red400, color: colors.gray900 } }
});
