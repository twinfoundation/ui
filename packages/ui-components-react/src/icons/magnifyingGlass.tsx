// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const MagnifyingGlassLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<circle
			cx="112"
			cy="112"
			r="80"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<line
			x1="168.57"
			y1="168.57"
			x2="224"
			y2="224"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
	</svg>
);

const MagnifyingGlassRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<circle
			cx="112"
			cy="112"
			r="80"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<line
			x1="168.57"
			y1="168.57"
			x2="224"
			y2="224"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
	</svg>
);

const MagnifyingGlassBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<circle
			cx="112"
			cy="112"
			r="80"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<line
			x1="168.57"
			y1="168.57"
			x2="224"
			y2="224"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
	</svg>
);

export const MagnifyingGlass: React.FC<IconsProps> = ({
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
			return <MagnifyingGlassLight {...props} />;
		case "bold":
			return <MagnifyingGlassBold {...props} />;
		default:
			return <MagnifyingGlassRegular {...props} />;
	}
};

MagnifyingGlass.displayName = "MagnifyingGlass";

export default MagnifyingGlass;
