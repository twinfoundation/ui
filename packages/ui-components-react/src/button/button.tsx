// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Button as FlowbiteButton } from "flowbite-react";
import React, { type ReactNode } from "react";
import { ButtonPropTypes, type ButtonProps } from "./buttonProps";

const colorClasses = {
	primary:
		"focus:ring text-invert border-2 border-transparent bg-surface-button hover:enabled:bg-surface-button-hover dark:bg-surface-button dark:hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed",
	secondary:
		"focus:ring text-invert border-2 border-transparent bg-surface-button-alt hover:enabled:bg-surface-button-alt-hover focus:ring-surface-button-alt-pressed",
	error:
		"focus:ring text-invert border-2 border-transparent bg-error hover:enabled:bg-system-error-tints-600 focus:ring-system-error-tints-200",
	warning:
		"focus:ring text-invert border-2 border-transparent bg-warning hover:enabled:bg-system-warning-tints-600 focus:ring-system-warning-tints-200",
	success:
		"focus:ring text-invert border-2 border-transparent bg-success hover:enabled:bg-system-success-tints-600 focus:ring-system-success-tints-200",
	info: "focus:ring text-invert border-2 border-transparent bg-information hover:enabled:bg-system-information-tints-600 focus:ring-system-information-tints-200",
	plain:
		"focus:ring text-primary border-2 border-transparent bg-surface-second hover:enabled:bg-surface-third focus:ring-surface-button-pressed dark:text-invert dark:bg-surface-third-dark dark:hover:enabled:bg-surface-second-dark dark:focus:ring-surface-button-pressed",
	dark: "focus:ring text-invert border-2 border-transparent bg-gray-800 hover:enabled:bg-gray-600 focus:ring-gray-200"
};

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
export class Button extends React.Component<ButtonProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = ButtonPropTypes;

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const {
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
		} = this.props;

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
				className={`${colorClasses[color ?? "primary"]} ${iconOnlyClasses} ${className ?? ""}`}
				{...rest}
			>
				{iconOnly ? iconContent : buttonContent}
			</FlowbiteButton>
		);
	}
}
