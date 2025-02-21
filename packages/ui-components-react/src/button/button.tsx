// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Button as FlowbiteButton } from "flowbite-react";
import React, { type ReactNode } from "react";
import { ButtonPropTypes, type ButtonProps } from "./buttonProps";

const BASE_CLASSES = "border-2 border-transparent focus:outline-none focus:ring-2";

const colorClasses = {
	primary: `${BASE_CLASSES} 
		bg-surface-button
		hover:enabled:bg-surface-button-hover 
		active:bg-surface-button-pressed 
		disabled:bg-surface-button-disabled
		text-surface-button-text
		hover:enabled:text-surface-button-text-hover
		active:text-surface-button-text-pressed`,
	secondary: `${BASE_CLASSES} 
		bg-surface-button-alt
		hover:enabled:bg-surface-button-alt-hover 
		active:bg-surface-button-alt-pressed 
		disabled:bg-surface-button-alt-disabled
		text-surface-button-text-alt
		hover:enabled:text-surface-button-text-alt-hover
		active:text-surface-button-text-alt-pressed`,
	ghost: `${BASE_CLASSES} 
		bg-transparent
		hover:enabled:bg-neutral-100
		active:bg-neutral-200
		disabled:bg-transparent
		text-primary
		hover:enabled:text-primary
		active:text-primary
		disabled:text-neutral-500`,
	error: `${BASE_CLASSES} 
		bg-error
		hover:enabled:bg-system-error-tints-600
		active:bg-system-error-tints-400 
		text-neutral-50
		disabled:bg-neutral-400
		disabled:text-neutral-500`,
	warning: `${BASE_CLASSES} 
		bg-warning
		hover:enabled:bg-system-warning-tints-600
		active:bg-system-warning-tints-400 
		text-neutral-50
		disabled:bg-neutral-400
		disabled:text-neutral-500`,
	success: `${BASE_CLASSES} 
		bg-success
		hover:enabled:bg-system-success-tints-600
		active:bg-system-success-tints-400 
		text-neutral-50
		disabled:bg-neutral-400
		disabled:text-neutral-500`,
	info: `${BASE_CLASSES} 
		bg-information
		hover:enabled:bg-system-information-tints-600
		active:bg-system-information-tints-400 
		text-neutral-50
		disabled:bg-neutral-400
		disabled:text-neutral-500`
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
	 * The prop types for the component.
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
				className={`group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 ${
					colorClasses[color as keyof typeof colorClasses]
				} ${iconOnlyClasses} ${className ?? ""} rounded-lg`}
				{...rest}
			>
				{iconOnly ? iconContent : buttonContent}
			</FlowbiteButton>
		);
	}
}
