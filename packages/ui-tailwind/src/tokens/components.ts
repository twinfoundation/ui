// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { baseColors } from "./colors";
import { semanticColors } from "./semantic";

/**
 * Component-specific tokens - Styling tokens for specific UI components
 */
export const componentTokens = {
	button: {
		primary: {
			background: {
				default: semanticColors.brand.primary,
				hover: semanticColors.brand.primaryHover,
				pressed: baseColors.orange[400],
				disabled: baseColors.neutral[400]
			},
			text: {
				default: baseColors.neutral[50],
				hover: baseColors.neutral[50],
				pressed: baseColors.neutral[50],
				disabled: baseColors.neutral[500]
			}
		},
		secondary: {
			background: {
				default: semanticColors.brand.secondary,
				hover: semanticColors.brand.secondaryHover,
				pressed: baseColors.blue[400],
				disabled: baseColors.neutral[400]
			},
			text: {
				default: baseColors.neutral[50],
				hover: baseColors.neutral[50],
				pressed: baseColors.neutral[50],
				disabled: baseColors.neutral[500]
			}
		},
		ghost: {
			background: {
				default: "transparent",
				hover: baseColors.neutral[100],
				pressed: baseColors.neutral[200],
				disabled: "transparent"
			},
			text: {
				default: semanticColors.text.primary.light,
				hover: semanticColors.text.primary.light,
				pressed: semanticColors.text.primary.light,
				disabled: baseColors.neutral[500]
			}
		}
	},
	link: {
		text: {
			default: baseColors.blue[700],
			hover: baseColors.blue[900],
			visited: baseColors.blue[800]
		}
	},
	input: {
		border: {
			default: baseColors.neutral[300],
			focus: baseColors.blue[500],
			error: baseColors.error[500]
		},
		background: {
			default: baseColors.neutral[50],
			disabled: baseColors.neutral[100]
		},
		text: {
			default: semanticColors.text.primary.light,
			placeholder: semanticColors.text.tertiary.light,
			disabled: semanticColors.text.tertiary.light
		}
	}
};
