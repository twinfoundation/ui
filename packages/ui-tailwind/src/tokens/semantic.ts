// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { baseColors } from "./colors";

/**
 * Semantic color tokens - Context-specific color assignments
 */
export const semanticColors = {
	// Brand colors
	brand: {
		primary: baseColors.orange[500],
		primaryHover: baseColors.orange[600],
		secondary: baseColors.blue[500],
		secondaryHover: baseColors.blue[600]
	},
	// Text colors
	primary: baseColors.neutral[950],
	secondary: baseColors.neutral[850],
	tertiary: baseColors.neutral[700],
	// Status colors
	success: baseColors.success[500],
	error: baseColors.error[500],
	warning: baseColors.warning[500],
	information: baseColors.information[500],
	// Surface colors
	surface: {
		main: baseColors.neutral[50],
		second: baseColors.neutral[100],
		third: baseColors.neutral[300]
	}
};
