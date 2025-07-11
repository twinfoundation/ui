// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { style, styleVariants } from "@vanilla-extract/css";
import { colors } from "../tokens/colors.css";

// Base pagination container
export const pagination = style({
	display: "flex",
	alignItems: "center",
	gap: "0.25rem"
});

// Navigation layout (centered)
export const navigation = style({
	justifyContent: "center"
});

// Table layout (right-aligned)
export const table = style({
	justifyContent: "flex-end"
});

// Base button styles (shared by all pagination buttons)
const baseButton = style({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "0.5rem 0.75rem",
	fontSize: "0.875rem",
	fontWeight: "500",
	lineHeight: "1.25rem",
	border: `1px solid ${colors.gray300}`,
	backgroundColor: colors.gray50,
	color: colors.gray500,
	cursor: "pointer",
	transition: "all 0.2s ease-in-out",
	textDecoration: "none",
	minWidth: "2.5rem",
	height: "2.5rem",
	":hover": {
		backgroundColor: colors.gray100,
		color: colors.gray700
	},
	":focus": {
		outline: `2px solid ${colors.cyan600}`,
		outlineOffset: "2px"
	},
	":disabled": {
		opacity: 0.5,
		cursor: "not-allowed",
		backgroundColor: colors.gray100,
		color: colors.gray400
	},
	"@media": {
		"(prefers-color-scheme: dark)": {
			borderColor: colors.gray600,
			backgroundColor: colors.gray800,
			color: colors.gray400,
			":hover": {
				backgroundColor: colors.gray700,
				color: colors.gray50
			},
			":disabled": {
				backgroundColor: colors.gray700,
				color: colors.gray500
			}
		}
	}
});

// Page number button
export const pageButton = style([
	baseButton,
	{
		borderRadius: "0.375rem"
	}
]);

// Active page button
export const activePageButton = style([
	baseButton,
	{
		borderColor: colors.gray300,
		backgroundColor: colors.cyan100,
		color: colors.cyan600,
		fontWeight: "600",
		":hover": {
			backgroundColor: colors.cyan100,
			color: colors.cyan600
		},
		"@media": {
			"(prefers-color-scheme: dark)": {
				borderColor: colors.gray600,
				backgroundColor: colors.cyan700,
				color: colors.cyan300,
				":hover": {
					backgroundColor: colors.cyan700,
					color: colors.cyan300
				}
			}
		}
	}
]);

// Previous button
export const previousButton = style([
	baseButton,
	{
		borderTopLeftRadius: "0.5rem",
		borderBottomLeftRadius: "0.5rem",
		borderTopRightRadius: "0",
		borderBottomRightRadius: "0",
		marginLeft: "0"
	}
]);

// Next button
export const nextButton = style([
	baseButton,
	{
		borderTopLeftRadius: "0",
		borderBottomLeftRadius: "0",
		borderTopRightRadius: "0.5rem",
		borderBottomRightRadius: "0.5rem"
	}
]);

// Icon styles
export const icon = style({
	width: "1.25rem",
	height: "1.25rem"
});

// Previous icon
export const previousIcon = style({
	transform: "rotate(180deg)"
});

// Button content wrapper
export const buttonContent = style({
	display: "flex",
	alignItems: "center",
	gap: "0.25rem"
});

// Ellipsis
export const ellipsis = style({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "0.5rem 0.75rem",
	fontSize: "0.875rem",
	color: colors.gray500,
	minWidth: "2.5rem",
	height: "2.5rem",
	"@media": {
		"(prefers-color-scheme: dark)": {
			color: colors.gray400
		}
	}
});

// Focus ring for accessibility
export const focusRing = style({
	":focus-visible": {
		outline: `2px solid ${colors.cyan600}`,
		outlineOffset: "2px",
		borderRadius: "0.375rem"
	},
	"@media": {
		"(prefers-color-scheme: dark)": {
			":focus-visible": {
				outlineColor: colors.cyan300
			}
		}
	}
});
