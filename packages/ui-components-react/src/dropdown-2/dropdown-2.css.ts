// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { style, keyframes } from "@vanilla-extract/css";
import { colors } from "../tokens/colors.css";

const fadeIn = keyframes({
	"0%": { opacity: 0, transform: "translateY(-8px)" },
	"100%": { opacity: 1, transform: "translateY(0)" }
});

export const container = style({
	position: "relative",
	display: "inline-block"
});

export const trigger = style({
	display: "inline-flex",
	alignItems: "center",
	gap: "0.5rem",
	padding: "0.5rem 0.75rem",
	fontSize: "0.875rem",
	fontWeight: "500",
	color: "#374151",
	backgroundColor: "#ffffff",
	border: "1px solid #d1d5db",
	borderRadius: "0.375rem",
	cursor: "pointer",
	transition: "all 0.15s ease-in-out",
	":hover": {
		backgroundColor: "#f9fafb",
		borderColor: "#9ca3af"
	},
	":focus": {
		outline: "none",
		borderColor: "#3b82f6",
		boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
	}
});

export const menu = style({
	position: "absolute",
	top: "100%",
	left: 0,
	right: 0,
	zIndex: 50,
	marginTop: "0.25rem",
	backgroundColor: "#ffffff",
	border: "1px solid #e5e7eb",
	borderRadius: "0.375rem",
	boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
	animation: `${fadeIn} 0.15s ease-out`,
	minWidth: "8rem"
});

export const item = style({
	display: "block",
	width: "100%",
	padding: "0.5rem 0.75rem",
	fontSize: "0.875rem",
	color: "#374151",
	backgroundColor: "transparent",
	border: "none",
	cursor: "pointer",
	textAlign: "left",
	transition: "background-color 0.15s ease-in-out",
	":hover": {
		backgroundColor: "#f3f4f6"
	},
	":focus": {
		outline: "none",
		backgroundColor: "#f3f4f6"
	}
});

export const divider = style({
	height: "1px",
	backgroundColor: colors.gray100,
	margin: "0.25rem 0",
	"@media": {
		"(prefers-color-scheme: dark)": {
			backgroundColor: colors.gray600
		}
	}
});

export const disabled = style({
	opacity: 0.5,
	cursor: "not-allowed",
	":hover": {
		backgroundColor: "transparent"
	}
});

export const primary = style({
	backgroundColor: "#3b82f6",
	borderColor: "#3b82f6",
	color: "#ffffff",
	":hover": {
		backgroundColor: "#2563eb",
		borderColor: "#2563eb"
	}
});

export const secondary = style({
	backgroundColor: "#6b7280",
	borderColor: "#6b7280",
	color: "#ffffff",
	":hover": {
		backgroundColor: "#4b5563",
		borderColor: "#4b5563"
	}
});

export const small = style({
	padding: "0.25rem 0.5rem",
	fontSize: "0.75rem"
});

export const large = style({
	padding: "0.75rem 1rem",
	fontSize: "1rem"
});

// Item

export const itemBase = style({
	display: "flex",
	width: "100%",
	cursor: "pointer",
	alignItems: "center",
	justifyContent: "flex-start",
	padding: "0.5rem 1rem",
	fontSize: "0.875rem",
	color: colors.gray700,
	":hover": {
		backgroundColor: colors.gray100
	},
	":focus": {
		backgroundColor: colors.gray100,
		outline: "none"
	},
	"@media": {
		"(prefers-color-scheme: dark)": {
			color: colors.gray200,
			":hover": {
				backgroundColor: colors.gray600,
				color: "#ffffff"
			},
			":focus": {
				backgroundColor: colors.gray600,
				color: "#ffffff"
			}
		}
	}
});

export const itemIcon = style({
	marginRight: "0.5rem",
	height: "1rem",
	width: "1rem"
});

export const header = style({
	display: "block",
	padding: "0.5rem 1rem",
	fontSize: "0.875rem",
	color: colors.gray700,
	"@media": {
		"(prefers-color-scheme: dark)": {
			color: colors.gray200
		}
	}
});

export const inlineWrapper = style({
	display: "flex",
	alignItems: "center"
});

export const target = style({
	width: "fit-content"
});

export const arrowIcon = style({
	marginLeft: "0.5rem",
	height: "1rem",
	width: "1rem"
});

export const duration100 = style({
	transitionDuration: "100ms"
});

export const floatingBase = style({
	zIndex: 10,
	width: "fit-content",
	borderRadius: "0.25rem",
	boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
	":focus": {
		outline: "none"
	},
	"@media": {
		"(prefers-color-scheme: dark)": {
			"::before": {
				background: `linear-gradient(to bottom, ${colors.gray600} 1px, transparent 1px)`
			}
		}
	}
});

export const floatingAnimation = style({
	transitionProperty: "opacity",
	transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
	transitionDuration: "150ms"
});
export const floatingHidden = style({
	visibility: "hidden",
	opacity: 0
});
export const floatingStyleAuto = style({
	border: `1px solid ${colors.gray200}`,
	backgroundColor: colors.white,
	color: colors.gray900,
	"@media": {
		"(prefers-color-scheme: dark)": {
			border: "none",
			backgroundColor: colors.gray700,
			color: colors.white
		}
	}
});

export const content = style({
	// custom css - not from Flowbite
	display: "grid",
	paddingTop: "0.25rem",
	paddingBottom: "0.25rem",
	":focus": {
		outline: "none"
	}
});
