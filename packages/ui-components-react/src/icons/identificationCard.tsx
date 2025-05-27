// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const IdentificationCardLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<line
			x1="152"
			y1="112"
			x2="192"
			y2="112"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<line
			x1="152"
			y1="144"
			x2="192"
			y2="144"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<rect
			x="32"
			y="48"
			width="192"
			height="160"
			rx="8"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<circle
			cx="96"
			cy="120"
			r="24"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<path
			d="M64,168c3.55-13.8,17.09-24,32-24s28.46,10.19,32,24"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
	</svg>
);

const IdentificationCardRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<line
			x1="152"
			y1="112"
			x2="192"
			y2="112"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<line
			x1="152"
			y1="144"
			x2="192"
			y2="144"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<rect
			x="32"
			y="48"
			width="192"
			height="160"
			rx="8"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<circle
			cx="96"
			cy="120"
			r="24"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<path
			d="M64,168c3.55-13.8,17.09-24,32-24s28.46,10.19,32,24"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
	</svg>
);

const IdentificationCardBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<rect x="40" y="40" width="176" height="176" rx="8" fill="currentColor" opacity="0.2" />
		<rect
			x="40"
			y="40"
			width="176"
			height="176"
			rx="8"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<circle cx="128" cy="108" r="24" fill="currentColor" />
		<path
			d="M88,176a48,48,0,0,1,80,0"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

export const IdentificationCard: React.FC<IconsProps> = ({
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
			return <IdentificationCardLight {...props} />;
		case "bold":
			return <IdentificationCardBold {...props} />;
		default:
			return <IdentificationCardRegular {...props} />;
	}
};

IdentificationCard.displayName = "IdentificationCard";

export default IdentificationCard;
