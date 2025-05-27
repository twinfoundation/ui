// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const PlayStopLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<line
			x1="176"
			y1="64"
			x2="176"
			y2="192"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<line
			x1="224"
			y1="64"
			x2="224"
			y2="192"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<path
			d="M32,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L44.18,65.26A7.91,7.91,0,0,0,32,71.85Z"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
	</svg>
);

const PlayStopRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<line
			x1="176"
			y1="64"
			x2="176"
			y2="192"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<line
			x1="224"
			y1="64"
			x2="224"
			y2="192"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<path
			d="M32,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L44.18,65.26A7.91,7.91,0,0,0,32,71.85Z"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
	</svg>
);

const PlayStopBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<line
			x1="176"
			y1="64"
			x2="176"
			y2="192"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<line
			x1="224"
			y1="64"
			x2="224"
			y2="192"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<path
			d="M32,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L44.18,65.26A7.91,7.91,0,0,0,32,71.85Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

export const PlayStop: React.FC<IconsProps> = ({
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
			return <PlayStopLight {...props} />;
		case "bold":
			return <PlayStopBold {...props} />;
		default:
			return <PlayStopRegular {...props} />;
	}
};

PlayStop.displayName = "PlayStop";

export default PlayStop;
