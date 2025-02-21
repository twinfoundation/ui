// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { baseColors } from "./colors";
import { semanticColors } from "./semantic";

/**
 * Component-specific tokens - Styling tokens for specific UI components
 */
export const componentTokens = {
	surface: {
		button: {
			default: semanticColors.brand.primary,
			hover: semanticColors.brand.primaryHover,
			pressed: baseColors.orange[400],
			disabled: baseColors.neutral[400],
			text: baseColors.neutral[50],
			textHover: baseColors.neutral[50],
			textPressed: baseColors.neutral[50],
			textDisabled: baseColors.neutral[500]
		},
		buttonAlt: {
			default: semanticColors.brand.secondary,
			hover: semanticColors.brand.secondaryHover,
			pressed: baseColors.blue[200],
			disabled: baseColors.neutral[400],
			text: baseColors.neutral[50],
			textHover: baseColors.neutral[50],
			textPressed: baseColors.neutral[50],
			textDisabled: baseColors.neutral[500]
		}
	}
};
