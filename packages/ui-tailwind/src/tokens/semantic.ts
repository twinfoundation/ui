// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { baseColors } from "./colors";

/**
 * Semantic color tokens - Context-specific color assignments
 */
export const semanticColors = {
	brand: {
		primary: baseColors.orange[500],
		primaryHover: baseColors.orange[600],
		primarySubtle: baseColors.orange[50],
		secondary: baseColors.blue[500],
		secondaryHover: baseColors.blue[600],
		secondarySubtle: baseColors.blue[50]
	},
	surface: {
		main: {
			light: baseColors.neutral[50],
			dark: baseColors.neutral[950]
		},
		second: {
			light: baseColors.neutral[100],
			dark: baseColors.neutral[900]
		},
		third: {
			light: baseColors.neutral[300],
			dark: baseColors.neutral[800]
		}
	},
	text: {
		primary: {
			light: baseColors.neutral[950],
			dark: baseColors.neutral[50]
		},
		secondary: {
			light: baseColors.neutral[850],
			dark: baseColors.neutral[150]
		},
		tertiary: {
			light: baseColors.neutral[700],
			dark: baseColors.neutral[300]
		}
	},
	status: {
		success: baseColors.success[500],
		error: baseColors.error[500],
		warning: baseColors.warning[500],
		info: baseColors.information[500]
	},
	background: {
		success: baseColors.success[50],
		error: baseColors.error[50],
		warning: baseColors.warning[50],
		info: baseColors.information[50]
	}
};
