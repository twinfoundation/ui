// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
// eslint-disable-next-line import/no-extraneous-dependencies
import * as stylex from "@stylexjs/stylex";
import { memo, useMemo, type JSX } from "react";
import type { ButtonProps } from "./buttonProps";

// StyleX styles
const styles = stylex.create({
	base: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		border: "2px solid transparent",
		borderRadius: "0.5rem",
		fontWeight: "500",
		textDecoration: "none",
		cursor: "pointer",
		transition: "all 0.2s ease-in-out",
		outline: "none",
		":focus": {
			ring: "2px",
			ringOffset: "2px"
		},
		":disabled": {
			opacity: 0.6,
			cursor: "not-allowed"
		}
	},
	// Color variants
	primary: {
		color: "white",
		backgroundColor: "var(--surface-button)",
		":hover:enabled": {
			backgroundColor: "var(--surface-button-hover)"
		},
		":focus": {
			ringColor: "var(--surface-button-pressed)"
		}
	},
	secondary: {
		color: "white",
		backgroundColor: "var(--surface-button-alt)",
		":hover:enabled": {
			backgroundColor: "var(--surface-button-alt-hover)"
		},
		":focus": {
			ringColor: "var(--surface-button-alt-pressed)"
		}
	},
	error: {
		color: "white",
		backgroundColor: "var(--error)",
		":hover:enabled": {
			backgroundColor: "var(--system-error-tints-600)"
		},
		":focus": {
			ringColor: "var(--system-error-tints-200)"
		}
	},
	warning: {
		color: "white",
		backgroundColor: "var(--warning)",
		":hover:enabled": {
			backgroundColor: "var(--system-warning-tints-600)"
		},
		":focus": {
			ringColor: "var(--system-warning-tints-200)"
		}
	},
	success: {
		color: "white",
		backgroundColor: "var(--success)",
		":hover:enabled": {
			backgroundColor: "var(--system-success-tints-600)"
		},
		":focus": {
			ringColor: "var(--system-success-tints-200)"
		}
	},
	info: {
		color: "white",
		backgroundColor: "var(--information)",
		":hover:enabled": {
			backgroundColor: "var(--system-information-tints-600)"
		},
		":focus": {
			ringColor: "var(--system-information-tints-200)"
		}
	},
	plain: {
		color: "black",
		backgroundColor: "var(--surface-second)",
		":hover:enabled": {
			backgroundColor: "var(--surface-third)"
		},
		":focus": {
			ringColor: "rgb(229 231 235)"
		},
		"@media (prefers-color-scheme: dark)": {
			color: "var(--invert)",
			backgroundColor: "var(--surface-third-dark)",
			":hover:enabled": {
				backgroundColor: "var(--surface-second-dark)"
			},
			":focus": {
				ringColor: "var(--surface-button-pressed)"
			}
		}
	},
	ghost: {
		color: "black",
		":hover:enabled": {
			backgroundColor: "rgb(249 250 251)"
		},
		":focus": {
			backgroundColor: "rgb(243 244 246)",
			ringColor: "rgb(229 231 235)"
		},
		"@media (prefers-color-scheme: dark)": {
			color: "var(--invert)",
			":hover:enabled": {
				backgroundColor: "var(--surface-second-dark)"
			},
			":focus": {
				ringColor: "var(--surface-button-pressed)"
			}
		}
	},
	dark: {
		color: "white",
		backgroundColor: "rgb(31 41 55)",
		":hover:enabled": {
			backgroundColor: "rgb(55 65 81)"
		},
		":focus": {
			ringColor: "rgb(229 231 235)"
		},
		"@media (prefers-color-scheme: dark)": {
			color: "black",
			backgroundColor: "var(--surface-second)",
			":hover:enabled": {
				backgroundColor: "rgb(75 85 99)"
			},
			":focus": {
				ringColor: "rgb(55 65 81)"
			}
		}
	},
	// Size variants
	xs: {
		height: "1.75rem",
		width: "1.75rem",
		padding: "0.25rem",
		fontSize: "0.75rem"
	},
	sm: {
		height: "2.25rem",
		width: "2.25rem",
		padding: "0.375rem 0.75rem",
		fontSize: "0.875rem"
	},
	md: {
		height: "2.75rem",
		width: "2.75rem",
		padding: "0.5rem 1rem",
		fontSize: "1rem"
	},
	lg: {
		height: "3.5rem",
		width: "3.5rem",
		padding: "0.75rem 1.5rem",
		fontSize: "1.125rem"
	},
	xl: {
		height: "4rem",
		width: "4rem",
		padding: "1rem 2rem",
		fontSize: "1.25rem"
	},
	// Icon sizes
	iconXs: {
		height: "0.875rem",
		width: "0.875rem"
	},
	iconSm: {
		height: "1rem",
		width: "1rem"
	},
	iconMd: {
		height: "1.25rem",
		width: "1.25rem"
	},
	iconLg: {
		height: "1.5rem",
		width: "1.5rem"
	},
	iconXl: {
		height: "1.75rem",
		width: "1.75rem"
	},
	// Layout
	content: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "0.375rem"
	},
	iconContainer: {
		display: "flex",
		alignItems: "center"
	},
	iconOnly: {
		aspectRatio: "1",
		borderRadius: "50%",
		padding: "0"
	},
	ghostOutline: {
		border: "1px solid currentColor"
	}
});

const colorStyles = {
	primary: styles.primary,
	secondary: styles.secondary,
	error: styles.error,
	warning: styles.warning,
	success: styles.success,
	info: styles.info,
	plain: styles.plain,
	ghost: styles.ghost,
	dark: styles.dark
} as const;

const sizeStyles = {
	xs: styles.xs,
	sm: styles.sm,
	md: styles.md,
	lg: styles.lg,
	xl: styles.xl
} as const;

const iconSizeStyles = {
	xs: styles.iconXs,
	sm: styles.iconSm,
	md: styles.iconMd,
	lg: styles.iconLg,
	xl: styles.iconXl
} as const;

/**
 * Button icon size.
 */
export type IconSize = keyof typeof iconSizeStyles;

/**
 * Button component.
 */
export const Button = memo(
	({
		color = "primary",
		size = "md",
		outline = false,
		iconOnly = false,
		showButtonText = true,
		buttonText = "",
		showLeftIcon = true,
		leftIcon: LeftIcon,
		rightIcon: RightIcon,
		showRightIcon = true,
		icon: Icon,
		disabled = false,
		className,
		children,
		...rest
	}: ButtonProps): JSX.Element => {
		const iconSize = iconSizeStyles[size as IconSize];

		const buttonContent = useMemo(
			() => (
				<div {...stylex.props(styles.content)}>
					{showLeftIcon && LeftIcon && (
						<div {...stylex.props(styles.iconContainer)}>
							<LeftIcon {...stylex.props(iconSize)} />
						</div>
					)}
					{showButtonText && (buttonText || children)}
					{showRightIcon && RightIcon && (
						<div {...stylex.props(styles.iconContainer)}>
							<RightIcon {...stylex.props(iconSize)} />
						</div>
					)}
				</div>
			),
			[
				children,
				LeftIcon,
				RightIcon,
				buttonText,
				iconSize,
				showButtonText,
				showLeftIcon,
				showRightIcon
			]
		);

		const iconContent = useMemo(
			() =>
				Icon && (
					<div {...stylex.props(styles.content)}>
						<Icon {...stylex.props(iconSize)} />
					</div>
				),
			[Icon, iconSize]
		);

		const buttonStyles = useMemo(() => {
			if (iconOnly) {
				return [
					styles.base,
					colorStyles[color as keyof typeof colorStyles],
					sizeStyles[size as keyof typeof sizeStyles],
					styles.iconOnly,
					...(outline && color === "ghost" ? [styles.ghostOutline] : [])
				];
			}

			return [
				styles.base,
				colorStyles[color as keyof typeof colorStyles],
				sizeStyles[size as keyof typeof sizeStyles],
				...(outline && color === "ghost" ? [styles.ghostOutline] : [])
			];
		}, [color, size, iconOnly, outline]);

		return (
			<button
				{...stylex.props(buttonStyles)}
				disabled={disabled}
				className={className}
				{...rest}
			>
				{iconOnly ? iconContent : buttonContent}
			</button>
		);
	}
);

Button.displayName = "Button";
