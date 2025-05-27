// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const PlusLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<line
			x1="40"
			y1="128"
			x2="216"
			y2="128"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<line
			x1="128"
			y1="40"
			x2="128"
			y2="216"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
	</svg>
);

const PlusRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<line
			x1="40"
			y1="128"
			x2="216"
			y2="128"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<line
			x1="128"
			y1="40"
			x2="128"
			y2="216"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
	</svg>
);

const PlusBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<line
			x1="40"
			y1="128"
			x2="216"
			y2="128"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<line
			x1="128"
			y1="40"
			x2="128"
			y2="216"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

export const Plus: React.FC<IconsProps> = ({
	color = "currentColor",
	width = 24,
	height = width,
	className = "",
	type = "regular"
}) => {
	const props = {
		width,
		height,
		className,
		style: { color, fill: color }
	};

	switch (type) {
		case "light":
			return <PlusLight {...props} />;
		case "bold":
			return <PlusBold {...props} />;
		default:
			return <PlusRegular {...props} />;
	}
};

Plus.displayName = "Plus";

export default Plus;
