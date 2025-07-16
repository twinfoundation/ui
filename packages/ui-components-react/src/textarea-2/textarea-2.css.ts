// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { style, styleVariants } from "@vanilla-extract/css";
import { colors } from "../tokens/colors.css";

export const textarea = style({
	display: "block",
	width: "100%",
	borderRadius: "0.5rem",
	border: "1px solid",
	padding: "0.625rem",
	fontSize: "0.875rem",
	":focus": {
		outline: "none",
		boxShadow: "0 0 0 1px"
	},
	":disabled": {
		cursor: "not-allowed",
		opacity: "0.5"
	}
});

export const colorsVariants = styleVariants({
	gray: {
		borderColor: colors.gray300,
		backgroundColor: colors.gray50,
		color: colors.gray900,
		":focus": {
			borderColor: colors.cyan500,
			boxShadow: `0 0 0 1px ${colors.cyan500}`
		},
		"@media": {
			"(prefers-color-scheme: dark)": {
				borderColor: colors.gray600,
				backgroundColor: colors.gray700,
				color: colors.white,
				"::placeholder": {
					color: colors.gray400
				}
			}
		}
	},
	info: {
		borderColor: colors.cyan500,
		backgroundColor: colors.cyan50,
		color: colors.cyan900,
		":focus": {
			borderColor: colors.cyan500,
			boxShadow: `0 0 0 1px ${colors.cyan500}`
		},
		"::placeholder": {
			color: colors.cyan700
		},
		"@media": {
			"(prefers-color-scheme: dark)": {
				borderColor: colors.cyan400,
				backgroundColor: colors.cyan100
			}
		}
	},
	failure: {
		borderColor: colors.red500,
		backgroundColor: colors.red50,
		color: colors.red900,
		":focus": {
			borderColor: colors.red500,
			boxShadow: `0 0 0 1px ${colors.red500}`
		},
		"::placeholder": {
			color: colors.red700
		},
		"@media": {
			"(prefers-color-scheme: dark)": {
				borderColor: colors.red400,
				backgroundColor: colors.red100
			}
		}
	},
	warning: {
		borderColor: colors.yellow500,
		backgroundColor: colors.yellow50,
		color: colors.yellow900,
		":focus": {
			borderColor: colors.yellow500,
			boxShadow: `0 0 0 1px ${colors.yellow500}`
		},
		"::placeholder": {
			color: colors.yellow700
		},
		"@media": {
			"(prefers-color-scheme: dark)": {
				borderColor: colors.yellow400,
				backgroundColor: colors.yellow100
			}
		}
	},
	success: {
		borderColor: colors.green500,
		backgroundColor: colors.green50,
		color: colors.green900,
		":focus": {
			borderColor: colors.green500,
			boxShadow: `0 0 0 1px ${colors.green500}`
		},
		"::placeholder": {
			color: colors.green700
		},
		"@media": {
			"(prefers-color-scheme: dark)": {
				borderColor: colors.green400,
				backgroundColor: colors.green100
			}
		}
	}
});

export const withShadow = styleVariants({
	on: {
		boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)"
	},
	off: {}
});
