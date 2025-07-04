// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import * as stylex from "@stylexjs/stylex";
import { memo, useMemo, type JSX } from "react";
import type { ButtonProps } from "./buttonProps";

const colorStyles = stylex.create({
	primary: {
		color: "white",
		backgroundColor: "var(--surface-button)",
		":hover:enabled": { backgroundColor: "var(--surface-button-hover)" },
		":focus": { outline: "2px solid var(--surface-button-pressed)" },
	},
	secondary: {
		color: "white",
		backgroundColor: "var(--surface-button-alt)",
		":hover:enabled": { backgroundColor: "var(--surface-button-alt-hover)" },
		":focus": { outline: "2px solid var(--surface-button-alt-pressed)" },
	},
	error: {
		color: "white",
		backgroundColor: "var(--error)",
		":hover:enabled": { backgroundColor: "var(--system-error-tints-600)" },
		":focus": { outline: "2px solid var(--system-error-tints-200)" },
	},
	warning: {
		color: "white",
		backgroundColor: "var(--warning)",
		":hover:enabled": { backgroundColor: "var(--system-warning-tints-600)" },
		":focus": { outline: "2px solid var(--system-warning-tints-200)" },
	},
	success: {
		color: "white",
		backgroundColor: "var(--success)",
		":hover:enabled": { backgroundColor: "var(--system-success-tints-600)" },
		":focus": { outline: "2px solid var(--system-success-tints-200)" },
	},
	info: {
		color: "white",
		backgroundColor: "var(--information)",
		":hover:enabled": { backgroundColor: "var(--system-information-tints-600)" },
		":focus": { outline: "2px solid var(--system-information-tints-200)" },
	},
	plain: {
		color: "black",
		backgroundColor: "var(--surface-second)",
		":hover:enabled": { backgroundColor: "var(--surface-third)" },
		":focus": { outline: "2px solid #e5e7eb" },
		"@media (prefers-color-scheme: dark)": {
			color: "var(--invert)",
			backgroundColor: "var(--surface-third-dark)",
			":hover:enabled": { backgroundColor: "var(--surface-second-dark)" },
			":focus": { outline: "2px solid var(--surface-button-pressed)" },
		},
	},
	ghost: {
		color: "black",
		backgroundColor: "transparent",
		":hover:enabled": { backgroundColor: "#f9fafb" },
		":focus": { outline: "1px solid #e5e7eb", backgroundColor: "#f3f4f6" },
		"@media (prefers-color-scheme: dark)": {
			color: "var(--invert)",
			":hover:enabled": { backgroundColor: "var(--surface-second-dark)" },
			":focus": { outline: "1px solid var(--surface-button-pressed)" },
		},
	},
	dark: {
		color: "white",
		backgroundColor: "#1f2937",
		":hover:enabled": { backgroundColor: "#374151" },
		":focus": { outline: "2px solid #e5e7eb" },
		"@media (prefers-color-scheme: dark)": {
			color: "black",
			backgroundColor: "var(--surface-second)",
			":hover:enabled": { backgroundColor: "#4b5563" },
			":focus": { outline: "2px solid #374151" },
		},
	},
});

const baseStyle = stylex.create({
	base: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		borderWidth: "2px",
		borderStyle: "solid",
		borderColor: "transparent",
		fontWeight: 500,
		textDecoration: "none",
		cursor: "pointer",
		transition: "all 0.2s ease-in-out",
		outline: "none",
		userSelect: "none",
		":disabled": {
			opacity: 0.6,
			cursor: "not-allowed"
		},
	},
	rounded: {
		borderRadius: "0.5rem"
	},
	iconOnly: {
		aspectRatio: "1",
		borderRadius: "9999px",
		padding: 0,
	},
	ghostOutline: {
		borderWidth: "1px",
		borderStyle: "solid",
		borderColor: "currentColor"
	},
});

const sizeStyles = stylex.create({
	xs: { height: "1.75rem", width: "1.75rem", padding: "0.25rem", fontSize: "0.75rem" },
	sm: { height: "2.25rem", width: "2.25rem", padding: "0.375rem 0.75rem", fontSize: "0.875rem" },
	md: { height: "2.75rem", width: "2.75rem", padding: "0.5rem 1rem", fontSize: "1rem" },
	lg: { height: "3.5rem", width: "3.5rem", padding: "0.75rem 1.5rem", fontSize: "1.125rem" },
	xl: { height: "4rem", width: "4rem", padding: "1rem 2rem", fontSize: "1.25rem" },
});

const iconSizeStyles = stylex.create({
	xs: { height: "0.875rem", width: "0.875rem" },
	sm: { height: "1rem", width: "1rem" },
	md: { height: "1.25rem", width: "1.25rem" },
	lg: { height: "1.5rem", width: "1.5rem" },
	xl: { height: "1.75rem", width: "1.75rem" },
});

export type IconSize = keyof typeof iconSizeStyles;

export const Button = memo(({
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
			<div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
				{showLeftIcon && LeftIcon && (
					<span style={{ display: "flex", alignItems: "center", marginRight: "0.375rem" }}>
						<LeftIcon {...stylex.props(iconSize)} />
					</span>
				)}
				{showButtonText && (buttonText || children)}
				{showRightIcon && RightIcon && (
					<span style={{ display: "flex", alignItems: "center", marginLeft: "0.375rem" }}>
						<RightIcon {...stylex.props(iconSize)} />
					</span>
				)}
			</div>
		),
		[children, LeftIcon, RightIcon, buttonText, iconSize, showButtonText, showLeftIcon, showRightIcon]
	);

	const iconContent = useMemo(
		() =>
			Icon && (
				<span style={{ display: "flex", height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
					<Icon {...stylex.props(iconSize)} />
				</span>
			),
		[Icon, iconSize]
	);

	const buttonStyles = [
		baseStyle.base,
		iconOnly ? baseStyle.iconOnly : baseStyle.rounded,
		sizeStyles[size],
		colorStyles[color],
		iconOnly && sizeStyles[size],
		outline && color === "ghost" ? baseStyle.ghostOutline : null,
	];

	return (
		<button
			type="button"
			{...stylex.props(buttonStyles)}
			disabled={disabled}
			className={className}
			{...rest}
		>
			{iconOnly ? iconContent : buttonContent}
		</button>
	);
});

Button.displayName = "Button";
