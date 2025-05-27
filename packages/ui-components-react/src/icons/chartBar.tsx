// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const ChartBarLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<polyline
			points="48 208 48 136 96 136"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<line
			x1="224"
			y1="208"
			x2="32"
			y2="208"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<polyline
			points="96 208 96 88 152 88"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<polyline
			points="152 208 152 40 208 40 208 208"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
	</svg>
);

const ChartBarRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<polyline
			points="48 208 48 136 96 136"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<line
			x1="224"
			y1="208"
			x2="32"
			y2="208"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<polyline
			points="96 208 96 88 152 88"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<polyline
			points="152 208 152 40 208 40 208 208"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
	</svg>
);

const ChartBarBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<polyline
			points="48 208 48 136 96 136"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<line
			x1="224"
			y1="208"
			x2="32"
			y2="208"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<polyline
			points="96 208 96 88 152 88"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<polyline
			points="152 208 152 40 208 40 208 208"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
	</svg>
);

export const ChartBar: React.FC<IconsProps> = ({
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
			return <ChartBarLight {...props} />;
		case "bold":
			return <ChartBarBold {...props} />;
		default:
			return <ChartBarRegular {...props} />;
	}
};

ChartBar.displayName = "ChartBar";

export default ChartBar;
