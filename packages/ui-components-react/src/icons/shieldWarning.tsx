// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const ShieldWarningLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<line
			x1="128"
			y1="136"
			x2="128"
			y2="96"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<circle cx="128" cy="172" r="10" />
		<path
			d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
	</svg>
);

const ShieldWarningRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<line
			x1="128"
			y1="136"
			x2="128"
			y2="96"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<circle cx="128" cy="172" r="12" />
		<path
			d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
	</svg>
);

const ShieldWarningBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<path
			d="M40,114.8V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.8c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.6,40,198.8,40,114.8Z"
			fill="currentColor"
			opacity="0.2"
		/>
		<path
			d="M40,114.8V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.8c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.6,40,198.8,40,114.8Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<line
			x1="128"
			y1="96"
			x2="128"
			y2="144"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<line
			x1="128"
			y1="176"
			x2="128"
			y2="176"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

export const ShieldWarning: React.FC<IconsProps> = ({
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
			return <ShieldWarningLight {...props} />;
		case "bold":
			return <ShieldWarningBold {...props} />;
		default:
			return <ShieldWarningRegular {...props} />;
	}
};

ShieldWarning.displayName = "ShieldWarning";

export default ShieldWarning;
