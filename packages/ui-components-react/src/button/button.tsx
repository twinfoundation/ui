// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Button as FlowbiteButton } from "flowbite-react";
import { memo, type FC } from "react";
import type { ButtonProps } from "./buttonProps";

const BASE_CLASSES = "border-2 border-transparent focus:outline-none focus:ring-2";

const colorClasses = {
	primary: `${BASE_CLASSES} text-white bg-surface-button dark:bg-surface-button hover:enabled:bg-surface-button-hover dark:hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed`,
	secondary: `${BASE_CLASSES} text-white bg-surface-button-alt dark:bg-surface-button-alt hover:enabled:bg-surface-button-alt-hover dark:hover:enabled:bg-surface-button-alt-hover focus:ring-surface-button-alt-pressed`,
	error: `${BASE_CLASSES} text-white bg-error dark:bg-error hover:enabled:bg-system-error-tints-600 dark:hover:enabled:bg-system-error-tints-600 focus:ring-system-error-tints-200`,
	warning: `${BASE_CLASSES} text-white bg-warning dark:bg-warning hover:enabled:bg-system-warning-tints-600 dark:hover:enabled:bg-system-warning-tints-600 focus:ring-system-warning-tints-200`,
	success: `${BASE_CLASSES} text-white bg-success dark:bg-success hover:enabled:bg-system-success-tints-600 dark:hover:enabled:bg-system-success-tints-600 focus:ring-system-success-tints-200`,
	info: `${BASE_CLASSES} text-white bg-information dark:bg-information hover:enabled:bg-system-information-tints-600 dark:hover:enabled:bg-system-information-tints-600 focus:ring-system-information-tints-200`,
	plain: `${BASE_CLASSES} text-black dark:text-invert bg-surface-second dark:bg-surface-third-dark hover:enabled:bg-surface-third focus:ring-gray-200 dark:hover:enabled:bg-surface-second-dark dark:focus:ring-surface-button-pressed`,
	dark: `${BASE_CLASSES} text-white dark:text-black bg-gray-800 dark:bg-surface-second hover:enabled:bg-gray-700 focus:ring-gray-200 dark:hover:enabled:bg-gray-600 dark:focus:ring-gray-700`
} as const;

const buttonSizes = {
	xs: "!h-7 !w-7",
	sm: "!h-9 !w-9",
	md: "!h-11 !w-11",
	lg: "!h-14 !w-14",
	xl: "!h-16 !w-16"
} as const;

const iconSizes = {
	xs: "h-3.5 w-3.5",
	sm: "h-4 w-4",
	md: "h-5 w-5",
	lg: "h-6 w-6",
	xl: "h-7 w-7"
} as const;

/**
 * Button component.
 */
export const Button: FC<ButtonProps> = memo(
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
	}) => {
		const iconSize = iconSizes[size];

		const buttonContent = (
			<div className="inline-flex items-center justify-center">
				{showLeftIcon && LeftIcon && (
					<div className="flex items-center">
						<LeftIcon className={`mr-1.5 ${iconSize}`} />
					</div>
				)}
				{showButtonText && <span>{buttonText || children}</span>}
				{showRightIcon && RightIcon && (
					<div className="flex items-center">
						<RightIcon className={`ml-1.5 ${iconSize}`} />
					</div>
				)}
			</div>
		);

		const iconContent = Icon && (
			<div className="flex h-full w-full items-center justify-center">
				<Icon className={iconSize} />
			</div>
		);

		const iconOnlyClasses = iconOnly
			? `!aspect-square !rounded-full !p-0 ${buttonSizes[size]} [&>span]:!p-0 [&>span]:!m-0`
			: "rounded-lg";

		return (
			<FlowbiteButton
				color="primary"
				size={size}
				outline={outline}
				disabled={disabled}
				className={`${colorClasses[color as keyof typeof colorClasses]} ${iconOnlyClasses} ${className ?? ""}`}
				{...rest}
			>
				{iconOnly ? iconContent : buttonContent}
			</FlowbiteButton>
		);
	}
);

Button.displayName = "Button";
