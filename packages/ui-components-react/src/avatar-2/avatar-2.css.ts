// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { style, styleVariants } from "@vanilla-extract/css";
import { colors } from "../tokens/colors.css";

export const avatar = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center"

	// backgroundColor: colors.gray200,
	// color: colors.gray700,
	// fontWeight: "500",
	// overflow: "hidden",
	// backgroundSize: "cover",
	// backgroundPosition: "center",
	// backgroundRepeat: "no-repeat",
	// border: "1px solid",
	// borderColor: colors.gray300
	// "@media": {
	// 	"(prefers-color-scheme: dark)": {
	// 		backgroundColor: colors.gray700,
	// 		color: colors.gray300,
	// 		borderColor: colors.gray600
	// 	}
	// }
});

export const roundedBase = style({
	borderRadius: "0.25rem"
});

export const rounded = style({
	borderRadius: "9999px"
});

export const circular = style({
	borderRadius: "50%"
});

export const xs = style({
	width: "1.5rem",
	height: "1.5rem"
});

export const small = style({
	width: "2rem",
	height: "2rem"
});

export const medium = style({
	width: "2.5rem",
	height: "2.5rem"
});

export const large = style({
	width: "5rem",
	height: "5rem"
});

export const xlarge = style({
	width: "9rem",
	height: "9rem"
});

export const image = style({
	width: "100%",
	height: "100%",
	objectFit: "cover"
});
export const imgBase = rounded;

export const bordered = style({
	padding: "0.25rem",
	boxShadow: "0 0 0 2px"
});

export const color = styleVariants({
	dark: {
		boxShadow: "0 0 0 2px",
		color: colors.gray800,
		"@media": {
			"(prefers-color-scheme: dark)": {
				color: colors.gray800
			}
		}
	},
	failure: {
		boxShadow: "0 0 0 2px",
		color: colors.red500,
		"@media": {
			"(prefers-color-scheme: dark)": {
				color: colors.red700
			}
		}
	},
	gray: {
		boxShadow: "0 0 0 2px",
		color: colors.gray500,
		"@media": {
			"(prefers-color-scheme: dark)": {
				color: colors.gray400
			}
		}
	},
	info: {
		boxShadow: "0 0 0 2px",
		color: colors.cyan400,
		"@media": {
			"(prefers-color-scheme: dark)": {
				color: colors.cyan800
			}
		}
	},
	light: {
		boxShadow: "0 0 0 2px",
		color: colors.gray300,
		"@media": {
			"(prefers-color-scheme: dark)": {
				color: colors.gray500
			}
		}
	},
	purple: {
		boxShadow: "0 0 0 2px",
		color: colors.purple500,
		"@media": {
			"(prefers-color-scheme: dark)": {
				color: colors.purple600
			}
		}
	},
	success: {
		boxShadow: "0 0 0 2px",
		color: colors.green500,
		"@media": {
			"(prefers-color-scheme: dark)": {
				color: colors.green500
			}
		}
	},
	warning: {
		boxShadow: "0 0 0 2px",
		color: colors.yellow300,
		"@media": {
			"(prefers-color-scheme: dark)": {
				color: colors.yellow500
			}
		}
	},
	pink: {
		boxShadow: "0 0 0 2px",
		color: colors.pink500,
		"@media": {
			"(prefers-color-scheme: dark)": {
				color: colors.pink500
			}
		}
	}
});

export const imgOff = style({
	position: "relative",
	overflow: "hidden",
	backgroundColor: colors.gray100,
	"@media": {
		"(prefers-color-scheme: dark)": {
			backgroundColor: colors.gray600
		}
	}
});

export const imgPlaceholder = style({
	position: "absolute",
	bottom: "-0.25rem",
	height: "auto",
	width: "auto",
	color: colors.gray400,
	"@media": {
		"(prefers-color-scheme: dark)": {
			color: colors.gray400
		}
	}
});

export const stacked = style({
	boxShadow: "0 0 0 2px",
	color: colors.gray300,
	"@media": {
		"(prefers-color-scheme: dark)": {
			color: colors.gray500
		}
	}
});

export const initialsBase = style({
	position: "relative",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	overflow: "hidden",
	backgroundColor: colors.gray100,
	"@media": {
		"(prefers-color-scheme: dark)": {
			backgroundColor: colors.gray600
		}
	}
});

export const initialsText = style({
	fontWeight: "500",
	color: colors.gray600,
	"@media": {
		"(prefers-color-scheme: dark)": {
			color: colors.gray300
		}
	}
});

export const statusBase = style({
	position: "absolute",
	height: "0.875rem",
	width: "0.875rem",
	borderRadius: "50%",
	border: "2px solid",
	borderColor: colors.white,
	"@media": {
		"(prefers-color-scheme: dark)": {
			borderColor: colors.gray800
		}
	}
});

export const status = styleVariants({
	away: {
		backgroundColor: colors.yellow400
	},
	busy: {
		backgroundColor: colors.red400
	},
	offline: {
		backgroundColor: colors.gray400
	},
	online: {
		backgroundColor: colors.green400
	}
});

export const statusPosition = styleVariants({
	"bottom-left": {
		bottom: "-0.25rem",
		left: "-0.25rem"
	},
	"bottom-center": {
		bottom: "-0.25rem"
	},
	"bottom-right": {
		bottom: "-0.25rem",
		right: "-0.25rem"
	},
	"top-left": {
		left: "-0.25rem",
		top: "-0.25rem"
	},
	"top-center": {
		top: "-0.25rem"
	},
	"top-right": {
		right: "-0.25rem",
		top: "-0.25rem"
	},
	"center-right": {
		right: "-0.25rem"
	},
	center: {},
	"center-left": {
		left: "-0.25rem"
	}
});
