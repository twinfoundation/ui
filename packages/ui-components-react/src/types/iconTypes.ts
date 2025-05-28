// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Type for SVG icon components.
 * This type supports both direct function components and ForwardRefExoticComponent
 * to be compatible with various icon libraries including flowbite-react-icons.
 */
export type IconComponent = React.ForwardRefExoticComponent<
	React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
		title?: string;
		titleId?: string;
	} & React.RefAttributes<SVGSVGElement>
> & {
	displayName?: string;
};

/**
 * Props for icon components
 */
export interface IconsProps extends Omit<React.SVGProps<SVGSVGElement>, "type"> {
	/**
	 * Any additional SVG props
	 */
	[key: string]: unknown;
	/**
	 * The color of the icon
	 */
	color?: string;
	/**
	 * Width of the icon
	 */
	width?: number | string;
	/**
	 * Height of the icon (defaults to width if not provided)
	 */
	height?: number | string;
	/**
	 * Additional class name
	 */
	className?: string;
	/**
	 * Type of the icon variant
	 */
	type?: "bold" | "regular" | "light";
}

/**
 * Type for a function component that renders an icon
 */
export type IconFC = React.FC<IconsProps>;

/**
 * Type for a ref-forwarding icon component
 */
export type ForwardRefIcon = React.ForwardRefExoticComponent<
	IconsProps & React.RefAttributes<SVGSVGElement>
>;
